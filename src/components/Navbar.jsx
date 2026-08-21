import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X, Compass, Feather } from 'lucide-react';
import { forestAudio } from '../utils/audio';

export default function Navbar({ activeSection, onOpenModal, isSoundOn, setIsSoundOn }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    forestAudio.playClick();
    if (isSoundOn) {
      forestAudio.stop();
      setIsSoundOn(false);
    } else {
      forestAudio.start();
      setIsSoundOn(true);
    }
  };

  const navItems = [
    { label: 'Vision', href: '#vision' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Glass Studio', href: '#studio' },
    { label: 'Specs', href: '#specs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-500">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-forest-900/60 backdrop-blur-2xl border border-white/10 shadow-liquid-lg py-2 scale-[0.98]'
            : 'bg-forest-900/40 backdrop-blur-xl border border-white/8 shadow-liquid'
        }`}
        style={{
          boxShadow: scrolled
            ? '0 20px 40px -10px rgba(0,0,0,0.7), inset 0 1px 1px 0 rgba(255,255,255,0.2)'
            : '0 10px 30px -5px rgba(0,0,0,0.5), inset 0 1px 1px 0 rgba(255,255,255,0.12)',
        }}
      >
        {/* Brand Monogram */}
        <a
          href="#"
          onClick={() => forestAudio.playClick()}
          className="flex items-center gap-2.5 text-white/95 group"
        >
          <div className="w-8 h-8 rounded-full bg-forest-800/80 border border-pine-frost/20 flex items-center justify-center relative overflow-hidden shadow-inner group-hover:border-pine-frost/40 transition-colors">
            {/* Subtle inner pine gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-600/30 via-transparent to-earth-500/20" />
            <svg
              className="w-4 h-4 text-pine-300 relative z-10 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L4 12h5l-3 7h12l-3-7h5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-sm text-stone-100 flex items-center gap-1.5">
              Qolve
              <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded-full bg-forest-800/60 border border-forest-600/30 text-pine-300">
                v2.0
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-full border border-white/5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => forestAudio.playClick()}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                activeSection === item.label.toLowerCase()
                  ? 'bg-forest-700/60 text-white shadow-sm border border-white/10'
                  : 'text-stone-300/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions: Sound Ambient Toggle & Reserve Glass CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Soundscape Controller */}
          <button
            onClick={toggleSound}
            title={isSoundOn ? "Mute Forest Atmosphere" : "Enable Pine & Fern Atmosphere"}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center gap-1.5 text-xs ${
              isSoundOn
                ? 'bg-pine-medium/80 border-pine-frost/40 text-pine-200 shadow-liquid-glow-pine'
                : 'bg-black/20 border-white/8 text-stone-400 hover:text-stone-200 hover:border-white/15'
            }`}
          >
            {isSoundOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-pine-300 animate-pulse" />
                <span className="hidden sm:inline font-mono text-[10px] text-pine-200">
                  Audio ON
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline font-mono text-[10px] text-stone-400">
                  Atmosphere
                </span>
              </>
            )}
          </button>

          {/* Primary Liquid Button */}
          <button
            onClick={() => {
              forestAudio.playClick();
              onOpenModal();
            }}
            className="liquid-button px-4 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5 relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-pine-300" />
              <span>Experience</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-black/30 border border-white/10 text-stone-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-forest-900/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl pointer-events-auto flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  forestAudio.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-2xl text-sm font-medium text-stone-200 hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-pine-400">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 text-xs text-stone-300 bg-white/5 px-3 py-2 rounded-xl"
            >
              {isSoundOn ? <Volume2 className="w-4 h-4 text-pine-300" /> : <VolumeX className="w-4 h-4" />}
              <span>{isSoundOn ? 'Soundscape Active' : 'Soundscape Muted'}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="liquid-button px-4 py-2 rounded-xl text-xs font-medium text-white"
            >
              Get Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
