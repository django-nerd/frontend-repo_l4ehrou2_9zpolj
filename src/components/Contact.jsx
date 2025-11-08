import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(80,80,80,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build something great</h2>
        <p className="mt-4 text-zinc-300">Tell us about your goals. We’ll reply within one business day.</p>
        <form className="mt-10 grid grid-cols-1 gap-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full rounded-md bg-white/5 ring-1 ring-white/10 p-3 placeholder-zinc-400 focus:outline-none focus:ring-white/30" />
            <input type="email" placeholder="Email" className="w-full rounded-md bg-white/5 ring-1 ring-white/10 p-3 placeholder-zinc-400 focus:outline-none focus:ring-white/30" />
          </div>
          <input type="text" placeholder="Company" className="w-full rounded-md bg-white/5 ring-1 ring-white/10 p-3 placeholder-zinc-400 focus:outline-none focus:ring-white/30" />
          <textarea rows="5" placeholder="What are you looking to build?" className="w-full rounded-md bg-white/5 ring-1 ring-white/10 p-3 placeholder-zinc-400 focus:outline-none focus:ring-white/30" />
          <div className="flex items-center justify-center">
            <button type="submit" className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
