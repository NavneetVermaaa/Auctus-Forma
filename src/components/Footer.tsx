
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  useScrollAnimation();

  return (
    <footer className="relative bg-black dark:bg-black text-white py-16 sm:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 mb-14 sm:mb-18">
          {/* Brand Section */}
          <div className="space-y-5 sm:space-y-6 fade-in">
            <div className="font-serif text-2xl sm:text-3xl tracking-tighter font-bold text-white">
              Auctus <span className="font-normal italic text-neutral-500">Forma</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Crafting intelligent digital experiences through precision design and advanced AI engineering.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <a 
                href="https://wa.me/919322962133" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all hover:scale-105 shine-effect rounded-sm text-center"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:navneet.v0000001@gmail.com" 
                className="px-5 py-3 border border-neutral-700 hover:border-neutral-500 hover:bg-white/5 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all hover:scale-105 rounded-sm text-center"
              >
                Email
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-6 fade-in" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-xs uppercase tracking-[0.35em] font-bold text-neutral-500">Navigate</h3>
            <nav className="space-y-4">
              <a href="#work" className="block text-sm text-neutral-300 hover:text-white transition-all smooth-border w-fit">Selected Work</a>
              <a href="#services" className="block text-sm text-neutral-300 hover:text-white transition-all smooth-border w-fit">Services</a>
              <a href="#process" className="block text-sm text-neutral-300 hover:text-white transition-all smooth-border w-fit">Process</a>
              <a href="#contact" className="block text-sm text-neutral-300 hover:text-white transition-all smooth-border w-fit">Get in Touch</a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6 fade-in" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xs uppercase tracking-[0.35em] font-bold text-neutral-500">Connect</h3>
            <div className="space-y-4">
              <a href="mailto:navneet.v0000001@gmail.com" className="block text-sm text-neutral-300 hover:text-white transition-all smooth-border w-fit">
                navneet.v0000001@gmail.com
              </a>
              <a href="https://wa.me/919322962133" target="_blank" rel="noopener noreferrer" className="block text-sm text-neutral-300 hover:text-white transition-all smooth-border w-fit">
                +91 93229 62133
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-800/50 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 fade-in" style={{ transitionDelay: '0.3s' }}>
          <p className="text-xs text-neutral-600 uppercase tracking-[0.25em] text-center sm:text-left">
            © 2024 Auctus Forma. All rights reserved.
          </p>
          <div className="flex space-x-8 sm:space-x-10">
            <a href="#" className="text-xs text-neutral-600 hover:text-white transition-all uppercase tracking-[0.15em]">Privacy</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-white transition-all uppercase tracking-[0.15em]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
