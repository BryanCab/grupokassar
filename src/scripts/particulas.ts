// Enjambre de partículas que se ordena hasta formar el águila de Grupo Kassar.
// Usa WebGL2 directo: para puntos con shader no hace falta cargar una librería 3D.

const VERTEX = `#version 300 es
precision highp float;
in vec2 aDestino;
in float aTipo;
in vec4 aAzar;
uniform float uTiempo, uProgreso, uAspecto, uEscala, uPixel;
uniform vec2 uRaton, uCentro, uGiro;
out vec3 vColor;
out float vAlfa;

const vec3 OSCURO = vec3(0.30, 0.35, 0.43);
const vec3 ORO = vec3(0.96, 0.72, 0.12);
const vec3 BLANCO = vec3(0.96, 0.95, 0.92);

void main() {
  float avance = smoothstep(aAzar.z * 0.55, aAzar.z * 0.55 + 0.45, uProgreso);
  float fase = aAzar.w * 6.283;

  vec3 enjambre = vec3(
    (aAzar.x * 2.0 - 1.0) * 2.4 + sin(uTiempo * 0.5 + fase) * 0.35,
    (aAzar.y * 2.0 - 1.0) * 1.5 + cos(uTiempo * 0.63 + fase * 1.7) * 0.3,
    (aAzar.z - 0.5) * 1.6
  );
  vec3 aguila = vec3(aDestino * uEscala + uCentro, (aAzar.x - 0.5) * 0.06);
  aguila.z += sin(uTiempo * 0.7 + aDestino.x * 3.0 + aDestino.y * 2.0) * 0.012;
  vec3 pos = mix(enjambre, aguila, avance);

  // Giro alrededor del centro del águila para dar profundidad real
  pos.xy -= uCentro;
  float cy = cos(uGiro.x), sy = sin(uGiro.x), cx = cos(uGiro.y), sx = sin(uGiro.y);
  pos = vec3(pos.x * cy + pos.z * sy, pos.y, -pos.x * sy + pos.z * cy);
  pos = vec3(pos.x, pos.y * cx - pos.z * sx, pos.y * sx + pos.z * cx);
  pos.xy += uCentro;

  // Las partículas se apartan del cursor
  vec2 d = pos.xy - uRaton;
  float dist2 = dot(d, d) + 0.0001;
  pos.xy += (d / sqrt(dist2)) * exp(-dist2 * 14.0) * 0.16;

  float perspectiva = 2.6 / (2.6 - pos.z);
  gl_Position = vec4(pos.x * perspectiva / uAspecto, pos.y * perspectiva, 0.0, 1.0);
  gl_PointSize = uPixel * perspectiva * mix(1.5, 1.0 + step(1.0, aTipo) * 0.25, avance);

  vec3 color = aTipo < 0.5 ? OSCURO : (aTipo < 1.5 ? ORO : BLANCO);
  vColor = mix(vec3(0.55, 0.42, 0.14), color, avance);
  vAlfa = mix(0.5, 0.95, avance);
}`;

const FRAGMENT = `#version 300 es
precision highp float;
in vec3 vColor;
in float vAlfa;
out vec4 salida;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.32, d) * vAlfa;
  salida = vec4(vColor * a, a);
}`;

function compilar(gl: WebGL2RenderingContext, tipo: number, fuente: string) {
  const shader = gl.createShader(tipo)!;
  gl.shaderSource(shader, fuente);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) ?? 'shader');
  return shader;
}

const suavizar = (t: number) => 1 - Math.pow(1 - Math.min(t, 1), 3);

