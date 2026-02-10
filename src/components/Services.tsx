
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
    <section id="services" className="py-24 md:py-48 px-6 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-0">
        <div className="md:w-1/3 slide-in-left">
          <span className="text-[12px] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 font-medium">Services</span>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl tracking-tighter leading-[0.9] text-black dark:text-white">Curated <br /> Capabilities</h2>
        </div>
        
        <div className="md:w-2/3 space-y-24 md:pl-24">
          {services.map((service, idx) => (
            <div key={idx} className="group border-b border-neutral-200 dark:border-neutral-800 pb-12 last:border-0 transition-all fade-in" style={{ transitionDelay: `${idx * 0.2}s` }}>
              <h3 className="font-serif text-4xl md:text-6xl tracking-tight mb-4 text-black dark:text-white group-hover:pl-4 transition-all duration-500 hover:text-neutral-600 dark:hover:text-neutral-300">
                {service.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 font-light max-w-md text-base tracking-tight leading-relaxed group-hover:pl-2 transition-all duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
