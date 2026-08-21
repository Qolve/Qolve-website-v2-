import React from 'react';

export default function OakSeriesSection({ onDiscoverCoreClick }) {
  return (
    <section id="platform" className="relative w-full py-stack-xl bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 mb-6">
            Series 01 // Enterprise Infrastructure
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
            The White-Label Core
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Fully brandable SaaS infrastructure, engineered with multi-tenant isolation, custom domain CNAME routing, and dynamic client theming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Main Feature Card */}
          <div className="col-span-1 md:col-span-8 glass-panel rounded-2xl p-6 md:p-12 relative overflow-hidden group min-h-[500px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                alt="A macro shot of dark, charred oak wood grain texture with liquid glass device."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkCfh-wHRB5WmY4ZljP_OdhLvmSCSnlaf7djV1i34W4hcnFGm-V9SkqTQZ3Oo6chbHm-EDpkP4n3dA7PVnw-V2-jOUu_IYGvj_CYFE0dVZYeB4k5dIeA4-J3fZaUmzu3qjR8eZUgDAKkIAH06tTEgY-sdyn5YJDy4lvkS0tGicbFqBAJYVGzO-7TMzNRQVeK8P_bNRr6T6frUOxDxXo4BWtTLzx7H86TWrDw3OIBYRPuKhAP0gNeoLbQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
            </div>

            <div className="relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Qolve Platform Hub
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">
                The central multi-tenant operating system for your enterprise, equipped with automated client provisioning, role-based access, and real-time telemetry.
              </p>
              <button
                onClick={onDiscoverCoreClick}
                className="inline-flex items-center text-primary font-body-md text-body-md hover:text-primary-fixed transition-colors cursor-pointer"
              >
                Discover Architecture <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Secondary Cards */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
            {/* Card 1: Dynamic White-Label Theming */}
            <div id="white-label" className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
              <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8">
                  <span className="material-symbols-outlined text-primary">palette</span>
                </div>
                <div>
                  <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Bespoke Brand Theming</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    Inject custom stylesheets, brand identities, custom CNAME domains, and tailored color tokens dynamically per tenant.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Enterprise Multi-Tenancy */}
            <div id="architecture" className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
              <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8">
                  <span className="material-symbols-outlined text-primary">hub</span>
                </div>
                <div>
                  <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Multi-Tenant Isolation</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    Cryptographically separated tenant data stores with enterprise Single Sign-On (SAML 2.0 / OIDC) and audit logging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
