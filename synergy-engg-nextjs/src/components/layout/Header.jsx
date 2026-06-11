'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header({ onMenuToggle }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Detect theme on mount
    const storedTheme = localStorage.getItem('synergy-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme === 'dark' || (!storedTheme && systemDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('synergy-theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('synergy-theme', 'light');
    }
  };

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
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-[72px] bg-white dark:bg-[#0A1628] border-b-4 border-[#D62828] shadow-lg dark:shadow-none">
      <div className="flex items-center gap-2">
        <Link href="/" className="group block focus:outline-none transition-transform duration-200 active:scale-95">
          <Image
            alt="Synergy Engineering Logo"
            className="h-12 w-auto cursor-pointer transition-all duration-300 group-hover:scale-[1.03] group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(214,40,40,0.15)]"
            src="/screenshots/logo_synergy.png"
            width={150}
            height={48}
            priority
          />
        </Link>
      </div>

      <nav className="hidden xl:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              isActive(link.href)
                ? 'text-[#D62828] border-b-2 border-[#D62828] pb-1 font-semibold'
                : 'text-slate-700 dark:text-slate-300 font-medium hover:text-[#D62828] transition-colors duration-200'
            } text-sm`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 text-slate-600 dark:text-slate-400 hover:text-secondary cursor-pointer rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center select-none"
          aria-label="Toggle color theme"
        >
          <span className="material-symbols-outlined text-2xl select-none">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-4 text-slate-600 dark:text-slate-400">
          <a
            className="material-symbols-outlined hover:text-[#D62828] cursor-pointer"
            data-icon="call"
            href="tel:+912225805555"
          >
            call
          </a>
          <a
            className="material-symbols-outlined hover:text-[#D62828] cursor-pointer"
            data-icon="mail"
            href="mailto:info@synergy-engg.com"
          >
            mail
          </a>
        </div>
        <Link
          className="hidden sm:block bg-secondary text-on-secondary px-6 py-2 rounded-md font-headline font-semibold text-sm hover:opacity-90 transition-all scale-95 duration-150 ease-in-out"
          href="/quote"
        >
          Get a Quote
        </Link>
        <button
          className="xl:hidden flex items-center text-slate-700 dark:text-slate-300 cursor-pointer"
          id="menu-toggle"
          onClick={onMenuToggle}
          aria-label="Toggle mobile menu"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}
