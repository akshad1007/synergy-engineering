'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function QuotePrint() {
  const [mounted, setMounted] = useState(false);
  const [quoteData, setQuoteData] = useState(null);
  const [validUntil, setValidUntil] = useState('');

  useEffect(() => {
    setMounted(true);
    const rawData = localStorage.getItem('synergy_quote_data');
    if (rawData) {
      try {
        const data = JSON.parse(rawData);
        setQuoteData(data);
        
        // Calculate validity date (+30 days)
        const d = new Date();
        d.setDate(d.getDate() + 30);
        setValidUntil(d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
        
        // Automatically fire print dialog after a brief delay for rendering
        const timer = setTimeout(() => {
          window.print();
        }, 800);
        return () => clearTimeout(timer);
      } catch (e) {
        console.error('Failed to parse quote data', e);
      }
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-body text-slate-600">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-secondary mx-auto mb-4"></div>
          <p className="text-sm font-semibold">Generating document canvas...</p>
        </div>
      </div>
    );
  }

  if (!quoteData) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-body text-slate-800 p-6">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center border border-slate-200">
          <span className="material-symbols-outlined text-red-500 text-5xl mb-4 select-none">error</span>
          <h2 className="text-xl font-bold font-headline text-primary-container mb-2">No Specification Found</h2>
          <p className="text-sm text-on-surface-variant mb-6 font-body leading-relaxed">
            Please fill out the Quote Specification form before attempting to generate a print summary.
          </p>
          <button
            onClick={() => window.close()}
            className="w-full bg-primary-container text-white py-3 rounded font-headline font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  const mappedDescriptions = {
    Megger: 'Electrical Diagnostics Systems',
    Brother: 'Industrial Gearmotors & Labeling',
    EMH: 'Energy Measurement & Monitoring'
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-body relative overflow-x-hidden">
      {/* Dynamic Style Sheet for Printing */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-container {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            border: none !important;
          }
        }
      `}</style>

      {/* Top Navigation Bar - Hidden on print */}
      <nav className="fixed top-0 w-full z-50 border-b-4 border-secondary bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(10,22,40,0.06)] no-print">
        <div className="flex justify-between items-center px-8 h-20 w-full max-w-full mx-auto">
          <div className="flex items-center gap-4">
            <Image
              alt="Synergy Engineering Logo"
              src="/screenshots/logo_synergy.png"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="bg-secondary text-white font-headline font-semibold px-6 py-2.5 rounded hover:scale-95 duration-150 text-sm uppercase tracking-wide"
              onClick={() => window.close()}
            >
              Close Document
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-32 pb-20 px-4 flex flex-col items-center">
        {/* Utility Actions - Hidden on print */}
        <div className="w-full max-w-[210mm] flex justify-end items-center mb-6 no-print">
          <button
            className="flex items-center gap-2 bg-primary-container text-white text-sm font-headline font-bold px-5 py-2.5 rounded shadow-lg hover:bg-black transition-all"
            onClick={() => window.print()}
          >
            <span className="material-symbols-outlined text-lg select-none">print</span>
            PRINT / SAVE AS PDF
          </button>
        </div>

        {/* Document Container (A4 Aspect Ratio) */}
        <div
          id="print-area"
          className="print-container w-full max-w-[210mm] min-h-[297mm] bg-white shadow-2xl p-12 relative overflow-hidden flex flex-col border border-slate-200"
        >
          {/* Branding Motif (Subtle Background) */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none translate-x-1/4 -translate-y-1/4 select-none text-secondary">
            <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
          </div>

          {/* Header Section */}
          <header className="flex justify-between items-start border-b-2 border-slate-100 pb-8 mb-10">
            <div>
              <Image
                alt="Synergy Engineering Logo"
                src="/screenshots/logo_synergy.png"
                width={150}
                height={50}
                className="h-12 w-auto grayscale opacity-90 mb-4 mix-blend-multiply"
              />
              <div className="text-secondary font-headline font-bold tracking-widest text-[10px] uppercase">
                Engineering & Distribution
              </div>
            </div>
            <div className="text-right font-body">
              <h1 className="text-2xl font-extrabold font-headline text-primary-container mb-2">
                QUOTE SPECIFICATION
              </h1>
              <div className="space-y-1 text-sm text-slate-600">
                <p>
                  <span className="font-bold text-slate-500">REF ID:</span>{' '}
                  <span className="font-mono text-secondary font-black">{quoteData.refId}</span>
                </p>
                <p>
                  <span className="font-bold text-slate-500">DATE:</span> {quoteData.date}
                </p>
                <p>
                  <span className="font-bold text-slate-500">VALID UNTIL:</span> {validUntil}
                </p>
              </div>
            </div>
          </header>

          {/* Core Spec Metadata */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-body text-xs">
            <div className="space-y-4">
              <h3 className="font-headline font-bold text-[10px] uppercase tracking-widest text-secondary">
                Client Information
              </h3>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 flex-1 h-full font-mono">
                <p className="font-bold text-sm text-primary-container mb-1">{quoteData.company}</p>
                <p className="text-slate-600 leading-relaxed">{quoteData.location}</p>
                <p className="text-secondary font-bold mt-2 uppercase tracking-tighter">
                  {quoteData.industry}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-headline font-bold text-[10px] uppercase tracking-widest text-secondary">
                Project Liaison
              </h3>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 flex-1 h-full font-mono">
                <p className="font-bold text-sm text-primary-container mb-1">{quoteData.contact}</p>
                <p className="text-slate-600 mt-1">{quoteData.email}</p>
                <p className="text-slate-600">{quoteData.phone}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline font-bold text-[10px] uppercase tracking-widest text-secondary">
                Commercial Scope
              </h3>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 flex-1 h-full font-mono">
                <div className="mb-3">
                  <span className="text-[9px] font-bold text-slate-400 block uppercase">Timeline</span>
                  <p className="font-bold text-primary-container">{quoteData.timeline}</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 block uppercase">
                    Estimated Volume
                  </span>
                  <p className="font-bold text-secondary text-lg">{quoteData.quantity}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Equipment Configuration Table */}
          <section className="mb-12">
            <h3 className="font-headline font-bold text-[10px] uppercase tracking-widest text-secondary mb-4">
              Equipment Selection Profile
            </h3>
            <div className="overflow-hidden border-t-2 border-primary-container">
              <table className="w-full text-left table-fixed font-body">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-4 text-[10px] font-headline font-bold uppercase tracking-widest text-slate-700 w-1/3">
                      Original Equipment Manufacturer
                    </th>
                    <th className="p-4 text-[10px] font-headline font-bold uppercase tracking-widest text-slate-700 w-1/3">
                      Systems Type
                    </th>
                    <th className="p-4 text-[10px] font-headline font-bold uppercase tracking-widest text-slate-700 w-1/3 text-right">
                      Requested Selection
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {quoteData.equipment && quoteData.equipment.length > 0 ? (
                    quoteData.equipment.map((brand) => (
                      <tr key={brand}>
                        <td className="p-4 text-xs font-bold text-slate-900">{brand}</td>
                        <td className="p-4 text-xs font-mono text-slate-600">
                          {mappedDescriptions[brand] || 'Precision Systems'}
                        </td>
                        <td className="p-4 text-[10px] text-secondary font-black tracking-widest text-right">
                          SELECTED
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="p-4 text-xs italic text-slate-400 text-center">
                        No OEM designated upon original requisition form.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Project Requirements Summary */}
          <section className="flex flex-col mb-12 flex-grow">
            <h3 className="font-headline font-bold text-[10px] uppercase tracking-widest text-secondary mb-4">
              Technical Requirements & Scope Specifications
            </h3>
            <div className="p-6 border-l-4 border-primary-container bg-slate-50 rounded-r flex-grow">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-body">
                Submitted Operational Parameters
              </p>
              <p className="text-xs font-mono text-slate-800 leading-loose whitespace-pre-wrap">
                {quoteData.specs}
              </p>
            </div>
          </section>

          {/* Certification & Accreditation */}
          <div className="mt-auto pt-10 border-t border-slate-200 flex justify-between items-end font-body">
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <Image
                  alt="ISO 9001 Certification Logo"
                  src="/images/img_45.webp"
                  width={80}
                  height={40}
                  className="h-10 w-auto mb-2 grayscale opacity-70 mix-blend-multiply"
                />
                <span className="text-[7px] font-bold tracking-widest text-slate-400">
                  ISO 9001:2015
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  alt="NABL Accreditation Logo"
                  src="/images/img_46.webp"
                  width={80}
                  height={40}
                  className="h-10 w-auto mb-2 grayscale opacity-70 mix-blend-multiply"
                />
                <span className="text-[7px] font-bold tracking-widest text-slate-400">
                  NABL ACCREDITED
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">
                Synergy Engineering
              </p>
              <p className="text-[9px] text-slate-500 leading-relaxed font-mono">
                Bhumi World Industrial Park, MH
                <br />
                +91 22 2580 5555 | info@synergy-engg.com
              </p>
            </div>
          </div>

          {/* Footer Small Print */}
          <div className="mt-4 text-center font-body">
            <p className="text-[8px] text-slate-400 opacity-60">
              This system-generated technical requisition summarizes RFQ payload data. It does not
              establish binding commerce execution parameters.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
