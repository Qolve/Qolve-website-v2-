import React from 'react';
import { Cpu, Eye, Gauge, Shield, Sparkles, Terminal } from 'lucide-react';
import { forestAudio } from '../utils/audio';

export default function SpecMatrix() {
  const specs = [
    {
      category: 'Optical Refraction',
      items: [
        { label: 'Refractive Index', value: '1.520 η', detail: 'Crown borosilicate optical grade' },
        { label: 'Backdrop Dispersion', value: '64px Max', detail: 'Real-time multi-pass Gaussian blur' },
        { label: 'Fresnel Reflectance', value: '0.04 → 0.98', detail: 'Incident angle dependent specular rim' },
        { label: 'Subsurface Bevel', value: '1.5px Inset', detail: 'Dual-surface internal lighting highlight' },
      ],
    },
    {
      category: 'Dark Eco Gamut',
      items: [
        { label: 'Primary Canopy', value: 'Pine #0D1A12', detail: 'Deep chlorophyll absorption spectrum' },
        { label: 'Substrate Loam', value: 'Peat #2B1E17', detail: 'Rich ancient humus organic pigment' },
        { label: 'Foliage Accent', value: 'Fern #3D7557', detail: 'Luminous morning dew frond tint' },
        { label: 'Resin Specular', value: 'Amber #BA8A6A', detail: 'Warm conifer sap chromatic fringe' },
      ],
    },
    {
      category: 'macOS Fluid Mechanics',
      items: [
        { label: 'Spring Ratio', value: 'ζ = 0.89', detail: 'Critically damped organic deceleration' },
        { label: 'Inertia Momentum', value: '0.92 Decay', detail: 'Natural branch deflection momentum' },
        { label: 'Touch Latency', value: '< 4.2 ms', detail: 'Direct hardware GPU compositor sync' },
        { label: 'Haptic Resonance', value: '432 Hz / 528 Hz', detail: 'Natural solfeggio harmonic chimes' },
      ],
    },
  ];

  return (
    <section id="specs" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/60 border border-pine-frost/20 text-[11px] font-mono uppercase tracking-wider text-pine-300 backdrop-blur-md">
            <Gauge className="w-3.5 h-3.5 text-pine-400" />
            <span>Technical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            System Specifications. <br />
            <span className="text-apple-headline">Calibrated to Nature.</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Every parameter is engineered with mathematical rigor for seamless high-performance rendering.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((group) => (
            <div
              key={group.category}
              className="liquid-glass rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono uppercase text-pine-300 tracking-wider pb-3 border-b border-white/10 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="w-2 h-2 rounded-full bg-pine-400/80" />
                </div>

                <div className="divide-y divide-white/5 mt-4 space-y-4">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      onClick={() => forestAudio.playClick()}
                      className="pt-3 group cursor-pointer hover:translate-x-1 transition-transform"
                    >
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs text-stone-400 group-hover:text-stone-200 transition-colors">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold font-mono text-white">
                          {item.value}
                        </span>
                      </div>
                      <div className="text-[11px] text-stone-500 font-normal mt-0.5">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-pine-400/80">
                ✓ Hardware Accelerated
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
