'use client';

import React from 'react';
import Link from 'next/link';

const ASSOCIATES = [
  { name: 'Megger', logo: '/logos/megger.png', link: '/products?brand=megger' },
  { name: 'Brother', logo: '/logos/brother.png', link: '/products?brand=brother' },
  { name: 'MTE', logo: '/logos/mte.png', link: '/products?brand=mte' },
  { name: 'Raychem RPG', logo: '/logos/raychemrpg.png', link: '/products?brand=te' },
  { name: 'Trisen', logo: '/logos/trisen.png', link: '/contact' },
];

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

function DiamondLogo({ item }) {
  const content = (
    <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rotate-45 overflow-hidden bg-white border border-slate-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:scale-105 hover:border-[#D62828] hover:z-20 transition-all duration-300 group flex items-center justify-center cursor-pointer">
      <div className="-rotate-45 w-14 h-14 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center">
        <img
          src={item.logo}
          alt={item.name}
          className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          loading="lazy"
        />
      </div>
    </div>
  );

  if (item.link) {
    return (
      <Link href={item.link} className="focus:outline-none select-none">
        {content}
      </Link>
    );
  }

  return <div className="select-none">{content}</div>;
}

export default function BrandPartners() {
  // Split Associates into 3 and 2
  const associatesRow1 = ASSOCIATES.slice(0, 3);
  const associatesRow2 = ASSOCIATES.slice(3, 5);

  // Split Customers for Desktop (5-4-5-4-2)
  const customersDesktop = [
    CUSTOMERS.slice(0, 5),
    CUSTOMERS.slice(5, 9),
    CUSTOMERS.slice(9, 14),
    CUSTOMERS.slice(14, 18),
    CUSTOMERS.slice(18, 20),
  ];

  // Split Customers for Mobile/Tablet (3-2-3-2-3-2-3-2)
  const customersMobile = [
    CUSTOMERS.slice(0, 3),
    CUSTOMERS.slice(3, 5),
    CUSTOMERS.slice(5, 8),
    CUSTOMERS.slice(8, 10),
    CUSTOMERS.slice(10, 13),
    CUSTOMERS.slice(13, 15),
    CUSTOMERS.slice(15, 18),
    CUSTOMERS.slice(18, 20),
  ];

  return (
    <section className="py-20 bg-background border-b border-outline-variant/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 space-y-24">
        
        {/* Section 1: Business Associates */}
        <div className="space-y-12">
          {/* Screenshot Match Title Header */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-[1px] w-8 sm:w-16 bg-slate-300"></div>
            <h2 className="font-headline font-black text-xl sm:text-2xl md:text-3xl text-primary-container tracking-wider uppercase text-center">
              Our Business Associates
            </h2>
            <div className="h-[1px] w-8 sm:w-16 bg-slate-300"></div>
          </div>

          {/* Interlocking Diamond Layout */}
          <div className="flex flex-col items-center">
            {/* Row 1 */}
            <div className="flex justify-center gap-x-4 sm:gap-x-6 md:gap-x-8">
              {associatesRow1.map((item, idx) => (
                <DiamondLogo key={'assoc-r1-' + idx} item={item} />
              ))}
            </div>
            {/* Row 2 (Staggered & Pulled Up) */}
            <div className="flex justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 -mt-6 sm:-mt-8 md:-mt-10">
              {associatesRow2.map((item, idx) => (
                <DiamondLogo key={'assoc-r2-' + idx} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Our Customers */}
        <div className="space-y-12">
          {/* Screenshot Match Title Header */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-[1px] w-8 sm:w-16 bg-slate-300"></div>
            <h2 className="font-headline font-black text-xl sm:text-2xl md:text-3xl text-primary-container tracking-wider uppercase text-center">
              Our Valued Customers
            </h2>
            <div className="h-[1px] w-8 sm:w-16 bg-slate-300"></div>
          </div>

          {/* Desktop/Tablet Honeycomb (5-4-5-4-2) */}
          <div className="hidden md:flex flex-col items-center">
            {customersDesktop.map((row, rowIdx) => {
              const isEven = rowIdx % 2 === 1;
              return (
                <div 
                  key={'cust-d-row-' + rowIdx} 
                  className={`flex justify-center gap-x-6 md:gap-x-8 ${
                    rowIdx > 0 ? '-mt-8 md:-mt-10' : ''
                  }`}
                >
                  {row.map((item, idx) => (
                    <DiamondLogo key={`cust-d-${rowIdx}-${idx}`} item={item} />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Mobile Honeycomb (3-2-3-2-3-2-3-2) */}
          <div className="flex md:hidden flex-col items-center">
            {customersMobile.map((row, rowIdx) => {
              return (
                <div 
                  key={'cust-m-row-' + rowIdx} 
                  className={`flex justify-center gap-x-4 ${
                    rowIdx > 0 ? '-mt-6' : ''
                  }`}
                >
                  {row.map((item, idx) => (
                    <DiamondLogo key={`cust-m-${rowIdx}-${idx}`} item={item} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
