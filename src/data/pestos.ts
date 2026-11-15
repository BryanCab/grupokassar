import portal from '../assets/pestos/tel-portal.webp';
import portalExpediente from '../assets/pestos/tel-portal-expediente.webp';
import agenda from '../assets/pestos/tel-agenda.webp';
import reporte from '../assets/pestos/tel-reporte.webp';
import constancia from '../assets/pestos/tel-constancia.webp';
import monitoreo from '../assets/pestos/tel-monitoreo.webp';
import mapa from '../assets/pestos/tel-mapa.webp';
import docReporte from '../assets/pestos/doc-reporte.webp';
import docConstancia from '../assets/pestos/doc-constancia.webp';
import docCalendario from '../assets/pestos/doc-calendario.webp';

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
    alt: 'Detalle de un reporte de servicio con hallazgos, fotos y trabajo realizado',
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
    id: 'actividad',
    nombre: 'Actividad',
    icono: 'ph:chart-line-up',
    titulo: 'Dónde hay actividad y cómo evoluciona.',
    texto: 'El mapa de calor muestra qué zonas se activan más con el tiempo, para actuar antes de que crezca el problema.',
    imagen: mapa,
    alt: 'Mapa de actividad de plagas sobre el plano del cliente',
    chips: ['Mapa de actividad', 'Tendencias'],
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

export const pantallasResumen = ['portal', 'agenda', 'reportes', 'constancias', 'monitoreo'];

/** Piezas de cada servicio: lo que el cliente recibe */
export const entregables = [
  { icono: 'ph:clipboard-text', titulo: 'Reporte de servicio', texto: 'Hallazgos, trabajo realizado, productos con lote y registro, fotos y firma.' },
  { icono: 'ph:seal-check', titulo: 'Constancia de servicio', texto: 'Folio único, tratamiento, plaga objetivo, control empleado y datos del técnico.' },
  { icono: 'ph:calendar-dots', titulo: 'Calendario anual', texto: 'Programación de visitas del año, para que sepas cuándo viene el servicio.' },
  { icono: 'ph:folder-simple-lock', titulo: 'Documentación', texto: 'Registros, seguros, fichas técnicas y de seguridad, siempre vigentes y a la mano.' },
  { icono: 'ph:map-pin-area', titulo: 'Plano de monitoreo', texto: 'Estaciones ubicadas en tu plano, con su historial de revisiones.' },
  { icono: 'ph:bell-ringing', titulo: 'Seguimiento', texto: 'Solicita una cita, consulta el estado de tu solicitud y recibe avisos.' },
];

export const documentos = [
  {
    id: 'reporte',
    nombre: 'Reporte de servicio',
    texto: 'Lo que se encontró, lo que se aplicó y con qué producto.',
    imagen: docReporte,
    alt: 'Reporte de servicio en PDF con datos ficticios',
  },
  {
    id: 'constancia',
    nombre: 'Constancia de servicio',
    texto: 'El comprobante formal de cada visita, con folio.',
    imagen: docConstancia,
    alt: 'Constancia de servicio en PDF con datos ficticios',
  },
  {
    id: 'calendario',
    nombre: 'Calendario de servicios',
    texto: 'Las visitas del año, con el día de cada mes.',
    imagen: docCalendario,
    alt: 'Calendario anual de servicios en PDF con datos ficticios',
  },
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
