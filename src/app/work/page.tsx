import { projects } from '@/data/projects';
import ProjectPreview from '@/components/work/ProjectPreview';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

export const metadata = {
  title: 'Work | Mayank Kumar',
  description: 'Selected projects, internal architectures, and automated pipelines.',
};

export default function WorkPage() {
  return (
    <article className="pt-16 md:pt-32 pb-24 md:pb-32">
      <header className="px-6 md:px-12 lg:px-24 mb-16 md:mb-16 md:mb-24 max-w-4xl">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Selected Work
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl md:text-3xl font-light text-stone-600 dark:text-stone-400 leading-snug">
            A collection of client systems, internal architectures, and automation pipelines built for real-world production use.
          </p>
        </FadeIn>
      </header>

      <section className="px-6 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800 pt-16 md:pt-24">
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1}>
              <ProjectPreview project={project} index={index} />
            </FadeIn>
          ))}
        </div>
      </section>
    </article>
  );
}
