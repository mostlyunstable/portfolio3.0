import { projects } from '@/data/projects';
import ProjectPreview from '../work/ProjectPreview';
import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';

export default function SelectedWork() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

  return (
    <section className="px-6 py-16 md:py-24 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase font-mono">
            SELECTED WORK
          </h2>
          <Link href="/work" className="text-sm font-bold tracking-widest text-stone-900 dark:text-stone-100 hover:opacity-60 transition-opacity flex items-center gap-2">
            VIEW ALL PROJECTS &rarr;
          </Link>
        </div>
      </FadeIn>
      <div className="flex flex-col gap-16 md:gap-24">
        {featuredProjects.map((project, index) => (
          <FadeIn key={project.id} delay={0.1}>
            <ProjectPreview project={project} index={index} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
