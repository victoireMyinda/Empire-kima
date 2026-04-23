export type Locale = 'fr' | 'en'
export type Theme = 'dark' | 'light'

export type NavItem = {
  id: string
  label: string
}

export type Service = {
  title: string
  items: string[]
}

export type Value = {
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export type Plan = {
  name: string
  details: string
}

export type Project = {
  title: string
  description: string
}

export type SectionImage = {
  src: string
  alt: string
  label: string
}

type SiteContent = {
  navItems: NavItem[]
  header: {
    cta: string
    menuLabel: string
    languageLabel: string
    themeLabel: string
    switchToLight: string
    switchToDark: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    intro: string
    primaryCta: string
    secondaryCta: string
    highlightsTitle: string
  }
  about: {
    eyebrow: string
    title: string
    cards: Array<{ title: string; description: string }>
    processTitle: string
  }
  values: Value[]
  servicesSection: {
    eyebrow: string
    title: string
  }
  services: Service[]
  maintenanceSection: {
    eyebrow: string
    title: string
    description: string
  }
  maintenancePlans: Plan[]
  realisationsSection: {
    eyebrow: string
    title: string
    projectBadge: string
  }
  projects: Project[]
  testimonials: Testimonial[]
  contact: {
    eyebrow: string
    title: string
    lead: string
    details: string[]
    formAriaLabel: string
    fields: {
      name: string
      email: string
      phone: string
      message: string
      submit: string
    }
    mailSubject: string
  }
  cta: {
    eyebrow: string
    title: string
    description: string
    button: string
  }
  footer: {
    rights: string
    backToTop: string
  }
  processSteps: string[]
  sectionImages: Record<string, SectionImage>
  whatsapp: {
    ariaLabel: string
    message: string
  }
}

const sharedSectionImages = {
  accueil: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
  },
  apropos: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
  },
  services: {
    src: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1400&q=80',
  },
  maintenance: {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80',
  },
  realisations: {
    src: 'https://images.unsplash.com/photo-1563770660941-10a6360764a5?auto=format&fit=crop&w=1400&q=80',
  },
  contact: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  },
}

