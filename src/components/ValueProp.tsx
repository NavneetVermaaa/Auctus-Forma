
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
    <section className="py-24 md:py-40 px-6 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-50/30 to-transparent dark:from-neutral-900/20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-24 fade-in">
          <span className="text-[12px] tracking-[0.35em] uppercase text-neutral-400 font-medium">Why Choose Us</span>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-black dark:text-white stagger-in">
            Design. Intelligence. <span className="italic text-neutral-300 dark:text-neutral-800">Growth.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 border-t border-neutral-100 dark:border-neutral-900 pt-12 md:pt-16">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="space-y-4 slide-in-up stagger-in group"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <span className="block font-serif italic text-neutral-200 dark:text-neutral-800 text-5xl md:text-6xl float-animation" style={{ animationDelay: `${idx * 0.3}s` }}>
                0{idx + 1}
              </span>
              <h3 className="text-[15px] uppercase tracking-[0.25em] font-bold text-black dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors duration-300 smooth-border w-fit">
                {pillar.title}
              </h3>
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
