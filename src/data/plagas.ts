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
  porQueActuar?: string;
  datos?: string[];
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
      'La chinche de cama se adhiere a tu ropa sin que lo notes y, al llegar a casa, se esconde en las costuras del colchón, enchufes, bases de cama, grietas en paredes y cualquier lugar recóndito del inmueble. La propagación es rápida en condiciones óptimas, ya que una hembra adulta puede poner de 1 a 5 huevos al día.',
    senales: ['Picaduras en línea al despertar', 'Pequeñas manchas oscuras en colchones', 'Mudas de piel en costuras y cabeceras'],
    riesgos: ['Picaduras y mala calidad de sueño', 'Quejas y daño reputacional en hospedaje'],
    metodos: ['Inspección de colchones y muebles', 'Aspersión y nebulización', 'Lavado y desinfección de textiles'],
    porQueActuar:
      'Se alimentan de tu sangre mientras duermes. Generan picaduras en serie, intensa picazón, insomnio y una alta carga de estrés emocional.',
    datos: ['Una chinche adulta puede sobrevivir más de 1 año sin comer, esperando a su próxima víctima.', 'Las crías necesitan alimentarse de sangre al menos una vez en cada una de sus 5 etapas para poder crecer, e incluso detectan el olor humano.'],
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
      'Los murciélagos son inofensivos y no se consideran una plaga; al contrario, ayudan a eliminar otras plagas. Sin embargo, cuando se refugian en techos, almacenes y plafones es necesario gestionar su presencia, ya que sus excrementos acumulados desarrollan el hongo de la histoplasmosis, una infección pulmonar grave.',
    senales: ['Excremento acumulado en techos o pisos', 'Ruidos y olor fuerte en plafones', 'Salida de ejemplares al atardecer'],
    riesgos: ['Daño a estructuras', 'Acumulación de excremento en áreas de trabajo'],
    metodos: ['Repelentes', 'Hidrolavado y limpieza de zonas afectadas', 'Reubicación y prevención de anidamiento'],
    porQueActuar:
      'Son vectores del virus de la rabia, por lo que es mejor realizar una exclusión cuidadosa.',
    datos: ['Las hembras pueden almacenar esperma en su cuerpo todo el invierno y fertilizarse solo cuando el clima es ideal.', 'Pueden vivir de 20 a 30 años y regresar exactamente al mismo refugio si no se aplica un desalojo profesional.'],
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
      'Las palomas son aves inofensivas, pero su excremento es altamente corrosivo para la cantera, el metal y la pintura. Además, albergan ácaros y hongos infecciosos como Cryptococcus. Se controlan mediante sistemas de exclusión, disuasión física y sanitización para erradicar parásitos y bacterias sin dañar a las aves.',
    senales: ['Excremento en fachadas y estructuras', 'Nidos en cornisas o vigas', 'Bloqueo de canaletas y ductos'],
    riesgos: ['Deterioro de estructuras', 'Contaminación de producto y áreas de trabajo'],
    metodos: ['Repelentes', 'Hidrolavado de superficies', 'Trampas de captura y reubicación'],
    porQueActuar:
      'Obstruyen bajantes de agua de lluvia, dañan paneles solares y crean focos de insalubridad en balcones y fachadas. Se aplica fumigación líquida o nebulización para eliminar ácaros, piojos y garrapatas.',
    datos: ['Pueden criar hasta 6 veces al año gracias a la abundancia de desperdicios en las ciudades.'],
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
      'Las abejas africanizadas tienen un comportamiento hiperdefensivo: ante cualquier ruido o vibración atacan en enjambres masivos, provocando picaduras dolorosas. Por eso se deben tratar con cuidado para su retiro.',
    senales: ['Enjambre en muros, árboles o techos', 'Tránsito constante de abejas por un hueco', 'Panal visible'],
    riesgos: ['Picaduras múltiples', 'Reacciones alérgicas graves'],
    metodos: ['Evaluación del enjambre', 'Equipo de protección especializado', 'Reubicación cuando es posible'],
    porQueActuar:
      'Establecen panales en muros, jardines o falsos plafones, volviendo peligroso el tránsito en áreas comunes.',
    datos: ['Su reina nace en solo 14 días, lo que les permite multiplicar sus colonias mucho más rápido que la abeja común.', 'Se dividen y buscan nuevos lugares para colonizar hasta 4 veces más rápido que otras especies.'],
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
      'A diferencia de las abejas, las avispas no pierden el aguijón y pueden picar múltiples veces a una persona, inyectando veneno que puede causar shock anafiláctico. Construyen nidos en techos, aleros, cavidades de paredes o jardines cercanos, y representan un peligro por sus picaduras y posibles daños a la infraestructura, por lo que hay que eliminar los avisperos exteriores con total seguridad.',
    senales: ['Nidos en aleros o techos', 'Vuelo constante en un mismo punto', 'Avistamientos cerca de alimentos'],
    riesgos: ['Picaduras dolorosas', 'Reacciones alérgicas'],
    metodos: ['Localización del nido', 'Aplicación dirigida', 'Retiro y prevención'],
    porQueActuar:
      'Construyen avisperos cerca de marcos de ventanas, techos y puertas, inhabilitando el uso seguro de tus áreas exteriores.',
    datos: ['En invierno muere toda la colonia, excepto las reinas fertilizadas, que despiertan en primavera para construir un nuevo avispero desde cero.'],
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
