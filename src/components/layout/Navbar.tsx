"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/data/navigation';
import { profile } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';
import { Command } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 md:py-6 md:px-12 lg:px-24 flex justify-between items-center border-b border-stone-200 dark:border-stone-800 relative z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md">
      <Link href="/" className="font-bold text-xl tracking-tight uppercase hover:opacity-60 transition-opacity">
        {profile.name.split(' ')[0]}
      </Link>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-sm font-medium transition-colors ${
                isActive 
                  ? 'text-stone-900 dark:text-stone-100 border-b border-stone-900 dark:border-stone-100' 
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
        
        <div className="w-[1px] h-4 bg-stone-300 dark:bg-stone-700 mx-2"></div>
        
        {/* Command Menu Hint */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-400 bg-stone-200 dark:bg-stone-900 px-3 py-1.5 rounded-md cursor-pointer hover:bg-stone-300 dark:hover:bg-stone-800 transition-colors" title="Press Cmd+K to open menu">
          <Command size={12} />
          <span>K</span>
        </div>

        <ThemeToggle />
      </div>
      
      {/* Mobile Nav */}
      <div className="md:flex hidden items-center gap-4">
        {/* Mobile styling handled in MobileNav component */}
      </div>
      
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <MobileNav />
      </div>
    </nav>
  );
}
