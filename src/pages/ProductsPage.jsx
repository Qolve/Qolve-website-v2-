import React from 'react';

export default function ProductsPage({ onInquireClick }) {
  const products = [
    {
      id: '01',
      title: 'Support & Helpdesk Hub',
      badge: 'White-Label Platform',
      icon: 'support_agent',
      desc: 'An enterprise customer ticketing and support platform built for multi-tenant deployments. Brand every client portal with bespoke domains and zero vendor trace.',
      features: [
        'Multi-tenant shared & isolated inboxes',
        'Custom domain CNAME routing with automated SSL',
        'Customizable email relay & transactional templates',
        'Real-time SLA tracking and breach prevention'
      ],
      spec: 'Sub-20ms Edge Sync'
    },
    {
      id: '02',
      title: 'Dynamic Theming & Style Engine',
      badge: 'Design System Infrastructure',
      icon: 'palette',
      desc: 'Runtime CSS token engine that injects client color palettes, custom typography, logos, and dark eco surface treatments without requiring re-compilation.',
      features: [
        'Live token inheritance (CSS Variables & Tailwind)',
        'Per-tenant brand asset injection (logos, favicons)',
        'Dark mode & high-contrast accessibility compliance',
        'Client-facing customizer sandbox'
      ],
      spec: '0ms Build Latency'
    },
    {
      id: '03',
      title: 'Enterprise Identity & Access (SSO)',
      badge: 'Security & Auth Core',
      icon: 'shield_lock',
      desc: 'Cryptographically separated authentication layer supporting enterprise identity providers, custom role definitions, and strict workspace isolation.',
      features: [
        'SAML 2.0 & OpenID Connect (OIDC) integration',
        'Granular role-based access control (RBAC)',
        'Multi-factor authentication (MFA / Passkeys)',
        'Immutable tenant audit log stream'
      ],
      spec: 'SOC-2 Ready Architecture'
    },
    {
      id: '04',
      title: 'Developer API & Webhook Mesh',
      badge: 'Integration Layer',
      icon: 'api',
      desc: 'High-throughput REST and GraphQL endpoints designed for bi-directional data synchronization, automated tenant provisioning, and event dispatch.',
      features: [
        'Secure HMAC-signed webhook delivery',
        'Automated OpenAPI 3.1 & SDK generation',
        'Per-tenant rate limiting and quota management',
        'Comprehensive telemetry and error tracking'
      ],
      spec: '99.99% Uptime SLA'
    }
  ];

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-16">
      {/* Header */}
      <div className="text-center md:text-left space-y-4 max-w-3xl">
        <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20">
          White-Label Suite // 2026
        </span>
        <h1 className="font-display-lg text-display-lg text-on-surface text-glow leading-tight">
          Modular Enterprise Software.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Engineered as discrete, high-performance modules. Deploy individually or combine into an integrated white-label ecosystem under your brand.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {products.map((product) => (
          <div
            key={product.id}
            className="glass-panel rounded-2xl p-8 md:p-10 flex flex-col justify-between group hover:border-white/20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-container/10 rounded-full blur-[70px] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[24px]">{product.icon}</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary bg-primary-container/20 px-3 py-1 rounded-full border border-primary/20">
                  {product.badge}
                </span>
              </div>

              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                  {product.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {product.desc}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <div className="text-xs uppercase tracking-wider font-label-sm text-on-surface-variant">
                  Key Capabilities:
                </div>
                <ul className="space-y-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-on-surface">
                      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
              <span className="font-label-sm text-xs text-on-surface-variant font-mono">
                {product.spec}
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

      {/* Bottom Consultation Banner */}
      <div className="glass-panel rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden bg-surface-container-low">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-headline-lg text-headline-lg text-on-surface">Need a Bespoke Architecture?</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our engineering team designs custom multi-tenant clusters, dedicated VPC deployments, and custom SDK wrappers tailored to your enterprise requirements.
          </p>
        </div>
        <button
          onClick={onInquireClick}
          className="bg-primary-container text-on-primary-container border border-white/10 px-8 py-4 rounded-lg font-body-md text-body-md hover:bg-opacity-80 transition-all whitespace-nowrap cursor-pointer"
        >
          Schedule Technical Review
        </button>
      </div>
    </div>
  );
}
