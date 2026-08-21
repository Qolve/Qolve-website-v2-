import React, { useState } from 'react';

export default function InquireModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', interest: 'Oak Series 01' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative z-10 w-full max-w-lg glass-panel rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl animate-fade-up bg-surface-container-low/95">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface p-1.5 rounded-full hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-primary mx-auto border border-primary/20">
              <span className="material-symbols-outlined text-[28px]">check</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">Inquiry Received</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
              Our concierge will contact you with private showroom details and bespoke specifications.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 mb-3">
                Bespoke Acquisition
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Inquire with SILVANUS</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                Private allocations for The Oak Series are strictly limited by sustainable timber harvest cycles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Lord / Lady / Architect..."
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary text-sm font-body-md"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="contact@estate.com"
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary text-sm font-body-md"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                  Collection Interest
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface focus:outline-none focus:border-primary text-sm font-body-md"
                >
                  <option value="Oak Series 01" className="bg-surface-container-low text-on-surface">The Oak Series — Core Hub</option>
                  <option value="Refractive Display" className="bg-surface-container-low text-on-surface">Refractive Liquid Display Interface</option>
                  <option value="Full Architectural Ecosystem" className="bg-surface-container-low text-on-surface">Full Architectural Ecosystem</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container border border-white/10 py-3.5 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all font-medium cursor-pointer mt-2"
              >
                Submit Private Inquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
