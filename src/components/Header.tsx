import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', id: 'accueil' },
    { name: 'Projets', id: 'projets' },
    { name: 'Compétences', id: 'competences' },
    { name: 'Témoignages', id: 'temoignages' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          id="header-logo-btn"
          onClick={() => handleScrollTo('accueil')}
          className="group flex items-center space-x-2 text-xl font-bold tracking-tight text-gray-900 cursor-pointer"
        >
          <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-mono text-sm transition-transform group-hover:scale-105">
            JK
          </span>
          <span className="font-sans">
            {personalInfo.name.split(' ')[0]}
            <span className="text-blue-600">.dev</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-item-${item.id}`}
              onClick={() => handleScrollTo(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-50/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            id="nav-cta-btn"
            onClick={() => handleScrollTo('contact')}
            className="ml-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full flex items-center space-x-1 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
          >
            <span>Me Contacter</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden absolute left-0 right-0"
          >
            <div className="px-6 py-6 space-y-3 flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                id="mobile-nav-cta-btn"
                onClick={() => handleScrollTo('contact')}
                className="w-full mt-4 px-5 py-3 bg-blue-600 text-white text-base font-medium rounded-xl flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Me Contacter</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
