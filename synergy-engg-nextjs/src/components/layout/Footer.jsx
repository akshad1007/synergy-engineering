import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 md:py-16 px-4 md:px-16 bg-[#101c2e] dark:bg-[#0A1628] text-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        {/* Column 1: Company Info */}
        <div className="space-y-4">
          <Link href="/" className="group block focus:outline-none transition-transform duration-200 active:scale-95">
            <Image
              alt="Synergy Engineering Logo"
              className="h-12 w-auto cursor-pointer transition-all duration-300 group-hover:scale-[1.03] group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(214,40,40,0.15)]"
              src="/screenshots/logo_synergy.png"
              width={150}
              height={48}
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            PAN-India authorized distributor of electrical testing & measurement solutions. ISO 9001:2015 | NABL-Accredited | Since 2016.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="https://linkedin.com/company/synergy-engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="material-symbols-outlined text-slate-400 hover:text-secondary transition-colors block decoration-transparent"
              aria-label="LinkedIn"
            >
              social_leaderboard
            </a>
            <a
              href="https://synergy-engg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="material-symbols-outlined text-slate-400 hover:text-secondary transition-colors block decoration-transparent"
              aria-label="Website"
            >
              language
            </a>
            <a
              href="mailto:info@synergy-engg.com"
              className="material-symbols-outlined text-slate-400 hover:text-secondary transition-colors block decoration-transparent"
              aria-label="Email"
            >
              mail
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-secondary mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-slate-400 hover:text-secondary text-sm transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-slate-400 hover:text-secondary text-sm transition-all">
                Product Catalog
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-400 hover:text-secondary text-sm transition-all">
                Service Center
              </Link>
            </li>
            <li>
              <Link href="/industries" className="text-slate-400 hover:text-secondary text-sm transition-all">
                Industries
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-slate-400 hover:text-secondary text-sm transition-all">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-400 hover:text-secondary text-sm transition-all">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Global Partners */}
        <div>
          <h4 className="font-bold text-secondary mb-6 uppercase tracking-widest text-sm">Global Partners</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/products?brand=megger" className="text-slate-400 text-sm hover:text-secondary">
                Megger
              </Link>
            </li>
            <li>
              <Link href="/products?brand=mte" className="text-slate-400 text-sm hover:text-secondary">
                MTE AG &amp; EMH
              </Link>
            </li>
            <li>
              <Link href="/products?brand=brother" className="text-slate-400 text-sm hover:text-secondary">
                Brother Industrial
              </Link>
            </li>
            <li>
              <Link href="/products?brand=te" className="text-slate-400 text-sm hover:text-secondary">
                TE Connectivity
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="font-bold text-secondary mb-6 uppercase tracking-widest text-sm">Contact Details</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary text-base select-none mt-1">location_on</span>
              <span>
                E7-221, Bhumi World Industrial Park, Mumbai Nashik Highway, Near Tata Amantra, Village Pimplas, Thane - 421302
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base select-none">call</span>
              <a href="tel:+919970341477" className="hover:text-secondary">+91 99703 41477</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base select-none">mail</span>
              <a href="mailto:info@synergy-engg.com" className="hover:text-secondary">info@synergy-engg.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto border-t border-slate-700/50 mt-12 pt-8 text-center text-slate-500 text-sm">
        &copy; {currentYear} Synergy Engineering. All rights reserved.
      </div>
    </footer>
  );
}
