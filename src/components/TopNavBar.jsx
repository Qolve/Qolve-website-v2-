import React, { useState, useEffect } from 'react';

export default function TopNavBar({ currentPage, onNavigate, onInquireClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNav = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-container-lowest/85 backdrop-blur-[40px] border-b border-white/10'
          : 'bg-white/5 backdrop-blur-[40px] border-b border-white/10 shadow-none'
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('home')}
          className="font-display-lg text-[24px] tracking-tighter text-on-surface hover:opacity-90 transition-opacity cursor-pointer text-left"
        >
          QOLVE
        </button>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-gutter">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`font-body-md text-body-md transition-all duration-300 px-4 py-2 rounded scale-[0.99] active:scale-95 cursor-pointer ${
                currentPage === link.id
                  ? 'text-primary bg-primary-container/30 border border-primary/20 backdrop-blur-md'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-md'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onInquireClick}
            className="bg-primary-container text-primary font-body-md text-body-md px-6 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:backdrop-blur-md hover:text-on-surface transition-all duration-300 scale-[0.99] active:scale-95 transition-transform cursor-pointer"
          >
            Book Consultation
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-on-surface hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-margin-mobile py-6 space-y-3 bg-surface-container-lowest/95 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full text-left font-body-md text-body-md px-4 py-3 rounded-lg flex items-center justify-between ${
                currentPage === link.id
                  ? 'text-primary bg-primary-container/30 border border-primary/20'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/10'
              }`}
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
