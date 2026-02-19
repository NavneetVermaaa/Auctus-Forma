import heroVideo from '../assets/videos/hero f.mp4';

import React from 'react';
import { useScrollAnimation, useMouseMove } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  useScrollAnimation();
  const mousePosition = useMouseMove();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 overflow-hidden bg-white dark:bg-black transition-colors duration-500 z-10">
      {/* Video Background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-80"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23000000'/%3E%3C/svg%3E"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/80 dark:from-black/40 dark:via-transparent dark:to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 dark:from-black/20 dark:via-transparent dark:to-black/20"></div>
      </div>

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none parallax"
        data-speed="0.2"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
        }}
      ></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-10"
          style={{
            background: 'radial-gradient(circle, currentColor 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.5s ease-out',
            color: '#000',
          }}
        ></div>
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, currentColor 0%, transparent 70%)',
            bottom: '20%',
            right: '15%',
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            transition: 'transform 0.5s ease-out',
            color: '#666',
          }}
        ></div>
      </div>

      <div className="max-w-5xl w-full text-center space-y-8 sm:space-y-10 relative z-10">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[96px] xl:text-[110px] leading-[0.9] tracking-tighter text-black dark:text-white font-normal fade-in">
          <span className="inline-block text-reveal"><span>Premium Websites</span></span> <br />
          <span className="inline-block text-reveal" style={{ transitionDelay: '0.1s' }}><span>That Convert Attention</span></span> <br />
          <span className="inline-block text-reveal" style={{ transitionDelay: '0.2s' }}>
            Into <span className="italic text-neutral-300 dark:text-neutral-600">Leads</span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-500 dark:text-neutral-400 font-light tracking-tight leading-relaxed fade-in stagger-in" style={{ transitionDelay: '0.3s' }}>
          Design-led digital experiences with intelligence-first systems <br className="hidden sm:block" />
          that feed directly into your CRM.
        </p>

        <div className="pt-6 sm:pt-8 fade-in stagger-in" style={{ transitionDelay: '0.5s' }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-black text-white dark:bg-white dark:text-black text-[11px] sm:text-[13px] md:text-[14px] uppercase tracking-[0.35em] font-medium overflow-hidden transition-all hover:pr-16 sm:hover:pr-20 glow-on-hover shine-effect float-animation"
          >
            <span className="relative z-10">Request a Collaboration</span>
            <span className="absolute right-5 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 fade-in stagger-in" style={{ transitionDelay: '0.7s' }}>
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-neutral-300 to-transparent dark:from-neutral-700"></div>
        <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-neutral-400 dark:text-neutral-600 animate-pulse-luxury">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;
