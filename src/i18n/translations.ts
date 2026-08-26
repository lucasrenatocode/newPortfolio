export type Lang = 'pt' | 'en'

export interface TranslationShape {
  nav: {
    about: string
    skills: string
    projects: string
    services: string
    contact: string
    cta: string
  }
  hero: {
    greeting: string
    titleLine1: string
    titleLine2Pre: string
    titleLine2Em: string
    titleLine3: string
    ctaPrimary: string
    ctaGhost: string
    stat1: string
    stat2: string
    stat3: string
    available: string
  }
  about: {
    eyebrow: string
    leadPre: string
    leadStrong: string
    leadPost: string
    body: string
    pillar1Title: string
    pillar1Desc: string
    pillar2Title: string
    pillar2Desc: string
    pillar3Title: string
    pillar3Desc: string
    pillar4Title: string
    pillar4Desc: string
  }
  skills: {
    eyebrow: string
    titlePre: string
    titleGradient: string
    subtitle: string
  }
  projects: {
    eyebrow: string
    titlePre: string
    titleGradient: string
    subtitle: string
    visitWebsite: string
  }
  services: {
    eyebrow: string
    titlePre: string
    titleGradient: string
    items: { name: string; description: string }[]
  }
  contact: {
    eyebrow: string
    titlePre: string
    titleGradient: string
    subtitle: string
    infoText: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    sendIdle: string
    sendSending: string
    successText: string
  }
  footer: {
    builtWith: string
  }
}

