'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();

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
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-[#0A1628] z-[70] transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
          <span className="font-extrabold text-[#D62828]">MENU</span>
          <button className="text-slate-500 cursor-pointer" onClick={onClose} aria-label="Close menu">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`text-lg ${
                isActive(link.href)
                  ? 'font-semibold text-secondary'
                  : 'font-medium text-slate-700 dark:text-slate-300 hover:text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
            <a
              className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-secondary transition-colors"
              href="tel:+912225805555"
            >
              <span className="material-symbols-outlined">call</span> Call Us
            </a>
            <a
              className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-secondary transition-colors"
              href="mailto:info@synergy-engg.com"
            >
              <span className="material-symbols-outlined">mail</span> Email Us
            </a>
            <Link
              className="bg-secondary text-white text-center py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
              href="/quote"
              onClick={onClose}
            >
              Request Quote
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
