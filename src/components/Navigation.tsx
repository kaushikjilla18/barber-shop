import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: 'Home', to: 'home' },
    { text: 'About', to: 'about' },
    { text: 'Services', to: 'services' },
    { text: 'Gallery', to: 'gallery' },
    { text: 'Testimonials', to: 'testimonials' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`text-xl font-display font-bold ${
              isScrolled ? 'text-primary-800' : 'text-white'
            }`}
          >
            <span className="flex items-center">
              <svg 
                className={`w-6 h-6 mr-3 ${isScrolled ? 'text-primary-600' : 'text-primary-400'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 10V3L4 14h7v7l9-11h-7z" 
                />
              </svg>
              Classic Cuts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-secondary-600 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link
              to="booking"
              smooth={true}
              duration={500}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-secondary-600 hover:text-primary-600'
                : 'text-white hover:text-primary-400'
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block text-secondary-600 hover:text-primary-600 text-sm font-medium py-2"
                >
                  {link.text}
                </Link>
              ))}
              <Link
                to="booking"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-lg text-sm font-medium mt-2"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation; 