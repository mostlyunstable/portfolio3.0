"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Home, Briefcase, User, Mail, Sparkles, ArrowLeft, Send } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState<"default" | "ai">("default");
  
  const [messages, setMessages] = React.useState<{role: string, content: string}[]>([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const chatEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => {
          if (!open) setMode("default");
          return !open;
        });
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Failed");

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I am currently offline. Please use the contact form to reach Mayank directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-stone-900/50 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl shadow-2xl overflow-hidden font-sans" onClick={(e) => e.stopPropagation()}>
        
        {mode === "default" && (
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

              <Command.Group heading="Intelligence" className="text-xs font-bold text-stone-500 font-mono px-2 py-2 uppercase tracking-widest [&_[cmdk-group-heading]]:mb-2">
                <Command.Item 
                  onSelect={() => setMode("ai")}
                  className="flex items-center gap-3 px-3 py-3 text-sm text-stone-900 dark:text-stone-100 rounded-md cursor-pointer aria-selected:bg-stone-100 dark:aria-selected:bg-stone-900 aria-selected:text-stone-900 dark:aria-selected:text-stone-50 transition-colors"
                >
                  <Sparkles size={16} className="text-stone-500" /> Ask Mayank's AI Assistant...
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Navigation" className="text-xs font-bold text-stone-500 font-mono px-2 py-2 uppercase tracking-widest [&_[cmdk-group-heading]]:mb-2 border-t border-stone-200 dark:border-stone-800 pt-4 mt-2">
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
        )}

        {mode === "ai" && (
          <div className="w-full h-full flex flex-col bg-transparent">
            <div className="flex items-center border-b border-stone-200 dark:border-stone-800 px-4 py-3 gap-3">
              <button onClick={() => setMode("default")} className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                <ArrowLeft size={16} />
              </button>
              <div className="text-sm font-bold tracking-widest text-stone-900 dark:text-stone-100 uppercase font-mono flex items-center gap-2">
                <Sparkles size={14} className="text-stone-500" /> Mayank AI
              </div>
            </div>

            <div className="h-[300px] overflow-y-auto p-4 flex flex-col gap-4 text-sm font-medium">
              {messages.length === 0 ? (
                <div className="text-stone-500 font-mono text-xs flex flex-col items-center justify-center h-full gap-2 opacity-50">
                  <Sparkles size={24} />
                  Ask me about Mayank's experience, stack, or availability.
                </div>
              ) : (
                messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`px-4 py-2 rounded-lg max-w-[85%] ${m.role === 'user' ? 'bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100' : 'bg-transparent text-stone-700 dark:text-stone-300'}`}>
                      {m.content}
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-lg bg-transparent text-stone-400 animate-pulse">
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="border-t border-stone-200 dark:border-stone-800 p-2">
              <form onSubmit={handleAiSubmit} className="flex items-center bg-stone-50 dark:bg-stone-900 rounded-md px-3 py-2">
                <input
                  className="w-full bg-transparent outline-none text-sm font-mono placeholder:text-stone-400 text-stone-900 dark:text-stone-100"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  autoFocus
                />
                <button type="submit" disabled={isLoading || !input.trim()} className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors disabled:opacity-50">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
