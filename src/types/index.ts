export interface Project {
  id: string;
  slug: string;
  projectNumber: string;
  client: string;
  industry: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  year: string;
  role: string;
  services: string[];
  technologies: string[];
  links?: { live?: string; github?: string; };
  thumbnail: string;
  heroImage: string;
  confidential: boolean;
  featured: boolean;
  category: 'client' | 'build';
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  overview: {
    client: string;
    industry: string;
    timeline: string;
    role: string;
    team: string;
    services: string[];
  };
  problem: {
    title: string;
    description: string;
    points: string[];
  };
  approach: {
    title: string;
    description: string;
    points: string[];
  };
  system?: {
    diagramTitle: string;
    diagramDescription: string;
    diagramImage: string;
    diagramType: 'architecture' | 'workflow' | 'pipeline' | 'agent-flow' | 'data-flow';
  };
  engineering: {
    title: string;
    description: string;
    details: string[];
    media?: string;
  }[];
  technologyCategories: {
    name: string;
    technologies: string[];
  }[];
  results: {
    quantitative: {
      value: string;
      label: string;
      description: string;
    }[];
    qualitative: {
      title: string;
      description: string;
    }[];
  };
  visuals: {
    type: 'image' | 'video' | 'architecture diagram' | 'screenshot' | 'workflow';
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export interface CapabilityCategory {
  category: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  location: string;
  focus: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
}
