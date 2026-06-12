'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import BlogCard from '@/components/cards/BlogCard';

function BlogListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read URL params
  const activeCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('q') || '';

  const [searchVal, setSearchVal] = useState(searchQuery);

  useEffect(() => {
    setSearchVal(searchQuery);
  }, [searchQuery]);

  const handleCategoryFilter = (category) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/blog?${params.toString()}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (!searchVal.trim()) {
      params.delete('q');
    } else {
      params.set('q', searchVal.trim());
    }
    router.push(`/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    setSearchVal('');
    router.push('/blog');
  };

  // Import dynamic blog list data
  const { blogs } = require('@/data/blogs');

  // Filter logic
  const filteredBlogs = blogs.filter((post) => {
    const matchesCategory =
      activeCategory === 'all' ||
      post.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const getTabClass = (category) => {
    const isActive = activeCategory.toLowerCase() === category.toLowerCase();
    return isActive
      ? 'px-5 py-2.5 bg-[#D62828] text-white font-headline font-bold text-xs uppercase tracking-widest rounded transition-all shadow-md shadow-[#D62828]/10 cursor-pointer'
      : 'px-5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/50 dark:border-slate-800 rounded font-headline font-bold text-xs uppercase tracking-widest transition-all cursor-pointer';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full py-16 space-y-12">
      
      {/* Search and Category Filter Bar */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-5 rounded-2xl shadow-sm flex flex-col lg:flex-row justify-between items-center gap-6 relative z-20">
        <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start w-full lg:w-auto">
          <button className={getTabClass('all')} onClick={() => handleCategoryFilter('all')}>
            All Insights
          </button>
          <button
            className={getTabClass('Electrical Testing')}
            onClick={() => handleCategoryFilter('Electrical Testing')}
          >
            Testing &amp; Auditing
          </button>
          <button
            className={getTabClass('Industry Trends')}
            onClick={() => handleCategoryFilter('Industry Trends')}
          >
            Grid Trends
          </button>
          <button
            className={getTabClass('Case Studies')}
            onClick={() => handleCategoryFilter('Case Studies')}
          >
            Case Studies
          </button>
        </div>

        <form onSubmit={handleSearchSubmit} className="relative w-full lg:w-80 shrink-0">
          <input
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 pr-12 rounded text-xs focus:outline-none focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828] transition-all placeholder:text-slate-400 font-body text-slate-800 dark:text-slate-200"
            placeholder="Search diagnostic insights..."
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            className="absolute right-0 top-0 h-full px-4 text-slate-400 hover:text-[#D62828] cursor-pointer flex items-center justify-center"
            type="submit"
          >
            <span className="material-symbols-outlined text-base select-none">search</span>
          </button>
        </form>
      </section>

      {/* Grid of articles */}
      <section className="relative z-10">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <span className="material-symbols-outlined text-5xl text-slate-300 dark:text-slate-700 mb-4 select-none">
              search_off
            </span>
            <p className="text-slate-500 font-medium font-body text-sm">
              No technical articles match your filter selection or search query.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-primary-container hover:bg-slate-800 text-white font-headline font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                category={post.category}
                date={post.date}
                image={post.image}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

export default function Blog() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4500);
    }
  };

  return (
    <div className="flex flex-col w-full bg-background relative overflow-x-hidden">
      {/* Decorative background watermark */}
      <div className="absolute right-[-10%] top-[15%] opacity-[0.02] text-[#D62828] pointer-events-none select-none z-0 rotate-[-15deg] hidden lg:block">
        <span className="material-symbols-outlined text-[35rem]" style={{ fontVariationSettings: "'FILL' 1" }}>
          bolt
        </span>
      </div>

      {/* Hero Section */}
      <HeroSection
        title="Insights & Technical Perspectives"
        subtitle="Exploring the latest electrical diagnostic studies, NABL traceable standards, and high-voltage grid substation engineering retrofits."
        backgroundImage="/images/img_47.webp"
        breadcrumbs={breadcrumbs}
      />

      {/* Blog listing wrapper */}
      <Suspense fallback={
        <div className="flex justify-center items-center py-32 w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D62828]"></div>
        </div>
      }>
        <BlogListContent />
      </Suspense>

      {/* Split Newsletter Section (Premium B2B layout matching other pages) */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#101c2e] py-20 px-4 sm:px-8 relative overflow-hidden border-t border-slate-800 text-white z-10">
        <div className="absolute right-[-10%] top-[-10%] opacity-5 text-white pointer-events-none select-none z-0">
          <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 w-full relative z-10">
          <div className="text-left max-w-2xl space-y-3">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-white leading-tight">
              Stay Ahead of the Grid
            </h2>
            <p className="text-slate-350 text-base sm:text-lg font-body leading-relaxed">
              Receive quarterly technical white papers, Megger/MTE project audits, and safety compliance guides directly in your inbox.
            </p>
          </div>
          
          <div className="w-full lg:w-auto min-w-[280px] sm:min-w-[400px]">
            {subscribed ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center text-green-400 font-headline font-bold text-xs uppercase tracking-widest animate-fade-in-up">
                ✓ Subscription Confirmed. Welcome to the technical digest!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828] transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#D62828] hover:bg-[#de2e2c] text-white font-headline font-bold text-xs uppercase tracking-widest rounded transition-colors active:scale-95 shadow-md shadow-[#D62828]/10 cursor-pointer flex items-center justify-center gap-2"
                >
                  Subscribe
                  <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
