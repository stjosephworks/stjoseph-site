import type { ToolLinkKey, ToolSlug } from '@/features/tools/tools'
import type { Dictionary, ToolCopy } from './en'

export const pt: Dictionary = {
  nav: {
    mission: 'Missão',
    tools: 'Ferramentas',
    github: 'GitHub',
    skipToContent: 'Pular para o conteúdo',
    language: 'Idioma',
    menu: 'Menu',
  },
  common: {
    latin: 'Ite ad Joseph',
    latinGloss: 'Ide a José.',
    latinSource: 'Gênesis 41:55',
  },
  home: {
    title: 'St. Joseph Works',
    description:
      'Uma iniciativa católica que constrói ferramentas abertas para inventores, para que o esforço vá para a ideia e não para tudo o que a cerca. Sob a proteção de São José Operário.',
    headline: 'A maior parte do trabalho não é a ideia.',
    headlineSecond: 'Construímos as ferramentas que carregam o resto.',
    standfirst:
      'A St. Joseph Works é uma iniciativa católica que constrói ferramentas para inventores. Quem já tentou transformar uma ideia em algo real sabe quanto do esforço vai para coisas que nada têm a ver com a ideia em si. Queremos tirar parte desse peso, para que os inventores gastem seu tempo naquilo que foram feitos para criar.',
    seeTools: 'Ver as ferramentas',
    readMission: 'Ler a missão',
    patron: {
      heading: 'Sob a proteção de São José Operário',
      body: 'Ele foi carpinteiro em Nazaré, guardião da Sagrada Família, e ensinou seu ofício ao Filho de Deus. Hoje a Igreja o honra como seu Patrono. Sua vida mostra que o trabalho comum, feito bem e oferecido a Deus, pode tornar-se santo, e é esse o tipo de trabalho que queremos fazer.',
    },
    mission: {
      heading: 'Nossa missão',
      body: 'Nossa missão é incentivar as pessoas a criar projetos que tornem o mundo melhor.',
      quote:
        'Tudo o que fizerdes, fazei-o de bom coração, como para o Senhor e não para os homens.',
      quoteSource: 'Colossenses 3,23',
      link: 'A missão completa',
    },
    work: {
      heading: 'O que fazemos',
      items: {
        build: {
          term: 'Construímos ferramentas abertas',
          detail:
            'Ferramentas que tornam mais fácil ir de uma ideia a um projeto que funciona. Abertas, para que qualquer um possa lê-las, usá-las e levá-las adiante.',
        },
        encourage: {
          term: 'Incentivamos os dons',
          detail:
            'Incentivamos as pessoas a desenvolver os dons que Deus lhes deu, e a levar seus projetos até o fim.',
        },
        serve: {
          term: 'Escolhemos o que serve',
          detail:
            'Damos prioridade a projetos que respeitam a dignidade humana e servem ao bem comum.',
        },
      },
    },
    tools: {
      heading: 'As ferramentas',
      body: 'Cada uma é aberta, e cada uma é construída para ser entregue. Até agora há uma.',
      link: 'Todas as ferramentas',
    },
  },
  mission: {
    title: 'Missão',
    description:
      'Por que a St. Joseph Works existe, sob a proteção de quem está, e a oração pela qual trabalha.',
    heading: 'Nossa missão',
    standfirst: 'Nossa missão é incentivar as pessoas a criar projetos que tornem o mundo melhor.',
    labor: {
      heading: 'O trabalho participa da obra do Criador',
      body: 'São João Paulo II escreveu na Laborem Exercens que o homem, feito à imagem de Deus, participa da obra do Criador por meio do seu próprio trabalho. Os talentos que recebemos são feitos para dar fruto. Queremos ajudar inventores e criadores a usar esses talentos para construir coisas que resolvam problemas reais e sirvam ao próximo, para a glória de Deus.',
      quote:
        'Tudo o que fizerdes, fazei-o de bom coração, como para o Senhor e não para os homens.',
      quoteSource: 'Colossenses 3,23',
    },
    patron: {
      heading: 'São José Operário',
      body: 'Colocamos este trabalho sob a proteção de São José Operário. Ele foi carpinteiro em Nazaré, guardião da Sagrada Família, e ensinou seu ofício ao Filho de Deus. Hoje a Igreja o honra como seu Patrono. Sua vida mostra que o trabalho comum, feito bem e oferecido a Deus, pode tornar-se santo, e é esse o tipo de trabalho que queremos fazer.',
    },
    work: {
      heading: 'O que fazemos',
      items: [
        'Construímos ferramentas abertas que tornam mais fácil ir de uma ideia a um projeto que funciona.',
        'Incentivamos as pessoas a desenvolver os dons que Deus lhes deu, e a levar seus projetos até o fim.',
        'Damos prioridade a projetos que respeitam a dignidade humana e servem ao bem comum.',
      ],
    },
    prayer: {
      heading: 'Oração a São José Operário',
      body: 'Ó glorioso São José, modelo de todos os que se dedicam ao trabalho, alcançai-me a graça de trabalhar em espírito de penitência para a expiação dos meus muitos pecados; de trabalhar com consciência, colocando o dever acima das minhas inclinações naturais; de trabalhar com gratidão e alegria, considerando uma honra empregar e desenvolver pelo trabalho os dons recebidos de Deus; de trabalhar com ordem, paz, moderação e paciência, sem nunca recuar diante do cansaço e das provações; de trabalhar, acima de tudo, com pureza de intenção e desprendimento de mim mesmo, tendo sem cessar diante dos olhos a morte e a conta que devo dar do tempo perdido, dos talentos não usados, do bem omitido e da vã complacência no sucesso, tão funesta à obra de Deus.',
      closing:
        'Tudo por Jesus, tudo por Maria, tudo à vossa imitação, ó Patriarca São José. Este será o meu lema na vida e na morte. Amém.',
      attribution: 'Composta pelo Papa São Pio X',
    },
  },
  tools: {
    title: 'Ferramentas',
    description:
      'As ferramentas abertas que a St. Joseph Works constrói. Cada card leva ao site da própria ferramenta.',
    heading: 'As ferramentas',
    standfirst:
      'Tudo aqui é aberto e construído para ser entregue. Cada card leva ao site da própria ferramenta, onde ela está documentada como deve.',
    visit: 'Visitar o site',
    states: {
      available: 'Disponível',
      building: 'Em construção',
    },
    links: <Record<ToolLinkKey, string>>{
      repository: 'Repositório',
      desktopRepository: 'Repositório do desktop',
      npm: 'Pacote no npm',
    },
    items: <Record<ToolSlug, ToolCopy>>{
      prumo: {
        name: 'Prumo',
        tagline: 'Um projeto TypeScript em que as decisões já estão tomadas, e escritas.',
        body: 'O Prumo começa um projeto com o framework, o desenho dos módulos, as regras de banco, a autenticação e os limites de teste já escolhidos. Cada decisão foi tomada uma vez, registrada com sua razão e seu preço, e transformada em algo que roda. É uma ferramenta de linha de comando e um aplicativo desktop sobre as mesmas convenções.',
      },
    },
  },
  footer: {
    sections: {
      organization: 'St. Joseph Works',
      tools: 'Ferramentas',
      elsewhere: 'Em outros lugares',
    },
    organization: 'Organização no GitHub',
    profile: 'Perfil da organização',
    license: 'Nossas ferramentas são de código aberto',
    glory: 'Ad Maiorem Dei Gloriam',
    praise: 'Que Deus seja para sempre louvado e amado.',
  },
  notFound: {
    title: 'Não encontrado',
    heading: 'Não há nada aqui',
    body: 'Essa página não existe. As ferramentas estão listadas aqui.',
    link: 'Ver as ferramentas',
  },
}
