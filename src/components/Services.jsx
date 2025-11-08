import React from 'react';
import { Smartphone, Workflow, Bot, Globe } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    desc: 'Production-grade web apps with modern stacks, accessibility, and performance baked in.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'iOS and Android apps with native feel, delivered with shared codebases where it fits.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Streamline operations with robust automations across SaaS tools and internal systems.'
  },
  {
    icon: Bot,
    title: 'AI Agents & Integrations',
    desc: 'Ship practical, reliable AI experiences tailored to your data and workflows.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(80,80,80,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-4 text-zinc-300">Full-stack product teams on demand. From concept to launch, we partner to build and grow.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl p-6 bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-white/10">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
