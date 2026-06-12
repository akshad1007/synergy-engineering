import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import { industries } from '@/data/industries';

export const metadata = {
  title: 'Industries Served | Synergy Engineering',
  description: 'Providing precision electrical diagnostic testing, NABL calibration, and EPC substation installations across R&D, T&D utilities, railways, and aerospace.',
};

export default function Industries() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Industries' }
  ];

  // Helper to map additional systems for the featured equipment panel to look premium
  const getSubSystems = (id) => {
    switch (id) {
      case 'rd':
        return ['Baker ADX Diagnostics', 'High-Voltage Simulator Benches', 'Precision RLC Standards'];
      case 'power-gen':
        return ['Online Bushing Monitors', 'HYDROCAL DGA Systems', 'Turbine Protection Relays'];
      case 'td':
        return ['Sweep Frequency Response (SFRA)', 'Tan Delta Bushing Diagnostics', 'Class A Power Quality Systems'];
      case 'aerospace':
        return ['MTE Reference Standards', 'Portable Working Meters', 'Precision Calibration Standards'];
      case 'railways':
        return ['VLF Cable Test Sets', 'Acoustic Fault Pinpointers', 'Traction Substation Auditing'];
      case 'manufacturing':
        return ['Cable/Panel Tagging Systems', 'Tube & Heat-Shrink Printers', 'Machine Surge Analyzers'];
      case 'ports':
        return ['Outdoor Cable Fault Locators', 'Portable Labeling Kits', 'High-Volt Sheath Integrities'];
      case 'metals-mining':
        return ['Transformer Insulation Testers', 'Heavy-Duty Earth Ground Testers', 'Ohmic Battery Impedance Systems'];
      case 'pharmaceutical':
        return ['Harmonic Mitigation Filters', 'Sterile Panel Labeling Systems', 'Continuous Grid Voltage Audits'];
      case 'infrastructure':
        return ['NABL Certified Calibration', 'Earth Pit Grid Verification', 'Annual Maintenance AMC Contracts'];
      default:
        return ['Traceable Calibration Support', 'Preventive AMC Contracts', 'Authorized OEM Warranties'];
    }
  };

  return (
    <div className="flex flex-col w-full bg-background relative overflow-x-hidden">
      
      {/* Hero Section */}
      <HeroSection
        title="Industries We Serve"
        subtitle="Delivering advanced electrical testing, grid-accredited calibration, and complete substation EPC project delivery across high-tolerance B2B sectors."
        backgroundImage="/images/img_30.webp"
        breadcrumbs={breadcrumbs}
      />

      {/* Intro Paragraph (Redesigned with custom Imperial Script font) */}
      <section className="py-24 px-4 sm:px-8 bg-gradient-to-r from-slate-50 via-slate-100/40 to-slate-50 dark:from-slate-900/30 dark:via-slate-900/50 dark:to-slate-900/30 relative border-b border-slate-200/40 dark:border-slate-800/40">
        <div className="max-w-4xl mx-auto text-center w-full relative space-y-6">
          <div className="flex justify-center mb-2">
            <span className="material-symbols-outlined text-4xl text-[#D62828]/20 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
          </div>
          
          <p className="text-3xl sm:text-4xl md:text-5xl font-imperial text-slate-800 dark:text-slate-200 leading-normal tracking-wide px-4">
            Synergy Engineering provides <strong className="font-bold text-slate-950 dark:text-white">precision-engineered solutions</strong> across a diverse global landscape. Our sector-specific expertise ensures that whether we are powering a city or advancing research, we deliver reliability that meets the highest industrial tolerances.
          </p>

          <div className="pt-2 flex flex-col items-center">
            <div className="w-10 h-0.5 bg-[#D62828]/40 mb-3" />
            <p className="text-[10px] font-headline font-black uppercase tracking-widest text-[#D62828]">
              — Synergy Corporate Motto
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-white dark:bg-slate-900 py-20 px-4 sm:px-8 relative overflow-hidden">
        {/* Decorative Bolt Motif */}
        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-[0.02] text-[#D62828] pointer-events-none z-0 rotate-[15deg]">
          <span className="material-symbols-outlined text-[400px] select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
        </div>

        <div className="container mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {industries.map((ind) => {
              const subSystems = getSubSystems(ind.id);
              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  className="group flex flex-col md:flex-row bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-850/80 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 rounded-xl"
                >
                  {/* Left Column: Title and details */}
                  <div className="md:w-3/5 p-8 sm:p-10 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-4.5">
                      <div className="w-12 h-12 rounded-xl bg-[#D62828]/10 text-[#D62828] flex items-center justify-center select-none shadow-sm shrink-0">
                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>
                          {ind.icon}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-headline font-black text-primary-container leading-none">
                        {ind.title}
                      </h3>
                    </div>
                    
                    <p className="text-on-surface-variant leading-relaxed font-body text-xs sm:text-sm">
                      {ind.description}
                    </p>
                    
                    <Link
                      className="inline-flex items-center text-[#D62828] hover:text-[#de2e2c] font-headline font-bold uppercase tracking-widest text-[10px] gap-1.5 active:scale-95 transition-all w-fit"
                      href={`/contact?industry=${ind.id}`}
                    >
                      Explore Solutions
                      <span className="material-symbols-outlined text-sm select-none transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </Link>
                  </div>

                  {/* Right Column: Featured B2B Equipment panel */}
                  <div className="md:w-2/5 p-8 bg-gradient-to-br from-[#101c2e] to-[#0A1628] text-white flex flex-col justify-center items-start border-t md:border-t-0 md:border-l border-slate-800">
                    <span className="text-[9px] font-headline font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                      Featured Systems
                    </span>
                    
                    {/* Primary System Badge */}
                    <div className="flex items-center gap-2 mb-4 bg-white/5 border border-white/10 px-3 py-1.5 rounded w-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] shrink-0" />
                      <span className="text-[11px] font-headline font-bold text-white truncate" title={ind.primaryEquipment}>
                        {ind.primaryEquipment}
                      </span>
                    </div>

                    {/* Secondary Systems List */}
                    <div className="w-full space-y-2 mt-2">
                      <span className="text-[8px] font-headline font-bold uppercase tracking-widest text-slate-500 block">
                        Included Diagnostics
                      </span>
                      <ul className="space-y-1.5">
                        {subSystems.map((sys, sysIdx) => (
                          <li key={sysIdx} className="text-[10px] text-slate-400 font-body flex items-center gap-1.5 truncate" title={sys}>
                            <span className="material-symbols-outlined text-slate-600 text-[12px] select-none">chevron_right</span>
                            {sys}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#101c2e] py-24 px-4 sm:px-8 relative overflow-hidden text-white border-t border-slate-850">
        <div className="absolute right-[-10%] top-[-10%] opacity-5 text-white pointer-events-none select-none z-0">
          <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 w-full relative z-10">
          <div className="text-left max-w-2xl space-y-3">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-white leading-tight">
              Ready to Engineer the Future of Your Industry?
            </h2>
            <p className="text-slate-350 text-base sm:text-lg font-body leading-relaxed">
              Consult with our factory-trained application specialists to configure testing suites matching your industry tolerances.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 font-body">
            <Link
              className="bg-[#D62828] hover:bg-[#de2e2c] text-white px-8 py-4 rounded font-headline font-bold text-xs uppercase tracking-widest text-center shadow-lg shadow-[#D62828]/15 active:scale-95 transition-all inline-flex items-center justify-center min-h-[48px]"
              href="/contact"
            >
              Speak With an Expert
            </Link>
            <Link
              className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded font-headline font-bold text-xs uppercase tracking-widest text-center hover:bg-white/5 active:scale-95 transition-all inline-flex items-center justify-center min-h-[48px]"
              href="/products"
            >
              View Product Catalog
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
