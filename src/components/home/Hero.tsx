"use client";

import { profile } from '@/data/profile';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { ScrambleText } from '@/components/ui/ScrambleText';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-6 pt-12 pb-16 md:py-32 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-4xl">
        <FadeIn delay={0.1}>
          <div className="mb-8 font-mono">
            <p className="text-sm font-bold tracking-widest text-stone-900 dark:text-stone-100 uppercase mb-2">
              {profile.name} &mdash; {profile.role}
            </p>
            <p className="text-xs font-bold tracking-widest text-stone-500 uppercase">
              [ Welcome to my base ]
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8">
            <ScrambleText text="ENGINEERING INTELLIGENCE" />
            <br />
            <ScrambleText text="FOR MODERN BUSINESS." />
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 mb-16 max-w-2xl leading-relaxed">
            I engineer AI-powered software, automation systems, and data pipelines that turn complex business workflows into scalable products.
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium border-t border-stone-200 dark:border-stone-800 pt-8 font-mono">
          <StaggerItem>
            <Link href="/capabilities" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors group">
              AI SYSTEMS <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link href="/capabilities" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors group">
              SOFTWARE ENG. <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link href="/capabilities" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors group">
              AUTOMATION <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link href="/capabilities" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors group">
              DATA PIPELINES <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
