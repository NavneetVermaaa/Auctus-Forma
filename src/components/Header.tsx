
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  const navItems = [
    { id: 'work', label: 'Selected Work' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const sections = navItems.map(item => document.getElementById(item.id));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getLinkClass = (sectionId: string) => {
    const baseClass = 'transition-colors';
    const activeClass = 'text-black dark:text-white';
    const inactiveClass = 'hover:text-black dark:hover:text-white';
    return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`;
  };

  return (
    <>
      <nav 
        id="navbar" 
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-full ${
          scrolled 
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm py-4'
        }`}
        style={{
          transform: scrolled ? 'translateX(-50%) translateY(0) scale(0.98)' : 'translateX(-50%) translateY(0) scale(1)',
        }}
      >
        <div className="nav-container max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <div className="nav-logo font-serif text-xl sm:text-2xl tracking-tighter uppercase font-bold text-black dark:text-white">
            Auctus<span className="font-normal italic text-neutral-400 dark:text-neutral-600">Forma</span>
          </div>
          
          <ul className="nav-links hidden md:flex space-x-8 lg:space-x-12 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={getLinkClass(item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

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
      </nav>

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
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      onClick={toggleMobileMenu}
                      className={`text-lg uppercase tracking-[0.2em] font-medium transition-colors ${
                        activeSection === item.id 
                          ? 'text-black dark:text-white' 
                          : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
