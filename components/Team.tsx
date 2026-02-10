
import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 space-y-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-600">The Studio</span>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter leading-tight text-black dark:text-white">Elite. Focused. <br /> Human.</h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-light text-lg tracking-tight leading-relaxed max-w-md">
            A focused two-person studio combining design precision and AI engineering. We don't scale by headcount, but by results.
          </p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 overflow-hidden group">
              <img 
                src="/assets/images/projects/20231203_123046.jpg" 
                alt="NAVNEET" 
                className="w-full h-full object-cover filter grayscale scale-100 transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110" 
                style={{objectPosition: 'top 30%'}}
              />
            </div>
            <div>
              <h4 className="font-serif text-xl tracking-tight text-black dark:text-white">NAVNEET</h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 mt-1">Founder / Web Designer</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 overflow-hidden group">
              <img 
                src="/assets/images/projects/harshit.png" 
                alt="HARSHIT" 
                className="w-full h-full object-cover filter grayscale scale-100 transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110" 
                style={{objectPosition: 'top 30%'}}
              />
            </div>
            <div>
              <h4 className="font-serif text-xl tracking-tight text-black dark:text-white">HARSHIT</h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 mt-1">AI & CRM Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
