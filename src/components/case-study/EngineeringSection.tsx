import { CaseStudy } from '@/types';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function EngineeringSection({ engineering }: { engineering: CaseStudy['engineering'] }) {
  
  // Fake snippet for demonstration purposes in the UI
  const getDemoSnippet = (title: string) => {
    if (title.toLowerCase().includes('crawler')) return `import asyncio\nfrom bs4 import BeautifulSoup\n\nasync def fetch_page(url):\n    async with aiohttp.ClientSession() as session:\n        async with session.get(url) as response:\n            return await response.text()`;
    if (title.toLowerCase().includes('email')) return `import openai\n\ndef generate_draft(context):\n    prompt = f"Write a cold email based on: {context}"\n    res = openai.ChatCompletion.create(\n        model="gpt-4",\n        messages=[{"role": "user", "content": prompt}]\n    )\n    return res.choices[0].message.content`;
    return null;
  }

  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 border-t border-stone-200 dark:border-stone-800">
      <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-16 font-mono">ENGINEERING</h2>
      <div className="flex flex-col gap-24 max-w-5xl">
        {engineering.map((section, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="md:col-span-1 border-t border-stone-900 dark:border-stone-100 pt-4">
              <h3 className="text-2xl font-bold">{section.title}</h3>
            </div>
            <div className="md:col-span-2 border-t border-stone-200 dark:border-stone-800 pt-4">
              <p className="text-stone-600 dark:text-stone-400 mb-8 leading-relaxed text-lg">{section.description}</p>
              <ul className="flex flex-col gap-4 mb-8">
                {section.details.map((detail, i) => (
                  <li key={i} className="flex gap-4 items-start text-stone-600 dark:text-stone-400">
                    <span className="text-stone-300 dark:text-stone-600 font-bold">&rarr;</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              {/* Show CodeBlock if we have a demo snippet for this section */}
              {getDemoSnippet(section.title) && (
                <CodeBlock code={getDemoSnippet(section.title)!} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