export async function iniciarParticulas(lienzo: HTMLCanvasElement, respaldo: HTMLElement) {
  const conexion = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || conexion?.saveData) return;

  const gl = lienzo.getContext('webgl2', { alpha: true, antialias: false, powerPreference: 'low-power' });
  if (!gl) return;

  // Sin tarjeta gráfica real la animación bloquearía la página: queda el águila fija
  const info = gl.getExtension('WEBGL_debug_renderer_info');
  const renderizador: string = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : '';
  if (/swiftshader|llvmpipe|software/i.test(renderizador)) return;

  const respuesta = await fetch(`${import.meta.env.BASE_URL}eagle-points.bin`);
  if (!respuesta.ok) return;
  const datos = new Uint16Array(await respuesta.arrayBuffer());

  const movil = innerWidth < 1024;
  const total = Math.min(datos.length / 2, movil ? 11000 : 24000);
  const destino = new Float32Array(total * 2);
  const tipo = new Float32Array(total);
  const azar = new Float32Array(total * 4);
  for (let i = 0; i < total; i++) {
    const a = datos[i * 2];
    tipo[i] = a & 3;
    destino[i * 2] = ((a >> 2) / 16383) * 3 - 1.5;
    destino[i * 2 + 1] = (datos[i * 2 + 1] / 65535) * 3 - 1.5;
    for (let j = 0; j < 4; j++) azar[i * 4 + j] = Math.random();
  }

  const programa = gl.createProgram()!;
  gl.attachShader(programa, compilar(gl, gl.VERTEX_SHADER, VERTEX));
  gl.attachShader(programa, compilar(gl, gl.FRAGMENT_SHADER, FRAGMENT));
  gl.linkProgram(programa);
  gl.useProgram(programa);

  const atributo = (nombre: string, valores: Float32Array, tamano: number) => {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, valores, gl.STATIC_DRAW);
    const ubicacion = gl.getAttribLocation(programa, nombre);
    gl.enableVertexAttribArray(ubicacion);
    gl.vertexAttribPointer(ubicacion, tamano, gl.FLOAT, false, 0, 0);
  };
  atributo('aDestino', destino, 2);
  atributo('aTipo', tipo, 1);
  atributo('aAzar', azar, 4);

  const u = (n: string) => gl.getUniformLocation(programa, n);
  const uTiempo = u('uTiempo'), uProgreso = u('uProgreso'), uAspecto = u('uAspecto');
  const uEscala = u('uEscala'), uPixel = u('uPixel'), uRaton = u('uRaton'), uCentro = u('uCentro'), uGiro = u('uGiro');

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);

  let aspecto = 1;
  const ajustar = () => {
    const dpr = Math.min(devicePixelRatio, 1.75);
    const { width, height } = lienzo.getBoundingClientRect();
    lienzo.width = width * dpr;
    lienzo.height = height * dpr;
    gl.viewport(0, 0, lienzo.width, lienzo.height);
    aspecto = width / height;
    const ancho = width >= 1024;
    gl.uniform1f(uAspecto, aspecto);
    gl.uniform1f(uEscala, ancho ? 0.66 : 0.3);
    gl.uniform2f(uCentro, ancho ? aspecto * 0.42 : 0, ancho ? 0 : 0.58);
    gl.uniform1f(uPixel, (ancho ? 1.9 : 1.5) * dpr);
  };
  ajustar();
  addEventListener('resize', ajustar, { passive: true });

  const raton = { x: 9, y: 9 };
  const giro = { x: 0, y: 0, ax: 0, ay: 0 };
  addEventListener(
    'pointermove',
    (e) => {
      const r = lienzo.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 2 - 1;
      const y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      raton.x = x * aspecto;
      raton.y = y;
      giro.ax = x * 0.3;
      giro.ay = -y * 0.18;
    },
    { passive: true },
  );

  let visible = true;
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) requestAnimationFrame(dibujar);
  }).observe(lienzo);

  const inicio = performance.now();
  respaldo.style.opacity = '0';

  let cuadros = 0;
  let detenido = false;

  function dibujar(ahora: number) {
    if (!visible || detenido) return;
    const t = (ahora - inicio) / 1000;

    // Si el equipo no sostiene unos 20 cuadros por segundo, se vuelve a la imagen fija
    if (++cuadros === 40 && t / cuadros > 0.05) {
      detenido = true;
      lienzo.hidden = true;
      respaldo.style.opacity = '1';
      return;
    }

    const salida = Math.min(scrollY / (lienzo.clientHeight * 0.9), 1);
    const intro = suavizar(Math.max(t - 0.2, 0) / 3.4);

    giro.x += (giro.ax - giro.x) * 0.05;
    giro.y += (giro.ay - giro.y) * 0.05;

    gl!.clear(gl!.COLOR_BUFFER_BIT);
    gl!.uniform1f(uTiempo, t);
    gl!.uniform1f(uProgreso, intro * (1 - salida * 0.8));
    gl!.uniform2f(uRaton, raton.x, raton.y);
    gl!.uniform2f(uGiro, giro.x + Math.sin(t * 0.3) * 0.05, giro.y);
    gl!.drawArrays(gl!.POINTS, 0, total);
    requestAnimationFrame(dibujar);
  }
  requestAnimationFrame(dibujar);
}
