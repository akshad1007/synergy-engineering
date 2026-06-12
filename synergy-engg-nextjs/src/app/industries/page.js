import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import { industries } from '@/data/industries';

export default function Industries() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Industries' }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        title="Industries We Serve"
        subtitle="Precision-engineered solutions tailored for the most demanding industrial environments. We deliver technical excellence with architectural accuracy."
        backgroundImage="/images/img_30.webp"
        breadcrumbs={breadcrumbs}
      />

      {/* Intro Paragraph */}
      <section className="bg-surface-container-lowest py-24 px-4 sm:px-8 relative">
        <div className="max-w-4xl mx-auto text-center w-full">
          <p className="text-2xl md:text-3xl font-body text-on-surface leading-relaxed font-light">
            Synergy Engineering provides <span className="font-bold text-primary">precision-engineered solutions</span> across a diverse global landscape. Our sector-specific expertise ensures that whether we are powering a city or advancing research, we deliver reliability that meets the highest industrial tolerances.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-surface py-20 px-4 sm:px-8 relative overflow-hidden">
        {/* Decorative Bolt Motif */}
        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-[0.03] pointer-events-none z-0">
          <span className="material-symbols-outlined text-[400px] text-secondary select-none">
            bolt
          </span>
        </div>

        <div className="container mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {industries.map((ind) => (
              <div
                key={ind.id}
                id={ind.id}
                className="group flex flex-col md:flex-row bg-surface-container-lowest overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border-l-4 border-secondary rounded-r-md"
              >
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="material-symbols-outlined text-4xl text-secondary select-none"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {ind.icon}
                    </span>
                    <h3 className="text-[28px] font-headline font-bold text-primary leading-none">
                      {ind.title}
                    </h3>
                  </div>
                  <p className="text-on-surface-variant mb-6 leading-relaxed font-body text-sm">
                    {ind.description}
                  </p>
                  <Link
                    className="inline-flex items-center text-secondary font-bold uppercase tracking-widest text-xs group-hover:gap-3 transition-all font-headline active:scale-95"
                    href="/contact"
                  >
                    View Solutions
                    <span className="material-symbols-outlined text-sm ml-1 select-none">
                      arrow_forward
                    </span>
                  </Link>
                </div>
                <div className="md:w-1/2 p-10 bg-gradient-to-br from-surface-container-low to-surface-container flex flex-col justify-center border-t md:border-t-0 md:border-l border-outline-variant/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 font-headline">
                    Primary Equipment
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-body">
                    {ind.primaryEquipment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-container py-20 px-4 sm:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center relative z-10 w-full">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white mb-8 tracking-tight">
            Ready to Engineer the Future of Your Industry?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              className="bg-secondary text-white px-10 py-4 rounded-md font-headline font-bold uppercase tracking-widest hover:scale-105 transition-all duration-200 active:scale-95 inline-block min-h-[48px]"
              href="/contact"
            >
              Speak With an Expert
            </Link>
            <Link
              className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-md font-headline font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-200 active:scale-95 inline-block min-h-[48px]"
              href="/products"
            >
              View Product Catalog
            </Link>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
      </section>
    </div>
  );
}
