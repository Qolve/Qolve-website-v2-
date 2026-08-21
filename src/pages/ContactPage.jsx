import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    name: '',
    workEmail: '',
    company: '',
    tenantVolume: '10 - 50 Active Tenants',
    interest: 'Full White-Label Platform Suite',
    message: '',
  });

  const faqs = [
    {
      q: 'How does custom domain (CNAME) routing work for our client portals?',
      a: 'Each tenant points their custom domain (e.g., support.clientname.com) to our anycast edge proxy. Our system automatically provisions and renews Let’s Encrypt TLS certificates in under 60 seconds with zero manual configuration required.'
    },
    {
      q: 'Can we inject custom stylesheets and logos without rebuilding the app?',
      a: 'Yes. Our runtime Dynamic Theming Engine evaluates tenant design tokens at the edge node in under 2ms, applying custom typography, color variables, logos, and favicons dynamically per request.'
    },
    {
      q: 'What data residency and tenant isolation guarantees do you provide?',
      a: 'We offer cryptographic row-level tenant separation with dedicated encryption keys as standard, and dedicated sharded database clusters in EU (Frankfurt/London) or US (Virginia/Oregon) for enterprise dedicated tiers.'
    },
    {
      q: 'What is the typical deployment timeline for a white-label rollout?',
      a: 'Standard white-label deployments with pre-built modules are operational within 48 hours. Bespoke integrations with custom SSO and dedicated VPC infrastructure typically deploy in 2–3 weeks.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-20">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20">
            Direct Engagement // Architecture Desk
          </span>
          <span className="text-xs font-mono text-on-surface-variant/70">
            SLA Response &lt; 1hr
          </span>
        </div>

        <h1 className="font-display-lg text-display-lg text-on-surface text-glow leading-tight">
          Deploy with QOLVE.
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Connect directly with our systems architects to evaluate white-label feasibility, tenant capacity planning, and custom SLA agreements.
        </p>
      </div>

      {/* Form & Channels Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left: Consultation Form (Col 7) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden bg-surface-container-low/95">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-primary mx-auto border border-primary/20">
                <span className="material-symbols-outlined text-[32px]">check</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Consultation Dispatched</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
                Thank you. An enterprise solutions architect will review your tenant parameters and connect within 1 business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full border border-white/10 text-primary text-sm hover:bg-white/5 transition-all cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-headline-lg text-2xl text-on-surface">
                  Request Architecture Review
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant">
                  All consultations include a tailored white-label feasibility breakdown and tenant scaling roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Contact Name *
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
                    Expected Tenant Scale
                  </label>
                  <select
                    value={form.tenantVolume}
                    onChange={(e) => setForm({ ...form, tenantVolume: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-highest/40 border border-white/10 text-on-surface focus:outline-none focus:border-primary text-sm font-body-md"
                  >
                    <option value="1 - 10 Tenants" className="bg-surface-container-low text-on-surface">1 - 10 Tenants</option>
                    <option value="10 - 50 Active Tenants" className="bg-surface-container-low text-on-surface">10 - 50 Tenants</option>
                    <option value="50 - 250 Tenants" className="bg-surface-container-low text-on-surface">50 - 250 Tenants</option>
                    <option value="250+ Multi-Cluster" className="bg-surface-container-low text-on-surface">250+ Multi-Cluster Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-label-sm">
                    Primary Module Focus
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
                  Architecture Requirements
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Outline custom domain routing, SSO providers, data residency, or timeline needs..."
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

        {/* Right: Direct Channels & SLA Commitments (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Channels Card */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </div>
              <div>
                <h4 className="font-headline-lg text-lg text-on-surface">Direct Architecture Desks</h4>
                <p className="text-xs text-on-surface-variant font-mono">Monitored 24/7/365</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-sm font-mono divide-y divide-white/5">
              <div className="pt-2 flex justify-between items-center">
                <span className="text-on-surface-variant text-xs">Architecture & Sales:</span>
                <span className="text-primary text-xs">enterprise@qolve.systems</span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-on-surface-variant text-xs">Security & Compliance:</span>
                <span className="text-primary text-xs">security@qolve.systems</span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-on-surface-variant text-xs">Developer Relations:</span>
                <span className="text-primary text-xs">developers@qolve.systems</span>
              </div>
            </div>
          </div>

          {/* Enforceable SLA Card */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
              </div>
              <div>
                <h4 className="font-headline-lg text-lg text-on-surface">Enterprise SLA Tier</h4>
                <p className="text-xs text-on-surface-variant font-mono">99.99% Availability</p>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Every white-label contract includes an enforceable 99.99% uptime guarantee, automated tenant data isolation verification, and strict non-disclosure shielding.
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

      {/* Deployment FAQ Accordion */}
      <div className="space-y-6 pt-4">
        <div className="space-y-2 text-center md:text-left">
          <span className="font-label-sm text-xs text-primary uppercase tracking-widest">
            Knowledge & Deployment FAQs
          </span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">
            Common Architecture Inquiries
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => toggleFaq(idx)}
              className="glass-panel rounded-2xl p-6 cursor-pointer hover:border-white/20 transition-all duration-200 space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-headline-lg text-base text-on-surface">
                  {faq.q}
                </h4>
                <span className="material-symbols-outlined text-primary text-[20px] transition-transform duration-200">
                  {openFaq === idx ? 'remove' : 'add'}
                </span>
              </div>
              {openFaq === idx && (
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed pt-2 border-t border-white/5 animate-in fade-in duration-200">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
