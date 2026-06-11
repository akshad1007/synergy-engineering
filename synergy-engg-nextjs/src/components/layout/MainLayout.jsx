'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

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
    <>
      <Header onMenuToggle={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      
      {/* Page Content Container */}
      <main className="flex-grow pt-[72px]">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
