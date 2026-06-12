'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProductCard from '@/components/cards/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

function ProductsListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Get active brand from search params, default to 'all'
  const activeBrand = searchParams.get('brand') || 'all';

  const filterProducts = (brand) => {
    if (brand === 'all') {
      router.push('/products');
    } else {
      router.push(`/products?brand=${brand}`);
    }
  };

  // Filter logic: Brand filter + search text matching name, brand, or desc
  const filteredProducts = products.filter((p) => {
    const matchesBrand = activeBrand === 'all' || 
      ((activeBrand === 'mte' || activeBrand === 'mte-emh') && (p.brand === 'emh' || p.brand === 'mte')) ||
      p.brand === activeBrand;

    const matchesSearch = searchQuery.trim() === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.desc && p.desc.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesBrand && matchesSearch;
  });

  const getTabClass = (brand) => {
    const isActive = activeBrand === brand || (brand === 'mte' && activeBrand === 'mte-emh');
    return isActive
      ? 'bg-secondary text-white border-secondary px-6 sm:px-8 py-2.5 rounded-full font-headline font-bold text-sm transition-all shadow-md flex items-center justify-center border'
      : 'px-6 sm:px-8 py-2.5 rounded-full font-headline font-bold text-sm bg-white text-on-surface-variant hover:bg-surface-container-high transition-all border border-slate-200 flex items-center justify-center';
  };

  return (
    <main className="py-16 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto w-full">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        <button className={getTabClass('all')} onClick={() => filterProducts('all')}>
          All
        </button>
        <button className={getTabClass('megger')} onClick={() => filterProducts('megger')}>
          Megger
        </button>
        <button className={getTabClass('mte')} onClick={() => filterProducts('mte')}>
          MTE & EMH
        </button>
        <button className={getTabClass('brother')} onClick={() => filterProducts('brother')}>
          Brother
        </button>
        <button className={getTabClass('te')} onClick={() => filterProducts('te')}>
          TE Connectivity
        </button>
        <button className={getTabClass('greenlee')} onClick={() => filterProducts('greenlee')}>
          Greenlee
        </button>
        <button className={getTabClass('kl-arc')} onClick={() => filterProducts('kl-arc')}>
          KL-ARC
        </button>
      </div>

      {/* Real-time Search Input */}
      <div className="max-w-md mx-auto mb-16 relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 select-none pointer-events-none">
          search
        </span>
        <input
          type="text"
          placeholder="Search products by model, brand, or spec..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-10 py-3 bg-white border border-slate-200 rounded-full text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 shadow-sm transition-all text-slate-900 font-body"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-secondary flex items-center"
            aria-label="Clear search"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-surface-container-low rounded-lg border-2 border-dashed border-outline-variant">
          <span className="material-symbols-outlined text-5xl text-outline-variant mb-4 select-none">
            production_quantity_limits
          </span>
          <p className="text-on-surface-variant font-medium font-body">
            No products found matching your search criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              brand={p.brand}
              desc={p.desc}
              image={p.image}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default function Products() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Products' }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        title="Our Products"
        subtitle="Authorized Stockist for World-Class Electrical Testing Brands"
        backgroundImage="/images/img_36.webp"
        breadcrumbs={breadcrumbs}
      />

      {/* Products list with Suspense */}
      <Suspense fallback={
        <div className="flex justify-center items-center py-32 w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
        </div>
      }>
        <ProductsListContent />
      </Suspense>

      {/* Download CTA Banner */}
      <section className="bg-surface-container py-20 px-8 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-12 bg-white rounded-xl shadow-sm border border-outline-variant/20 w-full">
          <div className="text-center md:text-left">
            <h2 className="font-headline font-extrabold text-3xl text-primary-container mb-2">
              Need our complete product catalogue?
            </h2>
            <p className="text-on-surface-variant max-w-md font-body">
              Access our full range of professional electrical testing and measurement solutions in one comprehensive document.
            </p>
          </div>
          <a
            className="bg-secondary text-white font-headline font-bold px-10 py-5 rounded-md hover:shadow-lg transition-all flex items-center gap-3"
            href="/01_SYNERGY.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span className="material-symbols-outlined select-none">download</span>
            Download Catalogue (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