export const translations: Record<Lang, TranslationShape> = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      services: 'Serviços',
      contact: 'Contato',
      cta: 'Vamos falar',
    },
    hero: {
       greeting: 'Olá, eu sou o Lucas',
        titleLine1: 'Seu concorrente',
        titleLine2Pre: 'ainda não tem',
        titleLine2Em: 'site.',
        titleLine3: 'Aproveita enquanto dá.',
        ctaPrimary: 'Ver Projetos',
        ctaGhost: 'Fale Comigo',
        stat1: 'PROJETOS ENTREGUES',
        stat2: 'TECNOLOGIAS PRINCIPAIS',
        stat3: '% PRONTO P/ REMOTO',
        available: 'Disponível para projetos',
    },
    about: {
      eyebrow: 'Sobre',
      leadPre: 'Sou um desenvolvedor front-end que acredita que ',
      leadStrong: 'boas interfaces',
      leadPost: ' nascem do encontro entre código limpo e design pensado.',
      body:
        'Sou especializado em React e TypeScript, construindo produtos responsivos e performáticos com atenção total aos detalhes — do tempo das animações até a acessibilidade. Eu me importo tanto com a sensação de usar o software quanto com seu funcionamento.',
      pillar1Title: 'Código Limpo',
      pillar1Desc: 'Arquitetura legível e fácil de manter, pronta para escalar com seu produto.',
      pillar2Title: 'Performance',
      pillar2Desc: 'Pacotes leves, renderizações otimizadas e carregamento rápido por padrão.',
      pillar3Title: 'Design Responsivo',
      pillar3Desc: 'Layouts pensados nos detalhes, que se adaptam perfeitamente a qualquer tela.',
      pillar4Title: 'Experiência do Usuário',
      pillar4Desc: 'Interações pensadas a partir de como as pessoas realmente se comportam.',
    },
    skills: {
      eyebrow: 'Habilidades',
      titlePre: 'Minha stack',
      titleGradient: 'principal',
      subtitle: 'As ferramentas que eu uso para transformar ideias em produtos rápidos e confiáveis.',
    },
    projects: {
      eyebrow: 'Projetos',
      titlePre: 'Trabalhos',
      titleGradient: 'selecionados',
      subtitle: 'Alguns projetos que mostram como penso sobre produto, código e atenção aos detalhes.',
      visitWebsite: 'Visitar site',
    },
    services: {
      eyebrow: 'Serviços',
      titlePre: 'O que eu posso',
      titleGradient: 'criar para você',
      items: [
        { name: 'Landing Pages', description: 'Páginas de alta conversão feitas para transformar visitantes em clientes.' },
        { name: 'Sites Responsivos', description: 'Sites que parecem nativos em qualquer dispositivo, sempre.' },
        { name: 'Desenvolvimento Front-end', description: 'Builds em React/TypeScript do design até o código em produção.' },
        { name: 'Implementação de UI', description: 'Tradução fiel e cuidadosa do Figma para a interface real.' },
        { name: 'Otimização de Performance', description: 'Carregamento mais rápido, pacotes menores, melhores notas no Lighthouse.' },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      titlePre: 'Vamos construir algo',
      titleGradient: 'incrível juntos',
      subtitle: 'Tem um projeto em mente? Me conta — eu adoraria saber mais.',
      infoText:
        'Seja uma nova landing page, um build front-end completo, ou ajuda para otimizar um produto existente — fico feliz em conversar sobre isso.',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'voce@email.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conta um pouco sobre seu projeto...',
      sendIdle: 'Enviar via WhatsApp',
      sendSending: 'Abrindo WhatsApp...',
      successText: 'WhatsApp aberto! Continue a conversa por lá.',
    },
    footer: {
      builtWith: 'Construído com React & TypeScript.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      cta: "Let's talk",
    },
    hero: {
      greeting: "Hello, I'm Lucas",
      titleLine1: 'Your competitor',
      titleLine2Pre: "doesn't have a",
      titleLine2Em: 'website.',
      titleLine3: 'Take advantage while you can.',
      ctaPrimary: 'View Projects',
      ctaGhost: 'Contact Me',
      stat1: 'PROJECTS SHIPPED',
      stat2: 'CORE TECHNOLOGIES',
      stat3: '% REMOTE READY',
      available: 'Available for work',
    },
    about: {
      eyebrow: 'About',
      leadPre: "I'm a front-end developer who believes ",
      leadStrong: 'great interfaces',
      leadPost: ' are built at the intersection of clean code and thoughtful design.',
      body:
        'I specialize in React and TypeScript, building responsive, performant products with an obsessive attention to detail — from animation timing to accessibility. I care about how software feels to use as much as how it works.',
      pillar1Title: 'Clean Code',
      pillar1Desc: 'Readable, maintainable architecture built to scale with your product.',
      pillar2Title: 'Performance',
      pillar2Desc: 'Lean bundles, optimized renders, and fast load times by default.',
      pillar3Title: 'Responsive Design',
      pillar3Desc: 'Pixel-considered layouts that adapt beautifully to every screen.',
      pillar4Title: 'User Experience',
      pillar4Desc: 'Interactions designed around how people actually behave.',
    },
    skills: {
      eyebrow: 'Skills',
      titlePre: 'My core',
      titleGradient: 'tech stack',
      subtitle: 'The tools I reach for to turn ideas into fast, reliable products.',
    },
    projects: {
      eyebrow: 'Projects',
      titlePre: 'Selected',
      titleGradient: 'work',
      subtitle: 'A few projects that show how I approach product, code and craft.',
      visitWebsite: 'Visit website',
    },
    services: {
      eyebrow: 'Services',
      titlePre: 'What I can',
      titleGradient: 'build for you',
      items: [
        { name: 'Landing Pages', description: 'High-converting pages designed to turn visitors into clients.' },
        { name: 'Responsive Websites', description: 'Sites that look and feel native on any device, every time.' },
        { name: 'Front-end Development', description: 'React/TypeScript builds from design files to production code.' },
        { name: 'UI Implementation', description: 'Faithful, pixel-considered translation of Figma into real UI.' },
        { name: 'Performance Optimization', description: 'Faster load times, leaner bundles, higher Lighthouse scores.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      titlePre: "Let's build something",
      titleGradient: 'great together',
      subtitle: "Have a project in mind? Tell me about it — I'd love to hear from you.",
      infoText:
        "Whether you need a new landing page, a full front-end build, or help optimizing an existing product — I'm happy to talk it through.",
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      sendIdle: 'Send via WhatsApp',
      sendSending: 'Opening WhatsApp...',
      successText: 'WhatsApp opened! Continue the conversation there.',
    },
    footer: {
      builtWith: 'Built with React & TypeScript.',
    },
  },
}