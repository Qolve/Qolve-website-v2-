import React from 'react';
import { Trees, Compass, Heart, Feather } from 'lucide-react';
import { forestAudio } from '../utils/audio';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="pt-20 pb-16 px-4 sm:px-6 border-t border-white/5 relative bg-forest-950/80">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Footer Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Mission (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-forest-800 border border-pine-frost/30 flex items-center justify-center text-pine-300">
                <Trees className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">Qolve</span>
              <span className="text-[10px] font-mono text-pine-400/80 px-2 py-0.5 rounded-full bg-forest-900 border border-forest-700/40">
                Arboreal System v2.0
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Merging Apple-grade minimalism and macOS liquid glass optics with the grounding tranquility of deep pine woods and peat earth.
            </p>
            <div className="text-[11px] font-mono text-stone-500">
              Calibrated to Caledonian Pine Forest — 56°48'N, 4°56'W
            </div>
          </div>

          {/* Navigation Links (Span 7) */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-stone-300 tracking-wider">
                System
              </div>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><a href="#vision" onClick={() => forestAudio.playClick()} className="hover:text-pine-300 transition-colors">Vision</a></li>
                <li><a href="#ecosystem" onClick={() => forestAudio.playClick()} className="hover:text-pine-300 transition-colors">Ecosystem</a></li>
                <li><a href="#comparison" onClick={() => forestAudio.playClick()} className="hover:text-pine-300 transition-colors">Comparison</a></li>
                <li><a href="#studio" onClick={() => forestAudio.playClick()} className="hover:text-pine-300 transition-colors">Glass Studio</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-stone-300 tracking-wider">
                Botanical
              </div>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><span className="hover:text-pine-300 cursor-pointer">Pine Needle</span></li>
                <li><span className="hover:text-pine-300 cursor-pointer">Highland Fern</span></li>
                <li><span className="hover:text-pine-300 cursor-pointer">Ancient Peat</span></li>
                <li><span className="hover:text-pine-300 cursor-pointer">Amber Resin</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-stone-300 tracking-wider">
                Access
              </div>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <button
                    onClick={() => {
                      forestAudio.playClick();
                      onOpenModal();
                    }}
                    className="hover:text-pine-300 transition-colors cursor-pointer text-left"
                  >
                    Priority Waitlist
                  </button>
                </li>
                <li><a href="#specs" onClick={() => forestAudio.playClick()} className="hover:text-pine-300 transition-colors">Technical Spec</a></li>
                <li><span className="text-stone-500 font-mono text-[11px]">Private Preview</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Ethics Tier */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} Qolve Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-pine-400">
              <span className="w-1.5 h-1.5 rounded-full bg-pine-400 animate-pulse" />
              100% Sub-milliwatt WebGL
            </span>
            <span>Zero Blue-Light Fatigue</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
