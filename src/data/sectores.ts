export interface Sector {
  slug: string;
  nombre: string;
  icono: string;
  resumen: string;
  retos: string[];
  plagas: string[];
}

export const sectores: Sector[] = [
  {
    slug: 'industrial',
    nombre: 'Industrial',
    icono: 'ph:factory',
    resumen: 'Naves, plantas y almacenes con programas adaptados a su operación.',
    retos: ['Superficies amplias y difíciles de cubrir', 'Producto y materia prima en riesgo', 'Daños por excremento de aves en estructuras'],
    plagas: ['roedores', 'aves', 'cucarachas', 'murcielagos'],
  },
  {
    slug: 'alimenticio',
    nombre: 'Alimenticio',
    icono: 'ph:fork-knife',
    resumen: 'Restaurantes, cafeterías y producción de alimentos con procesos cuidadosos.',
    retos: ['Áreas de preparación que exigen aplicaciones dirigidas', 'Requisitos de certificación', 'Control continuo de cucarachas y roedores'],
    plagas: ['cucarachas', 'roedores', 'hormigas'],
  },
  {
    slug: 'salud',
    nombre: 'Salud',
    icono: 'ph:first-aid-kit',
    resumen: 'Hospitales y clínicas donde la limpieza y la discreción son críticas.',
    retos: ['Personas vulnerables en las instalaciones', 'Operación continua las 24 horas', 'Necesidad de control de patógenos'],
    plagas: ['cucarachas', 'hormigas', 'roedores'],
  },
  {
    slug: 'comercial',
    nombre: 'Comercial',
    icono: 'ph:storefront',
    resumen: 'Puntos de venta, centros deportivos y salas de entretenimiento.',
    retos: ['Tránsito constante de clientes', 'Servicio fuera del horario de atención', 'Cuidado de la imagen del negocio'],
    plagas: ['cucarachas', 'hormigas', 'aranas'],
  },
  {
    slug: 'corporativo',
    nombre: 'Corporativo',
    icono: 'ph:buildings',
    resumen: 'Oficinas, corporativos y estacionamientos con un servicio discreto.',
    retos: ['Áreas comunes y plafones', 'Equipos eléctricos sensibles', 'Coordinación con la administración del inmueble'],
    plagas: ['cucarachas', 'roedores', 'aves'],
  },
  {
    slug: 'residencial',
    nombre: 'Residencial',
    icono: 'ph:house',
    resumen: 'Casas y condominios, con tu familia y tus mascotas como prioridad.',
    retos: ['Convivencia con niñas, niños y mascotas', 'Plagas en jardines y exteriores', 'Prevención de termitas y carcoma'],
    plagas: ['alacranes', 'termitas', 'chinches'],
  },
];
