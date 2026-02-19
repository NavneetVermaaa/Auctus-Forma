
import React from 'react';
import { useScrollAnimation, useParallax, useMouseMove } from '../hooks/useScrollAnimation';
import quoraImg from '../assets/images/projects/quora.png';
import vdigtechImg from '../assets/images/projects/vdigtech.png';

const SelectedWork: React.FC = () => {
  useScrollAnimation();
  useParallax();
  const mousePosition = useMouseMove();
  
  const projects = [
    {
      title: "Quora - Smart Home",
      category: "IoT Platform",
      system: "Template-Based Smart Home System",
      image: quoraImg,
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
      image: vdigtechImg,
      url: "https://vdigtech.com/digital-marketing/"
    },
  ];

  return (
    <section id="work" className="py-24 md:py-48 px-6 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-50/50 to-transparent dark:from-neutral-900/30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent dark:from-black/50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20 md:mb-28 slide-in-left">
          <div className="space-y-4">
            <span className="text-[12px] tracking-[0.35em] uppercase text-neutral-400 font-medium fade-in">Portfolio</span>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter text-black dark:text-white stagger-in">
              Selected <span className="italic text-neutral-200 dark:text-neutral-800">Work</span>
            </h2>
          </div>
          <p className="hidden md:block text-[13px] tracking-[0.25em] uppercase text-neutral-400 dark:text-neutral-600 font-light max-w-[220px] slide-in-right fade-in">
            Visual proof of digital precision and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer scale-in stagger-in premium-card rounded-lg overflow-hidden"
              style={{ transitionDelay: `${idx * 0.15}s` }}
              onClick={() => project.url && window.open(project.url, '_blank')}
            >
              <div 
                className="overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-[4/5] mb-6 relative image-zoom-hover"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${mousePosition.y * -2}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                  loading="eager"
                  style={{ 
                    filter: 'contrast(1.15) brightness(0.9) saturate(1.2)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const fallbacks = {
                      "Quora - Smart Home": "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1750&fit=crop",
                      "Cafe Upper Crust": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1260&h=1750",
                      "VDigtech": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1260&h=1750"
                    };
                    
                    if (!target.src.includes('data:image') && fallbacks[project.title as keyof typeof fallbacks]) {
                      target.src = fallbacks[project.title as keyof typeof fallbacks];
                    } else {
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23111827;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23374151;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Playfair Display, serif' font-size='24' fill='white' font-weight='400'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`;
                    }
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                
                {/* View project indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="px-2 pb-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-black dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300 smooth-border">
                    {project.title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-600">{project.category}</span>
                </div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mt-1">{project.system}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
