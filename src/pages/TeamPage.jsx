import React from 'react';

export default function TeamPage({ onInquireClick }) {
  const teamMembers = [
    {
      name: 'Harry',
      role: 'Systems Architecture & Core Infrastructure',
      domain: 'Multi-Tenant Clustering // CNAME Routing',
      bio: 'Leads core distributed systems engineering, high-throughput database isolation, and edge proxy architectures.',
      email: 'harry@qolve.systems',
      icon: 'dns'
    },
    {
      name: 'Liam',
      role: 'Multi-Tenant Platform Engineering',
      domain: 'Application Frameworks // Webhooks',
      bio: 'Architects event-driven SaaS pipelines, tenant provisioning automation, and high-availability background workers.',
      email: 'liam@qolve.systems',
      icon: 'hub'
    },
    {
      name: 'Vilius',
      role: 'Design Systems & Front-End Architecture',
      domain: 'Obsidian Grove // Liquid Glass Engine',
      bio: 'Crafts bespoke white-label theming architectures, tokenized design systems, and zero-fatigue digital surfaces.',
      email: 'vilius@qolve.systems',
      icon: 'palette'
    },
    {
      name: 'Aurimas',
      role: 'Platform Reliability & Security',
      domain: 'SAML 2.0 // SOC-2 Compliance // VPC',
      bio: 'Oversees cryptographic tenant separation, enterprise identity integration, and infrastructure hardening.',
      email: 'aurimas@qolve.systems',
      icon: 'shield'
    },
    {
      name: 'Seb',
      role: 'Developer Ecosystem & API Protocols',
      domain: 'OpenAPI // Client SDKs // Integration',
      bio: 'Engineers developer SDKs, webhook dispatch verification, and public API interfaces for enterprise clients.',
      email: 'seb@qolve.systems',
      icon: 'terminal'
    }
  ];

  const engineeringPrinciples = [
    {
      title: 'Zero-Trace White-Labeling',
      desc: 'Our platform infrastructure remains completely invisible behind your brand identities and custom hostnames.'
    },
    {
      title: 'Strict Data Isolation',
      desc: 'Every tenant database shard and cache layer is compartmentalized to guarantee compliance and operational security.'
    },
    {
      title: 'Sub-Millisecond Rendering',
      desc: 'Liquid glass styling is tokenized at the edge to eliminate runtime calculation overhead for your end-users.'
    }
  ];

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-20">
      {/* Header */}
      <div className="text-center md:text-left space-y-4 max-w-3xl">
        <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20">
          Engineering Roster // Core Lab
        </span>
        <h1 className="font-display-lg text-display-lg text-on-surface text-glow leading-tight">
          The Engineering Team.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Systems architects, design engineers, and distributed infrastructure specialists dedicated to crafting resilient B2B software platforms.
        </p>
      </div>

      {/* Team Grid */}
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
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-mono bg-primary-container/20 px-2.5 py-0.5 rounded-full border border-primary/20">
                  {member.name}
                </span>
              </div>

              <div>
                <h3 className="font-headline-lg text-2xl text-on-surface mb-1">
                  {member.name}
                </h3>
                <div className="text-xs uppercase tracking-wider font-label-sm text-primary mb-3">
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

      {/* Engineering Principles Section */}
      <div className="space-y-8 pt-8">
        <div className="text-center md:text-left space-y-2">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Architecture Philosophy
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            How We Build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {engineeringPrinciples.map((principle, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 md:p-8 space-y-3">
              <div className="text-xs font-mono text-primary font-semibold">
                0{idx + 1} //
              </div>
              <h4 className="font-body-lg font-semibold text-on-surface text-lg">
                {principle.title}
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Consultation Banner */}
      <div className="glass-panel rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden bg-surface-container-low">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-headline-lg text-headline-lg text-on-surface">Work With Our Architects</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Connect directly with our engineering leadership to scope white-label deployments, custom integrations, or private VPC architectures.
          </p>
        </div>
        <button
          onClick={onInquireClick}
          className="bg-primary-container text-on-primary-container border border-white/10 px-8 py-4 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all whitespace-nowrap cursor-pointer"
        >
          Schedule Direct Session
        </button>
      </div>
    </div>
  );
}
