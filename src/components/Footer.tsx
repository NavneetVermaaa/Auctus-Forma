
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black dark:bg-black text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="font-serif text-3xl tracking-tighter font-bold text-white">
              Auctus <span className="font-normal italic text-neutral-400">Forma</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Crafting intelligent digital experiences through precision design and advanced AI engineering.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/919322962133" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:navneet.v0000001@gmail.com" 
                className="px-4 py-2 border border-neutral-700 hover:border-neutral-500 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm"
              >
                Email
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">Navigate</h3>
            <nav className="space-y-3">
              <a href="#work" className="block text-sm text-neutral-300 hover:text-white transition-colors">Selected Work</a>
              <a href="#services" className="block text-sm text-neutral-300 hover:text-white transition-colors">Services</a>
              <a href="#process" className="block text-sm text-neutral-300 hover:text-white transition-colors">Process</a>
              <a href="#contact" className="block text-sm text-neutral-300 hover:text-white transition-colors">Get in Touch</a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">Connect</h3>
            <div className="space-y-3">
              <a href="mailto:navneet.v0000001@gmail.com" className="block text-sm text-neutral-300 hover:text-white transition-colors">
                navneet.v0000001@gmail.com
              </a>
              <a href="https://wa.me/919322962133" target="_blank" rel="noopener noreferrer" className="block text-sm text-neutral-300 hover:text-white transition-colors">
                +91 93229 62133
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">
            © 2024 Auctus Forma. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-xs text-neutral-500 hover:text-white transition-colors uppercase tracking-[0.1em]">Privacy</a>
            <a href="#" className="text-xs text-neutral-500 hover:text-white transition-colors uppercase tracking-[0.1em]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
