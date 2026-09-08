import Link from 'next/link';
import { profile } from '@/data/profile';
import { FadeIn } from '@/components/ui/FadeIn';

export default function ContactCTA() {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800 text-center flex flex-col items-center">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          HAVE A SYSTEM TO BUILD?
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mb-12">
          Whether you&apos;re looking to automate a complex workflow, integrate AI into an existing product, or build something from the ground up, let&apos;s talk.
        </p>
      </FadeIn>
      
      <FadeIn delay={0.2} className="flex gap-8 mb-12 font-medium font-mono text-sm uppercase tracking-widest">
        <a href={`mailto:${profile.email}`} className="hover:underline">EMAIL</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LINKEDIN</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GITHUB</a>
      </FadeIn>
      
      <FadeIn delay={0.3}>
        <Link href="/contact" className="px-8 py-4 bg-stone-900 text-white dark:bg-white dark:text-stone-900 font-bold rounded-sm hover:opacity-80 transition-opacity font-mono uppercase tracking-widest text-sm">
          START A CONVERSATION &rarr;
        </Link>
      </FadeIn>
    </section>
  );
}
