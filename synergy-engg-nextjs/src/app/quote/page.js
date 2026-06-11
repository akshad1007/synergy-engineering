import React from 'react';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata = {
  title: 'Get a Quote | Synergy Engineering',
  description: 'Request a fast and accurate quote from Synergy Engineering for products, services, and technical support requirements.',
};

export default function Quote() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto w-full relative z-10">
      {/* Decorative background watermark */}
      <div className="absolute right-[-20%] top-[10%] opacity-[0.02] text-secondary pointer-events-none select-none z-0 rotate-[-15deg] hidden lg:block">
        <span className="material-symbols-outlined text-[40rem]" style={{ fontVariationSettings: "'FILL' 1" }}>
          bolt
        </span>
      </div>

      <div className="relative z-10">
        {/* Hero Title */}
        <div className="mb-12">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs font-label">
            Request for Proposal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-container mt-2 tracking-tight font-headline">
            Engineering Specification Form
          </h1>
          <p className="text-on-surface-variant mt-4 max-w-2xl leading-relaxed font-body">
            Please provide detailed technical requirements for your project. Our engineering team will review your specifications and provide a comprehensive quotation within 24-48 business hours.
          </p>
        </div>

        {/* Quote Form Component */}
        <QuoteForm />

        {/* Compliance Note */}
        <div className="mt-16 text-center text-[10px] text-on-surface-variant uppercase tracking-widest opacity-50 space-y-2 font-body">
          <p>Synergy Engineering is compliant with GDPR and ISO 27001 Data Security Standards.</p>
        </div>
      </div>
    </main>
  );
}
