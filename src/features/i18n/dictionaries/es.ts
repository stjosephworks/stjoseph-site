import type { MemberSlug } from '@/features/team/team'
import type { ToolLinkKey, ToolSlug } from '@/features/tools/tools'
import type { Dictionary, MemberCopy, ToolCopy } from './en'

export const es: Dictionary = {
  nav: {
    mission: 'Misión',
    tools: 'Herramientas',
    team: 'Equipo',
    github: 'GitHub',
    skipToContent: 'Ir al contenido',
    language: 'Idioma',
    menu: 'Menú',
  },
  common: {
    latin: 'Ite ad Joseph',
    latinGloss: 'Vayan a José.',
    latinSource: 'Génesis 41:55',
  },
  home: {
    title: 'St. Joseph Works',
    description:
      'Una iniciativa católica que crea herramientas abiertas para inventores, para que el esfuerzo se dedique a la idea y no a todo lo que la rodea. Bajo el cuidado de San José Obrero.',
    headline: 'La mayor parte del trabajo no es la idea.',
    headlineSecond: 'Creamos las herramientas que cargan con el resto.',
    standfirst:
      'St. Joseph Works es una iniciativa católica que crea herramientas para inventores. Quien haya intentado convertir una idea en algo real sabe cuánto esfuerzo se va en cosas que no tienen nada que ver con la idea misma. Queremos quitarles parte de ese peso, para que los inventores dediquen su tiempo a aquello que están llamados a crear.',
    seeTools: 'Ver las herramientas',
    readMission: 'Leer la misión',
    patron: {
      heading: 'Bajo el cuidado de San José Obrero',
      body: 'Fue carpintero en Nazaret, custodio de la Sagrada Familia, y le enseñó su oficio al Hijo de Dios. Hoy la Iglesia lo honra como su Patrono. Su vida muestra que el trabajo de todos los días, bien hecho y ofrecido a Dios, puede volverse santo, y ese es el tipo de trabajo que queremos hacer.',
    },
    mission: {
      heading: 'Nuestra misión',
      body: 'Nuestra misión es animar a las personas a crear proyectos que hagan del mundo un lugar mejor.',
      quote:
        'Cualquiera sea el trabajo de ustedes, háganlo de todo corazón, teniendo en cuenta que es para el Señor y no para los hombres.',
      quoteSource: 'Colosenses 3:23',
      link: 'La misión completa',
    },
    work: {
      heading: 'Lo que hacemos',
      items: {
        build: {
          term: 'Creamos herramientas abiertas',
          detail:
            'Herramientas que facilitan pasar de una idea a un proyecto que funciona. Abiertas, para que cualquiera pueda leerlas, usarlas y llevarlas más lejos.',
        },
        encourage: {
          term: 'Animamos los dones',
          detail:
            'Animamos a las personas a desarrollar los dones que Dios les dio y a llevar sus proyectos hasta el final.',
        },
        serve: {
          term: 'Elegimos lo que sirve',
          detail:
            'Damos prioridad a los proyectos que respetan la dignidad humana y sirven al bien común.',
        },
      },
    },
    tools: {
      heading: 'Las herramientas',
      body: 'Cada una es abierta, y cada una está hecha para entregarse. Por ahora hay una.',
      link: 'Todas las herramientas',
    },
  },
  mission: {
    title: 'Misión',
    description:
      'Por qué existe St. Joseph Works, bajo el cuidado de quién está y la oración con la que trabaja.',
    heading: 'Nuestra misión',
    standfirst:
      'Nuestra misión es animar a las personas a crear proyectos que hagan del mundo un lugar mejor.',
    labor: {
      heading: 'El trabajo participa en la obra del Creador',
      body: 'San Juan Pablo II escribió en la Laborem exercens que el hombre, creado a imagen de Dios, participa en la obra del Creador mediante su propio trabajo. Los talentos que recibimos están hechos para dar fruto. Queremos ayudar a inventores y creadores a usar esos talentos para construir cosas que resuelvan problemas reales y sirvan al prójimo, para la gloria de Dios.',
      quote:
        'Cualquiera sea el trabajo de ustedes, háganlo de todo corazón, teniendo en cuenta que es para el Señor y no para los hombres.',
      quoteSource: 'Colosenses 3:23',
    },
    patron: {
      heading: 'San José Obrero',
      body: 'Ponemos este trabajo bajo el cuidado de San José Obrero. Fue carpintero en Nazaret, custodio de la Sagrada Familia, y le enseñó su oficio al Hijo de Dios. Hoy la Iglesia lo honra como su Patrono. Su vida muestra que el trabajo de todos los días, bien hecho y ofrecido a Dios, puede volverse santo, y ese es el tipo de trabajo que queremos hacer.',
    },
    work: {
      heading: 'Lo que hacemos',
      items: [
        'Creamos herramientas abiertas que facilitan pasar de una idea a un proyecto que funciona.',
        'Animamos a las personas a desarrollar los dones que Dios les dio y a llevar sus proyectos hasta el final.',
        'Damos prioridad a los proyectos que respetan la dignidad humana y sirven al bien común.',
      ],
    },
    prayer: {
      heading: 'Oración a San José Obrero',
      body: 'Oh glorioso San José, modelo de todos los que se consagran al trabajo, obtenme la gracia de trabajar con espíritu de penitencia en expiación de mis numerosos pecados; de trabajar a conciencia, poniendo el cumplimiento del deber por encima de mis inclinaciones naturales; de trabajar con gratitud y alegría, considerando un honor emplear y desarrollar, por medio del trabajo, los dones recibidos de Dios; de trabajar con orden, paz, moderación y paciencia, sin retroceder jamás ante el cansancio y las dificultades; de trabajar, sobre todo, con pureza de intención y desprendimiento de mí mismo, teniendo siempre ante mis ojos la muerte y la cuenta que tendré que rendir del tiempo perdido, de los talentos desaprovechados, del bien omitido y de la vana complacencia en el éxito, tan funesta para la obra de Dios.',
      closing:
        'Todo por Jesús, todo por María, todo a imitación tuya, oh patriarca San José. Este será mi lema en la vida y en la muerte. Amén.',
      attribution: 'Compuesta por el papa San Pío X',
    },
  },
  tools: {
    title: 'Herramientas',
    description:
      'Las herramientas abiertas que crea St. Joseph Works. Cada tarjeta lleva al sitio de esa herramienta.',
    heading: 'Las herramientas',
    standfirst:
      'Todo lo que hay aquí es abierto y está hecho para entregarse. Cada tarjeta lleva al sitio de esa herramienta, donde está documentada como corresponde.',
    visit: 'Visitar el sitio',
    states: {
      available: 'Disponible',
      building: 'En construcción',
    },
    links: <Record<ToolLinkKey, string>>{
      repository: 'Repositorio',
      desktopRepository: 'Repositorio de la versión de escritorio',
      npm: 'Paquete en npm',
    },
    items: <Record<ToolSlug, ToolCopy>>{
      prumo: {
        name: 'Prumo',
        tagline: 'Un proyecto TypeScript en el que las decisiones ya están tomadas, y escritas.',
        body: 'Prumo comienza un proyecto con el framework, la organización de los módulos, las reglas de la base de datos, la autenticación y los límites de las pruebas ya elegidos. Cada decisión se tomó una sola vez, se registró con su razón y su costo, y se convirtió en algo que funciona. Es una herramienta de línea de comandos y una aplicación de escritorio sobre las mismas convenciones.',
      },
    },
  },
  team: {
    title: 'Equipo',
    description:
      'Quiénes están detrás de St. Joseph Works: las personas que crean las herramientas y los santos bajo cuyo cuidado trabajan.',
    heading: 'Quiénes están detrás',
    standfirst:
      'St. Joseph Works es pequeña, y quiere ser honesta al respecto. Estas son las personas que crean las herramientas y los santos bajo cuyo cuidado trabajan.',
    labels: {
      devotion: 'Devoción',
    },
    links: {
      github: 'GitHub',
    },
    items: <Record<MemberSlug, MemberCopy>>{
      'leonardo-freitas': {
        role: 'Head of Engineering',
        bio: 'Más de doce años como desarrollador de software. Fundó St. Joseph Works para dar a los inventores herramientas que les quiten parte del peso del trabajo que rodea a la idea.',
        patron: 'Padre Pío de Pietrelcina',
      },
    },
  },
  footer: {
    sections: {
      organization: 'St. Joseph Works',
      tools: 'Herramientas',
      elsewhere: 'En otros sitios',
    },
    organization: 'Organización en GitHub',
    profile: 'Perfil de la organización',
    license: 'Nuestras herramientas son de código abierto',
    glory: 'Ad Maiorem Dei Gloriam',
    praise: 'Que Dios sea por siempre alabado y amado.',
  },
  notFound: {
    title: 'No encontrado',
    heading: 'Aquí no hay nada',
    body: 'Esa página no existe. Las herramientas están aquí.',
    link: 'Ver las herramientas',
  },
}
