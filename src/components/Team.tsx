import navneetImg from '../assets/images/projects/Navneet.jpg';
import harshitImg from '../assets/images/projects/harshit.png';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team: React.FC = () => {
  useScrollAnimation();

  return (
    <section className="py-24 md:py-48 px-6 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-50/50 to-transparent dark:from-neutral-900/20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="lg:w-1/2 space-y-6 sm:space-y-8 fade-in">
          <span className="text-[12px] tracking-[0.35em] uppercase text-neutral-400 dark:text-neutral-600 font-medium">The Studio</span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-tight text-black dark:text-white stagger-in">
            Elite. Focused. <span className="italic text-neutral-300 dark:text-neutral-800">Human.</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-light text-lg tracking-tight leading-relaxed max-w-md fade-in stagger-in" style={{ transitionDelay: '0.1s' }}>
            A focused two-person studio combining design precision and AI engineering. We don't scale by headcount, but by results.
          </p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-6 md:gap-10 lg:gap-14">
          <div className="space-y-5 fade-in stagger-in" style={{ transitionDelay: '0.2s' }}>
            <div className="aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 overflow-hidden group rounded-lg premium-card">
              <img
                src={navneetImg}
                alt="NAVNEET"
                className="w-full h-full object-cover filter grayscale scale-100 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                style={{ objectPosition: 'top 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div>
              <h4 className="font-serif text-xl md:text-2xl tracking-tight text-black dark:text-white">NAVNEET</h4>
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-600 mt-1">Founder / Web Designer</p>
            </div>
          </div>

          <div className="space-y-5 fade-in stagger-in" style={{ transitionDelay: '0.3s' }}>
            <div className="aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 overflow-hidden group rounded-lg premium-card">
              <img
                src={harshitImg}
                alt="HARSHIT"
                className="w-full h-full object-cover filter grayscale scale-100 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                style={{ objectPosition: 'top 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div>
              <h4 className="font-serif text-xl md:text-2xl tracking-tight text-black dark:text-white">HARSHIT</h4>
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-600 mt-1">AI & CRM Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
