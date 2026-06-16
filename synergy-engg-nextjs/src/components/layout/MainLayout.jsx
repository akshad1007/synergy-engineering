'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import StickyMobileCTA from './StickyMobileCTA';

export default function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isPrintPage = pathname === '/quote/print';

  if (isPrintPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen pb-[56px] sm:pb-0">
      <Header onMenuToggle={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      
      {/* Page Content Container */}
      <main className="flex-grow pt-[96px]">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
}
