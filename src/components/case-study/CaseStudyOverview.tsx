import { CaseStudy } from '@/types';

export default function CaseStudyOverview({ overview }: { overview: CaseStudy['overview'] }) {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 border-t border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase">OVERVIEW</h2>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 gap-8 text-sm">
          <div>
            <div className="text-stone-400 font-bold uppercase tracking-widest mb-2">CLIENT</div>
            <div className="font-medium">{overview.client}</div>
          </div>
          <div>
            <div className="text-stone-400 font-bold uppercase tracking-widest mb-2">INDUSTRY</div>
            <div className="font-medium">{overview.industry}</div>
          </div>
          <div>
            <div className="text-stone-400 font-bold uppercase tracking-widest mb-2">TIMELINE</div>
            <div className="font-medium">{overview.timeline}</div>
          </div>
          <div>
            <div className="text-stone-400 font-bold uppercase tracking-widest mb-2">ROLE</div>
            <div className="font-medium">{overview.role}</div>
          </div>
          <div className="col-span-2">
            <div className="text-stone-400 font-bold uppercase tracking-widest mb-2">SERVICES</div>
            <div className="font-medium">{overview.services.join(', ')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
