
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="space-y-6 text-center md:text-left">
          <div className="font-serif text-2xl tracking-tighter uppercase font-bold text-black dark:text-white">
            Auctus <span className="font-normal italic text-neutral-400 dark:text-neutral-600">Forma</span>
          </div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 max-w-[200px] leading-relaxed">
            Design precision & AI Engineering.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-32 text-center md:text-left">
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-900 dark:text-neutral-100">Inquiries</h5>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.1em]">hello@auctusforma.com</p>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-900 dark:text-neutral-100">Studio</h5>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.1em]">London / Paris</p>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-900 dark:text-neutral-100">Social</h5>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="#" className="text-[11px] text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white uppercase tracking-[0.1em]">LN</a>
              <a href="#" className="text-[11px] text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white uppercase tracking-[0.1em]">IG</a>
              <a href="#" className="text-[11px] text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white uppercase tracking-[0.1em]">TW</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 flex justify-between items-center pt-8 border-t border-neutral-50 dark:border-neutral-950">
        <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-300 dark:text-neutral-800">© 2024 Auctus Forma Studio. All rights reserved.</p>
        <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-300 dark:text-neutral-800">Privacy / Terms</p>
      </div>
    </footer>
  );
};

export default Footer;
