'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProductCard from '@/components/cards/ProductCard';
import { products } from '@/data/products';

function ProductsListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showNablOnly, setShowNablOnly] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Initialize brand filter from URL query param if present
  useEffect(() => {
    const brandParam = searchParams.get('brand');
    if (brandParam && brandParam !== 'all') {
      // Handle MTE / EMH merged filter
      if (brandParam === 'mte' || brandParam === 'mte-emh') {
        setSelectedBrands(['mte', 'emh']);
      } else {
        setSelectedBrands([brandParam]);
      }
    } else {
      setSelectedBrands([]);
    }
  }, [searchParams]);

  // Dynamic categorization mapper for all 87 products
  const getProductCategory = (p) => {
    const brand = p.brand.toLowerCase();
    const id = p.id.toLowerCase();
    const name = p.name.toLowerCase();

    if (brand === 'brother') return 'Industrial Printing';
    if (brand === 'kl-arc') return 'Arc Flash Safety';
    if (brand === 'greenlee') return 'Hydraulic Cable Tools';
    if (brand === 'te' || id === 'te-accessories') return 'Cable Accessories';
    
    if (id.includes('adx') || id === '680-adx' || id === 'baker-adx') return 'Motor Winding Diagnostics';
    if (id.includes('bite') || id.includes('torkel') || id === 'bvm' || id === 'txl-series' || id === 'mgfl100') return 'Battery Diagnostics';
    if (id.includes('det') || id.includes('etk') || id === 'det24c' || id === 'detex') return 'Earth & Ground Testing';
    if (id.includes('mit') || id.includes('bm5200') || id.includes('bm5500')) return 'Insulation Testing';
    if (id === 'mea-1000' || id === 'zvcm-1001' || id === 'pws-3-3' || id === 'checkmeter-genx' || id.includes('mte-') || id === 'mpac208') return 'Power Standards & Quality';
    
    return 'General Test Instruments';
  };

  // NABL Calibratable check
  const isNablCalibratable = (p) => {
    const brand = p.brand.toLowerCase();
    // Accessories and safety suits are not measurement instruments, thus not NABL calibratable.
    return brand !== 'te' && brand !== 'kl-arc';
  };

  // Unique lists for filters
  const brandsList = [
    { id: 'megger', name: 'Megger' },
    { id: 'mte', name: 'MTE AG & EMH' },
    { id: 'brother', name: 'Brother' },
    { id: 'te', name: 'TE Connectivity' },
    { id: 'greenlee', name: 'Greenlee' },
    { id: 'kl-arc', name: 'KL-ARC' }
  ];

  const categoriesList = [
    'Insulation Testing',
    'Battery Diagnostics',
    'Earth & Ground Testing',
    'Power Standards & Quality',
    'Motor Winding Diagnostics',
    'Cable Accessories',
    'Hydraulic Cable Tools',
    'Arc Flash Safety',
    'Industrial Printing',
    'General Test Instruments'
  ];

  // Toggle brand selection
  const handleBrandToggle = (brandId) => {
    // If brandId is mte, handle both mte and emh
    const targets = brandId === 'mte' ? ['mte', 'emh'] : [brandId];
    
    setSelectedBrands((prev) => {
      const exists = targets.every(t => prev.includes(t));
      if (exists) {
        return prev.filter(b => !targets.includes(b));
      } else {
        return [...prev, ...targets];
      }
    });
  };

  // Toggle category selection
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setShowNablOnly(false);
    setSearchQuery('');
    router.push('/products');
  };

  // Filter products logic
  const filteredProducts = products.filter((p) => {
    const matchesSearch = searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.desc && p.desc.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(getProductCategory(p));
    const matchesNabl = !showNablOnly || isNablCalibratable(p);

    return matchesSearch && matchesBrand && matchesCategory && matchesNabl;
  });

  const FilterPanelContent = () => (
    <div className="space-y-8">
      {/* Search Input inside Filter */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-primary-container uppercase tracking-wider font-headline">Search</h3>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 select-none pointer-events-none text-lg">
            search
          </span>
          <input
            type="text"
            placeholder="Type model or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded text-xs outline-none focus:border-[#D62828] text-slate-900 font-body"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#D62828] flex items-center"
            >
              <span className="material-symbols-outlined text-xs">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Brand Filters Checkbox List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-primary-container uppercase tracking-wider font-headline">Brand Partners</h3>
        <div className="space-y-2">
          {brandsList.map((brand) => {
            const isChecked = brand.id === 'mte' 
              ? selectedBrands.includes('mte') && selectedBrands.includes('emh')
              : selectedBrands.includes(brand.id);
            return (
              <label key={brand.id} className="flex items-center gap-3 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 font-body select-none">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleBrandToggle(brand.id)}
                  className="w-4 h-4 rounded border-slate-300 text-[#D62828] focus:ring-[#D62828] cursor-pointer accent-[#D62828]"
                />
                {brand.name}
              </label>
            );
          })}
        </div>
      </div>

      {/* Category Filters Checkbox List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-primary-container uppercase tracking-wider font-headline">Categories</h3>
        <div className="space-y-2 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
          {categoriesList.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 font-body select-none">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryToggle(cat)}
                className="w-4 h-4 rounded border-slate-300 text-[#D62828] focus:ring-[#D62828] cursor-pointer accent-[#D62828]"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Accredited Calibration Filter Toggle */}
      <div className="space-y-3 pt-4 border-t border-slate-200/60">
        <label className="flex items-center gap-3 cursor-pointer text-xs font-bold text-primary-container font-headline select-none">
          <input
            type="checkbox"
            checked={showNablOnly}
            onChange={(e) => setShowNablOnly(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-[#D62828] focus:ring-[#D62828] cursor-pointer accent-[#D62828]"
          />
          NABL Calibratable Only
        </label>
      </div>

      {/* Clear Filters Button */}
      {(selectedBrands.length > 0 || selectedCategories.length > 0 || showNablOnly || searchQuery) && (
        <button
          onClick={clearFilters}
          className="w-full py-2 bg-slate-100 hover:bg-[#D62828]/10 hover:text-[#D62828] text-slate-700 font-headline font-bold text-[10px] uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm select-none">filter_alt_off</span>
          Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="py-16 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto w-full relative">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Desktop Sidebar Filter Panel */}
        <aside className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-lg border border-slate-200/70 sticky top-24 shadow-sm">
          <FilterPanelContent />
        </aside>

        {/* Right Side: Product Grid Showcase */}
        <div className="lg:col-span-9 space-y-6">
          {/* Query count indicator and active filters listing */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-100 p-4 rounded-lg border border-slate-200/50">
            <div>
              <span className="text-xs font-bold text-primary-container font-headline uppercase tracking-wider">
                {filteredProducts.length === 1 ? '1 Product Found' : `${filteredProducts.length} Products Found`}
              </span>
            </div>
            
            {/* Mobile Filter Trigger Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-primary-container text-white rounded font-headline font-bold text-xs uppercase tracking-wider shadow active:scale-95 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm select-none">filter_list</span>
              Filters
            </button>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-lg border border-dashed border-slate-300">
              <span className="material-symbols-outlined text-5xl text-slate-300 mb-4 select-none">
                production_quantity_limits
              </span>
              <p className="text-slate-500 font-medium font-body text-sm">
                No products match your current search or filter query.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-primary-container hover:bg-slate-800 text-white font-headline font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
        </div>

      </div>

      {/* Mobile Side Drawer Filter Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          {/* Drawer Body */}
          <div className="relative w-full max-w-[320px] bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between z-10 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <h2 className="font-headline font-black text-lg text-primary-container uppercase tracking-wider">Filters</h2>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="text-slate-400 hover:text-[#D62828] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-2xl select-none">close</span>
                </button>
              </div>
              <FilterPanelContent />
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 bg-[#D62828] text-white font-headline font-bold text-xs uppercase tracking-widest rounded hover:bg-[#de2e2c] active:scale-95 transition-all text-center mt-8 cursor-pointer"
            >
              Apply Filter Selection
            </button>
          </div>
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
    <div className="flex flex-col w-full bg-background">
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

      {/* Download Catalogue CTA Banner */}
      <section className="bg-slate-50 py-20 px-4 sm:px-8 md:px-16 border-t border-slate-200/60 bg-grid-pattern relative">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-12 bg-white rounded-xl shadow-xl border border-slate-200 w-full relative z-10">
          <div className="text-center lg:text-left space-y-2">
            <h2 className="font-headline font-black text-2xl sm:text-3xl text-primary-container leading-tight">
              Need our complete product catalogue?
            </h2>
            <p className="text-on-surface-variant max-w-md font-body text-xs sm:text-sm leading-relaxed">
              Access our full range of professional electrical testing and measurement solutions in one comprehensive document.
            </p>
          </div>
          <a
            className="bg-[#D62828] text-white font-headline font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-[#de2e2c] active:scale-95 transition-all flex items-center gap-3 shadow-lg shadow-[#D62828]/15 cursor-pointer"
            href="/01_SYNERGY.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span className="material-symbols-outlined select-none text-base">download</span>
            Download Catalogue (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
