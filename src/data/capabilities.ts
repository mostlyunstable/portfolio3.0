import { CapabilityCategory, ProcessStep } from '@/types';

export const capabilities: CapabilityCategory[] = [
  {
    category: 'AI SYSTEMS',
    items: ['OpenAI & Claude API Integration', 'Prompt Engineering', 'RAG & Semantic Search', 'Function Calling', 'LLM Orchestration']
  },
  {
    category: 'SOFTWARE ENGINEERING',
    items: ['Python & JavaScript', 'FastAPI & Flask', 'REST APIs & WebSockets', 'HTML/CSS/JS', 'System Architecture']
  },
  {
    category: 'AUTOMATION',
    items: ['Web Scraping & Crawling', 'Playwright & n8n', 'API Integration (Gmail, Telegram)', 'Automated Workflows', 'Anti-flood & Exponential Backoff']
  },
  {
    category: 'DATA',
    items: ['Semantic Chunking', 'NER (spaCy)', 'Data Annotation Pipeline', 'SQLAlchemy & Database Modeling', 'Vector Processing']
  },
  {
    category: 'DEPLOYMENT',
    items: ['Docker Containerization', 'Git & GitHub Workflows', 'Remote Linux Servers', 'Dashboard Monitoring']
  }
];

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'UNDERSTAND', description: 'Analyze business requirements, current pain points, and define the core objective of the automation or AI integration.' },
  { number: '02', title: 'ARCHITECT', description: 'Design the data flow, select the right foundational models (LLMs), and structure the system architecture for scale and reliability.' },
  { number: '03', title: 'BUILD', description: 'Develop the backend infrastructure, integrate necessary APIs, construct web scrapers, and implement the frontend interface.' },
  { number: '04', title: 'DEPLOY', description: 'Containerize applications using Docker, establish secure environments, and push to production servers with monitoring.' },
  { number: '05', title: 'ITERATE', description: 'Monitor logs, evaluate AI output quality, refine prompts, and aggressively squash bugs to ensure high availability.' }
];
