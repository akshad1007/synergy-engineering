'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import BlogCard from '@/components/cards/BlogCard';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { blogs } from '@/data/blogs';

function BlogListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read params
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

  // Filter blogs based on category and search query
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
      ? 'px-6 py-2 bg-secondary text-white font-semibold text-sm rounded-md transition-all hover:brightness-110 font-headline uppercase'
      : 'px-6 py-2 bg-surface-container-lowest text-on-surface font-medium text-sm rounded-md hover:bg-secondary-fixed transition-colors font-headline uppercase border border-slate-200/50';
  };

  return (
    <>
      {/* Categories & Search Bar */}
      <section className="bg-surface-container py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 w-full">
          <div className="flex flex-wrap gap-3">
            <button className={getTabClass('all')} onClick={() => handleCategoryFilter('all')}>
              All Articles
            </button>
            <button
              className={getTabClass('Electrical Testing')}
              onClick={() => handleCategoryFilter('Electrical Testing')}
            >
              Electrical Testing
            </button>
            <button
              className={getTabClass('Industry Trends')}
              onClick={() => handleCategoryFilter('Industry Trends')}
            >
              Industry Trends
            </button>
            <button
              className={getTabClass('Case Study')}
              onClick={() => handleCategoryFilter('Case Study')}
            >
              Case Studies
            </button>
          </div>
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-72">
            <input
              className="w-full bg-surface-container-lowest border border-slate-200 px-4 py-3 pr-12 rounded-md text-sm focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline font-body text-slate-900"
              placeholder="Search insights..."
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button
              className="absolute right-0 top-0 h-full px-4 text-outline hover:text-secondary transition-colors"
              type="submit"
            >
              <span className="material-symbols-outlined select-none">search</span>
            </button>
          </form>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto w-full">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-low rounded-lg border-2 border-dashed border-outline-variant">
            <span className="material-symbols-outlined text-5xl text-outline-variant mb-4 select-none">
              search_off
            </span>
            <p className="text-on-surface-variant font-medium font-body">
              No articles found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
    </>
  );
}

export default function Blog() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog' }
  ];

  return (
    <div className="flex flex-col w-full relative">
      {/* Red bolt background decorative watermark */}
      <div className="absolute right-[-10%] top-[10%] opacity-[0.03] text-secondary pointer-events-none select-none z-0 rotate-[-15deg] hidden lg:block">
        <span className="material-symbols-outlined text-[40rem]" style={{ fontVariationSettings: "'FILL' 1" }}>
          bolt
        </span>
      </div>

      {/* Hero Section */}
      <HeroSection
        title="Insights & Technical Perspectives"
        subtitle="Engineering precision meets industry leadership. Explore our latest findings in electrical testing, manufacturing trends, and complex case studies."
        backgroundImage="/images/img_47.webp"
        breadcrumbs={breadcrumbs}
      />

      {/* Blog listing with Suspense */}
      <Suspense fallback={
        <div className="flex justify-center items-center py-32 w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
        </div>
      }>
        <BlogListContent />
      </Suspense>

      {/* Newsletter Section */}
      <section className="bg-dark-bg py-20 px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-slate-400 mb-12 text-lg font-body">
            Receive technical white papers, project highlights, and industry analysis directly in your inbox twice a month.
          </p>
          <div className="max-w-2xl mx-auto">
            <NewsletterForm />
          </div>
          <p className="mt-6 text-slate-500 text-xs font-body">
            By subscribing, you agree to our Privacy Policy and consent to receiving marketing communications.
          </p>
        </div>
        {/* Aesthetic accent */}
        <div className="absolute left-0 bottom-0 w-full h-1 bg-secondary"></div>
      </section>
    </div>
  );
}
