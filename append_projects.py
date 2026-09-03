import re

with open('src/data/projects.ts', 'r') as f:
    content = f.read()

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
        problem: 'The client needed a highly premium, accessible, and fast-loading e-commerce storefront that reflected the luxury nature of their apparel, with deep support for mobile users and night-mode.',
        approach: 'Designed a completely custom, lightweight frontend architecture without relying on heavy frontend frameworks, ensuring near-instant load times. Implemented a custom cart system, deep mobile navigation, and a global dark/light mode context.'
      },
      system: `
        graph TD
          A[Client/Browser] --> B[Custom HTML/CSS Engine]
          B --> C[Vanilla JS Core]
          C --> D[Theme Management]
          C --> E[Cart State]
          C --> F[Mobile Overlay]
      `,
      engineering: {
        title: 'Lightweight E-commerce Architecture',
        snippet: `// Smart Music/State Player Logic implemented
function initAudio() {
    audioReady = true;
    if (isFreshVisit) {
        audio.currentTime = 0;
        sessionStorage.removeItem('store_session_time');
    }
}`
      }
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
        problem: 'Global Peace Overseas required a modern, trustworthy digital presence that could effectively capture leads while providing students with comprehensive study-abroad information.',
        approach: 'Built a highly responsive portal featuring advanced CSS grid layouts, floating action buttons for instant communication (WhatsApp/Socials), and a session-aware background media player.'
      },
      system: `
        graph TD
          A[User Interface] --> B[Media Session Manager]
          A --> C[Lead Capture Forms]
          A --> D[Interactive Maps/Locations]
      `,
      engineering: {
        title: 'Session-Aware Media Engine',
        snippet: `// Smart audio player that respects tab visibility
document.addEventListener('visibilitychange', () => {
    const isVisible = !document.hidden;
    if (isVisible) {
        if (isPageVisible) resumeMusic();
    } else {
        pauseMusic(true);
    }
});`
      }
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
        problem: 'AR Medias needed a website that served as a technical flex—demonstrating their capability in 3D web design, AI, and modern UI/UX to prospective enterprise clients.',
        approach: 'Implemented a custom "Claymorphism" design system from scratch using advanced CSS variables and shadows. Integrated Three.js for interactive backgrounds and engineered a sprawling, dynamic service architecture.'
      },
      system: `
        graph TD
          A[Claymorphism UI Engine] --> B[Three.js Canvas]
          A --> C[Custom Cursor System]
          A --> D[Dynamic Routing/Nav]
      `,
      engineering: {
        title: 'Claymorphic Design System',
        snippet: `:root {
    --clay-base: #ffffff;
    --clay-shadow: rgba(15, 23, 42, 0.08);
    --clay-inset-light: rgba(255, 255, 255, 1);
    --clay-inset-dark: rgba(15, 23, 42, 0.05);
}
.clay-panel {
    box-shadow: 10px 10px 20px var(--clay-shadow),
                inset 2px 2px 4px var(--clay-inset-light),
                inset -2px -2px 4px var(--clay-inset-dark);
}`
      }
    }
  }
];
"""

# Replace the end of the array
content = re.sub(r'  \}\n\];?$', new_projects, content)

with open('src/data/projects.ts', 'w') as f:
    f.write(content)
print("Updated projects.ts")
