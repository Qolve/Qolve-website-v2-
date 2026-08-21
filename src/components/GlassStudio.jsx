import React, { useState } from 'react';
import { Sliders, Copy, Check, Sparkles, Code2, Paintbrush, ShieldCheck } from 'lucide-react';
import { forestAudio } from '../utils/audio';

export default function GlassStudio() {
  const [blur, setBlur] = useState(28);
  const [tint, setTint] = useState('pine'); // 'pine', 'fern', 'peat', 'amber', 'mist'
  const [specular, setSpecular] = useState(18);
  const [innerBevel, setInnerBevel] = useState(true);
  const [glowTone, setGlowTone] = useState('emerald'); // 'emerald', 'amber', 'moonlight'
  const [copied, setCopied] = useState(false);

  const tints = [
    { id: 'pine', name: 'Nocturnal Pine', bg: 'rgba(13, 26, 18, 0.65)', border: 'rgba(91, 161, 120, 0.25)', glow: '#5BA178' },
    { id: 'fern', name: 'Highland Fern', bg: 'rgba(29, 59, 44, 0.6)', border: 'rgba(135, 190, 157, 0.3)', glow: '#87BE9D' },
    { id: 'peat', name: 'Aged Peat Soil', bg: 'rgba(43, 30, 23, 0.6)', border: 'rgba(181, 133, 103, 0.3)', glow: '#B58567' },
    { id: 'amber', name: 'Pine Resin', bg: 'rgba(64, 45, 35, 0.65)', border: 'rgba(201, 154, 107, 0.35)', glow: '#C99A6B' },
    { id: 'mist', name: 'Canopy Mist', bg: 'rgba(8, 16, 11, 0.75)', border: 'rgba(255, 255, 255, 0.15)', glow: '#E1F2E7' },
  ];

  const currentTint = tints.find((t) => t.id === tint) || tints[0];

  const generatedCss = `/* macOS Dark Eco Liquid Glass Surface */
background: ${currentTint.bg};
backdrop-filter: blur(${blur}px) saturate(180%);
-webkit-backdrop-filter: blur(${blur}px) saturate(180%);
border: 1px solid ${currentTint.border};
border-top: 1px solid rgba(255, 255, 255, ${(specular / 100).toFixed(2)});
box-shadow: 
  0 25px 50px -12px rgba(0, 0, 0, 0.7),
  ${innerBevel ? `inset 0 1px 1.5px 0 rgba(255, 255, 255, ${(specular / 90).toFixed(2)}),
  inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4)` : 'none'};`;

  const copyToClipboard = () => {
    forestAudio.playClick();
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="studio" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/60 border border-pine-frost/20 text-[11px] font-mono uppercase tracking-wider text-pine-300 backdrop-blur-md">
            <Paintbrush className="w-3.5 h-3.5 text-pine-400" />
            <span>Interactive Laboratory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Liquid Glass Studio. <br />
            <span className="text-apple-headline">Calibrate Your Atmosphere.</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Customize subsurface frosted blurs, specular light borders, and botanical resin undertones in real time.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (Left, Span 5) */}
          <div className="lg:col-span-5 liquid-glass rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Sliders className="w-4 h-4 text-pine-300" />
                <span>Surface Parameters</span>
              </div>
              <span className="text-[10px] font-mono text-stone-400">Arboreal Shader v2</span>
            </div>

            {/* Botanical Tint Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-medium text-stone-300 flex justify-between">
                <span>Botanical Subsurface Tint</span>
                <span className="font-mono text-pine-300 text-[11px]">{currentTint.name}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tints.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      forestAudio.playClick();
                      setTint(t.id);
                    }}
                    className={`p-2.5 rounded-xl text-xs text-left border transition-all flex items-center justify-between ${
                      tint === t.id
                        ? 'bg-forest-700/60 text-white border-white/30 shadow-sm'
                        : 'bg-black/30 text-stone-400 hover:text-stone-200 border-white/5'
                    }`}
                  >
                    <span className="font-medium">{t.name}</span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.glow }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Blur Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-stone-300">
                <span>Backdrop Frost Blur</span>
                <span className="font-mono text-pine-300">{blur}px</span>
              </div>
              <input
                type="range"
                min="6"
                max="64"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
                className="w-full h-1.5 bg-forest-950 rounded-lg appearance-none cursor-pointer accent-pine-400"
              />
            </div>

            {/* Specular Highlight Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-stone-300">
                <span>Specular Rim Reflectivity</span>
                <span className="font-mono text-pine-300">{specular}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={specular}
                onChange={(e) => setSpecular(Number(e.target.value))}
                className="w-full h-1.5 bg-forest-950 rounded-lg appearance-none cursor-pointer accent-pine-400"
              />
            </div>

            {/* Inner Bevel Toggle */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-black/30 border border-white/5">
              <div className="space-y-0.5">
                <div className="text-xs font-medium text-white">Subsurface Bevel Inset</div>
                <div className="text-[10px] text-stone-400">Simulate dual-surface refractive lighting</div>
              </div>
              <button
                onClick={() => {
                  forestAudio.playClick();
                  setInnerBevel(!innerBevel);
                }}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                  innerBevel ? 'bg-pine-500' : 'bg-stone-800'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                    innerBevel ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Live Preview & Code (Right, Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Interactive Preview Canvas */}
            <div className="relative min-h-[340px] sm:min-h-[380px] rounded-3xl p-8 flex items-center justify-center overflow-hidden border border-white/10 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950">
              {/* Dynamic organic botanical shapes behind glass */}
              <div
                className="absolute w-64 h-64 rounded-full blur-[70px] pointer-events-none transition-all duration-700"
                style={{ backgroundColor: currentTint.glow, opacity: 0.25 }}
              />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-earth-600/20 rounded-full blur-[60px] pointer-events-none" />

              {/* The Configured Liquid Glass Card */}
              <div
                style={{
                  background: currentTint.bg,
                  backdropFilter: `blur(${blur}px) saturate(180%)`,
                  WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
                  border: `1px solid ${currentTint.border}`,
                  borderTop: `1px solid rgba(255, 255, 255, ${specular / 100})`,
                  boxShadow: innerBevel
                    ? `0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 1.5px 0 rgba(255, 255, 255, ${specular / 90}), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4)`
                    : `0 25px 50px -12px rgba(0, 0, 0, 0.7)`,
                }}
                className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-3xl space-y-5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15">
                    <Sparkles className="w-4 h-4 text-pine-200" />
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-stone-300">
                    Live Glass Output
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    Arboreal Membrane
                  </h4>
                  <p className="text-xs text-stone-300/90 leading-relaxed">
                    Zero-fatigue sensory surface responding in real-time to ambient pine shadows and loam earth.
                  </p>
                </div>

                {/* Tactile test actions inside configured card */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => forestAudio.playGlassChime()}
                    className="liquid-button px-4 py-2 rounded-xl text-xs font-medium text-white flex items-center gap-1.5"
                  >
                    <span>Test Chime</span>
                  </button>
                  <button
                    onClick={() => forestAudio.playClick()}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-stone-300 hover:text-white transition-all"
                  >
                    <span>Tactile Click</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Generated CSS Code Drawer */}
            <div className="rounded-2xl bg-black/60 border border-white/10 p-5 backdrop-blur-xl relative space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                  <Code2 className="w-4 h-4 text-pine-400" />
                  <span>OUTPUT CSS TOKENS</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 rounded-lg bg-forest-800/80 hover:bg-forest-700/80 border border-pine-frost/20 text-xs font-medium text-stone-200 hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-pine-300" />
                      <span className="text-pine-300 font-mono">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy CSS</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="text-xs font-mono text-pine-200/90 overflow-x-auto p-3.5 rounded-xl bg-black/40 border border-white/5 leading-relaxed">
                <code>{generatedCss}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
