import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import ArchitectureSection from '@/components/case-study/ArchitectureSection';
import EngineeringSection from '@/components/case-study/EngineeringSection';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const projectIndex = projects.findIndex(p => p.slug === params.slug);
  const project = projects[projectIndex];

  if (!project) notFound();
  
  // Calculate Previous and Next Projects
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <article className="pb-32 pt-16 md:pt-24 md:pt-32">
      {/* Hero Section */}
      <header className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-sm font-bold tracking-widest text-stone-400 uppercase font-mono">
            {project.projectNumber} &mdash; {project.client}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded font-mono uppercase">
            {project.category}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
          {project.title}
        </h1>
        <p className="text-xl md:text-3xl font-light text-stone-600 dark:text-stone-400 leading-snug">
          {project.shortDescription}
        </p>
      </header>

      {/* Meta Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-16 md:mb-32 border-y border-stone-200 dark:border-stone-800 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">Role</span>
            <span className="font-medium text-sm md:text-base">{project.role}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">Timeline</span>
            <span className="font-medium text-sm md:text-base">{project.year}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">Services</span>
            <span className="font-medium text-sm md:text-base">{project.services.join(', ')}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">Platform</span>
            {project.links?.github ? (
              <a href={project.links?.github} target="_blank" rel="noopener noreferrer" className="font-medium text-sm md:text-base hover:underline hover:text-stone-500 transition-colors">
                View Source &rarr;
              </a>
            ) : (
              <span className="font-medium text-sm md:text-base text-stone-500">Proprietary / Internal</span>
            )}
          </div>
        </div>
      </section>

      {project.caseStudy && (
        <>
          {/* Overview & Problem */}
          <section className="px-6 md:px-12 lg:px-24 mb-16 md:mb-32 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 max-w-7xl">
            <div className="md:col-span-1">
              <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase font-mono sticky top-32">
                OVERVIEW
              </h2>
            </div>
            <div className="md:col-span-2 prose prose-stone dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-lg">
              <h3 className="text-3xl font-bold tracking-tight mb-6">The Challenge</h3>
              <p className="mb-12">{project.caseStudy.problem.description}</p>
              
              <h3 className="text-3xl font-bold tracking-tight mb-6">The Approach</h3>
              <p>{project.caseStudy.approach.description}</p>
            </div>
          </section>

          {/* Architecture (Mermaid) */}
          <ArchitectureSection system={project.caseStudy.system} />

          {/* Engineering Deep Dive */}
          <EngineeringSection engineering={project.caseStudy.engineering} />

          {/* Results / Metrics */}
          {project.caseStudy.results && (
            <section className="px-6 py-16 md:py-24 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900/50">
              <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-16 font-mono">OUTCOMES</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
                {project.caseStudy.results.quantitative.map((metric, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="text-6xl md:text-7xl font-bold tracking-tighter">{metric.value}</div>
                    <div className="font-bold tracking-widest text-stone-500 uppercase font-mono text-sm border-t border-stone-300 dark:border-stone-700 pt-4">
                      {metric.label}
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 text-sm">{metric.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* Dynamic Navigation Footer */}
      <footer className="px-6 py-16 md:py-24 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div className="flex-1 w-full border-b md:border-b-0 border-stone-200 dark:border-stone-800 pb-12 md:pb-0 md:border-r pr-0 md:pr-12 text-left">
            {prevProject ? (
              <Link href={`/work/${prevProject.slug}`} className="group block">
                <div className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono mb-4">&larr; PREVIOUS PROJECT</div>
                <div className="text-2xl md:text-4xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
                  {prevProject.title}
                </div>
              </Link>
            ) : (
              <div className="opacity-50">
                <div className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono mb-4">&larr; PREVIOUS PROJECT</div>
                <div className="text-2xl md:text-4xl font-bold tracking-tight">End of list</div>
              </div>
            )}
          </div>

          <div className="flex-1 w-full text-left md:text-right pl-0 md:pl-12">
            {nextProject ? (
              <Link href={`/work/${nextProject.slug}`} className="group block">
                <div className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono mb-4">NEXT PROJECT &rarr;</div>
                <div className="text-2xl md:text-4xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
                  {nextProject.title}
                </div>
              </Link>
            ) : (
              <Link href="/work" className="group block">
                <div className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono mb-4">RETURN TO WORK &rarr;</div>
                <div className="text-2xl md:text-4xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
                  View All Projects
                </div>
              </Link>
            )}
          </div>

        </div>
      </footer>
    </article>
  );
}
