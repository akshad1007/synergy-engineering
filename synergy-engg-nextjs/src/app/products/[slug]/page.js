'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/cards/ProductCard';

export default function ProductDetail({ params }) {
  // Unwrap params using React.use() or fallback to direct params.
  const resolvedParams = React.use ? React.use(params) : params;
  const slug = resolvedParams.slug;

  const product = products.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      try {
        const cart = JSON.parse(localStorage.getItem('synergy-quote-items') || '[]');
        setIsInCart(cart.includes(product.id));
      } catch {
        setIsInCart(false);
      }
    }
  }, [product]);

  const toggleCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem('synergy-quote-items') || '[]');
      let newCart;
      if (isInCart) {
        newCart = cart.filter(id => id !== product.id);
      } else {
        newCart = [...cart, product.id];
      }
      localStorage.setItem('synergy-quote-items', JSON.stringify(newCart));
      setIsInCart(!isInCart);
      window.dispatchEvent(new Event('quote-updated'));
    } catch (e) {
      console.error(e);
    }
  };

  if (!product) {
    return notFound();
  }

  // Get related products
  const relatedProducts = products.filter((p) => product.related?.includes(p.id));

  // Brand badge color mapping (matching ProductCard.jsx)
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

  const getBrandLogo = (b) => {
    switch (b.toLowerCase()) {
      case 'megger':
        return '/screenshots/megger_logo.svg';
      case 'emh':
      case 'mte':
        return '/screenshots/emh-logo-r2.png';
      case 'brother':
        return '/screenshots/Brother-Logo.png';
      case 'te':
        return '/screenshots/TE_Connectivity_Logo.png';
      case 'greenlee':
        return '/screenshots/Greenlee_logo.png';
      case 'kl-arc':
        return '/screenshots/kl_arc_logo.png';
      default:
        return null;
    }
  };

  const isNablCalibratable = (brandName) => {
    const brand = brandName.toLowerCase();
    return brand !== 'te' && brand !== 'kl-arc';
  };

  const brandBadge = getBrandBadge(product.brand);
  const brandLogo = getBrandLogo(product.brand);
  const calibratable = isNablCalibratable(product.brand);

  const getTabClass = (tabId) => {
    return activeTab === tabId
      ? 'pb-4 border-b-[3px] border-[#D62828] text-primary-container font-headline font-black text-sm uppercase tracking-wider whitespace-nowrap transition-all'
      : 'pb-4 border-b-[3px] border-transparent text-slate-400 font-headline font-bold text-sm uppercase tracking-wider whitespace-nowrap hover:text-primary-container hover:border-slate-300 transition-all';
  };

  return (
    <div className="w-full bg-background">
      {/* Product Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Product Image & Gallery (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="aspect-square relative w-full bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden p-8 flex items-center justify-center border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.03)] group/gallery">
              <div className="absolute inset-0 bg-radial-gradient from-white to-slate-50/20 dark:from-slate-800 dark:to-slate-900/50 opacity-60 z-0 pointer-events-none" />
              {activeImage && (
                <Image
                  alt={product.title}
                  className="w-[85%] h-[85%] object-contain mix-blend-multiply dark:mix-blend-normal transition-all duration-500 group-hover/gallery:scale-[1.03] z-10 relative"
                  src={activeImage}
                  width={500}
                  height={500}
                  priority
                />
              )}
            </div>
            
            {/* Gallery Thumbnails */}
            {product.thumbnails && product.thumbnails.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(thumb)}
                    className={`bg-white dark:bg-slate-900 p-2 rounded-lg border transition-all aspect-square relative cursor-pointer ${
                      activeImage === thumb 
                        ? 'border-[#D62828] ring-2 ring-[#D62828]/10' 
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-350'
                    }`}
                  >
                    <Image
                      alt={`${product.name} Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                      src={thumb}
                      width={100}
                      height={100}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Technical Summary (Right) */}
          <div className="lg:col-span-6 space-y-8 lg:pl-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center gap-4">
                <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded ${brandBadge.bg}`}>
                  {brandBadge.text}
                </span>
                {brandLogo && (
                  <div className="relative h-8 w-24 bg-white/60 dark:bg-slate-800/40 p-1.5 rounded border border-slate-200/50 dark:border-slate-800 flex items-center justify-center shadow-sm">
                    <Image
                      alt={`${product.brand} Logo`}
                      className="max-h-full max-w-full object-contain filter dark:brightness-110"
                      src={brandLogo}
                      width={80}
                      height={24}
                    />
                  </div>
                )}
              </div>
              
              {/* Breadcrumbs */}
              <nav className="flex items-center space-x-1.5 text-slate-400 text-xs font-semibold tracking-wide font-headline">
                <Link href="/" className="hover:text-[#D62828] transition-colors">Home</Link>
                <span className="material-symbols-outlined text-[10px] select-none text-slate-300">chevron_right</span>
                <Link href="/products" className="hover:text-[#D62828] transition-colors">Products</Link>
                <span className="material-symbols-outlined text-[10px] select-none text-slate-300">chevron_right</span>
                <span className="text-primary-container truncate font-black">{product.name}</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl font-headline font-black text-primary-container leading-tight">
                {product.title}
              </h1>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed font-body">
                {product.desc}
              </p>
            </div>

            {/* Key Specs */}
            <div className="space-y-3 bg-slate-50 dark:bg-slate-900/30 p-5 sm:p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
              <h3 className="text-xs font-bold text-primary-container uppercase tracking-wider font-headline mb-3">
                Key Performance Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.keySpecs?.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <span className="text-on-surface-variant font-medium font-body text-xs leading-normal">
                      {spec}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={toggleCart}
                  className={`flex-1 px-6 py-3.5 rounded font-headline font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all duration-150 cursor-pointer ${
                    isInCart 
                      ? 'bg-slate-800 text-white border border-slate-800 hover:bg-slate-900 shadow-sm' 
                      : 'bg-[#D62828] text-white hover:bg-[#de2e2c] shadow-lg shadow-[#D62828]/15'
                  }`}
                >
                  <span className="material-symbols-outlined select-none text-base">
                    {isInCart ? 'remove_shopping_cart' : 'add_shopping_cart'}
                  </span>
                  {isInCart ? 'In Quote Cart' : 'Add to Quote Request'}
                </button>

                {product.officialUrl && (
                  <a
                    href={product.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-slate-350 text-slate-700 dark:text-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3.5 rounded font-headline font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all duration-150 text-center cursor-pointer"
                  >
                    <span className="material-symbols-outlined select-none text-base">open_in_new</span>
                    Official Datasheet
                  </a>
                )}
              </div>

              {/* B2B Trust Notice */}
              <div className="flex items-center gap-2.5 px-4 py-3 bg-green-50 dark:bg-green-950/20 border border-green-200/60 dark:border-green-900/30 rounded-lg">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <p className="text-[11px] font-bold text-green-800 dark:text-green-300 font-headline leading-tight">
                  RFQ typical response: Under 2 Hours • ISO 9001 & NABL Calibration Support
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20 w-full">
        {/* Tab Buttons */}
        <div className="border-b border-slate-200 dark:border-slate-800 flex gap-8 sm:gap-12 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={getTabClass('overview')}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={getTabClass('specs')}
          >
            Technical Data
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={getTabClass('downloads')}
          >
            Documentation
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={getTabClass('support')}
          >
            Support Desk
          </button>
        </div>

        {/* Tab Contents */}
        <div className="py-10">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 space-y-5 flex flex-col justify-center animate-fade-in-up">
                <h2 className="text-xl sm:text-2xl font-headline font-black text-primary-container">
                  {product.overview?.title || 'Industrial Reliability Redefined'}
                </h2>
                {product.overview?.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-on-surface-variant leading-relaxed font-body text-sm">
                    {p}
                  </p>
                ))}
              </div>
              
              <div className="lg:col-span-5 flex">
                {calibratable ? (
                  <div className="w-full bg-green-50 dark:bg-green-950/10 p-8 rounded-xl flex flex-col justify-center items-center text-center border border-green-150/40 dark:border-green-900/20 shadow-sm animate-fade-in-up">
                    <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                        verified_user
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-2 font-headline">
                      NABL Calibration Traceability
                    </h3>
                    <p className="text-green-800/80 dark:text-green-400/80 text-xs font-body leading-relaxed max-w-xs">
                      This precision diagnostic instrument is eligible for NABL accredited calibration services. Shipped with certified compliance trace-stamps.
                    </p>
                  </div>
                ) : (
                  <div className="w-full bg-slate-50 dark:bg-slate-900/30 p-8 rounded-xl flex flex-col justify-center items-center text-center border border-slate-200/50 dark:border-slate-800 shadow-sm animate-fade-in-up">
                    <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 text-[#D62828] rounded-full flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                        workspace_premium
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-container mb-2 font-headline">
                      100% Genuine Certified
                    </h3>
                    <p className="text-on-surface-variant text-xs font-body leading-relaxed max-w-xs">
                      Supplied with original manufacturer certificates, material compliance reports, and full authenticity warranties.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Specs Tab */}
          {activeTab === 'specs' && (
            <div className="max-w-4xl mx-auto w-full animate-fade-in-up">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
                      <th className="px-6 py-4 text-xs font-bold font-headline text-slate-500 uppercase tracking-wider">Specification Parameter</th>
                      <th className="px-6 py-4 text-xs font-bold font-headline text-slate-500 uppercase tracking-wider">Value / Capability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                    {Object.entries(product.specs || {}).map(([key, val], idx) => (
                      <tr key={key} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold font-headline text-primary-container">{key}</td>
                        <td className="px-6 py-4 text-sm font-body text-on-surface-variant">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Downloads Tab */}
          {activeTab === 'downloads' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto animate-fade-in-up">
              {product.downloads?.map((dl, idx) => (
                <a
                  key={idx}
                  href={dl.path === '/contact' ? '/01_SYNERGY.pdf' : dl.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center justify-between p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl hover:shadow-md hover:border-[#D62828]/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      dl.type === 'pdf' 
                        ? 'bg-rose-50 text-[#D62828] dark:bg-rose-950/20' 
                        : 'bg-blue-50 text-blue-600 dark:bg-blue-950/20'
                    }`}>
                      <span className="material-symbols-outlined select-none text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {dl.type === 'pdf' ? 'picture_as_pdf' : 'description'}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold font-headline text-primary-container group-hover:text-[#D62828] transition-colors text-sm">{dl.name}</h4>
                      <p className="text-[10px] text-slate-400 font-body uppercase mt-0.5">{dl.type || 'PDF'} Document</p>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 group-hover:bg-[#D62828] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined select-none text-base">
                      download
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Support Tab */}
          {activeTab === 'support' && (
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10 rounded-2xl text-center space-y-6 shadow-sm animate-fade-in-up">
              <div className="w-16 h-16 bg-[#D62828]/10 text-[#D62828] rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  support_agent
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-primary-container font-headline">
                  Need Technical Support?
                </h3>
                <p className="text-on-surface-variant font-body text-sm max-w-lg mx-auto leading-relaxed">
                  Our certified service desk engineers are ready to assist you with instrument installation, field troubleshooting, and calibration standards queries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <a
                  href="tel:+912225805555"
                  className="bg-[#D62828] hover:bg-[#de2e2c] text-white px-6 py-3.5 rounded font-headline font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md shadow-[#D62828]/10 cursor-pointer"
                >
                  <span className="material-symbols-outlined select-none text-base">call</span>
                  Call Engineering Desk
                </a>
                <a
                  href="mailto:support@synergy-engg.com"
                  className="border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3.5 rounded font-headline font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined select-none text-base">mail</span>
                  Email Support
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="bg-slate-50 dark:bg-slate-950/20 py-20 border-t border-slate-200/50 dark:border-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
            <div className="flex justify-between items-end mb-10">
              <div className="space-y-2">
                <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline">
                  Complementary Tools
                </span>
                <h2 className="text-2xl sm:text-3xl font-headline font-black text-primary-container">
                  Related Diagnostics & Accessories
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden sm:flex items-center gap-2 text-primary-container font-headline font-bold hover:text-[#D62828] transition-colors group text-sm"
              >
                View Catalog
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform select-none">
                  chevron_right
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((rp) => (
                <ProductCard
                  key={rp.id}
                  id={rp.id}
                  name={rp.name}
                  brand={rp.brand}
                  desc={rp.desc}
                  image={rp.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
