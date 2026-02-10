
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    "Strategy & Brand Direction",
    "Design & User Experience",
    "AI & CRM Integration",
    "Launch & Optimization"
  ];

  return (
    <section id="process" className="py-24 md:py-48 px-6 bg-black dark:bg-[#050505] text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter text-center">A Structured Process</h2>
          <p className="mt-6 text-center text-neutral-500 dark:text-neutral-400 font-light tracking-tight max-w-xl mx-auto">
            Designed to deliver clarity, not chaos. A journey from initial vision to high-performance intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative px-4 text-center group">
              <div className="font-serif text-8xl md:text-[120px] leading-none text-white/5 dark:text-white-[0.02] absolute -top-12 left-1/2 -translate-x-1/2 select-none group-hover:text-white/10 dark:group-hover:text-white/5 transition-all">
                0{idx + 1}
              </div>
              <h4 className="relative z-10 text-[11px] uppercase tracking-[0.3em] font-medium pt-8">
                {step}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
