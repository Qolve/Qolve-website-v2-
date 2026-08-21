import React, { useState } from 'react';

export default function ProductsPage({ onInquireClick }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePreviewTheme, setActivePreviewTheme] = useState('emerald');

  const categories = [
    { id: 'all', label: 'All Modules' },
    { id: 'support', label: 'Customer Support' },
    { id: 'theming', label: 'Design & Theming' },
    { id: 'security', label: 'Security & Auth' },
    { id: 'developer', label: 'Developer & APIs' },
  ];

  const modules = [
    {
      id: 'support-hub',
      category: 'support',
      number: '01',
      title: 'Support & Helpdesk Hub',
      badge: 'Customer Operations',
      icon: 'support_agent',
      desc: 'Enterprise multi-tenant ticketing system with automated client workspace isolation, shared & private inboxes, and real-time SLA breach tracking.',
      highlights: ['Custom CNAME routing with automated SSL', 'Shared triage & private escalation queues', 'Transactional email relay with zero vendor trace', 'Automated ticket tagging & routing rules'],
      metrics: { latency: '< 15ms', availability: '99.99%', isolation: 'Tenant Sharded' }
    },
    {
      id: 'theme-engine',
      category: 'theming',
      number: '02',
      title: 'Dynamic Brand & Style Engine',
      badge: 'UI Infrastructure',
      icon: 'palette',
      desc: 'Runtime design token and stylesheet engine. Inject custom typography, color palettes, dark/light modes, and brand assets dynamically per client domain without rebuilding.',
      highlights: ['Zero-rebuild CSS variable injection', 'Subdomain-based asset & logo mapping', 'Dark mode & high-contrast compliance', 'Client-facing live branding sandbox'],
      metrics: { compileTime: '0 ms', tokenSync: 'Real-time', contrast: 'WCAG 2.2 AA' }
    },
    {
      id: 'identity-sso',
      category: 'security',
      number: '03',
      title: 'Enterprise Identity (SSO) & RBAC',
      badge: 'Security Core',
      icon: 'shield_lock',
      desc: 'Cryptographically separated authentication layer supporting enterprise identity providers, custom role definitions, and strict workspace isolation.',
      highlights: ['SAML 2.0 & OpenID Connect (OIDC)', 'Granular role-based permissions (RBAC)', 'Passkey & hardware MFA support', 'Immutable tenant audit logs'],
      metrics: { protocol: 'SAML 2.0 / OIDC', audit: 'Immutable', compliance: 'SOC-2 Ready' }
    },
    {
      id: 'developer-mesh',
      category: 'developer',
      number: '04',
      title: 'Developer Gateway & Webhook Mesh',
      badge: 'Integration Layer',
      icon: 'api',
      desc: 'High-throughput REST and GraphQL endpoints designed for bi-directional data synchronization, automated tenant provisioning, and event dispatch.',
      highlights: ['HMAC-SHA256 signed event delivery', 'Automated OpenAPI 3.1 & SDK generation', 'Per-tenant rate limiting and quota management', 'Sub-20ms edge proxy routing'],
      metrics: { throughput: '10k+ req/s', signatures: 'HMAC-SHA256', proxy: 'Edge Native' }
    },
  ];

  const filteredModules = activeCategory === 'all'
    ? modules
    : modules.filter((m) => m.category === activeCategory);

  const themeVariants = {
    emerald: { bg: 'bg-[#18362a]', text: 'text-[#adcebd]', border: 'border-[#adcebd]/30', label: 'Obsidian Pine' },
    amber: { bg: 'bg-[#402d23]', text: 'text-[#d4aa8f]', border: 'border-[#d4aa8f]/30', label: 'Aged Cedar' },
    slate: { bg: 'bg-[#282a29]', text: 'text-[#e2e3e0]', border: 'border-white/20', label: 'Charcoal Mineral' },
  };

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-20">
      {/* Editorial Header (Distinct from Home) */}
      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20">
            Platform Suite // Modular Architecture
          </span>
          <span className="text-xs font-mono text-on-surface-variant/70">
            v2.4 Production
          </span>
        </div>

        <h1 className="font-display-lg text-display-lg text-on-surface text-glow leading-tight">
          White-Label Infrastructure.
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Every component is engineered as a standalone, brandable building block. Connect individual modules into existing architectures or deploy as a unified multi-tenant platform.
        </p>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-primary-container text-primary border border-primary/30 shadow-sm'
                  : 'glass-panel text-on-surface-variant hover:text-on-surface hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Interactive Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {filteredModules.map((item) => (
          <div
            key={item.id}
            className="glass-panel rounded-2xl p-8 md:p-10 flex flex-col justify-between group hover:border-white/20 transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle ambient lighting behind glass */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-container/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-on-surface-variant/60">
                    MODULE {item.number}
                  </span>
                  <span className="font-label-sm text-xs text-primary bg-primary-container/20 px-3 py-1 rounded-full border border-primary/20">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                  {item.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Capabilities checklist */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <div className="text-xs uppercase tracking-wider font-label-sm text-on-surface-variant">
                  Architectural Capabilities:
                </div>
                <ul className="space-y-2">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-on-surface">
                      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics Pill Row */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {Object.entries(item.metrics).map(([key, val]) => (
                  <div key={key} className="p-3 rounded-lg bg-surface-container-highest/20 border border-white/5">
                    <div className="text-[10px] font-mono uppercase text-on-surface-variant/70">
                      {key}
                    </div>
                    <div className="text-xs font-semibold font-mono text-on-surface mt-0.5">
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
              <span className="font-label-sm text-xs text-on-surface-variant font-mono">
                Production Ready
              </span>
              <button
                onClick={onInquireClick}
                className="inline-flex items-center text-primary font-body-md text-sm hover:text-primary-fixed transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              >
                Inquire for Module <span className="material-symbols-outlined ml-1.5 text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Theming & White-Label Demo Sandbox */}
      <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden space-y-8 bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="font-label-sm text-xs text-primary uppercase tracking-widest">
              Interactive Preview // White-Label Theming
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface mt-1">
              Zero-Trace Brand Switching
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-on-surface-variant mr-2">Simulate Tenant:</span>
            {Object.keys(themeVariants).map((themeKey) => (
              <button
                key={themeKey}
                onClick={() => setActivePreviewTheme(themeKey)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all cursor-pointer ${
                  activePreviewTheme === themeKey
                    ? 'bg-white/15 text-on-surface border-white/30 shadow-sm'
                    : 'bg-white/5 text-on-surface-variant border-white/5 hover:text-on-surface'
                }`}
              >
                {themeVariants[themeKey].label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Mock Tenant Portal Card */}
        <div
          className={`p-6 md:p-8 rounded-xl border transition-all duration-500 space-y-6 ${themeVariants[activePreviewTheme].border} ${themeVariants[activePreviewTheme].bg}`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-white text-xs">
                {activePreviewTheme === 'emerald' ? 'PINE' : activePreviewTheme === 'amber' ? 'ACME' : 'NORD'}
              </div>
              <div>
                <div className="font-semibold text-sm text-white">
                  {activePreviewTheme === 'emerald' ? 'Pine Forest Corp' : activePreviewTheme === 'amber' ? 'Acme Global Ventures' : 'Nordic Mineral Systems'}
                </div>
                <div className="text-[11px] font-mono text-white/60">
                  https://support.{activePreviewTheme === 'emerald' ? 'pineforest.co' : activePreviewTheme === 'amber' ? 'acme.io' : 'nordic.tech'}
                </div>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-white">
              Tenant Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-black/20 border border-white/5 space-y-1">
              <div className="text-[10px] font-mono uppercase text-white/60">Active Tickets</div>
              <div className="text-xl font-bold text-white font-mono">142</div>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-white/5 space-y-1">
              <div className="text-[10px] font-mono uppercase text-white/60">SLA Resolution</div>
              <div className="text-xl font-bold text-white font-mono">99.8%</div>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-white/5 space-y-1">
              <div className="text-[10px] font-mono uppercase text-white/60">SSL Security</div>
              <div className="text-xl font-bold text-white font-mono">Automated TLS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications Matrix */}
      <div className="space-y-6">
        <div className="text-center md:text-left space-y-1">
          <span className="font-label-sm text-xs text-primary uppercase tracking-widest">
            Architecture Specs
          </span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">
            Platform Specifications
          </h3>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase text-on-surface-variant">
                <th className="pb-4 font-normal">Layer</th>
                <th className="pb-4 font-normal">Standard Specification</th>
                <th className="pb-4 font-normal">Enterprise Dedicated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-on-surface font-body-md">
              <tr>
                <td className="py-4 font-medium text-primary">Custom Domain Routing</td>
                <td className="py-4 text-on-surface-variant">Automated CNAME with Wildcard Let's Encrypt TLS</td>
                <td className="py-4">Custom Certificate Import & Dedicated Anycast IP</td>
              </tr>
              <tr>
                <td className="py-4 font-medium text-primary">Tenant Data Isolation</td>
                <td className="py-4 text-on-surface-variant">Row-Level Security & Cryptographic Tenant Keys</td>
                <td className="py-4">Dedicated Sharded Database Cluster / VPC</td>
              </tr>
              <tr>
                <td className="py-4 font-medium text-primary">Authentication Protocols</td>
                <td className="py-4 text-on-surface-variant">Email OTP, OAuth (Google, GitHub, Microsoft)</td>
                <td className="py-4">SAML 2.0 (Okta, Azure AD), OIDC, SCIM Provisioning</td>
              </tr>
              <tr>
                <td className="py-4 font-medium text-primary">Service Level Agreement</td>
                <td className="py-4 text-on-surface-variant">99.9% Uptime with 8-hr Support Response</td>
                <td className="py-4">99.99% Uptime with 1-hr Priority PagerDuty SLA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Consultation Banner */}
      <div className="glass-panel rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden bg-surface-container-low">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-headline-lg text-headline-lg text-on-surface">Ready to Scope Your White-Label Deployment?</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Connect with our engineering team to review custom integration requirements, tenant capacity planning, and deployment timelines.
          </p>
        </div>
        <button
          onClick={onInquireClick}
          className="bg-primary-container text-on-primary-container border border-white/10 px-8 py-4 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all whitespace-nowrap cursor-pointer"
        >
          Schedule Architecture Session
        </button>
      </div>
    </div>
  );
}
