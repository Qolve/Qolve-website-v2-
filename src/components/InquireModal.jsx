import React, { useState } from 'react';

export default function InquireModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    workEmail: '',
    company: '',
    tenantScale: '10 - 50 Active Tenants',
    platformScope: 'Full White-Label Suite',
  });

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
            <h3 className="font-headline-lg text-headline-lg text-on-surface">Consultation Scheduled</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
              Our enterprise solutions architect will connect with you to review your multi-tenant deployment requirements.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 mb-3">
                Enterprise B2B Architecture
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Deploy with QOLVE</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                Explore custom white-label deployments, isolated tenant infrastructure, and enterprise SLAs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary text-sm font-body-md"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary text-sm font-body-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={form.workEmail}
                  onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                  placeholder="architect@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary text-sm font-body-md"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Tenant Volume
                  </label>
                  <select
                    value={form.tenantScale}
                    onChange={(e) => setForm({ ...form, tenantScale: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface focus:outline-none focus:border-primary text-sm font-body-md"
                  >
                    <option value="1 - 10 Tenants" className="bg-surface-container-low text-on-surface">1 - 10 Tenants</option>
                    <option value="10 - 50 Active Tenants" className="bg-surface-container-low text-on-surface">10 - 50 Tenants</option>
                    <option value="50 - 250 Tenants" className="bg-surface-container-low text-on-surface">50 - 250 Tenants</option>
                    <option value="250+ Enterprise Multi-Cluster" className="bg-surface-container-low text-on-surface">250+ Enterprise Scale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Deployment Scope
                  </label>
                  <select
                    value={form.platformScope}
                    onChange={(e) => setForm({ ...form, platformScope: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface focus:outline-none focus:border-primary text-sm font-body-md"
                  >
                    <option value="Full White-Label Suite" className="bg-surface-container-low text-on-surface">Full White-Label Suite</option>
                    <option value="Custom CNAME & Theming Engine" className="bg-surface-container-low text-on-surface">Custom CNAME & Theming</option>
                    <option value="Dedicated VPC Cluster" className="bg-surface-container-low text-on-surface">Dedicated VPC Cluster</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container border border-white/10 py-3.5 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all font-medium cursor-pointer mt-2"
              >
                Request Architecture Consultation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
