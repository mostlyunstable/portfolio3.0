import { CaseStudy } from '@/types';

export default function ResultsSection({ results, confidential }: { results: CaseStudy['results'], confidential: boolean }) {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 border-t border-stone-200 bg-stone-900 text-stone-50">
      <h2 className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-16">RESULTS</h2>
      
      {confidential ? (
        <div className="text-2xl font-light text-stone-400 border border-stone-800 p-12 text-center">
          [METRICS CONFIDENTIAL]
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {results.quantitative.map((stat, i) => (
              <div key={i} className="border-l border-stone-800 pl-6">
                <div className="text-5xl md:text-7xl font-bold mb-4">{stat.value}</div>
                <div className="font-bold uppercase tracking-widest text-stone-400 text-sm mb-2">{stat.label}</div>
                <div className="text-stone-500 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {results.qualitative.map((qual, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold mb-4">{qual.title}</h3>
                <p className="text-stone-400 leading-relaxed">{qual.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
