import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import { services, processSteps } from '@/data/services';

export const metadata = {
  title: 'Services | Synergy Engineering',
  description: 'Industrial EPC engineering, accredited testing, NABL calibration, AMC contracts, and training services by Synergy Engineering.',
};

export default function Services() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services' }
  ];

  return (
    <div className="flex flex-col w-full bg-background relative overflow-x-hidden">
      {/* Decorative background watermark */}
      <div className="absolute right-[-10%] top-[20%] opacity-[0.02] text-secondary pointer-events-none select-none z-0 rotate-[-15deg] hidden lg:block">
        <span className="material-symbols-outlined text-[40rem]" style={{ fontVariationSettings: "'FILL' 1" }}>
          bolt
        </span>
      </div>

      {/* Hero Section */}
      <HeroSection
        title="Engineering Services & Solutions"
        subtitle="Precision-engineered solutions tailored for the most demanding industrial environments. From full-scale EPC execution to accredited calibration."
        backgroundImage="/images/img_47.webp"
        breadcrumbs={breadcrumbs}
      />

      {/* Top Level Services Cards Menu */}
      <section className="py-20 px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase font-label">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-container mt-2 font-headline">
            Core Operating Divisions
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="bg-surface-container-lowest p-8 group hover:bg-surface-container-low transition-all duration-300 flex flex-col items-start border-l-4 border-transparent hover:border-secondary shadow-sm hover:shadow-md rounded-r-lg cursor-pointer"
            >
              <span 
                className="material-symbols-outlined text-[48px] text-secondary mb-6 transition-transform group-hover:scale-110 select-none"
              >
                {svc.icon}
              </span>
              <h3 className="text-xl font-bold text-primary-container mb-3 font-headline">
                {svc.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-body mb-6">
                {svc.description}
              </p>
              <span className="text-secondary font-bold flex items-center group-hover:opacity-80 text-xs uppercase tracking-wider font-label mt-auto">
                View Details <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 w-full space-y-24 py-16">
          {services.map((svc, idx) => (
            <div 
              key={svc.id} 
              id={svc.id}
              className={`scroll-mt-28 bg-white p-4 sm:p-8 md:p-12 rounded-xl shadow-md border border-slate-200/50 flex flex-col gap-10`}
            >
              {/* Header block */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center select-none">
                    <span className="material-symbols-outlined text-2xl">{svc.icon}</span>
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-primary-container font-headline">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-secondary font-bold tracking-widest uppercase font-label mt-1">
                      Division 0{idx + 1}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="inline-block border border-secondary text-secondary font-headline font-bold px-6 py-2.5 rounded hover:bg-secondary hover:text-white transition-all text-xs uppercase tracking-wider text-center"
                  >
                    Enquire for this Division
                  </Link>
                </div>
              </div>

              {/* Main Description */}
              <div className="max-w-4xl">
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-body">
                  {svc.description}
                </p>
              </div>

              {/* In-depth Brochure data details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {Object.entries(svc.details).map(([subTitle, items]) => (
                  <div key={subTitle} className="bg-surface-container-lowest p-4 sm:p-6 rounded-lg border border-slate-100 shadow-sm flex flex-col">
                    <h4 className="font-headline font-bold text-sm text-primary-container uppercase tracking-wider mb-4 border-b border-secondary/20 pb-2 flex items-center justify-between">
                      <span>{subTitle}</span>
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    </h4>
                    <ul className="space-y-3 font-body text-xs text-on-surface-variant flex-grow">
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="material-symbols-outlined text-secondary text-base shrink-0 select-none mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                            check_circle
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Workflow Process */}
      <section className="py-24 bg-surface-container overflow-hidden relative z-10 border-t border-b border-slate-200/30">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="mb-16 text-center">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase font-label">
              Quality Assurance
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-container mt-2 font-headline">
              Project Execution Workflow
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 mt-12">
            {processSteps.map((step, idx) => (
              <React.Fragment key={step.step}>
                <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white text-2xl font-black mb-6 shadow-xl font-headline select-none">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold text-primary-container mb-3 font-headline">
                    {step.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm max-w-[240px] font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Connector arrow line */}
                {idx < processSteps.length - 1 && (
                  <div className={`hidden md:block absolute top-8 left-[calc(33.3%*${idx + 1}-4%)] w-[8%] h-[2px] bg-slate-300`}>
                    <div className="absolute right-0 -top-[3px] border-y-4 border-y-transparent border-l-8 border-l-secondary"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-container py-20 px-8 relative overflow-hidden text-white">
        <div className="absolute right-[-10%] top-[-10%] opacity-5 text-white pointer-events-none select-none">
          <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 w-full relative z-10">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 font-headline leading-tight">
              Ready to optimize your electrical infrastructure?
            </h2>
            <p className="text-slate-300 text-lg font-body leading-relaxed">
              Partner with Synergy Engineering for high-fidelity testing, NABL calibration, and complete industrial project delivery.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 font-body">
            <Link
              className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-sm hover:brightness-110 transition-all inline-block text-center font-headline uppercase tracking-wider min-h-[48px] flex items-center justify-center shadow-lg"
              href="/contact"
            >
              Get a Free Consultation
            </Link>
            <Link
              className="bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-white/5 transition-all text-center font-headline uppercase tracking-wider min-h-[48px] flex items-center justify-center"
              href="/products"
            >
              View Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
