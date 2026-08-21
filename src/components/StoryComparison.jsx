import React, { useState, useRef } from 'react';
import { Sparkles, Sliders, CheckCircle2, XCircle, ArrowLeftRight, Eye } from 'lucide-react';
import { forestAudio } from '../utils/audio';

export default function StoryComparison() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section id="comparison" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/60 border border-pine-frost/20 text-[11px] font-mono uppercase tracking-wider text-pine-300 backdrop-blur-md">
            <ArrowLeftRight className="w-3.5 h-3.5 text-pine-400" />
            <span>Interactive Craft Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Beyond Flat Interfaces. <br />
            <span className="text-apple-headline">Luminous Organic Depth.</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Drag the slider to compare sterile flat grey UI against our dark eco macOS liquid glass architecture.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerUp}
          className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-2xl"
        >
          {/* RIGHT SIDE: Arboreal Liquid Glass (Full Layer) */}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 p-6 sm:p-12 flex flex-col justify-between">
            {/* Ambient glows behind the liquid card */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-pine-accent/25 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-earth-600/20 rounded-full blur-[90px] pointer-events-none" />

            <div className="flex justify-end">
              <span className="px-3.5 py-1 rounded-full bg-forest-800/80 border border-pine-frost/30 text-xs font-mono text-pine-200 shadow-liquid-sm">
                ARBOREAL LIQUID GLASS
              </span>
            </div>

            {/* Showcase Glass Card */}
            <div className="max-w-md ml-auto liquid-glass-pine p-6 sm:p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-forest-700/80 border border-pine-frost/30 flex items-center justify-center text-pine-200 shadow-inner">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white text-base">Arboreal OS v2.0</div>
                  <div className="text-xs text-pine-300 font-mono">Organic Glassmorphism</div>
                </div>
              </div>

              <p className="text-xs text-stone-200/90 leading-relaxed">
                Specular rim reflections, multi-layer blur, and peat loam resonance create a calm, tactile experience with zero visual fatigue.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-mono text-pine-300">
                <div className="p-2 rounded-xl bg-black/40 border border-white/8">
                  ✓ 32px Subsurface Blur
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/8">
                  ✓ Organic Peat Tones
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center gap-2 text-xs text-pine-300/80 font-mono">
              <span>● Refractive Specular Highlight Active</span>
            </div>
          </div>

          {/* LEFT SIDE: Generic Flat UI (Clipped by slider percentage) */}
          <div
            className="absolute inset-0 bg-[#121212] p-6 sm:p-12 flex flex-col justify-between border-r border-stone-500 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="flex justify-start min-w-[320px]">
              <span className="px-3.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-mono text-stone-400">
                CONVENTIONAL FLAT DARK UI
              </span>
            </div>

            {/* Showcase Flat Dull Card */}
            <div className="max-w-md bg-[#1e1e1e] border border-stone-800 p-6 sm:p-8 rounded-xl space-y-4 min-w-[300px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-stone-200 text-base">Standard App UI</div>
                  <div className="text-xs text-stone-500 font-mono">Flat Matte Container</div>
                </div>
              </div>

              <p className="text-xs text-stone-400 leading-relaxed">
                Flat opaque surfaces lack depth, organic warmth, and tactile resonance, feeling disconnected from human perception.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-mono text-stone-500">
                <div className="p-2 rounded-lg bg-stone-900 border border-stone-800">
                  ✕ 0px Backdrop Blur
                </div>
                <div className="p-2 rounded-lg bg-stone-900 border border-stone-800">
                  ✕ Sterile Grey Tones
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center gap-2 text-xs text-stone-500 font-mono min-w-[300px]">
              <span>○ Flat Solid Render</span>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white/60 -translate-x-1/2 pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-forest-900 border border-white/40 shadow-2xl flex items-center justify-center text-white backdrop-blur-xl">
              <ArrowLeftRight className="w-4 h-4 text-pine-300" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-mono px-2">
          <span>← Drag Left for Full Liquid Glass</span>
          <span>Drag Right for Flat Dark Comparison →</span>
        </div>
      </div>
    </section>
  );
}
