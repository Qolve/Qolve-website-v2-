import React from 'react';

export default function HeroSection({ onExploreClick, onViewFilmClick }) {
  return (
    <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image with Cinematic Misty Forest */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/50 via-transparent to-surface-container-lowest z-10" />
        <img
          className="w-full h-full object-cover object-center filter brightness-50"
          alt="A sweeping, high-contrast landscape of a dense, dark pine forest shrouded in thick morning mist."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3_IwyDDEu2iR0PwxGnCgEkEiC3xbnNva-n67iqLUKtETwU_ATPbichJVinPzVQ-syg9Lnufus6zfRkQr06ixrjk_xW09BItgb4N8W4x-xaBBLh2WDEVyRNui4h3xEjdrRbhaTLuz1oUEKjkmtJ3gSMs8pSGGEYsWUIqo8GfGpGo_XZXxoAvX1PgHKjFjNB2YjOG6QHXLDdNf0sAeV4ImqzwSKhE6Ty8JC7vi4NOgUkm9wt57iT4YLHQ"
        />
      </div>

      {/* Glass Hero Card */}
      <div className="relative z-20 w-[90%] md:w-[70%] max-w-[800px] glass-panel rounded-2xl p-8 md:p-16 text-center transform translate-y-8 opacity-0 animate-fade-up">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-6 text-glow">
          The Architecture of Nature
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto mb-10">
          Precision engineering meets raw, untamed elements. Experience technology that breathes with the earth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={onExploreClick}
            className="bg-primary-container text-on-primary-container border border-white/10 px-8 py-4 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all w-full sm:w-auto cursor-pointer"
          >
            Explore Collection
          </button>
          <button
            onClick={onViewFilmClick}
            className="glass-panel px-8 py-4 rounded-lg font-body-md text-body-md text-on-surface hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">play_arrow</span> View Film
          </button>
        </div>
      </div>
    </header>
  );
}
