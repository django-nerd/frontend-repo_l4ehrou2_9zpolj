import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Nebula Labs</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">
          Start a Project
        </a>
      </div>
    </header>
  );
};

export default Navbar;
