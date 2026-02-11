import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-48 px-4 sm:px-6 bg-neutral-50 dark:bg-neutral-900/30 border-y border-neutral-100 dark:border-neutral-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
        <div className="flex justify-center">
          <div className="w-8 sm:w-10 md:w-12 h-[1px] bg-neutral-300 dark:bg-neutral-700"></div>
        </div>

        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic tracking-tight text-black dark:text-white leading-snug">
          "The website didn't just look premium — it started generating <span className="text-neutral-300 dark:text-neutral-700">qualified leads</span> ."
        </blockquote>

        <div className="space-y-1">
          <cite className="not-italic text-[11px] uppercase tracking-[0.3em] font-bold text-black dark:text-white">Rajiv Malhotra</cite>
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">Vdigtech</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;