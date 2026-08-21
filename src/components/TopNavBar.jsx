import React, { useState, useEffect } from 'react';

export default function TopNavBar({ onInquireClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-container-lowest/80 backdrop-blur-[40px] border-b border-white/10'
          : 'bg-white/5 backdrop-blur-[40px] border-b border-white/10 shadow-none'
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <a href="#" className="font-display-lg text-[24px] tracking-tighter text-on-surface hover:opacity-90 transition-opacity">
          QOLVE
        </a>
        
        <div className="hidden md:flex space-x-gutter">
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 px-4 py-2 rounded scale-[0.99] active:scale-95 transition-transform"
            href="#platform"
          >
            Platform
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 px-4 py-2 rounded scale-[0.99] active:scale-95 transition-transform"
            href="#white-label"
          >
            White-Label
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 px-4 py-2 rounded scale-[0.99] active:scale-95 transition-transform"
            href="#architecture"
          >
            Architecture
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 px-4 py-2 rounded scale-[0.99] active:scale-95 transition-transform"
            href="#enterprise"
          >
            Enterprise
          </a>
        </div>

        <button
          onClick={onInquireClick}
          className="bg-primary-container text-primary font-body-md text-body-md px-6 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:backdrop-blur-md hover:text-on-surface transition-all duration-300 scale-[0.99] active:scale-95 transition-transform cursor-pointer"
        >
          Book Consultation
        </button>
      </div>
    </nav>
  );
}
