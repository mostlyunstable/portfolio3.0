import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPreview() {
  return (
    <section className="px-6 py-16 md:py-24 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
        
        {/* Text Side */}
        <div className="w-full md:w-1/2">
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
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity border-b border-stone-300 dark:border-stone-700 pb-1 self-start">
                Read Full Bio &rarr;
              </Link>
              <Link href="/capabilities" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors border-b border-transparent pb-1 self-start">
                View Capabilities &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2">
          <FadeIn delay={0.3}>
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto md:mr-0 overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-200 dark:bg-stone-800 group shadow-2xl">
              <Image 
                src="/profile.jpg" 
                alt="Mayank Kumar" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
