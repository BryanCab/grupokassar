import portal from '../assets/pestos/tel-portal.webp';
import portalExpediente from '../assets/pestos/tel-portal-expediente.webp';
import agenda from '../assets/pestos/tel-agenda.webp';
import reporte from '../assets/pestos/tel-reporte.webp';
import constancia from '../assets/pestos/tel-constancia.webp';
import monitoreo from '../assets/pestos/tel-monitoreo.webp';
import revision from '../assets/pestos/tel-revision.webp';
import cotizacion from '../assets/pestos/tel-cotizacion.webp';
import servicios from '../assets/pestos/tel-servicios.webp';
import documentosTel from '../assets/pestos/tel-documentos.webp';
import type { ImageMetadata } from 'astro';

/** Sitio de la plataforma que usa Grupo Kassar para documentar sus servicios */
export const pestos = {
  nombre: 'PestOS',
  url: 'https://pestos-app.com/software-control-plagas/',
};

/** Pantallas del recorrido. Todas las capturas usan datos ficticios. */
export const pantallas = [
  {
    id: 'portal',
    nombre: 'Tu portal',
    icono: 'ph:user-circle',
    titulo: 'Un espacio privado con todo tu historial.',
    texto: 'Entras con tu enlace personal y ves tus servicios, constancias, calendario y documentos. Sin pedir archivos por mensaje.',
    imagen: portal,
    alt: 'Portal del cliente con el resumen de servicios, constancias y próximo servicio',
    chips: ['Enlace privado', 'Disponible 24/7'],
  },
  {
    id: 'servicios',
    nombre: 'Servicios',
    icono: 'ph:list-checks',
    titulo: 'Tu historial, servicio por servicio.',
    texto: 'Cada visita con lo que se hizo, quién la atendió, la garantía y sus documentos listos para descargar.',
    imagen: servicios,
    alt: 'Historial de servicios del portal con reporte y constancia para descargar',
    chips: ['Reporte y constancia', 'Garantía registrada'],
  },
  {
    id: 'documentos',
    nombre: 'Documentos',
    icono: 'ph:folder-simple-lock',
    titulo: 'La documentación de la empresa, a la mano.',
    texto: 'Registro sanitario, póliza de responsabilidad civil, fichas técnicas y licencias para descargar cuando te los pidan.',
    imagen: documentosTel,
    alt: 'Documentos de la empresa disponibles para descargar en el portal',
    chips: ['Siempre vigentes', 'Descarga directa'],
  },
  {
    id: 'agenda',
    nombre: 'Agenda',
    icono: 'ph:calendar-check',
    titulo: 'Cada visita programada y confirmada.',
    texto: 'Cada servicio tiene fecha, hora, técnico asignado y dirección. Si algo se reagenda, queda registrado.',
    imagen: agenda,
    alt: 'Agenda de servicios con visitas programadas, técnico y horario',
    chips: ['Técnico asignado', 'Reagendas registradas'],
  },
  {
    id: 'reportes',
    nombre: 'Reportes',
    icono: 'ph:clipboard-text',
    titulo: 'Qué se encontró y qué se hizo, paso por paso.',
    texto: 'El técnico documenta hallazgos, producto aplicado, lote, fotos de antes y después, y firma de recibido.',
    imagen: reporte,
    alt: 'Paso de diagnóstico de un reporte de servicio con las plagas detectadas',
    chips: ['Fotos antes y después', 'Firma de recibido'],
  },
  {
    id: 'constancias',
    nombre: 'Constancias',
    icono: 'ph:seal-check',
    titulo: 'Constancias de servicio con folio único.',
    texto: 'Cada servicio genera su constancia con tratamiento, plaga objetivo y control empleado. Lista para auditorías.',
    imagen: constancia,
    alt: 'Constancia de servicio con folio, tratamiento y plagas identificadas',
    chips: ['Folio único', 'Lista para auditoría'],
  },
  {
    id: 'monitoreo',
    nombre: 'Monitoreo',
    icono: 'ph:map-pin-area',
    titulo: 'Cada estación, ubicada en tu plano.',
    texto: 'Cebaderos y trampas aparecen sobre el croquis de tus instalaciones, con su revisión en cada visita.',
    imagen: monitoreo,
    alt: 'Plano de un restaurante con estaciones de monitoreo colocadas',
    chips: ['Plano de tus instalaciones', 'Revisión por estación'],
  },
  {
    id: 'revision',
    nombre: 'Revisión',
    icono: 'ph:list-checks',
    titulo: 'Cada punto de control, revisado.',
    texto: 'En cada visita el técnico revisa las estaciones y registra si hubo actividad, captura o consumo. Queda el historial de cada una.',
    imagen: revision,
    alt: 'Lista de puntos de control con su estado de actividad',
    chips: ['Registro por visita', 'Historial por estación'],
  },
  {
    id: 'cotizaciones',
    nombre: 'Cotizaciones',
    icono: 'ph:receipt',
    titulo: 'Presupuestos claros, listos para firmar.',
    texto: 'Cada cotización detalla servicios, conceptos, IVA y condiciones, y se entrega como PDF con folio.',
    imagen: cotizacion,
    alt: 'Lista de cotizaciones generadas con folio, fecha y monto',
    chips: ['Folio por cotización', 'PDF para firma'],
  },
  {
    id: 'expediente',
    nombre: 'Expediente',
    icono: 'ph:folder-open',
    titulo: 'Tu expediente completo, ordenado.',
    texto: 'Servicios, documentos, calendario, constancias, monitoreo y novedades, en un solo lugar.',
    imagen: portalExpediente,
    alt: 'Expediente del cliente con servicios, documentos, calendario, constancias, monitoreo y novedades',
    chips: ['Todo en un lugar'],
  },
] as const;

