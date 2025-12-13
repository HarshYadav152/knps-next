"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NAV_LINKS, SCHOOL_DATA } from '../constants';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setBannerVisible(y < 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTop = bannerVisible ? 'top-10 md:top-12' : 'top-0';

  return (
    <>
      {/* Admission Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: bannerVisible ? 1 : 0, y: bannerVisible ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full z-50 bg-gradient-to-r from-gold-500 to-gold-600 py-2 px-4 text-center"
      >
        <span className="text-royal-950 text-sm md:text-base font-semibold tracking-wide">
          🎓 Admissions Open for 2025-2026 | Apply Now!
        </span>
      </motion.div>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${navTop} ${
          scrolled || isOpen
            ? 'bg-royal-950/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <img src="/logo.png" alt="knps" />
              </div>
              <span className="font-serif font-bold text-lg md:text-xl tracking-wide text-white">
                {SCHOOL_DATA.name}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative group px-3 py-2 text-sm font-medium text-gray-100 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-royal-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-royal-950 border-t border-royal-900 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner h-screen flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 rounded-lg text-lg font-medium text-gray-100 hover:text-white hover:bg-royal-900 border-l-4 border-transparent hover:border-gold-500 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;