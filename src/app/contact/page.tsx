"use client";

import { useState } from 'react';
import { profile } from '@/data/profile';
import { FadeIn } from '@/components/ui/FadeIn';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xdeozwdp', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <article className="pt-24 md:pt-32 pb-32 min-h-screen flex flex-col justify-center">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="flex flex-col justify-between">
            <div>
              <FadeIn>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
                  HAVE A SYSTEM<br />TO BUILD?
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-xl md:text-2xl font-light text-stone-600 dark:text-stone-400 max-w-md leading-relaxed mb-12">
                  Whether you need a custom automation pipeline, an AI orchestration layer, or a high-performance web application—let's discuss your architecture.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest font-bold">
                <a href={`mailto:${profile.email}`} className="text-stone-900 dark:text-stone-100 hover:opacity-60 transition-opacity flex items-center gap-4">
                  <span className="text-stone-400 w-16">EMAIL</span> {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-900 dark:text-stone-100 hover:opacity-60 transition-opacity flex items-center gap-4">
                  <span className="text-stone-400 w-16">LINKEDIN</span> Connect
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-stone-900 dark:text-stone-100 hover:opacity-60 transition-opacity flex items-center gap-4">
                  <span className="text-stone-400 w-16">GITHUB</span> View Repositories
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-stone-100 dark:bg-stone-900/50 p-8 md:p-12 rounded-2xl border border-stone-200 dark:border-stone-800">
              <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase font-mono mb-8">
                DIRECT MESSAGE
              </h2>
              
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="text-4xl mb-6">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                  <p className="text-stone-600 dark:text-stone-400">I will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm font-bold tracking-widest uppercase border-b border-stone-900 dark:border-stone-100 pb-1"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold tracking-widest text-stone-500 uppercase font-mono">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-colors font-medium rounded-none"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold tracking-widest text-stone-500 uppercase font-mono">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-colors font-medium rounded-none"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold tracking-widest text-stone-500 uppercase font-mono">Project Details</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      required
                      className="bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-colors font-medium resize-none rounded-none"
                    ></textarea>
                  </div>
                  
                  {status === 'error' && (
                    <div className="text-red-500 text-sm font-medium">Something went wrong. Please try again or email directly.</div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="mt-4 self-start bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 px-8 py-4 font-bold tracking-widest uppercase text-xs hover:opacity-80 transition-opacity disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'SENDING...' : 'SEND INQUIRY'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </article>
  );
}