export const pantallasResumen = ['portal', 'servicios', 'documentos', 'expediente'];

/** Piezas de cada servicio: lo que el cliente recibe */
export const entregables = [
  { icono: 'ph:clipboard-text', titulo: 'Reporte de servicio', texto: 'Hallazgos, trabajo realizado, productos con lote y registro, fotos y firma.' },
  { icono: 'ph:seal-check', titulo: 'Constancia de servicio', texto: 'Folio único, tratamiento, plaga objetivo, control empleado y datos del técnico.' },
  { icono: 'ph:calendar-dots', titulo: 'Calendario anual', texto: 'Programación de visitas del año, para que sepas cuándo viene el servicio.' },
  { icono: 'ph:receipt', titulo: 'Cotizaciones', texto: 'Presupuestos con desglose, IVA y condiciones, en PDF con folio.' },
  { icono: 'ph:folder-simple-lock', titulo: 'Documentación', texto: 'Registros, seguros, fichas técnicas y de seguridad, siempre vigentes y a la mano.' },
  { icono: 'ph:map-pin-area', titulo: 'Plano de monitoreo', texto: 'Estaciones ubicadas en tu plano, con su historial de revisiones.' },
];

export const flujo = [
  { icono: 'ph:calendar-check', titulo: 'Se agenda', texto: 'La visita queda programada con fecha, hora y técnico. Tú también puedes solicitar una cita desde tu portal.' },
  { icono: 'ph:bug-beetle', titulo: 'Se inspecciona y se trata', texto: 'El técnico documenta hallazgos y fotos desde su celular, incluso sin señal. Todo se sincroniza después.' },
  { icono: 'ph:flask', titulo: 'Se registra el producto', texto: 'Producto, cantidad, lote y registro sanitario quedan anotados. Nada de “lo que sea que se haya usado”.' },
  { icono: 'ph:signature', titulo: 'Se firma de conformidad', texto: 'El responsable del lugar firma en pantalla. El servicio se cierra con evidencia.' },
  { icono: 'ph:file-pdf', titulo: 'Llega tu documento', texto: 'Reporte y constancia en PDF, en tu portal y por WhatsApp, con un código para comprobar que son auténticos.' },
];

export const preguntas = [
  {
    p: '¿Qué es PestOS?',
    r: 'Es la plataforma de gestión que Grupo Kassar utiliza para agendar, documentar y dar seguimiento a sus servicios. Tú no instalas nada: consultas tu información desde un enlace privado.',
  },
  {
    p: '¿Tengo que pagar o instalar algo para ver mi portal?',
    r: 'No. El portal forma parte del servicio. Se abre desde el navegador de tu celular o computadora con el enlace que te compartimos.',
  },
  {
    p: '¿Puedo descargar mis reportes y constancias cuando los necesite?',
    r: 'Sí. Tu historial queda disponible en el portal, listo para descargar en PDF, por ejemplo para una auditoría o una inspección.',
  },
  {
    p: '¿Cómo sé que un documento es auténtico?',
    r: 'Cada reporte y constancia lleva un código QR. Al escanearlo se abre una página pública que confirma que el documento existe y no fue alterado.',
  },
  {
    p: '¿Mis datos están protegidos?',
    r: 'La información de cada empresa vive separada de las demás, y el portal solo muestra lo que corresponde a tu propiedad. Los montos y notas internas no se exponen.',
  },
  {
    p: '¿Las imágenes de esta página son reales?',
    r: 'Son capturas reales de la plataforma, pero con datos ficticios. No mostramos información de ningún cliente.',
  },
];

const paginas = import.meta.glob<{ default: ImageMetadata }>('/src/assets/pestos/doc-*.webp', { eager: true });
const pagina = (doc: string, n: number) => paginas[`/src/assets/pestos/doc-${doc}-${n}.webp`].default;

/** Documentos que se muestran en el abanico. `muestra` son las páginas que se ven sobre la mesa. */
export const abanicos = [
  {
    id: 'reporte',
    pestana: 'Reporte ejecutivo',
    paginasTotal: 10,
    titulo: 'Reporte ejecutivo de servicio',
    texto: 'Hallazgos, trabajo realizado, productos con lote, plano de instalación, tendencias por dispositivo y recomendaciones.',
    muestra: [1, 3, 5, 6, 8, 9],
    pdf: '/documentos/reporte-ejecutivo-grupo-kassar.pdf',
  },
  {
    id: 'constancia',
    pestana: 'Constancia de servicio',
    paginasTotal: 4,
    titulo: 'Constancia de servicio',
    texto: 'El comprobante formal de cada visita: folio, plagas identificadas, control empleado, productos y datos del técnico.',
    muestra: [1, 2, 3, 4],
    pdf: '/documentos/constancia-servicio-grupo-kassar.pdf',
  },
  {
    id: 'cotizacion',
    pestana: 'Cotización',
    paginasTotal: 2,
    titulo: 'Cotización de servicio',
    texto: 'Desglose de conceptos, IVA, condiciones y garantía. Aquí, dos ejemplos: un restaurante con contrato mensual y una casa habitación.',
    muestra: [1, 2],
    pdf: '/documentos/cotizacion-grupo-kassar.pdf',
  },
  {
    id: 'calendario',
    pestana: 'Calendario',
    paginasTotal: 1,
    titulo: 'Calendario anual de servicios',
    texto: 'Las visitas de todo el año, con el día de cada mes, los servicios incluidos y las condiciones del contrato.',
    muestra: [1],
    pdf: '/documentos/calendario-servicios-grupo-kassar.pdf',
  },
].map((d) => ({
  ...d,
  paginas: Array.from({ length: d.paginasTotal }, (_, i) => ({ n: i + 1, imagen: pagina(d.id, i + 1) })),
}));
