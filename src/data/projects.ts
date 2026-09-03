import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'leadflow-ai',
    projectNumber: '01',
    client: 'Internal Build',
    industry: 'Sales Automation',
    title: 'LeadFlow AI',
    subtitle: 'Cold Email Outreach System',
    shortDescription: 'CSV/Google Sheets ingestion with automated company website scraping, reducing manual research time per lead by ~70%.',
    year: '2026',
    role: 'Full-Stack Developer / AI Engineer',
    services: ['LLM Integration', 'Automation Workflow', 'Data Scraping'],
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'Gmail API', 'SQLAlchemy', 'JavaScript'],
    thumbnail: '/placeholder.jpg',
    heroImage: '/placeholder.jpg',
    confidential: false,
    featured: true,
    category: 'build',
    caseStudy: {
      overview: {
        client: 'Internal Product',
        industry: 'B2B Sales',
        timeline: '2026',
        role: 'Sole Developer',
        team: '1',
        services: ['Backend Engineering', 'AI Orchestration']
      },
      problem: {
        title: 'Manual Lead Research bottleneck',
        description: 'Sales outreach required extensive manual research on target companies before writing personalized emails, limiting outreach volume and response rates.',
        points: ['High manual research time per lead.', 'Generic emails resulted in low conversion.', 'Following up manually was error-prone and time-consuming.']
      },
      approach: {
        title: 'Automated scraping & LLM Personalization',
        description: 'Built a pipeline that ingests leads, scrapes their company websites, and feeds context to an LLM to generate hyper-personalized email drafts and automated follow-ups.',
        points: ['Automate data gathering via scraping.', 'Utilize OpenAI API for contextual email drafting.', 'Integrate Gmail OAuth2 for sending and reply tracking.']
      },
      system: {
        diagramTitle: 'Outreach Pipeline Architecture',
        diagramDescription: 'Data flows from Google Sheets into the FastAPI backend, triggering web scrapers. The scraped data is sent to OpenAI to generate personalized emails, which are then dispatched via the Gmail API.',
        diagramImage: '/placeholder.jpg',
        diagramType: 'data-flow'
      },
      engineering: [
        {
          title: 'Lead Enrichment Pipeline',
          description: 'Engineered a system to parse CSVs and Google Sheets, automatically routing domains to a web scraper to extract business context.',
          details: ['Automated target website scraping.', 'Reduced manual research time by ~70%.']
        },
        {
          title: 'Email Automation & Classification',
          description: 'Integrated Gmail OAuth2 and OpenAI to handle end-to-end follow-up sequences and classify incoming replies.',
          details: ['Hyper-personalized email generation.', 'Automated follow-up scheduling.', 'Reply classification to pause sequences.']
        }
      ],
      technologyCategories: [
        {
          name: 'Backend & APIs',
          technologies: ['Python', 'FastAPI', 'Gmail API', 'SQLAlchemy']
        },
        {
          name: 'AI & Scraping',
          technologies: ['OpenAI API', 'Web Scraping']
        }
      ],
      results: {
        quantitative: [
          {
            value: '70%',
            label: 'Time Saved',
            description: 'Reduction in manual lead research time per prospect.'
          },
          {
            value: '80%',
            label: 'Effort Cut',
            description: 'Reduction in manual effort via automated follow-ups and reply classification.'
          }
        ],
        qualitative: [
          {
            title: 'Scalable Outreach',
            description: 'Enabled high-volume, highly personalized cold email campaigns without linear increases in manual labor.'
          }
        ]
      },
      visuals: [
        {
          type: 'image',
          src: '/placeholder.jpg',
          alt: '[LEADFLOW DASHBOARD PLACEHOLDER]'
        }
      ]
    }
  },
  {
    id: '2',
    slug: 'bharat-law',
    projectNumber: '02',
    client: 'Internal Build',
    industry: 'Legal Tech',
    title: 'Bharat.Law',
    subtitle: 'Legal Data Pipeline',
    shortDescription: 'Depth-limited BFS crawler with robots.txt compliance and exponential backoff, processing 1,000+ legal documents per run.',
    year: '2026',
    role: 'Data Engineer / AI Engineer',
    services: ['Data Engineering', 'Web Crawling', 'NLP Processing'],
    technologies: ['Python', 'spaCy', 'NER', 'Semantic Chunking', 'Docker'],
    thumbnail: '/placeholder.jpg',
    heroImage: '/placeholder.jpg',
    confidential: false,
    featured: true,
    category: 'build',
    caseStudy: {
      overview: {
        client: 'Internal Build',
        industry: 'Legal',
        timeline: '2026',
        role: 'Sole Developer',
        team: '1',
        services: ['Data Pipeline', 'NER Extraction', 'Dockerization']
      },
      problem: {
        title: 'Unstructured Legal Data',
        description: 'Legal documents are often unstructured, scattered, and difficult for LLMs to ingest directly without losing semantic context or missing critical entities.',
        points: ['Scattered data sources requiring reliable crawling.', 'Complex PDF and HTML document formats.', 'Need for semantic preservation for RAG pipelines.']
      },
      approach: {
        title: 'Robust Crawling & Semantic Chunking',
        description: 'Developed a Dockerized pipeline that crawls legal repositories, normalizes documents, and chunks them semantically while extracting key entities.',
        points: ['Implement depth-limited BFS crawler.', 'Normalize HTML and PDFs.', 'Apply spaCy for Named Entity Recognition (NER).']
      },
      system: {
        diagramTitle: 'Legal Data Ingestion Workflow',
        diagramDescription: 'The crawler fetches documents and passes them to the processing module where they are normalized, chunked, and tagged with NER before being stored.',
        diagramImage: '/placeholder.jpg',
        diagramType: 'pipeline'
      },
      engineering: [
        {
          title: 'Resilient Web Crawler',
          description: 'Built a depth-limited BFS crawler handling over 1,000+ documents per run.',
          details: ['Strict robots.txt compliance.', 'Exponential backoff to prevent rate-limiting.', 'High-throughput document retrieval.']
        },
        {
          title: 'NLP & Semantic Chunking',
          description: 'Implemented a hybrid approach to parse and structure the raw legal text.',
          details: ['HTML/PDF normalization.', 'Semantic chunking optimized for LLM consumption.', 'Hybrid regex + spaCy NER extraction.']
        }
      ],
      technologyCategories: [
        {
          name: 'Data Extraction',
          technologies: ['Python', 'Web Crawling', 'Docker']
        },
        {
          name: 'NLP',
          technologies: ['spaCy', 'NER', 'Semantic Chunking']
        }
      ],
      results: {
        quantitative: [
          {
            value: '1,000+',
            label: 'Documents/Run',
            description: 'Processed consistently per crawler execution.'
          }
        ],
        qualitative: [
          {
            title: 'LLM-Ready Data',
            description: 'Successfully transformed raw, unstructured legal files into high-quality, semantically chunked datasets for RAG integration.'
          }
        ]
      },
      visuals: [
        {
          type: 'image',
          src: '/placeholder.jpg',
          alt: '[BHARAT.LAW PIPELINE PLACEHOLDER]'
        }
      ]
    }
  },
  {
    id: '3',
    slug: 'armedias-telegram-hub',
    projectNumber: '03',
    client: 'Armedias AI',
    industry: 'Media/Communications',
    title: 'Telegram Automation Hub',
    subtitle: 'High-Throughput Messaging Platform',
    shortDescription: 'Production Telegram automation on Flask + SocketIO supporting multiple concurrent accounts via per-account MTProto session loops.',
    year: '2026',
    role: 'Backend & Automation Engineer',
    services: ['Backend Architecture', 'Telegram MTProto', 'Real-time Dashboard'],
    technologies: ['Python', 'Flask', 'Pyrogram', 'MTProto', 'WebSockets', 'Docker'],
    thumbnail: '/placeholder.jpg',
    heroImage: '/placeholder.jpg',
    confidential: false,
    featured: true,
    category: 'client',
    caseStudy: {
      overview: {
        client: 'Armedias AI',
        industry: 'Communications',
        timeline: '2026',
        role: 'Automation Engineer',
        team: '1',
        services: ['Platform Development', 'Anti-flood Engineering']
      },
      problem: {
        title: 'Managing Concurrent Telegram Accounts',
        description: 'The client needed a reliable way to automate interactions across multiple Telegram accounts concurrently without triggering anti-spam bans or dropping websocket connections.',
        points: ['Handling multiple MTProto sessions.', 'Strict Telegram rate limits and flood wait errors.', 'Need for real-time visibility into session health.']
      },
      approach: {
        title: 'Asynchronous Session Loops & WebSockets',
        description: 'Engineered a Flask + SocketIO backend that isolates each Telegram account in its own MTProto session loop, protected by intelligent backoff algorithms.',
        points: ['Implement Pyrogram for MTProto interactions.', 'Build anti-flood protections.', 'Develop a real-time Vanilla JS monitoring dashboard.']
      },
      system: {
        diagramTitle: 'Multi-Account Session Architecture',
        diagramDescription: 'Flask handles incoming API requests and routes them to isolated Pyrogram session loops. WebSockets stream real-time status to the monitoring dashboard.',
        diagramImage: '/placeholder.jpg',
        diagramType: 'architecture'
      },
      engineering: [
        {
          title: 'Concurrent MTProto Sessions',
          description: 'Architected a system to support multiple active Telegram clients simultaneously.',
          details: ['Per-account MTProto session loops.', 'Flask + SocketIO backend integration.', 'Dockerized deployment for scalability.']
        },
        {
          title: 'Reliability & Dashboarding',
          description: 'Implemented robust error handling to prevent bans and monitor uptime.',
          details: ['Anti-flood protection with exponential backoff.', 'Real-time WebSocket monitoring.', 'Zero dropped sessions achieved.']
        }
      ],
      technologyCategories: [
        {
          name: 'Backend',
          technologies: ['Python', 'Flask', 'Docker']
        },
        {
          name: 'Real-time & APIs',
          technologies: ['Pyrogram (MTProto)', 'WebSockets', 'Vanilla JS']
        }
      ],
      results: {
        quantitative: [
          {
            value: '0',
            label: 'Dropped Sessions',
            description: 'Achieved complete stability across concurrent connections.'
          }
        ],
        qualitative: [
          {
            title: 'Production Reliability',
            description: 'Delivered a highly resilient automation hub capable of scaling across multiple accounts without risking platform bans.'
          }
        ]
      },
      visuals: [
        {
          type: 'image',
          src: '/placeholder.jpg',
          alt: '[ARMEDIAS DASHBOARD PLACEHOLDER]'
        }
      ]
    }

  },
  {
    id: '4',
    slug: 'dubai-burqa-collections',
    projectNumber: '04',
    client: 'Dubai Burqa Collections',
    industry: 'E-commerce',
    title: 'Dubai Burqa Collections',
    subtitle: 'Premium E-commerce Storefront',
    shortDescription: 'Architected and built a complete custom e-commerce storefront for a premium apparel brand with robust navigation, shopping cart, and theme toggling.',
    year: '2025',
    role: 'Full-Stack Developer / Solo Architect',
    services: ['Web Design', 'Frontend Development', 'E-commerce Architecture'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    links: {
      live: 'https://dubaiburqacollections.in'
    },
    thumbnail: '/placeholder.jpg',
    heroImage: '/placeholder.jpg',
    confidential: false,
    featured: true,
    category: 'client',
    caseStudy: {
      overview: {
        client: 'Dubai Burqa Collections',
        industry: 'E-commerce',
        timeline: '2025',
        role: 'Solo Developer',
        team: '1',
        services: ['Frontend', 'E-commerce', 'UI/UX']
      },
      problem: {
        title: 'Premium Brand Positioning',
        description: 'The client needed a highly premium, accessible, and fast-loading e-commerce storefront that reflected the luxury nature of their apparel, with deep support for mobile users and night-mode.',
        points: ['Heavy dependency on fast load times.', 'Needed a deep, fully custom mobile navigation.', 'Required an elegant night mode.']
      },
      approach: {
        title: 'Custom Lightweight Architecture',
        description: 'Designed a completely custom, lightweight frontend architecture without relying on heavy frontend frameworks, ensuring near-instant load times.',
        points: ['Implemented a custom cart state management system.', 'Engineered a highly responsive mobile overlay.', 'Added a global dark/light mode context using pure CSS.']
      },
      system: {
        diagramTitle: 'Frontend State Architecture',
        diagramDescription: 'Browser manages the custom engine and routes requests to the cart state and theme manager.',
        diagramImage: '/placeholder.jpg',
        diagramType: 'architecture'
      },
      engineering: [
        {
          title: 'Lightweight E-commerce Architecture',
          description: 'Custom state management handled via Vanilla JavaScript and local storage without bulky libraries.',
          details: ['Local storage cart hydration.', 'Seamless dark mode transition.', 'Accessible custom dropdowns.']
        }
      ],
      technologyCategories: [
        {
          name: 'Frontend Core',
          technologies: ['HTML5', 'CSS3', 'Vanilla JS']
        },
        {
          name: 'Features',
          technologies: ['Local Storage API', 'CSS Variables']
        }
      ],
      results: {
        quantitative: [
          {
            value: '100%',
            label: 'Lighthouse Score',
            description: 'Achieved perfect performance metrics due to zero-dependency approach.'
          }
        ],
        qualitative: [
          {
            title: 'Premium User Experience',
            description: 'Delivered an elegant, fluid browsing experience that elevated the brand.'
          }
        ]
      },
      visuals: []
    }
  },
  {
    id: '5',
    slug: 'global-peace-overseas',
    projectNumber: '05',
    client: 'Global Peace Overseas',
    industry: 'Consulting',
    title: 'Global Peace Overseas',
    subtitle: 'Consulting Agency Portal',
    shortDescription: 'Developed a high-conversion consulting agency portal with complex UI elements, robust form handling, and integrated media players.',
    year: '2025',
    role: 'Full-Stack Developer / Solo Architect',
    services: ['Web Design', 'UI/UX Engineering', 'Conversion Optimization'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Media APIs'],
    links: {
      live: 'https://globalpeaceoverseas.com'
    },
    thumbnail: '/placeholder.jpg',
    heroImage: '/placeholder.jpg',
    confidential: false,
    featured: true,
    category: 'client',
    caseStudy: {
      overview: {
        client: 'Global Peace Overseas',
        industry: 'Education & Consulting',
        timeline: '2025',
        role: 'Solo Architect',
        team: '1',
        services: ['Web Portal', 'Lead Generation']
      },
      problem: {
        title: 'Lead Capture & Engagement',
        description: 'The agency required a modern, trustworthy digital presence that could effectively capture leads while providing students with comprehensive study-abroad information.',
        points: ['Needed higher conversion rates on lead forms.', 'Required multi-channel communication (WhatsApp/Socials).', 'Needed an engaging, immersive background media experience.']
      },
      approach: {
        title: 'High-Conversion Architecture',
        description: 'Built a highly responsive portal featuring advanced CSS grid layouts, floating action buttons for instant communication, and a session-aware background media player.',
        points: ['Session-aware audio engine that persists across navigation.', 'Floating action buttons for instant WhatsApp chat.', 'Custom cursor and interactive hover states.']
      },
      system: {
        diagramTitle: 'Media & Conversion Pipeline',
        diagramDescription: 'User interface captures leads and manages background media states utilizing SessionStorage APIs.',
        diagramImage: '/placeholder.jpg',
        diagramType: 'workflow'
      },
      engineering: [
        {
          title: 'Session-Aware Media Engine',
          description: 'Developed a custom background music player that tracks tab visibility and saves playback state to SessionStorage so music doesnt restart on page navigation.',
          details: ['Page Visibility API integration.', 'SessionStorage state hydration.', 'Anti-autoplay block engineering.']
        }
      ],
      technologyCategories: [
        {
          name: 'Core',
          technologies: ['JavaScript', 'HTML5', 'CSS3']
        },
        {
          name: 'APIs',
          technologies: ['Page Visibility API', 'Web Storage API']
        }
      ],
      results: {
        quantitative: [
          {
            value: '3x',
            label: 'Engagement',
            description: 'Increased time on site via immersive audio and interactive UI.'
          }
        ],
        qualitative: [
          {
            title: 'Lead Generation',
            description: 'Significantly improved the agency lead funnel with accessible floating CTAs.'
          }
        ]
      },
      visuals: []
    }
  },
  {
    id: '6',
    slug: 'armedias',
    projectNumber: '06',
    client: 'AR Medias',
    industry: 'Tech Solutions',
    title: 'AR Medias Agency',
    subtitle: 'Claymorphic Creative Agency Site',
    shortDescription: 'Designed and engineered a high-end creative agency portfolio using advanced Claymorphism CSS, Three.js backgrounds, and custom cursor logic.',
    year: '2025',
    role: 'Full-Stack Developer / Solo Architect',
    services: ['Creative Development', 'Web Design', 'Frontend Engineering'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Three.js'],
    links: {
      live: 'https://armedias.com'
    },
    thumbnail: '/placeholder.jpg',
    heroImage: '/placeholder.jpg',
    confidential: false,
    featured: true,
    category: 'client',
    caseStudy: {
      overview: {
        client: 'AR Medias',
        industry: 'Creative Agency',
        timeline: '2025',
        role: 'Solo Developer',
        team: '1',
        services: ['3D Web Design', 'Frontend Development']
      },
      problem: {
        title: 'Technical Agency Showcase',
        description: 'AR Medias needed a website that served as a technical flex—demonstrating their capability in 3D web design, AI, and modern UI/UX to prospective enterprise clients.',
        points: ['Must stand out from generic agency templates.', 'Needs to showcase complex 3D integration.', 'Requires flawless performance despite heavy graphics.']
      },
      approach: {
        title: 'Claymorphism & WebGL',
        description: 'Implemented a custom "Claymorphism" design system from scratch using advanced CSS variables and shadows. Integrated Three.js for interactive backgrounds.',
        points: ['Built a complex CSS variable system for deep Neumorphic/Claymorphic shadows.', 'Integrated a WebGL Three.js background.', 'Implemented a custom image-tracking cursor.']
      },
      system: {
        diagramTitle: 'Creative Rendering Pipeline',
        diagramDescription: 'DOM elements float above a fixed WebGL Three.js canvas layer, creating depth without sacrificing semantic HTML accessibility.',
        diagramImage: '/placeholder.jpg',
        diagramType: 'architecture'
      },
      engineering: [
        {
          title: 'Advanced CSS Architecture',
          description: 'Engineered a highly complex variable-driven CSS system to generate realistic "Clay" textures using multiple inset shadows and layered box-shadows.',
          details: ['Multi-layered inset shadows.', 'Dynamic Day/Night theme toggling.', 'Performant CSS grid layouts.']
        }
      ],
      technologyCategories: [
        {
          name: 'Design System',
          technologies: ['CSS Variables', 'Claymorphism', 'Responsive Design']
        },
        {
          name: 'Graphics',
          technologies: ['Three.js', 'WebGL', 'Canvas API']
        }
      ],
      results: {
        quantitative: [
          {
            value: '15+',
            label: 'Services Displayed',
            description: 'Created a massive, structured taxonomy of agency services.'
          }
        ],
        qualitative: [
          {
            title: 'Immersive Portfolio',
            description: 'Established AR Medias as a highly technical, forward-thinking agency capable of building beyond templates.'
          }
        ]
      },
      visuals: []
    }
  }
];
