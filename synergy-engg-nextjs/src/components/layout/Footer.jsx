'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full bg-[#101c2e] dark:bg-[#060F1A] text-slate-300">
      
      {/* 1. Newsletter Subscription Panel (Footer Option 2 Top Block) */}
      <section className="w-full py-10 px-4 sm:px-8 md:px-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-1 max-w-xl">
            <h3 className="text-primary-container font-headline font-black text-lg sm:text-xl uppercase tracking-wider">
              Subscribe to Technical Bulletins
            </h3>
            <p className="text-on-surface-variant font-body text-xs sm:text-sm">
              Get monthly engineering updates on Megger/MTE diagnostics, NABL calibration standards, and electrical compliance.
            </p>
          </div>
          
          <div className="w-full lg:w-auto min-w-[280px] sm:min-w-[400px]">
            {subscribed ? (
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-3 text-center text-green-800 dark:text-green-300 font-headline font-bold text-xs uppercase tracking-wider animate-fade-in-up">
                Thank you! You have successfully subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#D62828] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#D62828] text-white hover:bg-[#de2e2c] font-headline font-bold text-xs uppercase tracking-widest rounded transition-colors active:scale-95 shadow-md shadow-[#D62828]/10 cursor-pointer flex items-center justify-center gap-2"
                >
                  Subscribe
                  <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main Footer Link Columns */}
      <section className="py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Company Profile (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="group inline-block focus:outline-none transition-transform duration-200 active:scale-95">
              <Image
                alt="Synergy Engineering Logo"
                className="h-10 w-auto cursor-pointer transition-all duration-300 group-hover:scale-[1.02]"
                src="/screenshots/logo_synergy.png"
                width={130}
                height={36}
              />
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-body">
              Authorized partner and distributor of world-class electrical testing, diagnostic instruments, and industrial print systems. Delivering precision since 2016.
            </p>
            
            {/* Social Links (Circular outlines that fill on hover) */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/company/synergy-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700 hover:border-[#D62828] hover:bg-[#D62828] hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300 select-none cursor-pointer"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined text-lg">social_leaderboard</span>
              </a>
              <a
                href="https://synergy-engg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700 hover:border-[#D62828] hover:bg-[#D62828] hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300 select-none cursor-pointer"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-lg">language</span>
              </a>
              <a
                href="mailto:info@synergy-engg.com"
                className="w-9 h-9 rounded-full border border-slate-700 hover:border-[#D62828] hover:bg-[#D62828] hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300 select-none cursor-pointer"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-headline font-black text-xs uppercase tracking-widest text-[#D62828] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-body">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Service Center
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Technical Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Global Partners (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-headline font-black text-xs uppercase tracking-widest text-[#D62828] mb-6">
              Brands
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-body">
              <li>
                <Link href="/products?brand=megger" className="text-slate-400 hover:text-white transition-colors">
                  Megger Group
                </Link>
              </li>
              <li>
                <Link href="/products?brand=mte" className="text-slate-400 hover:text-white transition-colors">
                  MTE AG &amp; EMH
                </Link>
              </li>
              <li>
                <Link href="/products?brand=brother" className="text-slate-400 hover:text-white transition-colors">
                  Brother Industrial
                </Link>
              </li>
              <li>
                <Link href="/products?brand=te" className="text-slate-400 hover:text-white transition-colors">
                  TE Connectivity
                </Link>
              </li>
              <li>
                <Link href="/products?brand=greenlee" className="text-slate-400 hover:text-white transition-colors">
                  Greenlee Tools
                </Link>
              </li>
              <li>
                <Link href="/products?brand=kl-arc" className="text-slate-400 hover:text-white transition-colors">
                  KL-ARC Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Stamp Map (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="font-headline font-black text-xs uppercase tracking-widest text-[#D62828]">
                Contact Info
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-body">
                <li className="flex items-start gap-2.5 text-slate-400">
                  <span className="material-symbols-outlined text-[#D62828] text-base select-none mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                  <span className="leading-relaxed">
                    E7-221, Bhumi World Industrial Park, Pimplas, Thane - 421 302, Maharashtra.
                  </span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <span className="material-symbols-outlined text-[#D62828] text-base select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    call
                  </span>
                  <a href="tel:+919970341477" className="hover:text-white transition-colors">+91 99703 41477</a>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <span className="material-symbols-outlined text-[#D62828] text-base select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    mail
                  </span>
                  <a href="mailto:info@synergy-engg.com" className="hover:text-white transition-colors">info@synergy-engg.com</a>
                </li>
              </ul>
            </div>

            {/* Stylized Mini-Map Location Card */}
            <a
              href="https://maps.google.com/?q=Bhumi+World+Industrial+Park+Thane+Mumbai+Nashik+Highway"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-[#D62828]/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D62828]/10 text-[#D62828] flex items-center justify-center group-hover:bg-[#D62828] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined select-none text-xl">map</span>
                </div>
                <div>
                  <h5 className="font-headline font-black text-xs text-white uppercase tracking-wider">Show On Google Maps</h5>
                  <p className="text-[10px] text-slate-500 font-body mt-0.5">Bhumi World Industrial Park, Thane</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* 3. Bottom Copyright & Policy Bar */}
      <section className="w-full py-6 px-4 sm:px-8 md:px-16 bg-[#09111c] dark:bg-[#040A12] border-t border-slate-800/40 text-slate-500 text-xs font-body">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex gap-4 font-headline font-bold uppercase tracking-wider text-[10px]">
            <Link href="/contact" className="hover:text-slate-350 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-350 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-350 transition-colors">Service SLA</Link>
          </div>
          <div>
            &copy; {currentYear} Synergy Engineering. All rights reserved.
          </div>
        </div>
      </section>

    </footer>
  );
}
