
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  useScrollAnimation();
  
  const services = [
    {
      title: "Brand & Business Websites",
      description: "High-end websites built for trust, clarity, and authority."
    },
    {
      title: "AI Lead Capture Systems",
      description: "AI chat & automation that qualifies visitors in real time."
    },
    {
      title: "CRM Integration & Automation",
      description: "Seamless delivery of leads into HubSpot, Zoho, or custom systems."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-48 px-6 bg-neutral-50 dark:bg-neutral-950/30 transition-colors duration-500 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent dark:from-white/5 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-neutral-100/50 to-transparent dark:from-neutral-900/30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-0">
        <div className="md:w-1/3 slide-in-left">
          <span className="text-[12px] tracking-[0.35em] uppercase text-neutral-400 dark:text-neutral-500 font-medium fade-in">Services</span>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl tracking-tighter leading-[0.9] text-black dark:text-white stagger-in">
            Curated <br /> Capabilities
          </h2>
        </div>
        
        <div className="md:w-2/3 space-y-24 md:pl-24">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group border-b border-neutral-200 dark:border-neutral-800 pb-12 last:border-0 transition-all fade-in stagger-in premium-card rounded-lg p-6 -mx-6"
              style={{ transitionDelay: `${idx * 0.15}s`, cursor: 'pointer' }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-serif text-4xl md:text-6xl tracking-tight mb-4 text-black dark:text-white group-hover:pl-4 transition-all duration-500 hover:text-neutral-600 dark:hover:text-neutral-300 smooth-border inline-block">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 font-light max-w-md text-base tracking-tight leading-relaxed group-hover:pl-2 transition-all duration-500">
                    {service.description}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <svg className="w-8 h-8 text-neutral-400 dark:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
