import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About | Mayank Kumar',
  description: 'AI Engineer & Full-Stack Developer specializing in orchestration, automation, and intelligent pipelines.',
};

export default function AboutPage() {
  return (
    <article className="pt-16 md:pt-32 pb-24 md:pb-32">
      
      <header className="px-6 md:px-12 lg:px-24 mb-16 md:mb-32 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-24 items-center">
          
          <div className="w-full md:w-3/5">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
                About Mayank
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-3xl font-light text-stone-600 dark:text-stone-400 leading-snug">
                {profile.bio}
              </p>
            </FadeIn>
          </div>

          <div className="w-full md:w-2/5">
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto md:mr-0 overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800 shadow-2xl">
                <Image 
                  src="/profile.jpg" 
                  alt="Mayank Kumar" 
                  fill 
                  priority
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none"></div>
              </div>
            </FadeIn>
          </div>

        </div>
      </header>

      {/* Grid Meta */}
      <section className="px-6 md:px-12 lg:px-24 mb-16 md:mb-32 border-y border-stone-200 dark:border-stone-800 py-12">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <StaggerItem className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">Location</span>
            <span className="font-medium text-sm md:text-base">{profile.location}</span>
          </StaggerItem>
          <StaggerItem className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">Current Focus</span>
            <span className="font-medium text-sm md:text-base">{profile.focus}</span>
          </StaggerItem>
          <StaggerItem className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">Availability</span>
            <span className="font-medium text-sm md:text-base">{profile.availability}</span>
          </StaggerItem>
          <StaggerItem className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">Contact</span>
            <a href={`mailto:${profile.email}`} className="font-medium text-sm md:text-base hover:opacity-60 transition-opacity">
              Email Me &rarr;
            </a>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-12 lg:px-24 mb-16 md:mb-32">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="w-full md:w-1/3">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase font-mono sticky top-32">
                EXPERIENCE
              </h2>
            </FadeIn>
          </div>
          
          <div className="w-full md:w-2/3">
            <StaggerContainer className="flex flex-col gap-16 border-l border-stone-200 dark:border-stone-800 pl-6 md:pl-12">
              {experience.map((item, index) => (
                <StaggerItem key={index} className="relative">
                  <div className="absolute w-3 h-3 bg-stone-200 dark:bg-stone-800 rounded-full -left-[30px] md:-left-[54px] top-1.5 border-4 border-stone-50 dark:border-stone-950"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold tracking-tight">{item.role}</h3>
                    <span className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono bg-stone-100 dark:bg-stone-900 px-3 py-1 rounded">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-4 border-b border-stone-200 dark:border-stone-800 pb-4 inline-block">
                    {item.company}
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Approach / Working Style */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900/50">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="w-full md:w-1/3">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase font-mono">
                ENGINEERING APPROACH
              </h2>
            </FadeIn>
          </div>
          
          <div className="w-full md:w-2/3">
            <FadeIn delay={0.1}>
              <div className="prose prose-stone dark:prose-invert max-w-3xl prose-p:leading-relaxed prose-p:text-lg">
                <h3 className="text-3xl font-bold tracking-tight mb-6 mt-0">I build systems, not just features.</h3>
                <p>
                  My engineering philosophy is rooted in solving complex data and automation challenges by building robust, deterministic pipelines. I do not rely solely on heavy frontend frameworks when lightweight solutions suffice. Instead, I focus on the architecture that powers the product—whether that is a resilient depth-limited web crawler, an anti-ban Telegram automation hub, or a custom session-aware media engine.
                </p>
                <p>
                  I approach development as an end-to-end architect. From raw data ingestion and NLP parsing to scalable deployment on Docker, I ensure that the software I write is resilient, performant, and perfectly aligned with the underlying business logic.
                </p>
                
                <div className="mt-12 pt-12 border-t border-stone-300 dark:border-stone-700 flex gap-6">
                  <Link href="/capabilities" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity">
                    View Technical Capabilities &rarr;
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </article>
  );
}
