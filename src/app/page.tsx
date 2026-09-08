import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import SelectedWork from '@/components/home/SelectedWork';
import Link from 'next/link';
import Image from 'next/image';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <article className="pt-16 md:pt-32 pb-24 md:pb-32">
      
      {/* Unified Hero / About Section */}
      <header className="px-6 md:px-12 lg:px-24 mb-16 md:mb-32 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-16 justify-between items-center">
          
          <div className="w-full md:w-3/5 lg:w-1/2">
            <FadeIn>
              <div className="mb-6 font-mono">
                <p className="text-sm font-bold tracking-widest text-stone-900 dark:text-stone-100 uppercase mb-2">
                  {profile.name} &mdash; {profile.role}
                </p>
                <p className="text-xs font-bold tracking-widest text-stone-500 uppercase">
                  [ Welcome to my base ]
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-2xl md:text-4xl font-light text-stone-900 dark:text-stone-100 leading-snug mb-8">
                {profile.bio}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex gap-6">
                <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity border-b border-stone-300 dark:border-stone-700 pb-1">
                  View Projects &rarr;
                </Link>
                <Link href="/capabilities" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors border-b border-transparent pb-1">
                  View Capabilities &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-2/5 lg:w-5/12 flex justify-end">
            <FadeIn delay={0.3} className="w-full flex justify-end">
              <div className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800 shadow-2xl">
                <Image 
                  src="/profile.jpg" 
                  alt="Mayank Kumar" 
                  fill 
                  priority
                  className="object-cover transition-all duration-700 hover:scale-105"
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
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-7xl mx-auto">
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
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 max-w-7xl mx-auto">
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

      <SelectedWork />

      <ContactCTA />
    </article>
  );
}
