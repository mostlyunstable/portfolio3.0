import { capabilities } from '@/data/capabilities';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

export const metadata = {
  title: 'Capabilities | Mayank Kumar',
  description: 'Technical capabilities across AI Engineering, Software Engineering, Data, and Automation.',
};

export default function CapabilitiesPage() {
  return (
    <article className="pt-16 md:pt-32 pb-24 md:pb-32">
      <header className="px-6 md:px-12 lg:px-24 mb-16 md:mb-16 md:mb-24 max-w-4xl">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Technical Capabilities
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl md:text-3xl font-light text-stone-600 dark:text-stone-400 leading-snug">
            A structured overview of my engineering competencies, platform expertise, and architectural focus areas.
          </p>
        </FadeIn>
      </header>

      <section className="px-6 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800 pt-16 md:pt-24">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.category}>
              <h2 className="text-sm font-bold tracking-widest text-stone-900 dark:text-stone-100 uppercase mb-8 pb-4 border-b border-stone-300 dark:border-stone-700 font-mono">
                {cap.category}
              </h2>
              <ul className="flex flex-col gap-4">
                {cap.items.map((item, i) => (
                  <li key={i} className="text-lg text-stone-600 dark:text-stone-400 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </article>
  );
}
