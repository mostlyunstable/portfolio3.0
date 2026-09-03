import { CaseStudy } from '@/types';

export default function CaseStudyProblem({ problem, title }: { problem: CaseStudy['problem'], title: string }) {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 border-t border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase">{title}</h2>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-3xl font-bold mb-6">{problem.title}</h3>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">{problem.description}</p>
          <ul className="flex flex-col gap-4 list-disc list-inside text-stone-600">
            {problem.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
