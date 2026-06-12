'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ id, name, brand, desc, image }) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const checkCart = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('synergy-quote-items') || '[]');
        setIsInCart(cart.includes(id));
      } catch {
        setIsInCart(false);
      }
    };
    checkCart();
    window.addEventListener('storage', checkCart);
    window.addEventListener('quote-updated', checkCart);
    return () => {
      window.removeEventListener('storage', checkCart);
      window.removeEventListener('quote-updated', checkCart);
    };
  }, [id]);

  const toggleCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const cart = JSON.parse(localStorage.getItem('synergy-quote-items') || '[]');
      let newCart;
      if (isInCart) {
        newCart = cart.filter(itemId => itemId !== id);
      } else {
        newCart = [...cart, id];
      }
      localStorage.setItem('synergy-quote-items', JSON.stringify(newCart));
      setIsInCart(!isInCart);
      window.dispatchEvent(new Event('quote-updated'));
    } catch (err) {
      console.error(err);
    }
  };

  // Brand badge color mapping
  const getBrandBadge = (b) => {
    switch (b.toLowerCase()) {
      case 'megger':
        return { text: 'Megger', bg: 'bg-[#D62828]/10 text-[#D62828] border border-[#D62828]/20 dark:bg-[#D62828]/20' };
      case 'emh':
      case 'mte':
        return { text: 'MTE / EMH', bg: 'bg-sky-100 text-sky-800 border border-sky-300/30 dark:bg-sky-950/40 dark:text-sky-300' };
      case 'brother':
        return { text: 'Brother', bg: 'bg-slate-100 text-slate-800 border border-slate-300/30 dark:bg-slate-800 dark:text-slate-200' };
      case 'te':
        return { text: 'TE Connectivity', bg: 'bg-amber-100 text-amber-800 border border-amber-300/30 dark:bg-amber-950/40 dark:text-amber-300' };
      case 'greenlee':
        return { text: 'Greenlee', bg: 'bg-emerald-100 text-emerald-800 border border-emerald-300/30 dark:bg-emerald-950/40 dark:text-emerald-300' };
      case 'kl-arc':
        return { text: 'KL-ARC', bg: 'bg-rose-100 text-rose-800 border border-rose-300/30 dark:bg-rose-950/40 dark:text-rose-300' };
      default:
        return { text: b.toUpperCase(), bg: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300' };
    }
  };

  // Material icon mapping based on product ID
  const getCategoryIcon = (productId) => {
    switch (productId) {
      case '680-adx':
      case 'baker-adx':
        return 'analytics';
      case 'bite5':
      case 'torkel900':
        return 'battery_charging_full';
      case 'mte-filters':
        return 'settings_input_component';
      case 'pt-e850tkw':
      case 'pt-p900w':
      case 'pt-e560btvp':
        return 'print';
      case 'bm5200':
      case 'mit5252':
      case 'mte-reactors':
        return 'bolt';
      default:
        return 'construction';
    }
  };

  const badge = getBrandBadge(brand);
  const icon = getCategoryIcon(id);

  return (
    <div className="bg-surface-container-lowest p-5 rounded-lg group hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-outline-variant/20 hover:-translate-y-1">
      <div className="flex justify-between items-center mb-4">
        <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded ${badge.bg}`}>
          {badge.text}
        </span>
        <span className="material-symbols-outlined text-slate-400 group-hover:text-[#D62828] transition-colors select-none text-xl">
          {icon}
        </span>
      </div>
      
      <div className="aspect-square mb-5 bg-surface-container-low rounded-md overflow-hidden p-4 flex items-center justify-center relative">
        <Image
          alt={name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-[1.03] transition-transform duration-500"
          src={image}
          width={180}
          height={180}
        />
        
        {/* Floating Quote Shortcut Button */}
        <button
          onClick={toggleCart}
          className={`absolute top-2.5 right-2.5 w-7.5 h-7.5 rounded-full flex items-center justify-center shadow-md border cursor-pointer active:scale-90 transition-all duration-150 z-20 ${
            isInCart
              ? 'bg-[#D62828] border-[#D62828] text-white hover:bg-[#de2e2c]'
              : 'bg-white/80 hover:bg-white text-slate-600 border-slate-200 backdrop-blur-sm'
          }`}
          title={isInCart ? "Remove from Quote Request" : "Add to Quote Request"}
        >
          <span className="material-symbols-outlined text-xs font-black select-none">
            {isInCart ? 'remove' : 'add'}
          </span>
        </button>
      </div>

      <h3 className="font-headline font-black text-primary-container text-base mb-2 group-hover:text-[#D62828] transition-colors">
        {name.replace('Megger ', '').replace('Brother ', '').replace('MTE ', '')}
      </h3>
      <p className="text-on-surface-variant text-xs mb-5 flex-grow line-clamp-2 leading-relaxed">
        {desc}
      </p>

      <Link
        className="w-full py-2.5 border border-primary-container text-primary-container hover:bg-primary-container hover:text-white font-headline font-bold text-[10px] uppercase tracking-widest rounded transition-all text-center block"
        href={`/products/${id}`}
      >
        View Details
      </Link>
    </div>
  );
}
