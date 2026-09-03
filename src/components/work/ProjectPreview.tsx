import Link from 'next/link';
import { Project } from '@/types';

export default function ProjectPreview({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  const keyMetric = project.caseStudy?.results?.quantitative?.[0];

  return (
    <div className={`group flex flex-col gap-12 md:gap-16 p-8 md:p-12 border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/20 hover:bg-white dark:hover:bg-stone-900 hover:border-stone-400 dark:hover:border-stone-500 transition-colors duration-300 rounded-xl ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Typographic "Visual" Side */}
      <div className="w-full md:w-1/2 bg-stone-100 dark:bg-stone-950 p-8 md:p-16 flex flex-col justify-center items-center text-center border border-stone-200 dark:border-stone-800 rounded-lg group-hover:border-stone-300 dark:group-hover:border-stone-700 transition-colors duration-300">
        {keyMetric ? (
          <>
            <div className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">{keyMetric.value}</div>
            <div className="text-sm font-bold tracking-widest text-stone-500 uppercase font-mono">{keyMetric.label}</div>
            <div className="text-stone-600 dark:text-stone-400 mt-4 max-w-xs text-sm">{keyMetric.description}</div>
          </>
        ) : (
          <>
            {/* Improved Fallback: Clear structural metadata instead of massive raw tech string */}
            <div className="text-stone-400 dark:text-stone-600 font-mono text-xs font-bold tracking-widest mb-6">
              SYSTEM ARCHITECTURE
            </div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {project.services[0] || 'Platform'}
            </div>
            <div className="flex gap-2 flex-wrap justify-center max-w-xs">
              {project.technologies.slice(0, 3).map(tech => (
                <span key={tech} className="text-xs border border-stone-300 dark:border-stone-700 px-2 py-1 rounded font-mono text-stone-600 dark:text-stone-400">
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-bold tracking-widest text-stone-400 uppercase font-mono">
            {project.projectNumber} &mdash; {project.client}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded font-mono uppercase">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{project.title}</h3>
        <p className="text-lg text-stone-600 dark:text-stone-400 mb-10 leading-relaxed">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-col gap-4 mb-12 text-sm border-t border-stone-200 dark:border-stone-800 pt-8">
          <div className="flex gap-4">
            <span className="text-stone-400 font-bold tracking-widest uppercase w-32 font-mono">Role</span>
            <span className="font-medium text-stone-800 dark:text-stone-200">{project.role}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-stone-400 font-bold tracking-widest uppercase w-32 font-mono">Services</span>
            <span className="font-medium text-stone-800 dark:text-stone-200">{project.services.join(', ')}</span>
          </div>
        </div>
        
        <Link 
          href={`/work/${project.slug}`} 
          className="inline-flex items-center gap-2 font-bold group-hover:gap-4 transition-all text-stone-900 dark:text-stone-100 border-b-2 border-stone-900 dark:border-stone-100 pb-1 self-start uppercase tracking-widest text-sm font-mono"
        >
          Read Case Study &rarr;
        </Link>
      </div>
    </div>
  );
}
