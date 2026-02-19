import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonial: React.FC = () => {
  useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 md:py-32 lg:py-48 px-4 sm:px-6 bg-neutral-50 dark:bg-neutral-900/20 border-y border-neutral-100 dark:border-neutral-900 transition-colors duration-500 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/50 dark:bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 relative z-10">
        <div className="flex justify-center">
          <div className="w-12 sm:w-14 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"></div>
        </div>

        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic tracking-tight text-black dark:text-white leading-snug fade-in stagger-in">
          "The website didn't just look premium — it started generating <span className="text-neutral-300 dark:text-neutral-700">qualified leads</span>."
        </blockquote>

        <div className="space-y-2 fade-in stagger-in" style={{ transitionDelay: '0.2s' }}>
          <cite className="not-italic text-[12px] uppercase tracking-[0.35em] font-bold text-black dark:text-white">Rajiv Malhotra</cite>
          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-500">Vdigtech</p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-3 mt-8 fade-in stagger-in" style={{ transitionDelay: '0.3s' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
