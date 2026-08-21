import React from 'react';

export default function TeamPage({ onInquireClick }) {
  const teamMembers = [
    {
      name: 'Harry',
      role: 'Systems Architecture Lead',
      domain: 'Multi-Tenant Clustering // Edge Proxies',
      bio: 'Directs core distributed systems, database tenant isolation protocols, and low-latency edge routing infrastructure.',
      email: 'harry@qolve.systems',
      icon: 'dns',
      focus: 'Cluster Scalability'
    },
    {
      name: 'Liam',
      role: 'Platform Engineering Lead',
      domain: 'Background Queues // Event Pipelines',
      bio: 'Architects resilient SaaS pipelines, automated tenant provisioning, and asynchronous webhook dispatch engines.',
      email: 'liam@qolve.systems',
      icon: 'hub',
      focus: 'High Throughput'
    },
    {
      name: 'Vilius',
      role: 'Design Systems Architect',
      domain: 'Obsidian Grove // Liquid Glass Engine',
      bio: 'Crafts zero-fatigue digital surfaces, runtime CSS token injectors, and multi-tenant theme sandboxes.',
      email: 'vilius@qolve.systems',
      icon: 'palette',
      focus: 'Zero-Rebuild Theming'
    },
    {
      name: 'Aurimas',
      role: 'Platform Reliability & Security',
      domain: 'SAML 2.0 // SOC-2 Compliance // VPC',
      bio: 'Oversees cryptographic tenant separation, enterprise identity federation, and automated penetration defenses.',
      email: 'aurimas@qolve.systems',
      icon: 'shield',
      focus: 'Data Sovereignty'
    },
    {
      name: 'Seb',
      role: 'Developer Ecosystem & APIs',
      domain: 'OpenAPI 3.1 // Client SDKs // Protocols',
      bio: 'Maintains typed SDK client generators, webhook cryptographic verification, and public API interfaces.',
      email: 'seb@qolve.systems',
      icon: 'terminal',
      focus: 'Developer Experience'
    }
  ];

  const engineeringPrinciples = [
    {
      number: '01',
      title: 'Zero-Trace White-Labeling',
      desc: 'Our infrastructure remains completely anonymous. No vendor badges, no third-party telemetry leaks, and no unbranded asset requests visible to your customers.'
    },
    {
      number: '02',
      title: 'Cryptographic Tenant Isolation',
      desc: 'Every tenant workspace is isolated at the data layer with dedicated encryption keys and strict row-level security policies.'
    },
    {
      number: '03',
      title: 'Edge-Rendered Liquid Tokens',
      desc: 'Design tokens and brand stylesheets are evaluated at edge nodes in under 2ms, delivering instant visual identity without client-side lag.'
    }
  ];

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-20">
      {/* Editorial Split Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20">
              Engineering Leadership // Core Lab
            </span>
            <span className="text-xs font-mono text-on-surface-variant/70">
              Distributed Systems
            </span>
          </div>

          <h1 className="font-display-lg text-display-lg text-on-surface text-glow leading-tight">
            Engineering in the Shadows.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            We architect the multi-tenant scaffolding and distributed reliability layer so your software brand takes center stage.
          </p>
        </div>

        {/* Right Stats Capsules */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-panel rounded-2xl p-6 space-y-1">
            <div className="text-xs font-mono uppercase text-primary">Core Availability</div>
            <div className="text-3xl font-bold font-mono text-on-surface">99.99%</div>
            <div className="text-xs text-on-surface-variant">Guaranteed contract SLA</div>
          </div>

          <div className="glass-panel rounded-2xl p-6 space-y-1">
            <div className="text-xs font-mono uppercase text-primary">Brand Trace</div>
            <div className="text-3xl font-bold font-mono text-on-surface">0.00%</div>
            <div className="text-xs text-on-surface-variant">Complete client anonymity</div>
          </div>

          <div className="glass-panel rounded-2xl p-6 space-y-1">
            <div className="text-xs font-mono uppercase text-primary">Edge Latency</div>
            <div className="text-3xl font-bold font-mono text-on-surface">&lt; 15ms</div>
            <div className="text-xs text-on-surface-variant">Global CNAME anycast</div>
          </div>

          <div className="glass-panel rounded-2xl p-6 space-y-1">
            <div className="text-xs font-mono uppercase text-primary">Compliance</div>
            <div className="text-3xl font-bold font-mono text-on-surface">SOC-2</div>
            <div className="text-xs text-on-surface-variant">Tenant data sovereignty</div>
          </div>
        </div>
      </div>

      {/* Team Roster Cards */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="font-label-sm text-xs text-primary uppercase tracking-widest">
              Core Roster
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
              Systems Architects & Engineers
            </h2>
          </div>
          <span className="text-xs font-mono text-on-surface-variant">
            5 Core Architects // Dedicated Lab
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="glass-panel rounded-2xl p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 text-primary">
                    <span className="material-symbols-outlined text-[24px]">{member.icon}</span>
                  </div>
                  <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-mono bg-primary-container/20 px-2.5 py-0.5 rounded-full border border-primary/20">
                    {member.focus}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-lg text-2xl text-on-surface mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs uppercase tracking-wider font-label-sm text-primary mb-2">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-mono text-on-surface-variant/70 mb-3 pb-3 border-b border-white/5">
                    {member.domain}
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-label-sm text-xs text-on-surface-variant font-mono">
                  {member.email}
                </span>
                <span className="material-symbols-outlined text-primary text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Philosophy Showcase */}
      <div className="space-y-8 pt-4">
        <div className="space-y-2">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Engineering Culture
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            Architectural Tenets.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {engineeringPrinciples.map((item) => (
            <div key={item.number} className="glass-panel rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="text-xs font-mono text-primary font-semibold">
                {item.number} // PRINCIPLE
              </div>
              <h4 className="font-body-lg font-semibold text-on-surface text-xl">
                {item.title}
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Session Consultation Banner */}
      <div className="glass-panel rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden bg-surface-container-low">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-headline-lg text-headline-lg text-on-surface">Collaborate Directly with Leadership</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Schedule an architectural deep dive to discuss high-concurrency multi-tenancy, custom VPC deployments, and tenant migration paths.
          </p>
        </div>
        <button
          onClick={onInquireClick}
          className="bg-primary-container text-on-primary-container border border-white/10 px-8 py-4 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all whitespace-nowrap cursor-pointer"
        >
          Book Technical Session
        </button>
      </div>
    </div>
  );
}
