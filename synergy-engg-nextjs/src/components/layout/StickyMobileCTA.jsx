'use client';

import React from 'react';
import Link from 'next/link';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-45 h-[56px] bg-[#060E1A]/95 backdrop-blur-md border-t border-slate-800 flex sm:hidden items-stretch text-white font-headline text-[10px] font-bold uppercase tracking-widest divide-x divide-slate-800">
      <a 
        href="tel:+919970341477" 
        className="flex-1 flex items-center justify-center gap-2 hover:bg-slate-900 active:bg-slate-900 transition-colors"
      >
        <span className="material-symbols-outlined text-base text-[#C8232A]">call</span>
        Call Now
      </a>
      
      <a 
        href="https://wa.me/919970341477" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-1 flex items-center justify-center gap-2 hover:bg-slate-900 active:bg-slate-900 transition-colors"
      >
        <span className="material-symbols-outlined text-base text-[#25D366]">chat</span>
        WhatsApp
      </a>
      
      <Link 
        href="/quote" 
        className="flex-1 flex items-center justify-center gap-2 hover:bg-slate-900 active:bg-slate-900 transition-colors"
      >
        <span className="material-symbols-outlined text-base text-[#C8232A]">request_quote</span>
        Get Quote
      </Link>
    </div>
  );
}
