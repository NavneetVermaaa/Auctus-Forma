
import React, { useState } from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="font-serif text-xl sm:text-2xl tracking-tighter uppercase font-bold text-black dark:text-white">
            Auctus <span className="font-normal italic text-neutral-400 dark:text-neutral-600">Forma</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 lg:space-x-12 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-500 dark:text-neutral-400">
            <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Selected Work</a>
            <a href="#services" className="hover:text-black dark:hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-black dark:hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm9-9a1 1 0 0 1 0 2h-2a1 1 0 1 1 0-2h2zM5 12a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h2zm12.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM8.757 16.243a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zm6.485 0a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414zM7.343 7.343a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L7.343 8.757a1 1 0 0 1 0-1.414z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.046-.92-.136-1.364a5.5 5.5 0 0 1-7.5-7.5A9.027 9.027 0 0 0 12 3zm0 2a7 7 0 0 1 6.5 4.307 3.5 3.5 0 0 1 1.193 4.193A7 7 0 1 1 12 5z"/>
                </svg>
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMobileMenu}></div>
          <div className="fixed right-0 top-0 h-full w-64 max-w-full bg-white dark:bg-black shadow-xl">
            <div className="flex flex-col p-6 space-y-6 h-full">
              <div className="flex justify-end pt-2">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex flex-col space-y-6 mt-8">
                <a 
                  href="#work" 
                  onClick={toggleMobileMenu}
                  className="text-lg uppercase tracking-[0.2em] font-medium text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
                >
                  Selected Work
                </a>
                <a 
                  href="#services" 
                  onClick={toggleMobileMenu}
                  className="text-lg uppercase tracking-[0.2em] font-medium text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
                >
                  Services
                </a>
                <a 
                  href="#process" 
                  onClick={toggleMobileMenu}
                  className="text-lg uppercase tracking-[0.2em] font-medium text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
                >
                  Process
                </a>
                <a 
                  href="#contact" 
                  onClick={toggleMobileMenu}
                  className="text-lg uppercase tracking-[0.2em] font-medium text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
