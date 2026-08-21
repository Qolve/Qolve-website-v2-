import React, { useState } from 'react';
import { Layers, Sparkles, Compass, Trees, Activity, Droplets, SlidersHorizontal, SunMedium } from 'lucide-react';
import { forestAudio } from '../utils/audio';

export default function EcosystemBento({ onOpenModal }) {
  const [selectedMaterial, setSelectedMaterial] = useState('pine');
  const [dispersionAngle, setDispersionAngle] = useState(45);
  const [dropletCount, setDropletCount] = useState(12);

  const materials = [
    {
      id: 'pine',
      name: 'Nocturnal Pine Needle',
      color: '#13251B',
      border: 'rgba(91, 161, 120, 0.3)',
      desc: 'Subsurface scattering tuned to deep evergreen chlorophyll spectrum.',
      tag: '520nm Spectrum',
    },
    {
      id: 'peat',
      name: 'Ancient Peat Soil',
      color: '#2B1E17',
      border: 'rgba(181, 133, 103, 0.3)',
      desc: 'Warm organic humus substrate providing dense, grounding low-frequency tones.',
      tag: 'Deep Loam #2B1E17',
    },
    {
      id: 'fern',
      name: 'Dewy Highland Fern',
      color: '#1D3B2C',
      border: 'rgba(135, 190, 157, 0.4)',
      desc: 'Micro-prism frosted bevels capturing morning dew refraction.',
      tag: 'Highland Frond',
    },
    {
      id: 'resin',
      name: 'Golden Pine Resin',
      color: '#402D23',
      border: 'rgba(201, 154, 107, 0.4)',
      desc: 'Amber translucency with high specular refraction and warm chromatic glow.',
      tag: 'Amber Prism',
    },
  ];

  const currentMat = materials.find((m) => m.id === selectedMaterial) || materials[0];

  return (
    <section id="ecosystem" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/60 border border-pine-frost/20 text-[11px] font-mono uppercase tracking-wider text-pine-300 backdrop-blur-md">
            <Trees className="w-3.5 h-3.5 text-pine-400" />
            <span>Organic Materials & Optics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Rooted in Earth. <br />
            <span className="text-apple-headline">Refracted in Liquid Glass.</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Every layer, blur radius, and shadow contour is mathematically calibrated against the natural light decay of temperate rainforest canopies.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Pine Canopy Optical Dispersion (Span 7) */}
          <div className="md:col-span-7 liquid-glass-pine rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-pine-accent/20 rounded-full blur-[80px] pointer-events-none -z-10" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-2xl bg-forest-900/80 border border-pine-frost/20 text-pine-300">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-pine-300 px-3 py-1 rounded-full bg-black/30 border border-white/5">
                  DISPERSION ENGINE
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Pine Canopy Light Scattering
                </h3>
                <p className="text-stone-300/80 text-sm mt-1 leading-relaxed">
                  Dual-layer Fresnel glass curves that naturally bend incoming incident light into deep evergreen and moss chromatic fringes.
                </p>
              </div>

              {/* Interactive Dispersion Light Path Visualizer */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/8 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-300 flex items-center gap-1.5">
                    <SunMedium className="w-3.5 h-3.5 text-pine-400" />
                    Incident Canopy Angle
                  </span>
                  <span className="font-mono text-pine-300">{dispersionAngle}° Polar</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  value={dispersionAngle}
                  onChange={(e) => setDispersionAngle(Number(e.target.value))}
                  className="w-full h-1.5 bg-forest-950 rounded-lg appearance-none cursor-pointer accent-pine-400"
                />

                {/* Animated Optical Rays */}
                <div className="h-20 w-full rounded-xl bg-forest-950/90 border border-forest-800/40 relative overflow-hidden flex items-center justify-center">
                  <div
                    className="absolute w-40 h-1 bg-gradient-to-r from-transparent via-pine-300 to-transparent transition-transform duration-300"
                    style={{ transform: `rotate(${dispersionAngle - 45}deg) scale(1.5)` }}
                  />
                  <div
                    className="absolute w-24 h-24 rounded-full border border-pine-400/40 backdrop-blur-xl shadow-liquid-glow-pine flex items-center justify-center text-[10px] font-mono text-stone-200"
                  >
                    Glass Lens
                  </div>
                  <div className="absolute bottom-2 right-3 text-[9px] font-mono text-stone-500">
                    Refractive index: 1.52
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/8 flex items-center justify-between text-xs text-stone-400">
              <span>Fresnel Reflectance Curve</span>
              <span className="text-pine-300 font-mono">0.04 → 0.98</span>
            </div>
          </div>

          {/* Bento Card 2: Ancient Peat & Bark Earth Substrate (Span 5) */}
          <div className="md:col-span-5 liquid-glass-earth rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-earth-600/20 rounded-full blur-[80px] pointer-events-none -z-10" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-2xl bg-earth-900/80 border border-earth-400/20 text-earth-300">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-earth-300 px-3 py-1 rounded-full bg-black/30 border border-white/5">
                  EARTH SUBSTRATE
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Peat & Bark Materials
                </h3>
                <p className="text-stone-300/80 text-sm mt-1 leading-relaxed">
                  Rich, warm cedar and aged loam pigments eliminate clinical sterile whites in favor of tactile organic warmth.
                </p>
              </div>

              {/* Material Selector Chips */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono text-stone-400 uppercase">
                  Select Botanical Pigment:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => {
                        forestAudio.playClick();
                        setSelectedMaterial(mat.id);
                      }}
                      className={`p-2.5 rounded-xl text-xs text-left border transition-all ${
                        selectedMaterial === mat.id
                          ? 'bg-black/50 text-white shadow-sm'
                          : 'bg-black/20 text-stone-400 hover:text-stone-200 border-white/5'
                      }`}
                      style={{
                        borderColor: selectedMaterial === mat.id ? mat.border : 'rgba(255,255,255,0.05)',
                      }}
                    >
                      <div className="font-medium text-stone-200">{mat.name}</div>
                      <div className="text-[10px] font-mono text-stone-500 mt-0.5">{mat.tag}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Material Insight */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/8 text-xs text-stone-300 font-normal">
                {currentMat.desc}
              </div>
            </div>

            <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs text-stone-400">
              <span>Tactile Organic Rating</span>
              <span className="text-earth-300 font-mono">100% Non-Sterile</span>
            </div>
          </div>

          {/* Bento Card 3: Fern Micro-Dewdrop Optics (Span 5) */}
          <div className="md:col-span-5 liquid-glass rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-2xl bg-forest-900/80 border border-pine-frost/20 text-pine-300">
                  <Droplets className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-pine-300 px-3 py-1 rounded-full bg-black/30 border border-white/5">
                  CONDENSATION DEPTH
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Highland Fern Dewdrops
                </h3>
                <p className="text-stone-300/80 text-sm mt-1 leading-relaxed">
                  Micro-curvature lensing inspired by surface tension on fern fronds creates sharp, jewel-like glass specular borders.
                </p>
              </div>

              {/* Interactive Dewdrop simulation */}
              <div className="p-4 rounded-2xl bg-black/30 border border-white/8 space-y-3">
                <div className="flex justify-between items-center text-xs text-stone-300">
                  <span>Surface Dewdrop Condensation</span>
                  <span className="font-mono text-pine-300">{dropletCount} μl/cm²</span>
                </div>
                <div className="flex gap-2 items-center">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        forestAudio.playGlassChime(400 + i * 80);
                        setDropletCount(10 + i * 4);
                      }}
                      className={`flex-1 h-8 rounded-lg cursor-pointer transition-all duration-300 border ${
                        i < dropletCount / 4
                          ? 'bg-gradient-to-t from-pine-medium to-pine-accent/40 border-pine-frost/40 shadow-liquid-sm'
                          : 'bg-white/5 border-white/5 hover:bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs text-stone-400">
              <span>Surface Tension Index</span>
              <span className="text-pine-300 font-mono">72.8 mN/m</span>
            </div>
          </div>

          {/* Bento Card 4: macOS Liquid Spring Physics (Span 7) */}
          <div className="md:col-span-7 liquid-glass rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-2xl bg-forest-900/80 border border-pine-frost/20 text-pine-300">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-pine-300 px-3 py-1 rounded-full bg-black/30 border border-white/5">
                  TACTILE SPRING ENGINE
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  macOS Momentum & Fluid Inertia
                </h3>
                <p className="text-stone-300/80 text-sm mt-1 leading-relaxed">
                  Every drawer, capsule, and modal moves with zero-latency spring stiffness and critical damping borrowed from natural branch deflection.
                </p>
              </div>

              {/* Interactive Spring Test Capsules */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {['Pine Needle Float', 'Peat Soil Resistance', 'Fern Frond Snap'].map((label, idx) => (
                  <button
                    key={label}
                    onClick={() => forestAudio.playClick()}
                    className="p-4 rounded-2xl bg-forest-950/60 border border-white/8 hover:border-pine-frost/40 transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0.5 text-left group/btn shadow-liquid-sm cursor-pointer"
                  >
                    <div className="w-2 h-2 rounded-full bg-pine-400 mb-2 group-hover/btn:scale-150 transition-transform" />
                    <div className="text-xs font-semibold text-white">{label}</div>
                    <div className="text-[10px] font-mono text-stone-400 mt-1">
                      {idx === 0 ? 'Stiffness: 400' : idx === 1 ? 'Damping: 32' : 'Mass: 0.8'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/8 flex items-center justify-between text-xs text-stone-400">
              <span>Apple Fluid Spring Ratio</span>
              <span className="text-pine-300 font-mono">ζ = 0.89 Critically Damped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
