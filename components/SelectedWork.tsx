
import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const SelectedWork: React.FC = () => {
  useScrollAnimation();
  useParallax();
  
  const projects = [
    {
      title: "Quora - Smart Home",
      category: "IoT Platform",
      system: "Template-Based Smart Home System",
      image: "https://framerusercontent.com/images/9aoIq4K86s3G3Hoee6q2ANpmQs8.jpeg",
      url: "https://heavenly-lottery-071251.framer.app/"
    },
    {
      title: "Cafe Upper Crust",
      category: "Fine Dining",
      system: "Restaurant & Catering Platform",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=85&w=1260&h=1750",
      url: "https://cafeuppercrust.com/"
    },
    {
      title: "VDigtech",
      category: "Digital Marketing Agency",
      system: "Full-Stack Digital Solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=85&w=1260&h=1750",
      url: "https://vdigtech.com/digital-marketing/"
    },
    // {
    //   title: "Maison de Finance",
    //   category: "Luxury Finance Brand",
    //   system: "Website + AI Lead System",
    //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    // },
    // {
    //   title: "Lumière Real Estate",
    //   category: "Premium Property Group",
    //   system: "Bespoke CRM Automation",
    //   image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    // },
    // {
    //   title: "Artisanal Labs",
    //   category: "Boutique E-Commerce",
    //   system: "Intelligent Sales Funnel",
    //   image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
    // }
  ];

  return (
    <section id="work" className="py-24 md:py-48 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24 slide-in-left">
          <div className="space-y-4">
            <span className="text-[12px] tracking-[0.3em] uppercase text-neutral-400 font-medium">Portfolio</span>
            <h2 className="font-serif text-6xl md:text-8xl tracking-tighter text-black dark:text-white">Selected <span className="italic text-neutral-200 dark:text-neutral-800">Work</span></h2>
          </div>
          <p className="hidden md:block text-[13px] tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 font-light max-w-[200px] slide-in-right">
            Visual proof of digital precision and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer scale-in" style={{ transitionDelay: `${idx * 0.15}s` }} onClick={() => project.url && window.open(project.url, '_blank')}>
              <div className="overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-[4/5] mb-8 glow-on-hover relative">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  loading="eager"
                  style={{ 
                    filter: 'contrast(1.15) brightness(0.9) saturate(1.2)',
                    mixBlendMode: 'normal',
                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // High-quality themed fallbacks matching the project type
                    const fallbacks = {
                      "Quora - Smart Home": "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1750&fit=crop",
                      "Cafe Upper Crust": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1260&h=1750",
                      "VDigtech": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1260&h=1750"
                    };
                    
                    if (!target.src.includes('data:image') && fallbacks[project.title as keyof typeof fallbacks]) {
                      target.src = fallbacks[project.title as keyof typeof fallbacks];
                    } else {
                      // Final fallback to branded placeholder
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23111827;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23374151;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Playfair Display, serif' font-size='24' fill='white' font-weight='400'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`;
                    }
                  }}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-3xl tracking-tight text-black dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">{project.title}</h3>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-neutral-400 dark:text-neutral-600">{project.category}</span>
                </div>
                <p className="text-[13px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">{project.system}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
