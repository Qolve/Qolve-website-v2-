import React from 'react';
import { Compass, ShieldCheck, Cpu, Leaf, Sparkles } from 'lucide-react';
import { forestAudio } from '../utils/audio';

export default function Philosophy() {
  const pillars = [
    {
      icon: Leaf,
      tag: '01 • BOTANICAL SERENITY',
      title: 'Old-Growth Quiet',
      desc: 'Modern digital surfaces are loud, glaring, and synthetic. Arboreal Glass replaces harsh flat greys with deeply restorative pine greens, fern gradients, and rich peat earth.',
    },
    {
      icon: Sparkles,
      tag: '02 • OPTICAL RESTRAINT',
      title: 'Subsurface Refraction',
      desc: 'Liquid glass is not a decorative overlay. It is a functional physical medium that layers information hierarchy through real frosted dispersion and specular rim geometry.',
    },
    {
      icon: Cpu,
      tag: '03 • ZERO VISUAL FATIGUE',
      title: 'Tactile Momentum',
      desc: 'Calibrated with critical spring damping curves to match human intuition. Every modal, swipe, and capsule feels grounded in the physics of natural materials.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-b border-white/5 bg-gradient-to-b from-forest-950/60 via-black/40 to-forest-950/60">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Apple-style Central Manifesto Quote */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-forest-900/80 border border-pine-frost/30 mx-auto flex items-center justify-center text-pine-300 shadow-liquid-sm">
            <Compass className="w-6 h-6" />
          </div>

          <blockquote className="text-2xl sm:text-4xl md:text-4xl font-serif italic text-stone-100 leading-relaxed font-light">
            “True minimalism does not mean sterile emptiness. It means stripping away noise until only the primal serenity of the earth and the pure precision of light remain.”
          </blockquote>

          <div className="text-xs font-mono text-pine-300 uppercase tracking-widest">
            — The Arboreal Interface Manifesto
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                onClick={() => forestAudio.playClick()}
                className="liquid-glass p-8 rounded-3xl space-y-4 hover:border-pine-frost/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-forest-900 border border-white/10 flex items-center justify-center text-pine-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-500">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight pt-2">
                  {pillar.title}
                </h3>

                <p className="text-xs text-stone-300/80 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
