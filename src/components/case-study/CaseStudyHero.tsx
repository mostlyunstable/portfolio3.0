import { Project } from '@/types';

export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 border-b border-stone-200 bg-stone-50">
      <div className="max-w-5xl">
        <div className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-8">
          {project.projectNumber} &mdash; {project.client} &mdash; {project.year}
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
          {project.title}
        </h1>
        {project.subtitle && (
          <h2 className="text-2xl md:text-4xl font-light text-stone-500 mb-16 leading-tight">
            {project.subtitle}
          </h2>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm pt-12 border-t border-stone-200">
          <div>
            <div className="text-stone-400 font-bold uppercase tracking-widest mb-2">Role</div>
            <div className="font-medium">{project.role}</div>
          </div>
          <div>
            <div className="text-stone-400 font-bold uppercase tracking-widest mb-2">Industry</div>
            <div className="font-medium">{project.industry}</div>
          </div>
          <div className="col-span-2">
            <div className="text-stone-400 font-bold uppercase tracking-widest mb-2">Core Tech</div>
            <div className="font-medium">{project.technologies.join(', ')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
