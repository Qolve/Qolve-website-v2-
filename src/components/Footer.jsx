import React from 'react';

export default function Footer({ onNavigate, onInquireClick }) {
  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase tracking-widest border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-md">
      <button
        onClick={() => handleNav('home')}
        className="font-headline-lg text-primary mb-6 md:mb-0 hover:opacity-80 transition-opacity cursor-pointer text-left"
      >
        QOLVE
      </button>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-80 hover:opacity-100 transition-opacity">
        <button
          onClick={() => handleNav('home')}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase tracking-widest cursor-pointer"
        >
          Overview
        </button>
        <button
          onClick={() => handleNav('products')}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase tracking-widest cursor-pointer"
        >
          Products
        </button>
        <button
          onClick={() => handleNav('team')}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase tracking-widest cursor-pointer"
        >
          Team
        </button>
        <button
          onClick={() => handleNav('contact')}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase tracking-widest cursor-pointer"
        >
          Contact Us
        </button>
        <button
          onClick={onInquireClick}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase tracking-widest cursor-pointer"
        >
          Book Consultation
        </button>
      </div>
      
      <div className="mt-6 md:mt-0 text-on-secondary-fixed-variant">
        © 2024 QOLVE TECHNOLOGIES. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