export const siteContent: Record<Locale, SiteContent> = {
  fr: {
    navItems: [
      { id: 'accueil', label: 'Accueil' },
      { id: 'apropos', label: 'A propos' },
      { id: 'services', label: 'Services' },
      { id: 'maintenance', label: 'Maintenance' },
      { id: 'realisations', label: 'Realisations' },
      { id: 'contact', label: 'Contact' },
    ],
    header: {
      cta: 'Demander un devis',
      menuLabel: 'Menu',
      languageLabel: 'Langue',
      themeLabel: 'Theme',
      switchToLight: 'Theme clair',
      switchToDark: 'Theme sombre',
    },
    hero: {
      eyebrow: 'EMPIRE KIMA - Solutions technologiques integrees',
      title:
        'Solutions technologiques integrees pour la securite, les reseaux et l energie',
      lead:
        'EMPIRE KIMA concoit et deploie des infrastructures fiables et performantes pour les entreprises et particuliers exigeants.',
      intro:
        'Nous intervenons dans la conception, l installation et la maintenance de solutions completes en securite electronique, reseaux informatiques, systemes energetiques et infrastructures techniques.',
      primaryCta: 'Contactez nos experts',
      secondaryCta: 'Explorer nos services',
      highlightsTitle: 'Pourquoi choisir EMPIRE KIMA',
    },
    about: {
      eyebrow: 'A propos',
      title: 'Un partenaire strategique pour vos infrastructures critiques',
      cards: [
        {
          title: 'Qui sommes-nous ?',
          description:
            'Basee a Kinshasa, EMPIRE KIMA est specialisee dans la conception, l integration et la maintenance de solutions technologiques avancees adaptees aux realites locales et aux standards internationaux.',
        },
        {
          title: 'Notre mission',
          description:
            'Fournir des solutions performantes, durables et securisees afin de proteger vos biens, optimiser vos systemes IT et renforcer la continuite de vos activites.',
        },
        {
          title: 'Notre vision',
          description:
            'Devenir une reference en RDC et en Afrique dans les solutions technologiques integrees et la modernisation des infrastructures.',
        },
      ],
      processTitle: 'Notre approche methodologique',
    },
    values: [
      {
        title: 'Innovation',
        description:
          'Nous integrons les technologies les plus recentes pour livrer des infrastructures modernes et performantes.',
      },
      {
        title: 'Qualite',
        description:
          'Nos installations sont durables, fiables et alignees avec les standards professionnels.',
      },
      {
        title: 'Integrite',
        description:
          'Nous operons avec transparence, ethique et professionnalisme dans chaque relation client.',
      },
      {
        title: 'Engagement client',
        description:
          'Nous construisons des solutions sur mesure alignees sur vos contraintes metier reelles.',
      },
      {
        title: 'Excellence operationnelle',
        description:
          'Notre execution est rigoureuse, du diagnostic initial a la maintenance continue.',
      },
    ],
    servicesSection: {
      eyebrow: 'Services',
      title: 'Une expertise multidisciplinaire orientee performance',
    },
    services: [
      {
        title: 'Securite electronique',
        items: [
          'Installation CCTV',
          'Cameras IP et analogiques',
          "Controle d'acces",
          "Systemes d'alarme",
          'Detection incendie',
        ],
      },
      {
        title: 'Reseaux informatiques',
        items: [
          'Installation LAN/WAN',
          'Wi-Fi professionnel',
          'Configuration MikroTik',
          'Gestion multi-sites',
          'Securisation reseau',
        ],
      },
      {
        title: 'Energie et solaire',
        items: [
          'Systemes solaires',
          'Onduleurs et batteries',
          'Solutions de secours energetique',
          'Optimisation energetique',
          'Support continu',
        ],
      },
      {
        title: 'Infrastructure et batiment',
        items: [
          'Cablage structure',
          'Installation electrique',
          'Baies de brassage',
          'Infrastructure IT',
          'Mise en conformite technique',
        ],
      },
      {
        title: 'Solutions avancees',
        items: [
          'VPN securise',
          'Supervision reseau',
          'Audit et optimisation',
          'Architecture evolutive',
          'Support multi-sites',
        ],
      },
      {
        title: 'Formation technique',
        items: [
          'Formation CCTV',
          'Formation reseaux',
          'Accompagnement des equipes',
          'Transfert de competences',
          'Coaching terrain',
        ],
      },
    ],
    maintenanceSection: {
      eyebrow: 'Maintenance professionnelle',
      title: 'Continuite garantie pour vos systemes critiques',
      description:
        'Nous assurons maintenance preventive, maintenance corrective, assistance a distance et intervention terrain rapide.',
    },
    maintenancePlans: [
      {
        name: 'Basic',
        details: 'Maintenance preventive planifiee et support standard.',
      },
      {
        name: 'Standard',
        details: 'Preventif + correctif prioritaire avec assistance a distance.',
      },
      {
        name: 'Premium',
        details: 'Accompagnement continu, supervision avancee et intervention rapide.',
      },
    ],
    realisationsSection: {
      eyebrow: 'Realisations',
      title: 'Projets menes avec exigence et impact concret',
      projectBadge: 'Projet livre',
    },
    projects: [
      {
        title: 'Installation CCTV villa',
        description:
          'Conception et deploiement d une couverture de surveillance complete avec controle d acces.',
      },
      {
        title: 'Reseau entreprise',
        description:
          'Architecture LAN/Wi-Fi securisee pour collaborateurs multi-services et serveurs critiques.',
      },
      {
        title: 'Projet Wi-Fi',
        description:
          'Optimisation de couverture et stabilite pour un site a forte densite de connexions.',
      },
      {
        title: 'Systeme solaire',
        description:
          'Mise en place d une solution hybride pour continuite energetique et reduction des couts.',
      },
    ],
    testimonials: [
      {
        quote:
          'Le systeme CCTV installe par EMPIRE KIMA a eleve notre niveau de controle et de serenite.',
        author: 'Direction Operations',
        role: 'Entreprise multisites, Kinshasa',
      },
      {
        quote:
          'La refonte de notre reseau a reduit les interruptions et accelere les operations internes.',
        author: 'Responsable IT',
        role: 'Institution privee',
      },
      {
        quote:
          'Equipe reactive, execution propre et accompagnement solide apres mise en service.',
        author: 'Gestionnaire infrastructure',
        role: 'Complexe residentiel',
      },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Demandez un devis personnalise des aujourd hui',
      lead: 'EMPIRE KIMA - L expertise au service de votre securite et performance.',
      details: [
        'Adresse : Kinshasa, RDC',
        'Telephone : +243 974 340 647',
        'Telephone : +243 817 271 384',
        'Telephone : +243 907 253 538',
        'Email : empirekima5@gmail.com',
      ],
      formAriaLabel: 'Formulaire de contact',
      fields: {
        name: 'Nom',
        email: 'Email',
        phone: 'Telephone',
        message: 'Message',
        submit: 'Envoyer ma demande',
      },
      mailSubject: 'Demande de devis - EMPIRE KIMA',
    },
    cta: {
      eyebrow: 'Prendre rendez-vous',
      title: 'Transformons vos besoins techniques en systemes fiables et evolutifs',
      description:
        'Planifiez un echange avec nos experts pour definir une solution adaptee a vos enjeux de securite, reseau et energie.',
      button: 'Lancer mon projet',
    },
    footer: {
      rights: 'Tous droits reserves.',
      backToTop: 'Retour en haut',
    },
    processSteps: [
      'Analyse des besoins',
      'Etude technique',
      'Proposition de solution adaptee',
      'Installation et configuration',
      'Tests et validation',
      'Suivi et maintenance',
    ],
    sectionImages: {
      accueil: {
        ...sharedSectionImages.accueil,
        alt: 'Salle technologique moderne avec serveurs et eclairage premium',
        label: 'Infrastructures technologiques integrees',
      },
      apropos: {
        ...sharedSectionImages.apropos,
        alt: 'Equipe technique en reunion strategique autour de plans de projet',
        label: 'Approche orientee resultat',
      },
      services: {
        ...sharedSectionImages.services,
        alt: 'Ingenieur configurant des systemes reseau et securite',
        label: 'Expertise multiservice',
      },
      maintenance: {
        ...sharedSectionImages.maintenance,
        alt: 'Technicien en maintenance sur equipements critiques',
        label: 'Maintenance proactive',
      },
      realisations: {
        ...sharedSectionImages.realisations,
        alt: 'Installation professionnelle de camera de surveillance',
        label: 'Projets deployes avec exigence',
      },
      contact: {
        ...sharedSectionImages.contact,
        alt: 'Batiments professionnels modernes symbolisant la fiabilite',
        label: 'Partenariat long terme',
      },
    },
    whatsapp: {
      ariaLabel: 'Contacter le proprietaire sur WhatsApp',
      message:
        'Bonjour, je souhaite obtenir plus d informations sur vos services EMPIRE KIMA.',
    },
  },
  en: {
    navItems: [
      { id: 'accueil', label: 'Home' },
      { id: 'apropos', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'maintenance', label: 'Maintenance' },
      { id: 'realisations', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    header: {
      cta: 'Request a quote',
      menuLabel: 'Menu',
      languageLabel: 'Language',
      themeLabel: 'Theme',
      switchToLight: 'Light theme',
      switchToDark: 'Dark theme',
    },
    hero: {
      eyebrow: 'EMPIRE KIMA - Integrated technology solutions',
      title:
        'Integrated technology solutions for security, networks, and energy',
      lead:
        'EMPIRE KIMA designs and deploys reliable, high-performance infrastructure for demanding businesses and individuals.',
      intro:
        'We handle design, installation, and maintenance of complete solutions across electronic security, computer networks, energy systems, and technical infrastructure.',
      primaryCta: 'Contact our experts',
      secondaryCta: 'Explore our services',
      highlightsTitle: 'Why choose EMPIRE KIMA',
    },
    about: {
      eyebrow: 'About',
      title: 'A strategic partner for your critical infrastructure',
      cards: [
        {
          title: 'Who we are',
          description:
            'Based in Kinshasa, EMPIRE KIMA specializes in design, integration, and maintenance of advanced technology solutions aligned with local realities and international standards.',
        },
        {
          title: 'Our mission',
          description:
            'Deliver secure, durable, and high-performance solutions to protect assets, optimize IT systems, and strengthen business continuity.',
        },
        {
          title: 'Our vision',
          description:
            'Become a leading reference in DRC and Africa for integrated technology solutions and infrastructure modernization.',
        },
      ],
      processTitle: 'Our delivery methodology',
    },
    values: [
      {
        title: 'Innovation',
        description:
          'We leverage the latest technologies to deliver modern and efficient infrastructure.',
      },
      {
        title: 'Quality',
        description:
          'Our installations are durable, reliable, and aligned with professional standards.',
      },
      {
        title: 'Integrity',
        description:
          'We operate with transparency, ethics, and professionalism in every client relationship.',
      },
      {
        title: 'Client commitment',
        description:
          'We build tailored solutions aligned with your real operational constraints.',
      },
      {
        title: 'Operational excellence',
        description:
          'Our execution is rigorous, from initial diagnosis to continuous maintenance.',
      },
    ],
    servicesSection: {
      eyebrow: 'Services',
      title: 'Multidisciplinary expertise focused on performance',
    },
    services: [
      {
        title: 'Electronic security',
        items: [
          'CCTV installation',
          'IP and analog cameras',
          'Access control',
          'Alarm systems',
          'Fire detection',
        ],
      },
      {
        title: 'IT networks',
        items: [
          'LAN/WAN setup',
          'Professional Wi-Fi',
          'MikroTik configuration',
          'Multi-site management',
          'Network hardening',
        ],
      },
      {
        title: 'Energy and solar',
        items: [
          'Solar system installation',
          'Inverters and batteries',
          'Backup energy solutions',
          'Energy optimization',
          'Ongoing support',
        ],
      },
      {
        title: 'Infrastructure and buildings',
        items: [
          'Structured cabling',
          'Electrical installation',
          'Patch panels',
          'IT infrastructure',
          'Technical compliance',
        ],
      },
      {
        title: 'Advanced solutions',
        items: [
          'Secure VPN',
          'Network supervision',
          'Audit and optimization',
          'Scalable architecture',
          'Multi-site support',
        ],
      },
      {
        title: 'Technical training',
        items: [
          'CCTV training',
          'Network training',
          'Team enablement',
          'Knowledge transfer',
          'On-site coaching',
        ],
      },
    ],
    maintenanceSection: {
      eyebrow: 'Professional maintenance',
      title: 'Guaranteed continuity for your critical systems',
      description:
        'We provide preventive maintenance, corrective maintenance, remote assistance, and fast on-site intervention.',
    },
    maintenancePlans: [
      {
        name: 'Basic',
        details: 'Scheduled preventive maintenance and standard support.',
      },
      {
        name: 'Standard',
        details: 'Preventive + priority corrective support with remote assistance.',
      },
      {
        name: 'Premium',
        details: 'Continuous support, advanced monitoring, and rapid intervention.',
      },
    ],
    realisationsSection: {
      eyebrow: 'Projects',
      title: 'Deliveries executed with precision and measurable impact',
      projectBadge: 'Delivered',
    },
    projects: [
      {
        title: 'Villa CCTV deployment',
        description:
          'Design and full rollout of surveillance coverage with access control integration.',
      },
      {
        title: 'Enterprise network',
        description:
          'Secure LAN/Wi-Fi architecture for multi-department teams and critical servers.',
      },
      {
        title: 'Wi-Fi modernization',
        description:
          'Coverage and stability optimization for high-density connection environments.',
      },
      {
        title: 'Solar backup system',
        description:
          'Hybrid power solution for business continuity and lower operating costs.',
      },
    ],
    testimonials: [
      {
        quote:
          'The CCTV system deployed by EMPIRE KIMA significantly improved control and peace of mind.',
        author: 'Operations Director',
        role: 'Multi-site company, Kinshasa',
      },
      {
        quote:
          'Their network redesign reduced service interruptions and improved internal productivity.',
        author: 'IT Manager',
        role: 'Private institution',
      },
      {
        quote:
          'Highly responsive team, clean execution, and strong support after go-live.',
        author: 'Infrastructure Manager',
        role: 'Residential complex',
      },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Request a personalized quote today',
      lead: 'EMPIRE KIMA - Expertise serving your security and performance.',
      details: [
        'Address: Kinshasa, DRC',
        'Phone: +243 974 340 647',
        'Phone: +243 817 271 384',
        'Phone: +243 907 253 538',
        'Email: empirekima5@gmail.com',
      ],
      formAriaLabel: 'Contact form',
      fields: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Send my request',
      },
      mailSubject: 'Quote request - EMPIRE KIMA',
    },
    cta: {
      eyebrow: 'Book a consultation',
      title: 'Let us turn your technical needs into reliable scalable systems',
      description:
        'Schedule a discussion with our experts to define the right solution for your security, network, and energy priorities.',
      button: 'Start my project',
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
    processSteps: [
      'Needs analysis',
      'Technical assessment',
      'Tailored solution proposal',
      'Installation and configuration',
      'Testing and validation',
      'Follow-up and maintenance',
    ],
    sectionImages: {
      accueil: {
        ...sharedSectionImages.accueil,
        alt: 'Modern technology room with servers and premium lighting',
        label: 'Integrated technology infrastructure',
      },
      apropos: {
        ...sharedSectionImages.apropos,
        alt: 'Technical team meeting around infrastructure plans',
        label: 'Result-driven delivery approach',
      },
      services: {
        ...sharedSectionImages.services,
        alt: 'Engineer configuring network and security systems',
        label: 'Multi-domain expertise',
      },
      maintenance: {
        ...sharedSectionImages.maintenance,
        alt: 'Technician performing maintenance on critical equipment',
        label: 'Proactive maintenance',
      },
      realisations: {
        ...sharedSectionImages.realisations,
        alt: 'Professional CCTV setup in a modern environment',
        label: 'Projects delivered with precision',
      },
      contact: {
        ...sharedSectionImages.contact,
        alt: 'Modern commercial buildings symbolizing reliability',
        label: 'Long-term partnership',
      },
    },
    whatsapp: {
      ariaLabel: 'Contact the owner on WhatsApp',
      message: 'Hello, I would like more information about EMPIRE KIMA services.',
    },
  },
}
