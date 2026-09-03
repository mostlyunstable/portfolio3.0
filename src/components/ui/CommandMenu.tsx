"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Home, Briefcase, User, Mail } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-stone-900/50 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl shadow-2xl overflow-hidden font-sans" onClick={(e) => e.stopPropagation()}>
        <Command className="w-full h-full flex flex-col bg-transparent" label="Global Command Menu">
          <div className="flex items-center border-b border-stone-200 dark:border-stone-800 px-4">
            <Command.Input 
              className="w-full bg-transparent outline-none py-4 text-stone-900 dark:text-stone-50 placeholder:text-stone-400 font-mono text-sm" 
              placeholder="Type a command or search..." 
              autoFocus 
            />
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-smooth">
            <Command.Empty className="py-6 text-center text-sm text-stone-500 font-mono">No results found.</Command.Empty>

            <Command.Group heading="Navigation" className="text-xs font-bold text-stone-500 font-mono px-2 py-2 uppercase tracking-widest [&_[cmdk-group-heading]]:mb-2">
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/"))}
                className="flex items-center gap-3 px-3 py-3 text-sm text-stone-900 dark:text-stone-100 rounded-md cursor-pointer aria-selected:bg-stone-100 dark:aria-selected:bg-stone-900 aria-selected:text-stone-900 dark:aria-selected:text-stone-50 transition-colors"
              >
                <Home size={16} /> Home
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/work"))}
                className="flex items-center gap-3 px-3 py-3 text-sm text-stone-900 dark:text-stone-100 rounded-md cursor-pointer aria-selected:bg-stone-100 dark:aria-selected:bg-stone-900 aria-selected:text-stone-900 dark:aria-selected:text-stone-50 transition-colors"
              >
                <Briefcase size={16} /> Work & Case Studies
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/about"))}
                className="flex items-center gap-3 px-3 py-3 text-sm text-stone-900 dark:text-stone-100 rounded-md cursor-pointer aria-selected:bg-stone-100 dark:aria-selected:bg-stone-900 aria-selected:text-stone-900 dark:aria-selected:text-stone-50 transition-colors"
              >
                <User size={16} /> About
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/contact"))}
                className="flex items-center gap-3 px-3 py-3 text-sm text-stone-900 dark:text-stone-100 rounded-md cursor-pointer aria-selected:bg-stone-100 dark:aria-selected:bg-stone-900 aria-selected:text-stone-900 dark:aria-selected:text-stone-50 transition-colors"
              >
                <Mail size={16} /> Contact
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Actions" className="text-xs font-bold text-stone-500 font-mono px-2 py-2 uppercase tracking-widest [&_[cmdk-group-heading]]:mb-2 mt-2 border-t border-stone-200 dark:border-stone-800 pt-4">
              <Command.Item 
                onSelect={() => runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))}
                className="flex items-center gap-3 px-3 py-3 text-sm text-stone-900 dark:text-stone-100 rounded-md cursor-pointer aria-selected:bg-stone-100 dark:aria-selected:bg-stone-900 aria-selected:text-stone-900 dark:aria-selected:text-stone-50 transition-colors"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />} 
                Toggle {theme === "dark" ? "Light" : "Dark"} Mode
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
