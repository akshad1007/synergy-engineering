import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact | Synergy Engineering',
  description: 'Contact Synergy Engineering for product support, service requests, technical consultation, and business inquiries.',
};

export default function Contact() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Contact Us' }
  ];

  return (
    <div className="flex flex-col w-full relative bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(0,0,0,0.9),rgba(16,28,46,0.9),rgba(16,28,46,0.9))] opacity-95"></div>
          <Image
            alt="Industrial Background"
            fill
            priority
            sizes="100vw"
            className="object-cover mix-blend-overlay"
            src="/images/img_26.webp"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <nav className="flex justify-center mb-6 text-sm font-medium tracking-wide text-slate-300 font-body">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="mx-2 text-secondary">&gt;</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 font-headline">
            Get In <span className="text-secondary">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto py-12 md:py-24 px-4 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16">
          {/* Contact Form (Left 60%) */}
          <div className="lg:col-span-6">
            {/* Response Time Trust Badge */}
            <div className="flex items-center gap-3 mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-5 py-3">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-2xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              <div>
                <p className="text-sm font-bold text-green-800 dark:text-green-300 font-headline">Typical Response Time: Under 2 Hours</p>
                <p className="text-xs text-green-600 dark:text-green-500 font-body">Our engineering desk is ready to assist your team during business hours.</p>
              </div>
            </div>
            <ContactForm />
          </div>

          {/* Info Sidebar (Right 40%) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary-container text-white p-6 md:p-10 rounded-xl relative overflow-hidden shadow-lg border border-slate-800">
              {/* Branding Motif */}
              <div className="absolute -bottom-10 -right-10 opacity-5 text-white pointer-events-none select-none">
                <span className="material-symbols-outlined text-[150px] md:text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-8 md:mb-10 border-b border-white/10 pb-4 font-headline">
                  Contact Details
                </h3>
                <div className="space-y-6 md:space-y-8 font-body">
                  <div className="flex gap-4 md:gap-5">
                    <span className="material-symbols-outlined text-secondary shrink-0 select-none">location_on</span>
                    <div>
                      <p className="text-xs font-bold uppercase text-on-primary-container mb-1 font-label">
                        Our Location
                      </p>
                      <p className="text-sm leading-relaxed text-slate-300">
                        E7-221, Bhumi World Industrial Park, Mumbai Nashik Highway, Near Tata Amantra, Village Pimplas, Thane - 421 302. Maharashtra, India.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-5">
                    <span className="material-symbols-outlined text-secondary shrink-0 select-none">call</span>
                    <div>
                      <p className="text-xs font-bold uppercase text-on-primary-container mb-1 font-label">
                        Direct Lines
                      </p>
                      <div className="flex flex-col gap-2">
                        <a className="text-lg font-bold hover:text-secondary transition-colors font-headline" href="tel:+912225805555">
                          +91-22-2580-5555 (Thane Office)
                        </a>
                        <a className="text-base font-semibold hover:text-secondary transition-colors font-headline text-slate-200" href="tel:+919970341477">
                          +91 99703 41477 (Sales Desk)
                        </a>
                        <a className="text-base font-semibold hover:text-secondary transition-colors font-headline text-slate-200" href="tel:+919619767780">
                          +91 96197 67780 (Support Desk)
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-5">
                    <span className="material-symbols-outlined text-secondary shrink-0 select-none">mail</span>
                    <div>
                      <p className="text-xs font-bold uppercase text-on-primary-container mb-1 font-label">
                        General Inquiry
                      </p>
                      <a className="text-lg font-bold hover:text-secondary transition-colors break-all font-headline" href="mailto:info@synergy-engg.com">
                        info@synergy-engg.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 md:mt-12 space-y-4 font-body">
                  <a
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded font-bold transition-transform hover:scale-[1.02] min-h-[44px] uppercase tracking-wider text-xs shadow-md"
                    href="https://wa.me/919970341477"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined select-none">chat</span> WhatsApp Us
                  </a>
                  <a
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded font-bold transition-transform hover:scale-[1.02] min-h-[44px] uppercase tracking-wider text-xs shadow-md"
                    href="https://linkedin.com/company/synergy-engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined select-none">share</span> Follow on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Box */}
            <div className="bg-surface-container p-6 md:p-8 rounded-xl border-l-4 border-secondary border border-slate-200/50">
              <p className="text-sm font-medium text-on-surface italic font-body leading-relaxed">
                "At Synergy Engineering, we respond to all technical inquiries within 24 business hours. Our specialized engineering desk is ready to assist your team."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full h-[400px] md:h-[500px] bg-surface-container relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
          <Image
            alt="Map Location"
            fill
            sizes="100vw"
            className="object-cover"
            src="/images/img_27.webp"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <a
            className="bg-white p-4 shadow-2xl rounded-full animate-bounce pointer-events-auto flex items-center justify-center min-w-[56px] min-h-[56px]"
            href="https://www.google.com/maps/search/?api=1&query=Bhumi+World+Industrial+Park+Thane"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on Google Maps"
          >
            <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
              location_on
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
