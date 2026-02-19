
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Process: React.FC = () => {
  useScrollAnimation();
  
  const steps = [
    "Strategy & Brand Direction",
    "Design & User Experience",
    "AI & CRM Integration",
    "Launch & Optimization"
  ];

  return (
    <section id="process" className="py-24 md:py-48 px-6 bg-black dark:bg-[#030303] text-white transition-colors duration-500 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 md:mb-28 text-center">
          <span className="text-[12px] tracking-[0.35em] uppercase text-neutral-500 font-medium fade-in stagger-in">Our Approach</span>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter text-center fade-in stagger-in" style={{ transitionDelay: '0.1s' }}>
            A Structured Process
          </h2>
          <p className="mt-6 text-center text-neutral-500 dark:text-neutral-400 font-light tracking-tight max-w-xl mx-auto fade-in stagger-in" style={{ transitionDelay: '0.2s' }}>
            Designed to deliver clarity, not chaos. A journey from initial vision to high-performance intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-0 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative px-4 text-center group fade-in stagger-in"
              style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="font-serif text-8xl md:text-[120px] lg:text-[140px] leading-none text-white/[0.03] dark:text-white/[0.02] absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 select-none group-hover:text-white/[0.06] dark:group-hover:text-white/[0.04] transition-all duration-700">
                0{idx + 1}
              </div>
              
              <div className="relative z-10 pt-12 md:pt-16">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-500">
                  <div className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-white group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
                  {step}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
