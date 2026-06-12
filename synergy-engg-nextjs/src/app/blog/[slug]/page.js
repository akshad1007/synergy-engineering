import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CommentSystem from '@/components/forms/CommentSystem';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { blogs } from '@/data/blogs';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Synergy Engineering`,
    description: post.excerpt || `Read the latest article about ${post.title} on Synergy Engineering blog.`,
  };
}

export default function BlogPostDetail({ params }) {
  const post = blogs.find((b) => b.slug === params.slug);

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
      <section className="relative h-[450px] md:h-[614px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            src={post.image || '/images/img_20.webp'}
          />
          <div className="absolute inset-0 bg-primary-container/75 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8 text-center w-full">
          <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-sm mb-6 tracking-widest uppercase font-headline">
            {post.category}
          </span>
          <nav className="flex justify-center mb-6 text-sm font-medium tracking-wide text-slate-300 font-body">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="mx-2 text-secondary">&gt;</span>
            <Link className="hover:text-white transition-colors" href="/blog">
              Blog
            </Link>
            <span className="mx-2 text-secondary">&gt;</span>
            <span className="text-white truncate max-w-[200px] md:max-w-none inline-block">
              {post.title}
            </span>
          </nav>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6 font-headline">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-slate-300 font-medium font-body text-sm">
            <span>Published {post.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>By Engineering Dept.</span>
          </div>
        </div>
      </section>

      {/* Article Content & Sidebar */}
      <section className="max-w-7xl mx-auto px-8 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <article className="lg:col-span-8 bg-surface-container-lowest p-6 md:p-12 shadow-sm rounded-lg border border-slate-200/40">
            <div 
              className="prose prose-slate max-w-none font-body text-slate-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post Footer / Share */}
            <div className="mt-16 pt-8 border-t border-surface-container-high flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center space-x-4 font-body">
                <span className="font-bold text-primary-container uppercase text-xs tracking-widest font-headline">
                  Share this post:
                </span>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary hover:text-white transition-all text-slate-500 hover:border-secondary">
                    <span className="material-symbols-outlined text-[20px] select-none">share</span>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all text-slate-500 hover:border-[#0077b5]">
                    <span className="material-symbols-outlined text-[20px] select-none">link</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 font-body">
                <span className="px-3 py-1 bg-surface-container-low text-on-surface-variant text-xs font-semibold rounded-sm">
                  High-Voltage
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-on-surface-variant text-xs font-semibold rounded-sm">
                  NDT
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-on-surface-variant text-xs font-semibold rounded-sm">
                  Industrial IoT
                </span>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-8 border-t border-surface-container-high">
                <h3 className="text-2xl font-extrabold text-primary-container mb-8 font-headline">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group block bg-surface-container-low rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          src={related.image || '/images/img_20.webp'}
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-widest font-label">{related.category}</span>
                        <h4 className="font-headline font-bold text-primary-container mt-1 group-hover:text-secondary transition-colors line-clamp-2">{related.title}</h4>
                        <p className="text-xs text-outline mt-2 font-body">{related.date}</p>
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
          <aside className="lg:col-span-4 space-y-12">
            {/* Search Redirect Widget */}
            <div className="bg-surface-container-lowest p-6 shadow-sm rounded-lg border border-slate-200/40">
              <h4 className="text-lg font-extrabold text-primary-container mb-4 font-headline">
                Search Resources
              </h4>
              <form action="/blog" method="GET" className="relative">
                <input
                  name="q"
                  className="w-full bg-surface-container p-3 pl-10 rounded-md border-none focus:ring-1 focus:ring-secondary focus:border-secondary text-sm font-body text-slate-900 outline-none"
                  placeholder="Engineering keywords..."
                  type="text"
                />
                <button 
                  type="submit" 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-outline hover:text-secondary transition-colors"
                >
                  <span className="material-symbols-outlined text-lg select-none">search</span>
                </button>
              </form>
            </div>

            {/* Recent Posts */}
            <div className="bg-surface-container-lowest p-6 shadow-sm rounded-lg border border-slate-200/40">
              <h4 className="text-lg font-extrabold text-primary-container mb-6 font-headline">
                Recent Articles
              </h4>
              <div className="space-y-6 font-body">
                {recentArticles.map((recent) => (
                  <Link key={recent.slug} className="group block" href={`/blog/${recent.slug}`}>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 font-label">
                      {recent.category}
                    </p>
                    <h5 className="font-bold text-primary-container leading-snug group-hover:text-secondary transition-colors font-headline">
                      {recent.title}
                    </h5>
                    <p className="text-xs text-outline mt-2">{recent.date}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Stay Updated Newsletter */}
            <div className="bg-primary-container p-8 shadow-xl rounded-lg relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-extrabold text-white mb-2 font-headline">
                  Technical Digest
                </h4>
                <p className="text-slate-400 text-sm mb-6 font-body">
                  Get our quarterly whitepapers and engineering insights delivered to your inbox.
                </p>
                <NewsletterForm />
              </div>
              {/* Watermark Logo Motif */}
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none text-white">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-surface-container-lowest p-6 shadow-sm rounded-lg border border-slate-200/40 font-body">
              <h4 className="text-lg font-extrabold text-primary-container mb-4 font-headline">
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {uniqueCategories.map((cat) => (
                  <Link
                    key={cat}
                    className="px-4 py-2 bg-surface hover:bg-surface-container-high transition-colors text-xs font-bold text-primary-container uppercase rounded font-label"
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
