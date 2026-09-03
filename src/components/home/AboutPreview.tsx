import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="px-6 py-16 md:py-24 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900/50">
      <div className="max-w-4xl">
        <FadeIn>
          <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-8 font-mono">
            ABOUT MAYANK
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-2xl md:text-4xl font-light text-stone-900 dark:text-stone-100 leading-snug mb-12">
            I am a full-stack developer and AI engineer focused on architecting intelligent, high-performance systems for modern business.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity border-b border-stone-300 dark:border-stone-700 pb-1">
              Read Full Bio &rarr;
            </Link>
            <Link href="/capabilities" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors border-b border-transparent pb-1">
              View Capabilities &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
