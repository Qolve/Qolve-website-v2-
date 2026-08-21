import React, { useState, useRef } from 'react';
import { Sparkles, Sliders, ShieldCheck, Sun, Moon, Wind, Leaf, ArrowRight, Play, Eye } from 'lucide-react';
import { forestAudio } from '../utils/audio';

export default function Hero({ onOpenModal, isSoundOn, setIsSoundOn }) {
  // Live interactive cockpit state
  const [blurLevel, setBlurLevel] = useState(32);
  const [canopyMode, setCanopyMode] = useState('pine'); // 'pine', 'peat', 'mist', 'midnight'
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * -15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const canopyModes = [
    { id: 'pine', name: 'Pine Needle', color: 'from-emerald-900/40 via-forest-800/20 to-transparent', accent: '#5BA178' },
    { id: 'peat', name: 'Peat Amber', color: 'from-earth-800/50 via-earth-900/20 to-transparent', accent: '#BA8A6A' },
    { id: 'mist', name: 'Dawn Mist', color: 'from-forest-400/20 via-forest-900/30 to-transparent', accent: '#8BBF9F' },
    { id: 'midnight', name: 'Nocturnal', color: 'from-forest-950/80 via-black/40 to-transparent', accent: '#2A533E' },
  ];

  const currentModeObj = canopyModes.find((m) => m.id === canopyMode) || canopyModes[0];

  return (
    <section
      id="vision"
      className="relative min-h-screen pt-32 sm:pt-40 pb-20 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Botanical Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[500px] bg-gradient-to-b from-forest-700/25 via-forest-900/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-earth-700/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-drift" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-pine-accent/10 rounded-full blur-[110px] pointer-events-none -z-10 animate-drift" />

      {/* Subtle Grid / Noise Texture */}
      <div className="absolute inset-0 bg-noise pointer-events-none -z-10" />

      {/* Top Tag / Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/80 border border-pine-frost/20 backdrop-blur-xl shadow-liquid-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <span className="w-2 h-2 rounded-full bg-pine-400 animate-pulse" />
        <span className="text-xs font-mono tracking-wider uppercase text-pine-300">
          macOS Liquid Glassmorphism • Dark Eco
        </span>
      </div>

      {/* Apple-style Master Headline */}
      <div className="max-w-4xl text-center space-y-4 mb-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          <span className="block text-stone-100">Engineered in Glass.</span>
          <span className="block text-apple-headline">Grounded in Earth.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-400 font-normal leading-relaxed">
          A minimalist interface architecture where the quiet serenity of nocturnal pine forests and peat soils merges with liquid glass refraction.
        </p>
      </div>

      {/* Apple-style Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
        <a
          href="#ecosystem"
          onClick={() => forestAudio.playClick()}
          className="liquid-button px-6 py-3 rounded-full text-sm font-medium text-white flex items-center gap-2 group cursor-pointer shadow-liquid"
        >
          <span>Explore Ecosystem</span>
          <ArrowRight className="w-4 h-4 text-pine-300 group-hover:translate-x-1 transition-transform" />
        </a>

        <button
          onClick={() => {
            forestAudio.playClick();
            if (!isSoundOn) {
              forestAudio.start();
              setIsSoundOn(true);
            }
            onOpenModal();
          }}
          className="liquid-button-earth px-6 py-3 rounded-full text-sm font-medium text-stone-200 hover:text-white flex items-center gap-2 group cursor-pointer"
        >
          <Leaf className="w-4 h-4 text-earth-400 group-hover:rotate-12 transition-transform" />
          <span>Interactive Preview</span>
        </button>
      </div>

      {/* Interactive macOS Liquid Glass Cockpit (Apple Hardware/Software Hero Canvas) */}
      <div
        className="w-full max-w-5xl mx-auto perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cardRef}
          style={{
            transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
            backdropFilter: `blur(${blurLevel}px) saturate(180%)`,
            WebkitBackdropFilter: `blur(${blurLevel}px) saturate(180%)`,
          }}
          className="relative rounded-3xl sm:rounded-[32px] overflow-hidden border border-white/12 transition-all duration-200 ease-out shadow-liquid-lg bg-gradient-to-b from-white/[0.07] via-forest-900/60 to-forest-950/80"
        >
          {/* Top Specular Rim Reflection Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Dynamic Eco Lighting Radial in Background of the Card */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${currentModeObj.color} transition-all duration-700 pointer-events-none`}
          />

          {/* macOS Titlebar & Traffic Lights */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-black/20 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm border border-red-400/40" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm border border-amber-400/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm border border-emerald-400/40" />
              <span className="ml-3 text-xs font-mono text-stone-400/80 hidden sm:inline">
                arboreal-liquid-os — v2.4 (Dark Eco)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/8 text-[11px] font-mono text-pine-300">
                <span className="w-1.5 h-1.5 rounded-full bg-pine-400 animate-ping" />
                <span>CANOPY: {currentModeObj.name.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Cockpit Content Area */}
          <div className="p-6 sm:p-8 md:p-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Visual Sensory Core */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-earth-300">
                  <Wind className="w-4 h-4 text-pine-400" />
                  <span>REFRACTION CORE // OPTICAL SPEC</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Real-time Subsurface Light Dispersion
                </h3>
                <p className="text-sm text-stone-300/80 leading-relaxed">
                  Glass layers absorb background pine tones and amber soil frequencies, creating a seamless tactile depth that reacts naturally to viewing angles and ambient lux.
                </p>
              </div>

              {/* Interactive Telemetry Pills */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-black/30 border border-white/8 backdrop-blur-md">
                  <div className="text-[10px] font-mono text-stone-400 uppercase">Atmosphere</div>
                  <div className="text-base font-semibold text-white mt-0.5 flex items-center gap-1.5">
                    <span>98.4%</span>
                    <span className="text-[10px] text-pine-400">Pure</span>
                  </div>
                  <div className="text-[10px] text-pine-400/70 font-mono mt-1">Pine Phytoncides</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/30 border border-white/8 backdrop-blur-md">
                  <div className="text-[10px] font-mono text-stone-400 uppercase">Glass Blur</div>
                  <div className="text-base font-semibold text-white mt-0.5">
                    {blurLevel}px
                  </div>
                  <div className="text-[10px] text-earth-400/80 font-mono mt-1">macOS Liquid</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/30 border border-white/8 backdrop-blur-md">
                  <div className="text-[10px] font-mono text-stone-400 uppercase">Refraction</div>
                  <div className="text-base font-semibold text-white mt-0.5">
                    1.520 η
                  </div>
                  <div className="text-[10px] text-pine-300/80 font-mono mt-1">Crown Glass</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Hardware-grade Glass Dials */}
            <div className="lg:col-span-5 bg-black/30 rounded-2xl border border-white/10 p-5 sm:p-6 backdrop-blur-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <span className="text-xs font-semibold text-white tracking-wide uppercase flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-pine-400" />
                  Live Glass Tuning
                </span>
                <span className="text-[10px] font-mono text-stone-400">Tactile Engine</span>
              </div>

              {/* Canopy Environment Selector */}
              <div className="space-y-2">
                <label className="text-xs text-stone-300 flex justify-between">
                  <span>Biome Lighting Atmosphere</span>
                  <span className="text-pine-300 font-mono text-[11px]">{currentModeObj.name}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {canopyModes.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => {
                        forestAudio.playClick();
                        setCanopyMode(mode.id);
                        forestAudio.playGlassChime(mode.id === 'peat' ? 432 : 528);
                      }}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all text-left flex items-center justify-between ${
                        canopyMode === mode.id
                          ? 'bg-forest-700/70 border-white/30 text-white shadow-sm'
                          : 'bg-white/5 border-white/5 text-stone-400 hover:text-stone-200 hover:bg-white/10'
                      }`}
                    >
                      <span>{mode.name}</span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: mode.accent }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Blur Level Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-stone-300">
                  <span>Subsurface Frosted Depth</span>
                  <span className="font-mono text-pine-300">{blurLevel}px</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="64"
                  value={blurLevel}
                  onChange={(e) => {
                    setBlurLevel(Number(e.target.value));
                  }}
                  className="w-full h-1.5 bg-forest-950/80 rounded-lg appearance-none cursor-pointer accent-pine-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-500">
                  <span>Ultra-Clear (8px)</span>
                  <span>Deep Canopy (64px)</span>
                </div>
              </div>

              {/* Sound Harmonic Trigger */}
              <button
                onClick={() => {
                  forestAudio.playGlassChime();
                }}
                className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 text-xs font-medium text-stone-300 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-earth-300" />
                <span>Trigger Glass Resonance Chime</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
