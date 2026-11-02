export const sitio = {
  nombre: 'Grupo Kassar',
  url: 'https://grupokassar.com',
  descripcion:
    'Control de plagas urbanas, control de patógenos y sanitización para empresas y hogares. Sucursales en Guadalajara y Ensenada, cobertura nacional y servicio 24/7.',
  cofepris: '213301ES580773',
};

export const sucursales = [
  {
    id: 'guadalajara',
    nombre: 'Guadalajara',
    etiqueta: 'Sucursal Metropolitana',
    correo: 'kassarventasgdl@gmail.com',
    telefonos: ['33 3946 9021', '33 1217 0900'],
    whatsapp: '523339469021',
    calle: 'Calle del Senado #3260 B',
    colonia: 'Col. Lagos de Oriente',
    cp: '44750',
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    codigoEstado: 'JAL',
  },
  {
    id: 'ensenada',
    nombre: 'Ensenada',
    etiqueta: 'Sucursal Baja California',
    correo: 'kassarbaja@gmail.com',
    telefonos: ['646 341 2648', '33 3946 9021'],
    whatsapp: '526463412648',
    calle: 'Blvd. Estancia #170 Int. 136B',
    colonia: 'Col. Carlos Pacheco',
    cp: '22890',
    ciudad: 'Ensenada',
    estado: 'Baja California',
    codigoEstado: 'BCN',
  },
] as const;

/** Antepone la ruta base del despliegue (en GitHub Pages el sitio vive en un subdirectorio) */
export const enlace = (ruta: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + ruta;

export const telHref = (t: string) => `tel:+52${t.replace(/\s/g, '')}`;

export const navegacion = [
  { nombre: 'Control de plagas', href: enlace('/control-de-plagas/') },
  { nombre: 'Control de patógenos', href: enlace('/control-de-patogenos/') },
  { nombre: 'Sectores', href: enlace('/sectores/') },
  { nombre: 'Nosotros', href: enlace('/nosotros/') },
  { nombre: 'Contacto', href: enlace('/contacto/') },
];

export const respaldo = [
  { icono: 'ph:certificate', titulo: 'Certificaciones', texto: 'Certificaciones gubernamentales, locales y extranjeras.' },
  { icono: 'ph:user-check', titulo: 'Técnicos certificados', texto: 'Personal capacitado de forma continua y asignado en exclusiva a cada proyecto.' },
  { icono: 'ph:seal-check', titulo: 'Productos registrados', texto: 'Registro Cofepris de uso urbano, con fichas técnicas y de seguridad.' },
  { icono: 'ph:shield-check', titulo: 'Seguro de responsabilidad civil', texto: 'Respaldo formal para trabajar en tus instalaciones.' },
  { icono: 'ph:clock-countdown', titulo: 'Servicio 24/7', texto: 'Atención las 24 horas, los 365 días del año.' },
  { icono: 'ph:truck', titulo: 'Unidades equipadas', texto: 'Unidades utilitarias y equipos especializados de uso exclusivo.' },
  { icono: 'ph:map-trifold', titulo: 'Cobertura nacional', texto: 'Alianzas estratégicas para atenderte en todo México.' },
  { icono: 'ph:headset', titulo: 'Soporte técnico', texto: 'Acompañamiento y capacitación para tu propio personal.' },
];

export const clientes = [
  { archivo: 'toray', nombre: 'Toray' },
  { archivo: 'hospital-real-san-lucas', nombre: 'Hospital Real San Lucas' },
  { archivo: 'travalex', nombre: 'Travalex', fondo: '#000' },
  { archivo: 'arvensse', nombre: 'Arvensse' },
  { archivo: 'la-flor-de-cordoba', nombre: 'La Flor de Córdoba' },
  { archivo: 'brisket-house', nombre: 'Brisket House' },
  { archivo: 'bigol-bagel', nombre: 'Bigol Bagel' },
  { archivo: 'cotidiano', nombre: 'Cotidiano' },
];
