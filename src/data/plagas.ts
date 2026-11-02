export type Categoria = 'rastreros' | 'roedores' | 'especializados';

export interface Plaga {
  slug: string;
  nombre: string;
  categoria: Categoria;
  icono: string;
  foto?: string;
  fotoAlt?: string;
  resumen: string;
  descripcion: string;
  senales: string[];
  riesgos: string[];
  metodos: string[];
  especies?: string[];
}

export const categorias: Record<Categoria, string> = {
  rastreros: 'Insectos rastreros',
  roedores: 'Roedores',
  especializados: 'Especializados',
};

export const plagas: Plaga[] = [
  {
    slug: 'cucarachas',
    nombre: 'Cucarachas',
    categoria: 'rastreros',
    icono: 'ph:bug-beetle',
    foto: 'cucaracha-americana',
    fotoAlt: 'Cucaracha americana',
    resumen: 'Control de cucaracha alemana, americana y oriental.',
    descripcion:
      'Las cucarachas buscan calor, humedad y alimento, y suelen refugiarse en cocinas, drenajes, ductos y equipos eléctricos. Como se reproducen rápido, una infestación pequeña puede crecer sin que se note durante el día.',
    senales: ['Excremento similar a pimienta o café molido', 'Ejemplares activos por la noche', 'Olor rancio en zonas cerradas', 'Cápsulas de huevo en grietas y rincones'],
    riesgos: ['Contaminación de alimentos y superficies', 'Alergias y molestias respiratorias', 'Observaciones en auditorías sanitarias'],
    metodos: ['Aplicación de geles en equipos y zonas sensibles', 'Cebos y trampas de goma', 'Nebulización de ultra bajo volumen', 'Espolvoreo en instalaciones eléctricas'],
    especies: ['Cucaracha alemana', 'Cucaracha americana', 'Cucaracha oriental'],
  },
  {
    slug: 'hormigas',
    nombre: 'Hormigas',
    categoria: 'rastreros',
    icono: 'ph:bug',
    foto: 'hormiga',
    fotoAlt: 'Hormiga obrera vista de cerca',
    resumen: 'Eliminación de colonias en interiores y exteriores.',
    descripcion:
      'Las hormigas forman rastros entre la colonia y sus fuentes de alimento. Eliminar solo las que se ven no resuelve el problema: hay que localizar los accesos y tratar el origen.',
    senales: ['Filas constantes en muros o pisos', 'Montículos de tierra junto a banquetas o jardines', 'Presencia cerca de azúcares y grasas'],
    riesgos: ['Contaminación de alimentos', 'Daño en jardines y equipos', 'Picaduras en algunas especies'],
    metodos: ['Cebos de acción gradual', 'Geles en puntos de paso', 'Aspersión perimetral'],
  },
  {
    slug: 'alacranes',
    nombre: 'Alacranes',
    categoria: 'rastreros',
    icono: 'ph:warning-octagon',
    foto: 'alacran',
    fotoAlt: 'Alacrán sobre terreno pedregoso',
    resumen: 'Control en casas, bodegas y áreas exteriores.',
    descripcion:
      'Los alacranes se esconden en escombro, grietas, tuberías y acumulaciones de material. Su picadura puede ser una urgencia médica, sobre todo en niñas, niños y personas adultas mayores, por lo que conviene actuar pronto.',
    senales: ['Avistamientos nocturnos', 'Presencia en baños, tinas o coladeras', 'Escombro o leña cerca de la construcción'],
    riesgos: ['Picaduras que requieren atención médica', 'Riesgo para personal, familias y mascotas'],
    metodos: ['Inspección de grietas y puntos de ingreso', 'Aspersión residual perimetral', 'Espolvoreo en huecos y registros'],
  },
  {
    slug: 'aranas',
    nombre: 'Arañas',
    categoria: 'rastreros',
    icono: 'ph:spiral',
    foto: 'arana-viuda-negra',
    fotoAlt: 'Araña viuda negra junto a su saco de huevos',
    resumen: 'Control de arañas, incluidas las de importancia médica.',
    descripcion:
      'Las arañas se instalan en rincones poco transitados, bodegas y exteriores. La mayoría son inofensivas, pero algunas, como la viuda negra, requieren un manejo cuidadoso.',
    senales: ['Telarañas en esquinas y estructuras', 'Sacos de huevos', 'Avistamientos en bodegas o cajas almacenadas'],
    riesgos: ['Picaduras de especies de importancia médica', 'Mala imagen en áreas de clientes'],
    metodos: ['Retiro de telarañas y refugios', 'Aspersión dirigida', 'Nebulización en espacios amplios'],
  },
  {
    slug: 'carcoma',
    nombre: 'Carcoma',
    categoria: 'rastreros',
    icono: 'ph:tree',
    foto: 'dano-carcoma',
    fotoAlt: 'Duela de madera con galerías causadas por carcoma',
    resumen: 'Protección de muebles, duelas y estructuras de madera.',
    descripcion:
      'La carcoma daña la madera desde adentro. Cuando aparecen los orificios, las larvas pueden llevar tiempo alimentándose, así que conviene revisar también las piezas cercanas.',
    senales: ['Orificios pequeños en la madera', 'Polvo fino debajo de muebles o vigas', 'Madera debilitada o quebradiza'],
    riesgos: ['Pérdida de muebles y acabados', 'Debilitamiento de piezas de madera'],
    metodos: ['Evaluación de las piezas afectadas', 'Aplicación dirigida en la madera', 'Recomendaciones de prevención'],
  },
  {
    slug: 'roedores',
    nombre: 'Roedores',
    categoria: 'roedores',
    icono: 'ph:rabbit',
    foto: 'roedor',
    fotoAlt: 'Rata sobre tierra',
    resumen: 'Control de rata noruega, rata negra y ratón doméstico.',
    descripcion:
      'Los roedores entran por huecos mínimos, roen cables y empaques, y contaminan lo que tocan. Un buen control combina captura o cebado con el cierre de los puntos de ingreso.',
    senales: ['Excremento y rastros de grasa en muros', 'Cables, cajas o costales roídos', 'Ruidos en plafones por la noche', 'Madrigueras junto a la construcción'],
    riesgos: ['Daños eléctricos con riesgo de incendio', 'Contaminación de alimentos y mercancía', 'Transmisión de enfermedades'],
    metodos: ['Trampas de goma y de captura', 'Estaciones de cebado', 'Identificación de accesos y refugios'],
    especies: ['Rata noruega', 'Rata negra', 'Ratón doméstico'],
  },
  {
    slug: 'termitas',
    nombre: 'Termitas',
    categoria: 'especializados',
    icono: 'ph:house-line',
    foto: 'termitas',
    fotoAlt: 'Termitas obreras y soldados de cerca',
    resumen: 'Madera seca y subterránea, en pre y post construcción.',
    descripcion:
      'Las termitas pueden dañar la madera durante mucho tiempo sin ser vistas. Atendemos termita de madera seca y subterránea, tanto en obra nueva como en construcciones existentes.',
    senales: ['Madera que suena hueca', 'Túneles de lodo en muros o cimientos', 'Alas sueltas cerca de ventanas', 'Pequeños montículos de residuos'],
    riesgos: ['Daño estructural', 'Reparaciones costosas', 'Pérdida de valor del inmueble'],
    metodos: ['Tratamiento preventivo de pre construcción', 'Tratamiento de post construcción', 'Inspección de estructuras'],
    especies: ['Termita de madera seca', 'Termita subterránea'],
  },
  {
    slug: 'chinches',
    nombre: 'Chinches',
    categoria: 'especializados',
    icono: 'ph:bed',
    foto: 'chinche-de-cama',
    fotoAlt: 'Chinche de cama adulta',
    resumen: 'Tratamiento discreto para hogares y hoteles.',
    descripcion:
      'Las chinches viajan en maletas, ropa y muebles, y se esconden en colchones y cabeceras. Requieren un tratamiento minucioso, porque una aplicación superficial suele dejar focos activos.',
    senales: ['Picaduras en línea al despertar', 'Pequeñas manchas oscuras en colchones', 'Mudas de piel en costuras y cabeceras'],
    riesgos: ['Picaduras y mala calidad de sueño', 'Quejas y daño reputacional en hospedaje'],
    metodos: ['Inspección de colchones y muebles', 'Aspersión y nebulización', 'Lavado y desinfección de textiles'],
  },
  {
    slug: 'murcielagos',
    nombre: 'Murciélagos',
    categoria: 'especializados',
    icono: 'ph:moon-stars',
    foto: 'murcielago',
    fotoAlt: 'Murciélago sostenido con guantes de protección',
    resumen: 'Reubicación y prevención sin dañar a la fauna.',
    descripcion:
      'Los murciélagos son importantes para el ecosistema, pero sus colonias en techos y plafones dañan estructuras y generan acumulaciones de excremento. Buscamos reubicarlos o ahuyentarlos sin causarles daño.',
    senales: ['Excremento acumulado en techos o pisos', 'Ruidos y olor fuerte en plafones', 'Salida de ejemplares al atardecer'],
    riesgos: ['Daño a estructuras', 'Acumulación de excremento en áreas de trabajo'],
    metodos: ['Repelentes', 'Hidrolavado y limpieza de zonas afectadas', 'Reubicación y prevención de anidamiento'],
  },
  {
    slug: 'aves',
    nombre: 'Aves',
    categoria: 'especializados',
    icono: 'ph:bird',
    foto: 'aves',
    fotoAlt: 'Paloma doméstica sobre piso de adoquín',
    resumen: 'Control de palomas y otras aves en edificios y naves.',
    descripcion:
      'Las aves anidan en cornisas, estructuras y naves industriales. Su excremento deteriora superficies y ensucia áreas de trabajo, por lo que el objetivo es alejarlas sin lastimarlas.',
    senales: ['Excremento en fachadas y estructuras', 'Nidos en cornisas o vigas', 'Bloqueo de canaletas y ductos'],
    riesgos: ['Deterioro de estructuras', 'Contaminación de producto y áreas de trabajo'],
    metodos: ['Repelentes', 'Hidrolavado de superficies', 'Trampas de captura y reubicación'],
  },
  {
    slug: 'abejas',
    nombre: 'Abejas africanizadas',
    categoria: 'especializados',
    icono: 'ph:hexagon',
    foto: 'enjambre-abejas',
    fotoAlt: 'Enjambre de abejas colgando de una estructura',
    resumen: 'Atención segura de enjambres y panales.',
    descripcion:
      'Un enjambre cerca de personas requiere atención especializada. Las abejas africanizadas pueden defender su colonia con rapidez, así que no intentes moverlas por tu cuenta.',
    senales: ['Enjambre en muros, árboles o techos', 'Tránsito constante de abejas por un hueco', 'Panal visible'],
    riesgos: ['Picaduras múltiples', 'Reacciones alérgicas graves'],
    metodos: ['Evaluación del enjambre', 'Equipo de protección especializado', 'Reubicación cuando es posible'],
  },
  {
    slug: 'avispas',
    nombre: 'Avispas',
    categoria: 'especializados',
    icono: 'ph:fire',
    foto: 'nido-avispas',
    fotoAlt: 'Avispas sobre su nido',
    resumen: 'Retiro seguro de nidos en interiores y exteriores.',
    descripcion:
      'Las avispas construyen nidos en aleros, techos y estructuras. Pueden atacar cuando se sienten amenazadas, por lo que el retiro debe hacerlo personal con equipo adecuado.',
    senales: ['Nidos en aleros o techos', 'Vuelo constante en un mismo punto', 'Avistamientos cerca de alimentos'],
    riesgos: ['Picaduras dolorosas', 'Reacciones alérgicas'],
    metodos: ['Localización del nido', 'Aplicación dirigida', 'Retiro y prevención'],
  },
];

export const tecnicas = [
  { titulo: 'Nebulización de ultra bajo volumen', texto: 'Equipos de 1 a 10 micras, alámbricos e inalámbricos, para distribuir el producto con precisión.' },
  { titulo: 'Termonebulización', texto: 'Humo denso que cubre grandes superficies y llega a lugares poco accesibles.' },
  { titulo: 'Aspersión', texto: 'Aspersores de 3 a 18 litros para instalaciones pequeñas y aplicaciones dirigidas.' },
  { titulo: 'Aplicación de geles', texto: 'Para electrodomésticos, instalaciones eléctricas y lugares con requisitos de certificación.' },
  { titulo: 'Espolvoreo', texto: 'Aplicación de polvos en equipos e instalaciones eléctricas.' },
  { titulo: 'Grandes espacios', texto: 'Nebulizador de motor de 30 a 80 micras para superficies amplias.' },
];
