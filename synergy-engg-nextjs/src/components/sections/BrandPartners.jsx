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

function MarqueeSlider({ items, speed = '30s', reverse = false }) {
  // Multiply list to ensure continuous wrap without visible gaps
  const repeatCount = items.length < 10 ? 6 : 3;
  const repeatedItems = Array(repeatCount).fill(items).flat();

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Mask gradients on left and right for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div 
        className="flex gap-12 sm:gap-20 items-center w-max animate-ticker-scroll"
        style={{
          animationDuration: speed,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {repeatedItems.map((item, index) => {
          const content = (
            <div className="flex items-center justify-center shrink-0 h-10 w-32 sm:h-14 sm:w-40 opacity-75 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          );

          if (item.link) {
            return (
              <Link key={index} href={item.link} className="focus:outline-none">
                {content}
              </Link>
            );
          }

          return <div key={index}>{content}</div>;
        })}
      </div>
    </div>
  );
}

export default function BrandPartners() {
  return (
    <section className="py-16 bg-background border-b border-outline-variant/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 space-y-16">
        
        {/* Section 1: Business Associates */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <span className="text-[#D62828] font-bold tracking-widest text-[10px] sm:text-xs uppercase font-headline block">
              Global Partnerships
            </span>
            <h2 className="font-headline font-black text-2xl sm:text-3xl text-primary-container mt-1">
              Our Business Associates
            </h2>
            <div className="w-12 h-1 bg-[#D62828] mt-3 mx-auto md:mx-0"></div>
          </div>
          <MarqueeSlider items={ASSOCIATES} speed="25s" />
        </div>

        {/* Section 2: Our Customers */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <span className="text-[#D62828] font-bold tracking-widest text-[10px] sm:text-xs uppercase font-headline block">
              Proven Track Record
            </span>
            <h2 className="font-headline font-black text-2xl sm:text-3xl text-primary-container mt-1">
              Our Valued Customers
            </h2>
            <div className="w-12 h-1 bg-[#D62828] mt-3 mx-auto md:mx-0"></div>
          </div>
          <MarqueeSlider items={CUSTOMERS} speed="45s" reverse={true} />
        </div>

      </div>
    </section>
  );
}
