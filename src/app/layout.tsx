import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { CommandMenu } from '@/components/ui/CommandMenu';
import { Noise } from '@/components/ui/Noise';
import { GridBackground } from '@/components/ui/GridBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Mayank Kumar | AI & Automation Engineer',
  description: 'AI Engineer building intelligent software systems, robust data pipelines, and high-throughput automation workflows.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} antialiased bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-50 selection:bg-stone-900 selection:text-white dark:selection:bg-white dark:selection:text-stone-900 min-h-screen flex flex-col transition-colors duration-300 relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Noise />
          <GridBackground />
          <Navbar />
          <CommandMenu />
          <main className="flex-grow z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
