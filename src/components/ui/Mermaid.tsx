"use client";

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { useTheme } from 'next-themes';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: 'var(--font-sans)',
    primaryColor: '#f5f5f4', // stone-100
    primaryTextColor: '#1c1917', // stone-900
    primaryBorderColor: '#e7e5e4', // stone-200
    lineColor: '#78716c', // stone-500
    secondaryColor: '#fafaf9',
    tertiaryColor: '#ffffff',
  },
});

export function Mermaid({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      try {
        // Re-initialize mermaid theme based on current Next.js theme
        const isDark = resolvedTheme === 'dark';
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          securityLevel: 'loose',
          themeVariables: {
            fontFamily: 'var(--font-sans)',
            primaryColor: isDark ? '#1c1917' : '#f5f5f4',
            primaryTextColor: isDark ? '#fafaf9' : '#1c1917',
            primaryBorderColor: isDark ? '#44403c' : '#e7e5e4',
            lineColor: isDark ? '#a8a29e' : '#78716c',
            secondaryColor: isDark ? '#292524' : '#fafaf9',
            tertiaryColor: isDark ? '#0c0a09' : '#ffffff',
            textColor: isDark ? '#fafaf9' : '#1c1917',
          },
        });

        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        
        if (isMounted) {
          setSvg(renderedSvg);
          setError(false);
        }
      } catch (err) {
        console.error('Mermaid rendering failed', err);
        if (isMounted) {
          setError(true);
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart, resolvedTheme]);

  if (error) {
    return (
      <div className="w-full aspect-[21/9] min-h-[300px] flex items-center justify-center bg-stone-100 dark:bg-stone-900 text-stone-500 font-mono text-sm border border-stone-200 dark:border-stone-800 rounded-lg">
        [Diagram Rendering Error]
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="w-full aspect-[21/9] min-h-[300px] flex items-center justify-center bg-stone-100/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-lg animate-pulse">
        <span className="text-stone-400 font-mono text-sm uppercase tracking-widest">Generating Architecture...</span>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-[300px] flex justify-center items-center overflow-x-auto overflow-y-hidden py-8 px-4"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
