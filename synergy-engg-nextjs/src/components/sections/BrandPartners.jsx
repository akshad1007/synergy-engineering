'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeInView } from '@/components/motion/MotionWrapper';

// ─── Business Associates (5 logos) ───
const ASSOCIATES = [
  { name: 'Megger', logo: '/logos/megger.png', link: '/products?brand=megger' },
  { name: 'Brother', logo: '/logos/brother.png', link: '/products?brand=brother' },
  { name: 'MTE', logo: '/logos/mte.png', link: '/products?brand=mte' },
  { name: 'Raychem RPG', logo: '/logos/raychemrpg.png', link: '/products?brand=te' },
  { name: 'Trisen', logo: '/logos/trisen.png', link: '/contact' },
];

// ─── Customers (20 logos) ───
const CUSTOMERS = [
  { name: 'Adani Power', logo: '/logos/adani_power.png' },
  { name: 'BEST', logo: '/logos/best.png' },
  { name: 'Bharat Petroleum', logo: '/logos/bharat_petrol.png' },
  { name: 'BHEL', logo: '/logos/bhel.png' },
  { name: 'GAIL', logo: '/logos/gail.png' },
  { name: 'HPCL', logo: '/logos/hp_petrol.png' },
  { name: 'Indian Railways', logo: '/logos/indian_railways.png' },
  { name: 'Kalpataru Projects', logo: '/logos/kalpataru.png' },
  { name: 'KEC International', logo: '/logos/kec.png' },
  { name: 'Mahavitaran', logo: '/logos/mahavitaran.png' },
  { name: 'Mahindra', logo: '/logos/mahindra.png' },
  { name: 'Mumbai Metro', logo: '/logos/mumbai_metro.png' },
  { name: 'NHPC', logo: '/logos/nhpc.png' },
  { name: 'NPCIL', logo: '/logos/npcil.png' },
  { name: 'NTPC', logo: '/logos/ntpc.png' },
  { name: 'ONGC', logo: '/logos/ongc.png' },
  { name: 'PowerGrid', logo: '/logos/powergrid.png' },
  { name: 'Sterling & Wilson', logo: '/logos/sterling_and_wilson.png' },
  { name: 'Tata Power', logo: '/logos/tatapower.png' },
  { name: 'Torrent Power', logo: '/logos/torrent_power.png' },
];

// Split customers into two rows for the dual marquee
const CUSTOMERS_ROW1 = CUSTOMERS.slice(0, 10);
const CUSTOMERS_ROW2 = CUSTOMERS.slice(10, 20);

// ─── Marquee Logo Card ───
function MarqueeCard({ item }) {
  return (
    <div className="flex-shrink-0 mx-4 sm:mx-5">
      <div className="w-28 h-16 sm:w-36 sm:h-20 bg-white rounded-lg shadow-sm flex items-center justify-center px-4 py-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <img
          src={item.logo}
          alt={item.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

// ─── Section Title with horizontal rules ───
function SectionHeading({ title }) {
  return (
    <FadeInView direction="none" className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
      <div className="h-px flex-1 max-w-[80px] bg-slate-300" />
      <h2 className="font-headline font-black text-xl sm:text-2xl md:text-3xl text-primary-container tracking-wider uppercase text-center whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px flex-1 max-w-[80px] bg-slate-300" />
    </FadeInView>
  );
}

export default function BrandPartners() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 space-y-20 md:space-y-28">

        {/* ═══ SECTION 1: Business Associates — Static formal strip ═══ */}
        <div>
          <SectionHeading title="Our Business Associates" />

          <FadeInView direction="up" delay={0.1}>
            {/* Desktop: 5-col grid with dividers */}
            <div className="hidden sm:grid grid-cols-5 border border-slate-200 rounded-lg bg-white shadow-sm divide-x divide-slate-200">
              {ASSOCIATES.map((item, idx) => {
                const inner = (
                  <div className="flex items-center justify-center py-8 md:py-10 px-4 group transition-all duration-300 hover:bg-slate-50">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-10 md:max-h-12 lg:max-h-14 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                );
                return item.link ? (
                  <Link key={idx} href={item.link} className="focus:outline-none">
                    {inner}
                  </Link>
                ) : (
                  <div key={idx}>{inner}</div>
                );
              })}
            </div>

            {/* Mobile: 2-col grid, last logo spans 2 cols */}
            <div className="grid grid-cols-2 sm:hidden border border-slate-200 rounded-lg bg-white shadow-sm divide-x divide-y divide-slate-200">
              {ASSOCIATES.map((item, idx) => {
                const isLast = idx === ASSOCIATES.length - 1;
                const inner = (
                  <div className={`flex items-center justify-center py-7 px-4 group transition-all duration-300 hover:bg-slate-50 ${isLast ? 'col-span-2' : ''}`}>
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                );
                return item.link ? (
                  <Link key={idx} href={item.link} className={`focus:outline-none ${isLast ? 'col-span-2' : ''}`}>
                    {inner}
                  </Link>
                ) : (
                  <div key={idx} className={isLast ? 'col-span-2' : ''}>{inner}</div>
                );
              })}
            </div>
          </FadeInView>
        </div>

        {/* ═══ SECTION 2: Our Customers — Dual marquee rows ═══ */}
        <div>
          <SectionHeading title="Our Valued Customers" />

          <div className="marquee-container space-y-5">
            {/* Row 1 — scrolls LEFT */}
            <div className="marquee-mask overflow-hidden">
              <div className="marquee-track-left">
                {/* Original set */}
                {CUSTOMERS_ROW1.map((item, idx) => (
                  <MarqueeCard key={`r1a-${idx}`} item={item} />
                ))}
                {/* Duplicate for seamless loop */}
                {CUSTOMERS_ROW1.map((item, idx) => (
                  <MarqueeCard key={`r1b-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls RIGHT (opposite direction) */}
            <div className="marquee-mask overflow-hidden">
              <div className="marquee-track-right">
                {/* Original set */}
                {CUSTOMERS_ROW2.map((item, idx) => (
                  <MarqueeCard key={`r2a-${idx}`} item={item} />
                ))}
                {/* Duplicate for seamless loop */}
                {CUSTOMERS_ROW2.map((item, idx) => (
                  <MarqueeCard key={`r2b-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Hover hint */}
            <p className="text-center text-slate-400 text-[10px] font-body mt-3 select-none">
              Hover to pause • Showing select clients from our PAN-India portfolio
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
