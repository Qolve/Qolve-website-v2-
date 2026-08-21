import React from 'react';

export default function TeamPage({ onInquireClick }) {
  const handleScrollToTeam = () => {
    const el = document.getElementById('team-roster');
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
            Engineering Roster // Core Lab
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 text-glow">
            Architects of Silent Scale
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto mb-10">
            Systems architects, distributed engineers, and design system specialists building resilient, zero-trace white-label infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={handleScrollToTeam}
              className="bg-primary-container text-on-primary-container border border-white/10 px-8 py-4 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all w-full sm:w-auto cursor-pointer"
            >
              Meet the Team
            </button>
            <button
              onClick={onInquireClick}
              className="glass-panel px-8 py-4 rounded-lg font-body-md text-body-md text-on-surface hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">group</span> Work With Architects
            </button>
          </div>
        </div>
      </header>

      {/* Series 03: Engineering Roster Bento Section */}
      <section id="team-roster" className="relative w-full py-stack-xl bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 mb-6">
              Series 03 // Systems Leadership
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              Core Engineering Roster
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Specialists across distributed clustering, tokenized UI engines, and enterprise security.
            </p>
          </div>

          {/* Team Bento Grid 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Primary Feature Card: Systems Architecture Lead (Col 8) */}
            <div className="col-span-1 md:col-span-8 glass-panel rounded-2xl p-6 md:p-12 relative overflow-hidden group min-h-[460px] flex flex-col justify-between">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-surface-container-highest/40 via-surface-container-high/20 to-transparent pointer-events-none" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[24px]">dns</span>
                </div>
                <span className="font-label-sm text-xs text-primary font-mono bg-primary-container/20 px-3 py-1 rounded-full border border-primary/20">
                  Systems Core
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <div className="text-xs uppercase tracking-wider font-label-sm text-primary">
                  Leadership // Architecture
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">
                  Harry & Liam
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
                  Leads core distributed systems engineering, high-throughput database tenant isolation, automated background workers, and edge proxy architectures.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <span className="text-xs font-mono text-on-surface-variant">
                    Domain: Multi-Tenant Clustering // CNAME Routing
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Cards (Col 4) */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
              {/* Card 1: Design Systems */}
              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8 text-primary">
                    <span className="material-symbols-outlined">palette</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-label-sm text-primary mb-1">
                      Vilius
                    </div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Design Systems & UI Engine</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      Crafts bespoke white-label theming architectures and tokenized design systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Security & Reliability */}
              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8 text-primary">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-label-sm text-primary mb-1">
                      Aurimas & Seb
                    </div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Platform Security & APIs</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      Cryptographic tenant isolation, SOC-2 readiness, and enterprise API protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Principles Sub-Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-gutter">
            <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-3">
              <div className="text-xs font-mono text-primary font-semibold">
                01 // PRINCIPLE
              </div>
              <h4 className="font-body-lg font-semibold text-on-surface text-lg">
                Zero-Trace White-Labeling
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Our platform infrastructure remains completely invisible behind your brand identities and custom hostnames.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-3">
              <div className="text-xs font-mono text-primary font-semibold">
                02 // PRINCIPLE
              </div>
              <h4 className="font-body-lg font-semibold text-on-surface text-lg">
                Strict Data Isolation
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Every tenant database shard and cache layer is compartmentalized to guarantee compliance and operational security.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-3">
              <div className="text-xs font-mono text-primary font-semibold">
                03 // PRINCIPLE
              </div>
              <h4 className="font-body-lg font-semibold text-on-surface text-lg">
                Sub-Millisecond Rendering
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Liquid glass styling is tokenized at the edge to eliminate runtime calculation overhead for your end-users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breathe Section (Matching Main Page Exact Aesthetic) */}
      <section className="w-full py-stack-xl md:py-[200px] bg-surface-container-lowest flex items-center justify-center">
        <div className="max-w-container-max mx-auto px-margin-mobile text-center">
          <h2 className="font-headline-xl text-headline-xl md:text-[72px] md:leading-[80px] text-on-surface font-light tracking-tight text-glow">
            Engineered with discipline.<br />
            <span className="text-on-surface-variant">Built for longevity.</span>
          </h2>
        </div>
      </section>
    </div>
  );
}
