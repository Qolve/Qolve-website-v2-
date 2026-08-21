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

  const handleScrollToForm = () => {
    const el = document.getElementById('consultation-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section (Matching Main Page Exact Aesthetic & Background) */}
      <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Image with Cinematic Misty Forest */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/50 via-transparent to-surface-container-lowest z-10" />
          <img
            className="w-full h-full object-cover object-center filter brightness-50"
            alt="A sweeping, high-contrast landscape of a dense, dark pine forest shrouded in thick morning mist."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3_IwyDDEu2iR0PwxGnCgEkEiC3xbnNva-n67iqLUKtETwU_ATPbichJVinPzVQ-syg9Lnufus6zfRkQr06ixrjk_xW09BItgb4N8W4x-xaBBLh2WDEVyRNui4h3xEjdrRbhaTLuz1oUEKjkmtJ3gSMs8pSGGEYsWUIqo8GfGpGo_XZXxoAvX1PgHKjFjNB2YjOG6QHXLDdNf0sAeV4ImqzwSKhE6Ty8JC7vi4NOgUkm9wt57iT4YLHQ"
          />
        </div>

        {/* Glass Hero Card */}
        <div className="relative z-20 w-[90%] md:w-[70%] max-w-[800px] glass-panel rounded-2xl p-8 md:p-16 text-center transform translate-y-8 opacity-0 animate-fade-up">
          <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 mb-6">
            Direct Engagement // Bespoke Deployments
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 text-glow">
            Deploy with QOLVE
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto mb-10">
            Connect directly with our enterprise solutions architects to plan your custom white-label deployment, multi-tenant cluster, or private VPC.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={handleScrollToForm}
              className="bg-primary-container text-on-primary-container border border-white/10 px-8 py-4 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all w-full sm:w-auto cursor-pointer"
            >
              Open Consultation Form
            </button>
            <a
              href="mailto:enterprise@qolve.systems"
              className="glass-panel px-8 py-4 rounded-lg font-body-md text-body-md text-on-surface hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span> Email Architects
            </a>
          </div>
        </div>
      </header>

      {/* Series 04: Contact & Engagement Bento Section */}
      <section id="consultation-form" className="relative w-full py-stack-xl bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 mb-6">
              Series 04 // Direct Channels
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              Enterprise Consultation
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Guaranteed response within 1 business day for all architecture inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            {/* Primary Feature Card: Form (Col 8) */}
            <div className="col-span-1 md:col-span-8 glass-panel rounded-2xl p-6 md:p-12 relative overflow-hidden group min-h-[460px] flex flex-col justify-between">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-surface-container-highest/40 via-surface-container-high/20 to-transparent pointer-events-none" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10">
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
                      className="mt-4 px-6 py-2 rounded-full border border-white/10 text-primary text-sm hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                          Tenant Scale
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
                          Module Focus
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
                        Project Scope & Timeline
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Outline specific CNAME, tenant isolation, or deployment deadline requirements..."
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
            </div>

            {/* Secondary Cards (Col 4) */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
              {/* Card 1: Direct Mail */}
              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8 text-primary">
                    <span className="material-symbols-outlined">alternate_email</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Direct Mail Channels</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-3">
                      Reach architecture leadership directly.
                    </p>
                    <div className="space-y-1 text-xs font-mono text-primary">
                      <div>enterprise@qolve.systems</div>
                      <div>security@qolve.systems</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Enterprise SLAs */}
              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8 text-primary">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Enterprise SLA Tier</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      99.99% uptime guarantee, automated data isolation verification, and strict NDA shielding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breathe Section (Matching Main Page Exact Aesthetic) */}
      <section className="w-full py-stack-xl md:py-[200px] bg-surface-container-lowest flex items-center justify-center">
        <div className="max-w-container-max mx-auto px-margin-mobile text-center">
          <h2 className="font-headline-xl text-headline-xl md:text-[72px] md:leading-[80px] text-on-surface font-light tracking-tight text-glow">
            Your infrastructure partner.<br />
            <span className="text-on-surface-variant">From prototype to enterprise.</span>
          </h2>
        </div>
      </section>
    </div>
  );
}
