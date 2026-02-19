
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Workflow: React.FC = () => {
  useScrollAnimation();
  
  return (
    <section className="py-24 md:py-48 px-6 bg-white dark:bg-black overflow-hidden transition-colors duration-500 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-28 space-y-4 fade-in">
          <span className="text-[12px] tracking-[0.35em] uppercase text-neutral-400 font-medium">How It Works</span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter text-black dark:text-white stagger-in">
            Unified Architecture
          </h2>
          <p className="text-neutral-500 dark:text-neutral-500 font-light tracking-[0.25em] text-xs sm:text-sm uppercase mt-4 fade-in" style={{ transitionDelay: '0.1s' }}>
            Website → AI → CRM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent -translate-y-1/2 z-0"></div>
          
          <div className="p-8 md:p-10 lg:p-12 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-72 md:h-80 transition-all duration-500 hover:border-neutral-300 dark:hover:border-neutral-700 premium-card rounded-xl fade-in stagger-in" style={{ transitionDelay: '0.1s' }}>
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-neutral-400">Step 01</span>
            <div>
              <h4 className="font-serif text-xl md:text-2xl mb-3 text-black dark:text-white">Visitor Arrival</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">Lands on your premium, high-conversion interface.</p>
            </div>
          </div>
          
          <div className="p-8 md:p-10 lg:p-12 bg-black dark:bg-white text-white dark:text-black flex flex-col justify-between h-72 md:h-80 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] premium-card rounded-xl fade-in stagger-in" style={{ transitionDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 dark:bg-black/5 rounded-full -mr-14 -mt-14"></div>
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-neutral-500 dark:text-neutral-400">Step 02</span>
            <div>
              <h4 className="font-serif text-xl md:text-2xl mb-3">AI Intelligence</h4>
              <p className="text-xs text-neutral-400 dark:text-neutral-600 leading-relaxed font-light">Engages, qualifies, and captures intent in real time.</p>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:p-12 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-72 md:h-80 transition-all duration-500 hover:border-neutral-300 dark:hover:border-neutral-700 premium-card rounded-xl fade-in stagger-in" style={{ transitionDelay: '0.3s' }}>
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-neutral-400">Step 03</span>
            <div>
              <h4 className="font-serif text-xl md:text-2xl mb-3 text-black dark:text-white">CRM Delivery</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">Lead auto-pushed directly into your sales pipeline.</p>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:p-12 bg-white dark:bg-black border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-72 md:h-80 transition-all duration-500 hover:border-neutral-300 dark:hover:border-neutral-700 premium-card rounded-xl fade-in stagger-in" style={{ transitionDelay: '0.4s' }}>
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-neutral-400">Step 04</span>
            <div>
              <h4 className="font-serif text-xl md:text-2xl mb-3 text-black dark:text-white">Conversion</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">Your sales team follows up with qualified data.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center max-w-2xl mx-auto fade-in stagger-in" style={{ transitionDelay: '0.5s' }}>
          <p className="font-serif text-xl md:text-2xl italic text-neutral-500 dark:text-neutral-500">
            "We design the front. We engineer the intelligence. Your business handles growth."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
