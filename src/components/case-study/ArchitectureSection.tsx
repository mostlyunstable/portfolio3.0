import { CaseStudy } from '@/types';
import { Mermaid } from '@/components/ui/Mermaid';

export default function ArchitectureSection({ system }: { system: CaseStudy['system'] }) {
  if (!system) return null;

  // Example Mermaid chart based on the diagramType if we don't have a specific chart defined in the data
  const getMermaidChart = (type: string) => {
    if (type === 'data-flow') {
      return `
graph LR
  A[Google Sheets] -->|CSV Ingestion| B(FastAPI Backend)
  B --> C{Web Scraper}
  C -->|Extracted Context| D[OpenAI LLM]
  D -->|Personalized Drafts| E[Gmail API]
  E --> F((Prospect))
      `;
    }
    if (type === 'pipeline') {
      return `
graph TD
  A[Crawler Scheduler] -->|Depth-limited BFS| B(Legal Domains)
  B --> C{Raw HTML/PDF}
  C --> D[HTML Normalization]
  C --> E[PDF OCR Extraction]
  D --> F[Semantic Chunker]
  E --> F
  F --> G[spaCy NER]
  G --> H[(Vector Database)]
      `;
    }
    return `
graph TD
  A[Client Request] --> B(API Gateway)
  B --> C{Load Balancer}
  C --> D[Microservice 1]
  C --> E[Microservice 2]
    `;
  };

  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
      <div className="flex flex-col gap-8 text-center items-center">
        <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase font-mono">THE SYSTEM ({system.diagramType})</h2>
        <h3 className="text-4xl font-bold max-w-2xl">{system.diagramTitle}</h3>
        <p className="text-stone-600 dark:text-stone-400 max-w-3xl leading-relaxed text-lg">{system.diagramDescription}</p>
        
        <div className="w-full max-w-5xl mt-12 bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl shadow-sm p-4 md:p-12">
          <Mermaid chart={getMermaidChart(system.diagramType)} />
        </div>
      </div>
    </section>
  );
}
