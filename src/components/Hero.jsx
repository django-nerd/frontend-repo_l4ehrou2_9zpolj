import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">Building next‑gen digital products</h1>
          <p className="mt-6 text-lg text-zinc-300 max-w-2xl">We design and engineer web apps, mobile apps, automations, and AI agents for ambitious teams. Fast iteration, production quality, measurable impact.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors">Book a discovery call</a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md ring-1 ring-white/20 hover:ring-white/40 text-white">Explore services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
