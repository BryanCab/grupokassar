import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const sinMovimiento = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!sinMovimiento) {
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('js-movimiento');

  const lenis = new Lenis({ duration: 1.1, anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.batch('[data-aparece]', {
    start: 'top 88%',
    once: true,
    onEnter: (lote) => gsap.to(lote, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.07 }),
  });

  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: Number(el.dataset.parallax),
      ease: 'none',
      scrollTrigger: { trigger: el.parentElement, scrub: true },
    });
  });

  iniciarRecorrido();
  addEventListener('load', () => ScrollTrigger.refresh());
}

// Recorrido de inspección: solo se fija en pantalla en escritorio
function iniciarRecorrido() {
  const seccion = document.querySelector<HTMLElement>('[data-recorrido]');
  if (!seccion) return;

  gsap.matchMedia().add('(min-width: 1024px)', () => {
    const pasos = gsap.utils.toArray<HTMLElement>('[data-paso]', seccion);
    const puntos = gsap.utils.toArray<SVGGElement>('[data-punto]', seccion);
    const barra = seccion.querySelector('[data-escaner]');
    const revelado = seccion.querySelector('[data-revelado]');
    const progreso = seccion.querySelector('[data-progreso]');

    gsap.set(pasos.slice(1), { autoAlpha: 0, y: 24 });
    gsap.set(puntos, { autoAlpha: 0, scale: 0, transformOrigin: 'center' });

    const linea = gsap.timeline({
      scrollTrigger: { trigger: seccion, pin: true, scrub: 0.6, start: 'top top', end: '+=2600' },
      defaults: { ease: 'none' },
    });

    linea.to(barra, { attr: { x: 800 }, duration: 4 }, 0).to(revelado, { attr: { width: 800 }, duration: 4 }, 0);
    linea.to(progreso, { scaleX: 1, duration: 8 }, 0);

    puntos.forEach((p, i) => {
      linea.to(p, { autoAlpha: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, 0.5 + i * 0.5);
    });

    linea.to(seccion.querySelectorAll('[data-riesgo]'), { attr: { fill: '#f5b81f' }, duration: 0.5 }, 4.6);

    pasos.forEach((paso, i) => {
      if (i === 0) return;
      const momento = i * 2;
      linea.to(pasos[i - 1], { autoAlpha: 0, y: -24, duration: 0.4 }, momento - 0.2);
      linea.to(paso, { autoAlpha: 1, y: 0, duration: 0.4 }, momento + 0.1);
    });
  });

  // En móvil no hay pin: el plano se anima solo, en bucle, mientras está a la vista
  gsap.matchMedia().add('(max-width: 1023px)', () => {
    const svg = seccion.querySelector('svg');
    const puntos = gsap.utils.toArray<SVGGElement>('[data-punto]', seccion);
    const barra = seccion.querySelector('[data-escaner]');
    const revelado = seccion.querySelector('[data-revelado]');
    const progreso = seccion.querySelector('[data-progreso]');
    const riesgos = seccion.querySelectorAll('[data-riesgo]');
    if (!svg) return;

    const linea = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 2.5, defaults: { ease: 'none' } });
    linea
      .set(revelado, { attr: { width: 0 } }, 0)
      .set(barra, { attr: { x: -70 } }, 0)
      .set(progreso, { scaleX: 0 }, 0)
      .set(riesgos, { attr: { fill: '#e5484d' } }, 0)
      .set(puntos, { autoAlpha: 0, scale: 0, transformOrigin: 'center' }, 0);

    linea.to(barra, { attr: { x: 800 }, duration: 3.2 }, 0).to(revelado, { attr: { width: 800 }, duration: 3.2 }, 0);
    linea.to(progreso, { scaleX: 1, duration: 6 }, 0);
    puntos.forEach((p, i) => linea.to(p, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, 0.6 + i * 0.45));
    linea.to(riesgos, { attr: { fill: '#f5b81f' }, duration: 0.5 }, 4);
    linea.to({}, { duration: 1.5 });

    const disparador = ScrollTrigger.create({ trigger: svg, start: 'top 85%', end: 'bottom 15%', onToggle: (self) => (self.isActive ? linea.play() : linea.pause()) });
    return () => disparador.kill();
  });
}
