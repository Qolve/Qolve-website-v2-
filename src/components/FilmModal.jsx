import React from 'react';

export default function FilmModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
      />

      <div className="relative z-10 w-full max-w-3xl glass-panel rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl animate-fade-up bg-surface-container-low/95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1.5 rounded-full hover:bg-white/10 transition-colors z-20 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20">
              Architecture Overview
            </span>
            <span className="text-xs font-label-sm text-on-surface-variant uppercase tracking-wider">
              Multi-Tenant System Blueprint
            </span>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center group bg-black/60">
            <img
              className="w-full h-full object-cover filter brightness-50"
              alt="Misty pine forest landscape"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3_IwyDDEu2iR0PwxGnCgEkEiC3xbnNva-n67iqLUKtETwU_ATPbichJVinPzVQ-syg9Lnufus6zfRkQr06ixrjk_xW09BItgb4N8W4x-xaBBLh2WDEVyRNui4h3xEjdrRbhaTLuz1oUEKjkmtJ3gSMs8pSGGEYsWUIqo8GfGpGo_XZXxoAvX1PgHKjFjNB2YjOG6QHXLDdNf0sAeV4ImqzwSKhE6Ty8JC7vi4NOgUkm9wt57iT4YLHQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
            
            <div className="absolute flex flex-col items-center gap-3 text-center px-4">
              <div className="w-16 h-16 rounded-full bg-primary-container/60 border border-primary/40 backdrop-blur-md flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">play_arrow</span>
              </div>
              <div>
                <h4 className="font-headline-lg text-headline-lg text-on-surface text-glow">The Qolve Multi-Tenant Architecture</h4>
                <p className="font-body-md text-sm text-on-surface-variant max-w-md mt-1">
                  Inspect how automated custom CNAME routing, isolated tenant data partitions, and dynamic tokenized stylesheets operate seamlessly at enterprise scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
