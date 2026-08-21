import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Trees, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { forestAudio } from '../utils/audio';

export default function InteractiveModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    forestAudio.playGlassChime(528);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#5BA178', '#BA8A6A', '#8BBF9F', '#C99A6B', '#FFFFFF'],
      });
    } catch (e) {}

    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Frosted Backdrop */}
      <div
        onClick={() => {
          forestAudio.playClick();
          onClose();
        }}
        className="absolute inset-0 bg-black/75 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
      />

      {/* macOS Liquid Glass Modal Window */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%), rgba(10, 20, 14, 0.85)',
          backdropFilter: 'blur(36px) saturate(190%)',
          WebkitBackdropFilter: 'blur(36px) saturate(190%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderTop: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 35px 80px -15px rgba(0, 0, 0, 0.9), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.25)',
        }}
        className="relative z-10 w-full max-w-lg rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-pine-accent/20 rounded-full blur-[70px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            forestAudio.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-stone-400 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-forest-800 border border-pine-frost/40 mx-auto flex items-center justify-center text-pine-300 shadow-liquid-glow-pine animate-bounce">
              <Check className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Welcome to the Forest.
              </h3>
              <p className="text-sm text-stone-300/80 max-w-sm mx-auto leading-relaxed">
                Your credentials have been securely linked to the Arboreal Glass early access pool.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="liquid-button px-6 py-2.5 rounded-full text-xs font-medium text-white"
            >
              Return to Experience
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-forest-900/80 border border-pine-frost/20 text-[10px] font-mono uppercase tracking-wider text-pine-300">
                <Trees className="w-3 h-3 text-pine-400" />
                <span>Early Access Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Experience Arboreal Glass.
              </h3>
              <p className="text-xs sm:text-sm text-stone-300/80 leading-relaxed">
                Join the private preview for designers, engineers, and creators building sensory digital systems.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-300">Work or Personal Email</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="architect@domain.com"
                    className="w-full px-4 py-3 pl-11 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-pine-frost/60 focus:ring-2 focus:ring-pine-accent/20 transition-all font-mono"
                  />
                  <Mail className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="liquid-button w-full py-3 rounded-2xl text-sm font-medium text-white flex items-center justify-center gap-2 cursor-pointer shadow-liquid group"
                >
                  <Sparkles className="w-4 h-4 text-pine-300" />
                  <span>Request Priority Access</span>
                  <ArrowRight className="w-4 h-4 text-pine-300 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="text-center">
                <span className="text-[10px] font-mono text-stone-500">
                  Zero telemetry tracking • 100% Private Botanical Sandbox
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
