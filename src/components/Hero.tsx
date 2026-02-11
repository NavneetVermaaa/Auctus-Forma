import heroVideo from '../assets/videos/hero.mp4';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  useScrollAnimation();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 overflow-hidden bg-white dark:bg-black transition-colors duration-500 z-10">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23000000'/%3E%3C/svg%3E"
      />

      {/* Subtle background texture with parallax */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] dark:invert parallax" data-speed="0.3"></div>

      <div className="max-w-5xl w-full text-center space-y-6 sm:space-y-8">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[96px] xl:text-[110px] leading-[0.9] tracking-tighter text-black dark:text-white font-normal fade-in">
          <span className="inline-block">Premium Websites</span> <br />
          <span className="inline-block">That Convert Attention</span> <br />
          Into <span className="italic text-neutral-300 dark:text-neutral-700">Leads</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-500 dark:text-neutral-400 font-light tracking-tight leading-relaxed fade-in" style={{ transitionDelay: '0.2s' }}>
          Design-led digital experiences with intelligence-first systems <br className="hidden sm:block" />
          that feed directly into your CRM.
        </p>

        <div className="pt-4 sm:pt-6 fade-in" style={{ transitionDelay: '0.4s' }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-black text-white dark:bg-white dark:text-black text-[12px] sm:text-[14px] md:text-[15px] uppercase tracking-[0.3em] font-medium overflow-hidden transition-all hover:pr-8 sm:hover:pr-12 glow-on-hover float-animation"
          >
            <span className="relative z-10">Request a Collaboration</span>
            <span className="absolute right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-[10px] sm:text-[12px] tracking-[0.3em] uppercase text-neutral-300 dark:text-neutral-700 animate-pulse fade-in" style={{ transitionDelay: '0.6s' }}>
        Scroll to discover
      </div>
    </section>
  );
};

export default Hero;
