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

function MarqueeSlider({ items, speed = '60s', reverse = false }) {
  // Multiply list to ensure continuous wrap without visible gaps
  const repeatCount = items.length < 10 ? 8 : 4;
  const repeatedItems = Array(repeatCount).fill(items).flat();

  return (
    <div className="relative w-full overflow-hidden py-2 select-none">
      {/* Mask gradients on left and right for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div 
        className="flex flex-nowrap gap-6 sm:gap-8 items-center w-max animate-ticker-scroll"
        style={{
          animationDuration: speed,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {repeatedItems.map((item, index) => {
          if (item.link) {
            return (
              <Link 
                key={index} 
                href={item.link} 
                className="shrink-0 flex items-center justify-center h-16 w-48 sm:h-24 sm:w-60 opacity-75 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer focus:outline-none"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </Link>
            );
          }

          return (
            <div 
              key={index} 
              className="shrink-0 flex items-center justify-center h-16 w-48 sm:h-24 sm:w-60 opacity-75 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function BrandPartners() {
  return (
    <section className="py-12 bg-background border-b border-outline-variant/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 space-y-12">
        
        {/* Section 1: Business Associates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 text-center lg:text-left shrink-0">
            <span className="text-[#D62828] font-bold tracking-widest text-[10px] sm:text-xs uppercase font-headline block">
              Global Partnerships
            </span>
            <h2 className="font-headline font-black text-xl sm:text-2xl text-primary-container mt-1">
              Business Associates
            </h2>
            <div className="w-12 h-1 bg-[#D62828] mt-3 mx-auto lg:mx-0"></div>
          </div>
          <div className="lg:col-span-9 overflow-hidden w-full">
            <MarqueeSlider items={ASSOCIATES} speed="80s" />
          </div>
        </div>

        {/* Section 2: Our Customers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 text-center lg:text-left shrink-0">
            <span className="text-[#D62828] font-bold tracking-widest text-[10px] sm:text-xs uppercase font-headline block">
              Proven Track Record
            </span>
            <h2 className="font-headline font-black text-xl sm:text-2xl text-primary-container mt-1">
              Our Customers
            </h2>
            <div className="w-12 h-1 bg-[#D62828] mt-3 mx-auto lg:mx-0"></div>
          </div>
          <div className="lg:col-span-9 overflow-hidden w-full">
            <MarqueeSlider items={CUSTOMERS} speed="120s" reverse={true} />
          </div>
        </div>

      </div>
    </section>
  );
}
