import React from 'react';

export default function Footer({ onInquireClick }) {
  return (
    <footer className="w-full bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase tracking-widest border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-md">
      <div className="font-headline-lg text-primary mb-6 md:mb-0">
        QOLVE
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-80 hover:opacity-100 transition-opacity">
        <a className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200" href="#privacy">
          Privacy Policy
        </a>
        <a className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200" href="#ethical-sourcing">
          Ethical Sourcing
        </a>
        <button
          onClick={onInquireClick}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase tracking-widest cursor-pointer"
        >
          Contact
        </button>
        <a className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200" href="#showroom">
          Showroom
        </a>
      </div>
      
      <div className="mt-6 md:mt-0 text-on-secondary-fixed-variant">
        © 2024 QOLVE LUXURY ECO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
