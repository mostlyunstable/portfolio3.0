"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/data/navigation';
import { Menu, X, Command } from 'lucide-react';
import { createPortal } from 'react-dom';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const triggerCmdK = () => {
    setIsOpen(false);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
  };

  const overlay = isOpen && mounted ? createPortal(
    <div className="fixed inset-0 z-[9999] bg-stone-50 dark:bg-stone-950 flex flex-col p-6 overflow-y-auto">
      <div className="flex justify-end mb-8">
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
          aria-label="Close Mobile Menu"
          type="button"
        >
          <X size={24} className="pointer-events-none" />
        </button>
      </div>
      
      <nav className="flex flex-col gap-8 flex-grow">
        <div className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono mb-2">Navigation</div>
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-bold tracking-tight transition-opacity ${
                isActive ? 'opacity-100 text-stone-900 dark:text-stone-100 border-l-4 border-stone-900 dark:border-stone-100 pl-4 -ml-4' : 'opacity-60 hover:opacity-100'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div className="flex items-center gap-4 md:hidden">
        {/* Mobile Command Menu Trigger */}
        <button 
          type="button"
          onClick={triggerCmdK}
          className="p-2 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
          aria-label="Open Command Menu"
        >
          <Command size={18} className="pointer-events-none" />
        </button>

        <button 
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-2 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
          aria-label="Open Mobile Menu"
          aria-expanded={isOpen}
        >
          <Menu size={20} className="pointer-events-none" />
        </button>
      </div>
      
      {overlay}
    </>
  );
}
