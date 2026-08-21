import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    workEmail: '',
    company: '',
    tenantVolume: '10 - 50 Active Tenants',
    interest: 'Full White-Label Platform Suite',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-16">
      {/* Header */}
      <div className="text-center md:text-left space-y-4 max-w-3xl">
        <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20">
          Direct Channels // Enterprise Engagement
        </span>
        <h1 className="font-display-lg text-display-lg text-on-surface text-glow leading-tight">
          Connect with QOLVE.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Whether you require a multi-tenant platform review, dedicated white-label CNAME deployment, or custom security consultation, our architects are available.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left: Contact Form (Span 7) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden bg-surface-container-low/95">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-primary mx-auto border border-primary/20">
                <span className="material-symbols-outlined text-[32px]">check</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Inquiry Dispatched</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                Thank you. An enterprise solutions architect will contact you within 1 business day with bespoke deployment specifications.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full border border-white/10 text-primary text-sm hover:bg-white/5 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-headline-lg text-2xl text-on-surface">
                  Request Platform Architecture Review
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant">
                  All consultations include a tailored white-label feasibility breakdown and tenant scaling roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary text-sm font-body-md"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Technologies"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary text-sm font-body-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.workEmail}
                  onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary text-sm font-body-md"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Target Tenant Scale
                  </label>
                  <select
                    value={form.tenantVolume}
                    onChange={(e) => setForm({ ...form, tenantVolume: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface focus:outline-none focus:border-primary text-sm font-body-md"
                  >
                    <option value="1 - 10 Tenants" className="bg-surface-container-low text-on-surface">1 - 10 Tenants</option>
                    <option value="10 - 50 Active Tenants" className="bg-surface-container-low text-on-surface">10 - 50 Tenants</option>
                    <option value="50 - 250 Tenants" className="bg-surface-container-low text-on-surface">50 - 250 Tenants</option>
                    <option value="250+ Multi-Cluster" className="bg-surface-container-low text-on-surface">250+ Enterprise Scale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Primary Module
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface focus:outline-none focus:border-primary text-sm font-body-md"
                  >
                    <option value="Full White-Label Platform Suite" className="bg-surface-container-low text-on-surface">Full White-Label Suite</option>
                    <option value="Support & Ticketing Engine" className="bg-surface-container-low text-on-surface">Support & Ticketing Engine</option>
                    <option value="Dynamic Theming & Brand Engine" className="bg-surface-container-low text-on-surface">Dynamic Theming Engine</option>
                    <option value="SSO & Identity Layer" className="bg-surface-container-low text-on-surface">SSO & Identity Layer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                  Project Notes & Timeline
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Outline any specific SLA, tenant isolation, or deployment deadline requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary text-sm font-body-md"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container border border-white/10 py-4 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all font-medium cursor-pointer"
              >
                Dispatch Consultation Request
              </button>
            </form>
          )}
        </div>

        {/* Right: Direct Channels & SLA Commitments (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Mail Card */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </div>
              <div>
                <h4 className="font-headline-lg text-lg text-on-surface">Direct Email Channels</h4>
                <p className="text-xs text-on-surface-variant font-mono">Guaranteed 24-hr Response</p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2 text-sm font-mono divide-y divide-white/5">
              <div className="pt-2 flex justify-between items-center">
                <span className="text-on-surface-variant">Architecture & Sales:</span>
                <span className="text-primary">enterprise@qolve.systems</span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-on-surface-variant">Security & Compliance:</span>
                <span className="text-primary">security@qolve.systems</span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-on-surface-variant">Developer Relations:</span>
                <span className="text-primary">developers@qolve.systems</span>
              </div>
            </div>
          </div>

          {/* Security & Deployment SLA */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
              </div>
              <div>
                <h4 className="font-headline-lg text-lg text-on-surface">Enterprise SLA Tier</h4>
                <p className="text-xs text-on-surface-variant font-mono">Zero Vendor Trace</p>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Every white-label contract includes an enforceable 99.99% uptime guarantee, automated data isolation verification, and non-disclosure shielding for end-customer privacy.
            </p>
          </div>

          {/* Botanical Coordinates */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-2">
            <div className="text-xs uppercase tracking-widest font-label-sm text-primary">
              Global Headquarters & Lab
            </div>
            <div className="font-body-md text-sm text-on-surface">
              Qolve Systems Inc.
            </div>
            <div className="text-xs font-mono text-on-surface-variant">
              Calibrated to Caledonian Pine Reserve — 56°48'N, 4°56'W
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
