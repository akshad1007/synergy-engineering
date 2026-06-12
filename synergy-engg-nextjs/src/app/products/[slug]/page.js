'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/cards/ProductCard';

export default function ProductDetail({ params }) {
  // Unwrap params using React.use() or useEffect in client components.
  // In Next.js 14/15 client components, params should be unwrapped.
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

  const getTabClass = (tabId) => {
    return activeTab === tabId
      ? 'pb-4 border-b-[3px] border-secondary text-primary-container font-bold text-sm uppercase tracking-widest whitespace-nowrap transition-colors'
      : 'pb-4 text-outline font-bold text-sm uppercase tracking-widest whitespace-nowrap hover:text-primary-container transition-colors';
  };

  return (
    <div className="w-full bg-background">
      {/* Product Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Product Image & Gallery (Left) */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-6 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(10,22,40,0.04)] border border-outline-variant/15">
            <div className="aspect-square relative w-full bg-surface-container-low rounded-md overflow-hidden p-6 flex items-center justify-center">
              {activeImage && (
                <Image
                  alt={product.title}
                  className="w-full h-full object-contain mix-blend-multiply transition-all duration-300"
                  src={activeImage}
                  width={500}
                  height={500}
                  priority
                />
              )}
            </div>
            {/* Gallery Thumbnails */}
            {product.thumbnails && product.thumbnails.length > 0 && (
              <div className="grid grid-cols-4 gap-4 mt-8">
                {product.thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(thumb)}
                    className={`bg-surface p-2 rounded border transition-all aspect-video md:aspect-square relative ${
                      activeImage === thumb ? 'border-secondary border-2' : 'border-outline-variant/10'
                    }`}
                  >
                    <Image
                      alt={`${product.name} Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
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
          <div className="lg:col-span-5 space-y-8 pt-4">
            <div className="space-y-4">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase font-headline">
                {product.brand.toUpperCase()} Precision Testing
              </span>
              
              {/* Breadcrumbs */}
              <nav className="flex items-center space-x-2 text-slate-400 text-xs font-medium tracking-wide">
                <Link href="/" className="hover:text-primary-container">Home</Link>
                <span className="text-secondary">&gt;</span>
                <Link href="/products" className="hover:text-primary-container">Products</Link>
                <span className="text-secondary">&gt;</span>
                <span className="text-primary-container font-semibold truncate">{product.name}</span>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-black text-primary-container leading-tight tracking-tighter font-headline">
                {product.title}
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed font-body">
                {product.desc}
              </p>
            </div>

            {/* Key Specs */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-primary-container uppercase tracking-wider font-headline">
                Key Specifications
              </h3>
              <ul className="space-y-3">
                {product.keySpecs?.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl select-none">
                      check_circle
                    </span>
                    <span className="text-on-surface-variant font-medium font-body">
                      {spec}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={toggleCart}
                className={`px-10 py-4 rounded-md font-bold text-lg shadow-lg flex items-center justify-center gap-2 font-headline uppercase min-h-[48px] active:scale-95 transition-all duration-150 cursor-pointer ${
                  isInCart 
                    ? 'bg-primary-container text-white shadow-primary-container/20 hover:brightness-110' 
                    : 'bg-secondary text-white shadow-secondary/20 hover:brightness-110'
                }`}
              >
                {isInCart ? 'Remove from Quote' : 'Add to Quote Request'}
                <span className="material-symbols-outlined select-none">
                  {isInCart ? 'remove_shopping_cart' : 'add_shopping_cart'}
                </span>
              </button>
              <Link
                href="/quote"
                className="border-2 border-primary-container/10 text-primary-container px-10 py-4 rounded-md font-bold text-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 font-headline uppercase min-h-[48px] active:scale-95 transition-all duration-150 text-center"
              >
                Configure RFQ
                <span className="material-symbols-outlined select-none">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-7xl mx-auto px-8 mt-24 w-full">
        {/* Tab Buttons */}
        <div className="border-b border-outline-variant/30 flex gap-12 overflow-x-auto">
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
            Specifications
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={getTabClass('downloads')}
          >
            Downloads
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={getTabClass('support')}
          >
            Support
          </button>
        </div>

        {/* Tab Contents */}
        <div className="py-12">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-in fade-in duration-200">
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-primary-container font-headline">
                  {product.overview?.title || 'Industrial Reliability Redefined'}
                </h2>
                {product.overview?.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-on-surface-variant leading-relaxed font-body">
                    {p}
                  </p>
                ))}
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <span className="material-symbols-outlined text-6xl text-secondary mb-4 select-none">
                  verified
                </span>
                <h3 className="text-xl font-bold text-primary-container mb-2 font-headline">
                  Certified Precision
                </h3>
                <p className="text-on-surface-variant text-sm font-body">
                  All equipment is rigorously tested and shipped with calibration certificates traceable to international standards.
                </p>
              </div>
            </div>
          )}

          {/* Specs Tab */}
          {activeTab === 'specs' && (
            <div className="bg-surface-container-low p-8 rounded-xl max-w-4xl mx-auto w-full animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-primary-container mb-6 font-headline">
                Technical Specifications Table
              </h3>
              <div className="space-y-0 border border-outline-variant/20 rounded-lg overflow-hidden">
                {Object.entries(product.specs || {}).map(([key, val], idx) => (
                  <div
                    key={key}
                    className={`grid grid-cols-1 md:grid-cols-2 border-b border-outline-variant/10 p-4 font-body ${
                      idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'
                    } ${idx === Object.entries(product.specs).length - 1 ? 'border-b-0' : ''}`}
                  >
                    <span className="font-bold text-primary-container">{key}</span>
                    <span className="text-on-surface-variant">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Downloads Tab */}
          {activeTab === 'downloads' && (
            <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-primary-container mb-6 font-headline">
                Available Resources
              </h3>
              {product.downloads?.map((dl, idx) => (
                <Link
                  key={idx}
                  href={dl.path}
                  className="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant/20 rounded hover:shadow-md transition-shadow font-body"
                >
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary select-none">
                      {dl.type === 'pdf' ? 'picture_as_pdf' : 'description'}
                    </span>
                    <span className="font-medium text-primary-container">{dl.name}</span>
                  </div>
                  <span className="material-symbols-outlined text-outline select-none">
                    download
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* Support Tab */}
          {activeTab === 'support' && (
            <div className="max-w-3xl mx-auto bg-surface-container-low p-8 rounded-xl text-center space-y-6 animate-in fade-in duration-200">
              <span className="material-symbols-outlined text-5xl text-primary-container select-none">
                support_agent
              </span>
              <h3 className="text-2xl font-bold text-primary-container font-headline">
                Need Technical Support?
              </h3>
              <p className="text-on-surface-variant font-body">
                Our service centre engineers are ready to assist you with installation, troubleshooting, and calibration queries.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <a
                  href="tel:+912225805555"
                  className="bg-primary-container text-white px-6 py-3 rounded font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-colors font-headline min-h-[44px]"
                >
                  <span className="material-symbols-outlined select-none">call</span>
                  Call Support
                </a>
                <a
                  href="mailto:support@synergy-engg.com"
                  className="border border-primary-container text-primary-container px-6 py-3 rounded font-bold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors font-headline min-h-[44px]"
                >
                  <span className="material-symbols-outlined select-none">mail</span>
                  Email Us
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="bg-surface-container py-24 mt-12">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-2">
                <span className="text-secondary font-bold tracking-widest text-xs uppercase font-headline">
                  Complementary Tools
                </span>
                <h2 className="text-3xl font-black text-primary-container font-headline">
                  Related Testing Instruments
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden md:flex items-center gap-2 text-primary-container font-bold hover:text-secondary transition-colors group font-headline"
              >
                View All Products
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform select-none">
                  chevron_right
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
