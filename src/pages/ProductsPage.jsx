import React from 'react';

export default function ProductsPage({ onInquireClick }) {
  const handleScrollToModules = () => {
    const el = document.getElementById('product-modules');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
            Platform Suite // 2026
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 text-glow">
            Modular Platform Systems
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto mb-10">
            Precision white-label software products engineered for enterprise multi-tenancy. Deploy standalone or unified under your custom domain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={handleScrollToModules}
              className="bg-primary-container text-on-primary-container border border-white/10 px-8 py-4 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all w-full sm:w-auto cursor-pointer"
            >
              Explore Modules
            </button>
            <button
              onClick={onInquireClick}
              className="glass-panel px-8 py-4 rounded-lg font-body-md text-body-md text-on-surface hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span> Inquire for Module
            </button>
          </div>
        </div>
      </header>

      {/* Series 02: Core Products Bento Section */}
      <section id="product-modules" className="relative w-full py-stack-xl bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 mb-6">
              Series 02 // Product Modules
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              The Product Ecosystem
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Discrete, high-performance software modules engineered for seamless white-label integration.
            </p>
          </div>

          {/* Module Bento Grid 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Primary Feature Card: Support Hub (Col 8) */}
            <div className="col-span-1 md:col-span-8 glass-panel rounded-2xl p-6 md:p-12 relative overflow-hidden group min-h-[460px] flex flex-col justify-between">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-surface-container-highest/40 via-surface-container-high/20 to-transparent pointer-events-none" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <span className="font-label-sm text-xs text-primary font-mono bg-primary-container/20 px-3 py-1 rounded-full border border-primary/20">
                  Sub-20ms Sync
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-headline-lg text-headline-lg text-on-surface">
                  Support & Helpdesk Hub
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
                  Enterprise customer support and ticketing platform built for multi-tenant deployments. Custom CNAME routing, automated SSL certificate generation, and real-time SLA tracking.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={onInquireClick}
                    className="inline-flex items-center text-primary font-body-md text-body-md hover:text-primary-fixed transition-colors cursor-pointer"
                  >
                    Deploy Support Hub <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Cards (Col 4) */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
              {/* Card 1: Dynamic Theming */}
              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8 text-primary">
                    <span className="material-symbols-outlined">palette</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Dynamic Theming Engine</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      Runtime CSS token inheritance, logo injection, and dark-mode compliance per tenant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Identity & SSO */}
              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8 text-primary">
                    <span className="material-symbols-outlined">shield_lock</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Enterprise Identity (SSO)</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      SAML 2.0, OpenID Connect, RBAC with custom tenant roles, and immutable audit logs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module Bento Grid 2: Developer Gateway & Webhooks */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-gutter">
            {/* Secondary Cards Left (Col 4) */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
              {/* Card 3: Webhook Delivery */}
              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8 text-primary">
                    <span className="material-symbols-outlined">webhook</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">HMAC Webhook Mesh</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      Cryptographically signed event delivery with exponential backoff and replay defense.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: SDK Generation */}
              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8 text-primary">
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Multi-Language SDKs</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      Pre-packaged TypeScript, Go, and Python client wrappers for rapid integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Feature Card Right: Developer Gateway (Col 8) */}
            <div className="col-span-1 md:col-span-8 glass-panel rounded-2xl p-6 md:p-12 relative overflow-hidden group min-h-[460px] flex flex-col justify-between">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-surface-container-highest/40 via-surface-container-high/20 to-transparent pointer-events-none" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[24px]">api</span>
                </div>
                <span className="font-label-sm text-xs text-primary font-mono bg-primary-container/20 px-3 py-1 rounded-full border border-primary/20">
                  99.99% Uptime SLA
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-headline-lg text-headline-lg text-on-surface">
                  Developer API & Gateway Core
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
                  High-throughput REST and GraphQL endpoints designed for bi-directional data synchronization, automated tenant provisioning, and event dispatch.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={onInquireClick}
                    className="inline-flex items-center text-primary font-body-md text-body-md hover:text-primary-fixed transition-colors cursor-pointer"
                  >
                    Explore API Specs <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </button>
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
            Zero vendor trace.<br />
            <span className="text-on-surface-variant">Pure enterprise power.</span>
          </h2>
        </div>
      </section>
    </div>
  );
}
