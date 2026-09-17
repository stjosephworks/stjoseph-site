import type { MemberSlug } from '@/features/team/team'
import type { ToolLinkKey, ToolSlug } from '@/features/tools/tools'

export interface MemberCopy {
  role: string
  bio: string
  patron: string
}

export interface ToolCopy {
  name: string
  tagline: string
  body: string
}

export const en = {
  nav: {
    mission: 'Mission',
    tools: 'Tools',
    team: 'Team',
    github: 'GitHub',
    skipToContent: 'Skip to content',
    language: 'Language',
    menu: 'Menu',
  },
  common: {
    latin: 'Ite ad Joseph',
    latinGloss: 'Go to Joseph.',
    latinSource: 'Genesis 41:55',
  },
  home: {
    title: 'St. Joseph Works',
    description:
      'A Catholic initiative building open tools for inventors, so the effort goes into the idea rather than into everything around it. Under the care of Saint Joseph the Worker.',
    headline: 'Most of the work is not the idea.',
    headlineSecond: 'We build the tools that carry the rest.',
    standfirst:
      'St. Joseph Works is a Catholic initiative that builds tools for inventors. Anyone who has tried to turn an idea into something real knows how much of the effort goes into things that have nothing to do with the idea itself. We want to take some of that weight off, so inventors can spend their time on what they were meant to create.',
    seeTools: 'See the tools',
    readMission: 'Read the mission',
    patron: {
      heading: 'Under the care of Saint Joseph the Worker',
      body: 'He was a carpenter in Nazareth, the guardian of the Holy Family, and he taught his trade to the Son of God. Today the Church honors him as her Patron. His life shows that ordinary work, done well and offered to God, can become holy, and that is the kind of work we want to do.',
    },
    mission: {
      heading: 'Our mission',
      body: 'Our mission is to encourage people to create projects that make the world better.',
      quote: 'Whatever your task, work heartily, as serving the Lord and not men.',
      quoteSource: 'Colossians 3:23',
      link: 'The whole mission',
    },
    work: {
      heading: 'What we do',
      items: {
        build: {
          term: 'We build open tools',
          detail:
            'Tools that make it easier to go from an idea to a working project. Open, so anyone can read them, use them and take them further.',
        },
        encourage: {
          term: 'We encourage the gifts',
          detail:
            'We encourage people to develop the gifts God has given them, and to see their projects through to the end.',
        },
        serve: {
          term: 'We choose what serves',
          detail:
            'We give priority to projects that respect human dignity and serve the common good.',
        },
      },
    },
    tools: {
      heading: 'The tools',
      body: 'Each one is open, and each one is built to be handed over. There is one so far.',
      link: 'All the tools',
    },
  },
  mission: {
    title: 'Mission',
    description: 'Why St. Joseph Works exists, whose care it is under, and the prayer it works by.',
    heading: 'Our mission',
    standfirst: 'Our mission is to encourage people to create projects that make the world better.',
    labor: {
      heading: 'Work shares in the work of the Creator',
      body: 'St. John Paul II wrote in Laborem Exercens that man, made in the image of God, shares in the work of the Creator through his own labor. The talents we receive are meant to bear fruit. We want to help inventors and makers use those talents to build things that solve real problems and serve their neighbors, for the glory of God.',
      quote: 'Whatever your task, work heartily, as serving the Lord and not men.',
      quoteSource: 'Colossians 3:23',
    },
    patron: {
      heading: 'Saint Joseph the Worker',
      body: 'We put this work under the care of Saint Joseph the Worker. He was a carpenter in Nazareth, the guardian of the Holy Family, and he taught his trade to the Son of God. Today the Church honors him as her Patron. His life shows that ordinary work, done well and offered to God, can become holy, and that is the kind of work we want to do.',
    },
    work: {
      heading: 'What we do',
      items: [
        'We build open tools that make it easier to go from an idea to a working project.',
        'We encourage people to develop the gifts God has given them, and to see their projects through to the end.',
        'We give priority to projects that respect human dignity and serve the common good.',
      ],
    },
    prayer: {
      heading: 'Prayer to Saint Joseph the Worker',
      body: 'O Glorious Saint Joseph, model of all those who are devoted to labor, obtain for me the grace to work in a spirit of penance for the expiation of my many sins; to work conscientiously, putting the call of duty above my natural inclinations; to work with thankfulness and joy, considering it an honor to employ and develop by means of labor the gifts received from God; to work with order, peace, moderation and patience, never shrinking from weariness and trials; to work above all with purity of intention and detachment from self, keeping unceasingly before my eyes death and the account that I must give of time lost, talents unused, good omitted, and vain complacency in success, so fatal to the work of God.',
      closing:
        'All for Jesus, all through Mary, all after thy example, O Patriarch, Saint Joseph. Such shall be my watch-word in life and in death. Amen.',
      attribution: 'Composed by Pope St. Pius X',
    },
  },
  tools: {
    title: 'Tools',
    description: 'The open tools St. Joseph Works builds. Each card leads to that tool’s own site.',
    heading: 'The tools',
    standfirst:
      'Everything here is open and built to be handed over. Each card leads to that tool’s own site, where it is documented properly.',
    visit: 'Visit the site',
    states: {
      available: 'Available',
      building: 'Being built',
    },
    links: <Record<ToolLinkKey, string>>{
      repository: 'Repository',
      desktopRepository: 'Desktop repository',
      npm: 'Package on npm',
    },
    items: <Record<ToolSlug, ToolCopy>>{
      prumo: {
        name: 'Prumo',
        tagline: 'A TypeScript project where the decisions are already made, and written down.',
        body: 'Prumo starts a project with the framework, the module layout, the database rules, the auth wiring and the test boundaries already chosen. Each decision was made once, recorded with its reasoning and its price, and turned into something that runs. It is a command-line tool and a desktop application over the same conventions.',
      },
    },
  },
  team: {
    title: 'Team',
    description:
      'Who is behind St. Joseph Works: the people building the tools, and the saints they work under.',
    heading: 'Who is behind this',
    standfirst:
      'St. Joseph Works is small, and means to stay honest about it. These are the people building the tools, and the saints they work under.',
    labels: {
      devotion: 'Devotion',
    },
    links: {
      github: 'GitHub',
    },
    items: <Record<MemberSlug, MemberCopy>>{
      'leonardo-freitas': {
        role: 'Head of Engineering',
        bio: 'More than twelve years as a software developer. He started St. Joseph Works, to give inventors tools that take some of the weight off the work around the idea.',
        patron: 'Saint Pier Giorgio Frassati',
      },
    },
  },
  footer: {
    sections: {
      organization: 'St. Joseph Works',
      tools: 'Tools',
      elsewhere: 'Elsewhere',
    },
    organization: 'Organization on GitHub',
    profile: 'Organization profile',
    license: 'Our tools are open source',
    glory: 'Ad Maiorem Dei Gloriam',
    praise: 'May God be forever praised and loved.',
  },
  notFound: {
    title: 'Not found',
    heading: 'Nothing is here',
    body: 'That page does not exist. The tools are listed here.',
    link: 'See the tools',
  },
}

export type Dictionary = typeof en
