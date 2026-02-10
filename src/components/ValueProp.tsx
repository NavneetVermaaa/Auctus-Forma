
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ValueProp: React.FC = () => {
  useScrollAnimation();
  
  const pillars = [
    {
      title: "Luxury Web Design",
      description: "Crafted brand-first digital experiences."
    },
    {
      title: "AI Lead Systems",
      description: "Smart chat, forms & real-time automation."
    },
    {
      title: "CRM Integration",
      description: "Leads delivered exactly where sales teams work."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-24 fade-in">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight leading-none text-black dark:text-white">
            Design. Intelligence. Growth.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 border-t border-neutral-100 dark:border-neutral-900 pt-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-4 slide-in-up" style={{ transitionDelay: `${idx * 0.2}s` }}>
              <span className="block font-serif italic text-neutral-300 dark:text-neutral-800 text-5xl float-animation" style={{ animationDelay: `${idx * 0.3}s` }}>0{idx + 1}</span>
              <h3 className="text-[17px] uppercase tracking-[0.2em] font-bold text-black dark:text-white">{pillar.title}</h3>
              <p className="text-neutral-500 dark:text-neutral-400 font-light tracking-tight leading-relaxed max-w-xs text-lg">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
