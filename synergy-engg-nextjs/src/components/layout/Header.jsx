'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header({ onMenuToggle }) {
  const pathname = usePathname();
  const [quoteCount, setQuoteCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Force light mode on mount
    try {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('synergy-theme');
    } catch (e) {}

    // Listen for quote cart changes
    const updateQuoteCount = () => {
      try {
        const items = JSON.parse(localStorage.getItem('synergy-quote-items') || '[]');
        setQuoteCount(items.length);
      } catch { setQuoteCount(0); }
    };
    updateQuoteCount();
    window.addEventListener('storage', updateQuoteCount);
    window.addEventListener('quote-updated', updateQuoteCount);

    // Scroll listener for sticky collapse effect
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('storage', updateQuoteCount);
      window.removeEventListener('quote-updated', updateQuoteCount);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'shadow-lg bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md h-[72px]' 
        : 'bg-white dark:bg-[#0A1628] h-[96px]'
    }`}>
      {/* Main Navigation Bar (Clean Single Row) */}
      <div className="w-full h-full px-4 md:px-8 flex justify-between items-center border-b-4 border-[#D62828]">
        
        {/* Logo Container (Bigger, Clean Logo) */}
        <div className="flex items-center">
          <Link href="/" className="group block focus:outline-none transition-transform duration-200 active:scale-95">
            <Image
              alt="Synergy Engineering Logo"
              className={`w-auto object-contain cursor-pointer transition-all duration-300 group-hover:scale-[1.02] ${
                isScrolled ? 'h-14 sm:h-16' : 'h-20 sm:h-24'
              }`}
              src="/screenshots/logo_synergy.png"
              width={300}
              height={141}
              priority
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] font-headline font-black uppercase tracking-widest transition-all duration-200 relative py-2 ${
                  active
                    ? 'text-[#D62828]'
                    : 'text-slate-700 dark:text-slate-300 hover:text-[#D62828]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D62828] rounded animate-fade-in-up" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Tools Panel */}
        <div className="flex items-center gap-4">
          


          {/* Call-to-Action RFQ Button */}
          <Link
            className="hidden sm:flex items-center gap-2.5 bg-[#D62828] hover:bg-[#de2e2c] text-white px-6 py-3 rounded font-headline font-bold text-xs uppercase tracking-widest active:scale-95 transition-all duration-150 relative shadow-md shadow-[#D62828]/10"
            href="/quote"
          >
            Get a Quote
            {quoteCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-slate-900 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md quote-badge-pulse">
                {quoteCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="xl:hidden flex items-center text-slate-700 dark:text-slate-355 cursor-pointer p-1"
            id="menu-toggle"
            onClick={onMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
