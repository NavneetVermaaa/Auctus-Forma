
import React from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-serif text-2xl tracking-tighter uppercase font-bold text-black dark:text-white">
          Auctus <span className="font-normal italic text-neutral-400 dark:text-neutral-600">Forma</span>
        </div>
        
        <div className="flex items-center space-x-12">
          <nav className="hidden md:flex space-x-12 text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-500 dark:text-neutral-400">
            <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Selected Work</a>
            <a href="#services" className="hover:text-black dark:hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-black dark:hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </nav>
          
          <button 
            onClick={toggleTheme}
            className="text-[10px] tracking-[0.3em] uppercase border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <a 
          href="#contact" 
          className="md:hidden text-[10px] tracking-[0.2em] border-b border-black dark:border-white pb-1 uppercase text-black dark:text-white"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
