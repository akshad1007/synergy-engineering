import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CommentSystem from '@/components/forms/CommentSystem';
import { blogs } from '@/data/blogs';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogs.find((b) => b.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Synergy Engineering`,
    description: post.excerpt || `Read the latest article about ${post.title} on Synergy Engineering blog.`,
  };
}

export default async function BlogPostDetail({ params }) {
  const resolvedParams = await params;
  const post = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get recent articles (excluding current one)
  const recentArticles = blogs
    .filter((b) => b.slug !== post.slug)
    .slice(0, 3);

  // Get related articles from same category
  const relatedArticles = blogs
    .filter((b) => b.slug !== post.slug && b.category === post.category)
    .slice(0, 2);

  // Get all unique categories for sidebar
  const uniqueCategories = Array.from(new Set(blogs.map((b) => b.category)));

  return (
    <div className="flex flex-col w-full relative bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            src={post.image || '/images/img_20.webp'}
          />
          <div className="absolute inset-0 bg-[#0A1628]/85 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl px-4 text-center w-full space-y-4">
          <span className="inline-block bg-[#D62828] text-white text-[10px] font-headline font-black px-3 py-1 uppercase tracking-widest rounded shadow-sm">
            {post.category}
          </span>
          
          <nav className="flex justify-center items-center space-x-1.5 text-xs font-headline font-bold text-slate-400">
            <Link className="hover:text-white transition-colors" href="/">Home</Link>
            <span className="material-symbols-outlined text-[10px] select-none text-slate-650">chevron_right</span>
            <Link className="hover:text-white transition-colors" href="/blog">Blog</Link>
            <span className="material-symbols-outlined text-[10px] select-none text-slate-650">chevron_right</span>
            <span className="text-white truncate max-w-[200px] md:max-w-none inline-block font-black">
              {post.title}
            </span>
          </nav>

          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-headline font-black leading-tight max-w-3xl mx-auto">
            {post.title}
          </h1>

          <div className="flex items-center justify-center space-x-4 text-slate-400 font-headline font-bold text-[11px] uppercase tracking-wider pt-2">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs text-[#D62828]">calendar_today</span>
              {post.date}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]"></span>
            <span>By Engineering Dept.</span>
          </div>
        </div>
      </section>

      {/* Article Content & Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Main Content */}
          <article className="lg:col-span-8 bg-white dark:bg-slate-900 p-6 sm:p-10 md:p-12 shadow-sm rounded-2xl border border-slate-200/60 dark:border-slate-800">
            <div 
              className="prose prose-slate dark:prose-invert max-w-none font-body text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post Footer / Share */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <span className="font-headline font-black text-[10px] text-slate-400 uppercase tracking-widest">
                  Share this post:
                </span>
                <div className="flex space-x-2">
                  <button className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-[#D62828] hover:text-white transition-all text-slate-500 hover:border-[#D62828] cursor-pointer">
                    <span className="material-symbols-outlined text-base select-none">share</span>
                  </button>
                  <button className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all text-slate-500 hover:border-[#0077b5] cursor-pointer">
                    <span className="material-symbols-outlined text-base select-none">link</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 font-headline font-bold text-[9px] uppercase tracking-wider">
                <span className="px-3 py-1 bg-slate-50 dark:bg-slate-950 text-slate-550 dark:text-slate-400 rounded border border-slate-200/30">
                  High-Voltage
                </span>
                <span className="px-3 py-1 bg-slate-50 dark:bg-slate-950 text-slate-550 dark:text-slate-400 rounded border border-slate-200/30">
                  NDT Testing
                </span>
                <span className="px-3 py-1 bg-slate-50 dark:bg-slate-950 text-slate-550 dark:text-slate-400 rounded border border-slate-200/30">
                  Diagnostics
                </span>
              </div>
            </div>

            {/* Related Articles (Hidden if none) */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-headline font-black text-primary-container mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group block bg-slate-50 dark:bg-slate-950 rounded-xl overflow-hidden hover:shadow-md border border-slate-200/40 dark:border-slate-850/60 transition-all">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          src={related.image || '/images/img_20.webp'}
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-secondary text-[9px] font-headline font-black uppercase tracking-widest">{related.category}</span>
                        <h4 className="font-headline font-bold text-primary-container mt-1 group-hover:text-secondary transition-colors line-clamp-2">{related.title}</h4>
                        <p className="text-[10px] text-slate-400 mt-2 font-body">{related.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Comments Section */}
            <CommentSystem slug={post.slug} />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Search Redirect Widget */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
              <h4 className="text-sm font-headline font-black text-primary-container uppercase tracking-wider mb-4">
                Search Insights
              </h4>
              <form action="/blog" method="GET" className="relative">
                <input
                  name="q"
                  className="w-full bg-slate-50 dark:bg-slate-950 p-3 pl-10 rounded border border-slate-200 dark:border-slate-850 text-xs font-body text-slate-900 dark:text-slate-200 outline-none focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828] transition-all"
                  placeholder="Engineering keywords..."
                  type="text"
                />
                <button 
                  type="submit" 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#D62828] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base select-none">search</span>
                </button>
              </form>
            </div>

            {/* Recent Posts (Hidden if none) */}
            {recentArticles.length > 0 && (
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                <h4 className="text-sm font-headline font-black text-primary-container uppercase tracking-wider mb-6">
                  Recent Insights
                </h4>
                <div className="space-y-6 font-body">
                  {recentArticles.map((recent) => (
                    <Link key={recent.slug} className="group block" href={`/blog/${recent.slug}`}>
                      <p className="text-[9px] font-headline font-black text-secondary uppercase tracking-widest mb-1.5">
                        {recent.category}
                      </p>
                      <h5 className="font-bold text-primary-container text-sm leading-snug group-hover:text-secondary transition-colors font-headline">
                        {recent.title}
                      </h5>
                      <p className="text-[10px] text-slate-400 mt-2">{recent.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Core Competencies (Only shown if categories exist) */}
            {uniqueCategories.length > 0 && (
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm font-headline">
                <h4 className="text-sm font-black text-primary-container uppercase tracking-wider mb-4">
                  Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {uniqueCategories.map((cat) => (
                    <Link
                      key={cat}
                      className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-950 hover:bg-[#D62828] hover:text-white transition-colors text-[10px] font-bold text-primary-container uppercase rounded border border-slate-200/30 cursor-pointer"
                      href={`/blog?category=${encodeURIComponent(cat)}`}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
          
        </div>
      </section>
    </div>
  );
}
