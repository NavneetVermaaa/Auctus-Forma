
import React from 'react';

const Workflow: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-6 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter text-black dark:text-white">Unified Architecture</h2>
          <p className="text-neutral-400 dark:text-neutral-600 font-light tracking-tight text-sm uppercase tracking-[0.2em]">
            Website → AI → CRM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="p-12 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-80 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">Step 01</span>
            <div>
              <h4 className="font-serif text-2xl mb-2 text-black dark:text-white">Visitor Arrival</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">Lands on your premium, high-conversion interface.</p>
            </div>
          </div>
          
          <div className="p-12 bg-neutral-900 dark:bg-white text-white dark:text-black flex flex-col justify-between h-80 relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 dark:bg-black/5 rounded-full -mr-12 -mt-12"></div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-500 dark:text-neutral-300">Step 02</span>
            <div>
              <h4 className="font-serif text-2xl mb-2">AI Intelligence</h4>
              <p className="text-xs text-neutral-300 dark:text-neutral-700 leading-relaxed font-light">Engages, qualifies, and captures intent in real time.</p>
            </div>
          </div>

          <div className="p-12 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-80 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">Step 03</span>
            <div>
              <h4 className="font-serif text-2xl mb-2 text-black dark:text-white">CRM Delivery</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">Lead auto-pushed directly into your sales pipeline.</p>
            </div>
          </div>

          <div className="p-12 bg-white dark:bg-black border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-80 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">Step 04</span>
            <div>
              <h4 className="font-serif text-2xl mb-2 text-black dark:text-white">Conversion</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">Your sales team follows up with qualified data.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="font-serif text-2xl italic text-neutral-600 dark:text-neutral-400">
            "We design the front. We engineer the intelligence. Your business handles growth."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
