import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import { services, processSteps } from '@/data/services';

export const metadata = {
  title: 'Engineering Services & Calibration | Synergy Engineering',
  description: 'Authorized industrial EPC substation projects, traceable NABL electrical calibration, transformer oil DGA, and preventive AMC maintenance.',
};

export default function Services() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services' }
  ];

  return (
    <div className="flex flex-col w-full bg-background relative overflow-x-hidden">
      {/* Decorative background watermark */}
      <div className="absolute right-[-10%] top-[25%] opacity-[0.02] text-[#D62828] pointer-events-none select-none z-0 rotate-[-15deg] hidden lg:block">
        <span className="material-symbols-outlined text-[35rem]" style={{ fontVariationSettings: "'FILL' 1" }}>
          bolt
        </span>
      </div>

      {/* Hero Section */}
      <HeroSection
        title="Engineering Services & Solutions"
        subtitle="High-fidelity electrical testing, accredited calibration, substation EPC executions, and industrial training certified to grid standards."
        backgroundImage="/images/dams.jpg"
        backgroundVideo="/videos/dam_vedio.mp4"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Core Operating Divisions Grid */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16 space-y-2">
          <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-label">
            Our Divisions
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-black text-primary-container leading-tight">
            Core Operating Capabilities
          </h2>
          <div className="w-16 h-1 bg-[#D62828] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc, idx) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="bg-white dark:bg-slate-900 p-8 group hover:shadow-2xl hover:-translate-y-1.5 border border-slate-200/60 dark:border-slate-800/80 hover:border-[#D62828]/30 transition-all duration-500 rounded-xl cursor-pointer relative overflow-hidden"
            >
              {/* Background Large Number Watermark */}
              <span className="font-headline font-black text-6xl text-slate-100 dark:text-slate-850 absolute top-5 right-6 pointer-events-none select-none transition-colors group-hover:text-[#D62828]/5 duration-500">
                0{idx + 1}
              </span>

              <span className="material-symbols-outlined text-[42px] text-[#D62828] mb-6 transition-transform group-hover:scale-105 select-none block" style={{ fontVariationSettings: "'FILL' 0" }}>
                {svc.icon}
              </span>
              <h3 className="text-lg font-headline font-black text-primary-container mb-3">
                {svc.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-xs sm:text-sm font-body mb-8">
                {svc.description}
              </p>
              <span className="text-[#D62828] font-headline font-bold flex items-center text-[10px] uppercase tracking-widest mt-auto">
                Explore division capabilities 
                <span className="ml-2 transition-transform group-hover:translate-x-1.5 text-base leading-none">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* 2. Detailed Divisions Sections Showcase */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/20 border-t border-slate-200/50 dark:border-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full space-y-20 py-10">
          {services.map((svc, idx) => (
            <div 
              key={svc.id} 
              id={svc.id}
              className="scroll-mt-28 bg-white dark:bg-slate-900 p-6 sm:p-10 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 relative overflow-hidden bg-grid-pattern"
            >
              
              {/* Top accent border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D62828]" />

              {/* Division Header Block */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4.5">
                  <div className="w-14 h-14 rounded-xl bg-[#D62828]/10 text-[#D62828] flex items-center justify-center select-none shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>{svc.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-headline font-black text-primary-container leading-tight">
                      {svc.title}
                    </h3>
                    <p className="text-[10px] text-[#D62828] font-headline font-bold tracking-widest uppercase mt-1">
                      DIVISION 0{idx + 1} • Synergy Capabilities
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href={`/quote?service=${svc.id}`}
                    className="inline-block bg-primary-container text-white hover:bg-slate-800 font-headline font-bold px-6 py-3 rounded active:scale-95 transition-all text-[10px] uppercase tracking-widest text-center shadow-md cursor-pointer"
                  >
                    Request Division RFQ
                  </Link>
                </div>
              </div>

              {/* Main Description */}
              <div className="max-w-4xl py-6">
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed font-body">
                  {svc.description}
                </p>
              </div>

              {/* Brochure details sub-cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {Object.entries(svc.details).map(([subTitle, items]) => (
                  <div 
                    key={subTitle} 
                    className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200/50 dark:border-slate-850 shadow-sm flex flex-col hover:border-[#D62828]/15 transition-colors duration-300"
                  >
                    <h4 className="font-headline font-black text-xs text-primary-container uppercase tracking-wider mb-4 border-b border-slate-200/60 dark:border-slate-800 pb-2 flex items-center justify-between">
                      <span>{subTitle}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
                    </h4>
                    <ul className="space-y-3 font-body text-xs text-on-surface-variant flex-grow">
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="material-symbols-outlined text-[#D62828] text-base shrink-0 select-none mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
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

      {/* 3. Project Execution Workflow (Interactive Timeline) */}
      <section className="py-24 bg-white dark:bg-slate-900 border-t border-b border-slate-200/40 dark:border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="mb-16 text-center space-y-2">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-label">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-primary-container leading-tight">
              Project Execution Workflow
            </h2>
            <div className="w-16 h-1 bg-[#D62828] mx-auto mt-4"></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-8 mt-12">
            {/* Dotted Connection Line (Desktop only) */}
            <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-350 z-0" />

            {processSteps.map((step, idx) => (
              <div 
                key={step.step} 
                className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 border border-slate-200/50 dark:border-slate-850 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {/* Number Circle Badge */}
                <div className="w-14 h-14 rounded-full bg-[#D62828] text-white flex items-center justify-center text-lg font-black mb-6 shadow-lg shadow-[#D62828]/20 font-headline select-none ring-4 ring-white dark:ring-slate-900 relative">
                  {step.step}
                  <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-25" />
                </div>
                
                <h4 className="text-lg font-headline font-black text-primary-container mb-3">
                  {step.title}
                </h4>
                <p className="text-on-surface-variant text-xs sm:text-sm font-body leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Call-to-Action Grid */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#101c2e] py-24 px-4 sm:px-8 relative overflow-hidden text-white border-t border-slate-800">
        <div className="absolute right-[-10%] top-[-10%] opacity-5 text-white pointer-events-none select-none z-0">
          <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 w-full relative z-10">
          <div className="text-left max-w-2xl space-y-3">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-white leading-tight">
              Ready to optimize your electrical infrastructure?
            </h2>
            <p className="text-slate-350 text-base sm:text-lg font-body leading-relaxed">
              Partner with Synergy Engineering for high-fidelity testing, NABL traceable calibration, and complete industrial project delivery.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 font-body">
            <Link
              className="bg-[#D62828] hover:bg-[#de2e2c] text-white px-8 py-4 rounded font-headline font-bold text-xs uppercase tracking-widest text-center shadow-lg shadow-[#D62828]/15 active:scale-95 transition-all inline-flex items-center justify-center min-h-[48px]"
              href="/contact"
            >
              Get a Free Consultation
            </Link>
            <Link
              className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded font-headline font-bold text-xs uppercase tracking-widest text-center hover:bg-white/5 active:scale-95 transition-all inline-flex items-center justify-center min-h-[48px]"
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
