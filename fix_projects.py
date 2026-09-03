import re

with open('src/data/projects.ts', 'r') as f:
    content = f.read()

# I will find the position of "  }," for id '3' and slice the string.
# Or better, just rewrite the end of the file from id '4'.
match = re.search(r'id:\s*\'4\'', content)
if match:
    content = content[:match.start() - 6] # Cut off before }, { id: '4'

new_projects = """
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
"""

with open('src/data/projects.ts', 'w') as f:
    f.write(content + new_projects)
