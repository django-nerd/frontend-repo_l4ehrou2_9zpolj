import React from 'react';

const Showcase = () => {
  const items = [
    {
      tag: 'Fintech',
      title: 'Real-time analytics dashboard',
      blurb: 'High-throughput data viz with crisp UX and robust auth.'
    },
    {
      tag: 'SaaS',
      title: 'Automation suite for ops',
      blurb: 'Cut manual work by 70% with reliable, observable pipelines.'
    },
    {
      tag: 'AI',
      title: 'Agentic customer support',
      blurb: 'Task-grounded assistants with guardrails and context.'
    }
  ];

  return (
    <section id="work" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected work</h2>
          <p className="mt-4 text-zinc-300">A snapshot of problems we love solving. Names omitted for discretion.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
              <div className="aspect-[4/3] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-zinc-400">{it.tag}</span>
                <h3 className="mt-2 font-medium">{it.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{it.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
