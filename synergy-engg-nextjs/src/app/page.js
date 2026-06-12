'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BrandPartners from '@/components/sections/BrandPartners';
import ContactForm from '@/components/forms/ContactForm';
import { blogs } from '@/data/blogs';

export default function Home() {
  // Get first 3 blogs for the homepage
  const featuredBlogs = blogs.slice(0, 3);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Are you an authorized channel partner for Megger & MTE in India?",
      answer: "Yes, Synergy Engineering is an Authorized Channel Partner and stockist for Megger (UK), MTE AG (Switzerland), Brother Industrial Printers, TE Connectivity (Raychem), Greenlee, and KL-ARC. All our products are 100% genuine and come with official manufacturer warranties and calibration certificates."
    },
    {
      question: "Do you provide NABL accredited calibration certificates?",
      answer: "Absolutely. We operate a state-of-the-art calibration laboratory that provides testing and certification in compliance with ISO/IEC 17025 (NABL) standards. This ensures your diagnostic instruments meet national and international regulatory standards."
    },
    {
      question: "What is your typical lead time for custom quote requests?",
      answer: "We guarantee a response time of under 2 hours for standard catalog product inquiries. Our team of certified application engineers reviews your requirements to ensure the technical specifications and accessories match your project needs before sending the commercial quote."
    },
    {
      question: "Do you offer onsite support, testing, and operator training?",
      answer: "Yes, we provide comprehensive onsite commissioning, preventative maintenance, and troubleshooting. Additionally, we run specialized training workshops for utilities and contractors on winding analyzers, high-voltage cable jointing, and battery impedance diagnostics."
    }
  ];

  const customServices = [
    {
      num: "01",
      title: "Electrical Testing",
      desc: "Comprehensive diagnostic testing for power transformers, motors, generators, and HV switchgear using high-end Megger Baker ADX systems.",
      image: "/images/img_28.webp",
      link: "/services#electrical-testing"
    },
    {
      num: "02",
      title: "Equipment Supply",
      desc: "Authorized procurement of portable standards, earth testers, cable fault locators, and industrial safety kits with direct warranties.",
      image: "/images/img_36.webp",
      link: "/services#equipment-supply"
    },
    {
      num: "03",
      title: "Calibration Services",
      desc: "NABL accredited lab testing and calibration ensuring instrument tolerances remain within strict regulatory guidelines.",
      image: "/images/img_30.webp",
      link: "/services#calibration"
    },
    {
      num: "04",
      title: "Onsite Maintenance",
      desc: "Troubleshooting, cable fault localization, and preventive maintenance performed by certified factory-trained service technicians.",
      image: "/images/img_22.webp",
      link: "/services#onsite-maintenance"
    },
    {
      num: "05",
      title: "Technical Training",
      desc: "Operator certification courses on high-voltage equipment safety, diagnostic software interpretation, and compliance procedures.",
      image: "/images/img_23.webp",
      link: "/services#training"
    },
    {
      num: "06",
      title: "System Integration",
      desc: "Designing and installing online transformer DGA monitoring networks (HYDROCAL) and custom control panels.",
      image: "/images/img_39.webp",
      link: "/services#integration"
    }
  ];

  const featuredSolutions = [
    {
      id: "baker-adx",
      name: "Baker ADX Winding Analyzer",
      brand: "Megger",
      tag: "Motor Diagnostics",
      desc: "Comprehensive diagnostic testing for winding insulation in motors and generators.",
      image: "/images/img_31.webp",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      rowSpan: "row-span-2"
    },
    {
      id: "torkel900",
      name: "Torkel 900 Battery Load Unit",
      brand: "Megger",
      tag: "Battery Testing",
      desc: "Reliable battery discharge testing for power grids and telecom substations.",
      image: "/images/img_38.webp",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1"
    },
    {
      id: "pws-3-3",
      name: "MTE PWS 3.3 genX Standard",
      brand: "MTE AG",
      tag: "Power Measurement",
      desc: "Three-phase portable working standard for on-site meter testing.",
      image: "/images/img_39.webp",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-2"
    },
    {
      id: "te-accessories",
      name: "Raychem Cable Accessories",
      brand: "TE Connectivity",
      tag: "Power Grid Accessories",
      desc: "Heat shrinkable switchgear joints and high-voltage terminations.",
      image: "/images/img_20.webp",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1"
    },
    {
      id: "ek354",
      name: "Greenlee EK354 Crimper",
      brand: "Greenlee",
      tag: "Cable Connections",
      desc: "Battery-powered dieless hydraulic crimper for grid distribution cabling.",
      image: "/images/img_17.webp",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      rowSpan: "row-span-1"
    },
    {
      id: "kl-arc",
      name: "KL-ARC Insulating Gloves",
      brand: "KL-ARC",
      tag: "Safety Protection",
      desc: "High-voltage arc flash safety wear and rubber insulating gloves.",
      image: "/images/img_18.webp",
      colSpan: "col-span-1 md:col-span-1",
      rowSpan: "row-span-1"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* 1. Split Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-8 md:px-16 bg-[#0A1628] bg-grid-pattern text-white overflow-hidden border-b-4 border-[#D62828]">
        {/* Abstract Accent shapes */}
        <div className="absolute right-0 bottom-0 w-[40%] h-[60%] bg-[#D62828] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute left-10 top-20 w-[300px] h-[300px] bg-sky-500 opacity-[0.02] blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Top Title/Desc Split Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D62828]/10 border border-[#D62828]/35 text-[#D62828] font-bold text-[10px] sm:text-xs uppercase tracking-widest font-headline select-none">
                <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse"></span>
                Authorized Channel Partner
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-headline tracking-tighter leading-[1.05] text-white">
                REVOLUTIONIZING <br />
                <span className="text-[#D62828]">POWER</span> FOR A <br />
                BRIGHTER TOMORROW!
              </h1>
            </div>
            
            <div className="lg:col-span-4 space-y-6 lg:pt-14">
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-body">
                Over 10 years of delivering genuine diagnostic testing, calibration services, and industrial printing systems to utilities and grids across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-col xl:flex-row">
                <Link
                  className="bg-[#D62828] text-white font-headline font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-[#de2e2c] active:scale-95 transition-all text-center flex items-center justify-center gap-3 shadow-lg shadow-[#D62828]/15"
                  href="/quote"
                >
                  Request a Quote
                  <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
                </Link>
                <Link
                  className="border border-slate-700 hover:border-white hover:bg-white/5 text-white font-headline font-bold text-xs uppercase tracking-widest px-8 py-4 rounded active:scale-95 transition-all text-center block"
                  href="/products"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Hero Cards Row - Horizontally Scrollable on Mobile */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pt-8 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:overflow-visible lg:snap-none border-t border-slate-800 scrollbar-thin">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-6 rounded-lg hover:border-[#D62828]/40 transition-all duration-300 group min-w-[280px] sm:min-w-0 snap-start shrink-0">
              <span className="text-[10px] font-bold text-[#D62828] tracking-widest uppercase block mb-1">Brand Portfolio</span>
              <h3 className="font-headline font-black text-lg text-white group-hover:text-[#D62828] transition-colors mb-2">Megger Instruments</h3>
              <p className="text-slate-400 text-xs font-body mb-4 line-clamp-2">High-voltage automatic testing, diagnostics, and insulation monitoring systems.</p>
              <Link href="/products?brand=megger" className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#D62828] transition-colors uppercase font-headline">
                View catalog
                <span className="material-symbols-outlined text-xs ml-1 select-none">arrow_forward</span>
              </Link>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-6 rounded-lg hover:border-[#D62828]/40 transition-all duration-300 group min-w-[280px] sm:min-w-0 snap-start shrink-0">
              <span className="text-[10px] font-bold text-[#D62828] tracking-widest uppercase block mb-1">Brand Portfolio</span>
              <h3 className="font-headline font-black text-lg text-white group-hover:text-[#D62828] transition-colors mb-2">MTE AG Standards</h3>
              <p className="text-slate-400 text-xs font-body mb-4 line-clamp-2">Precision three-phase calibration standard meters and power quality systems.</p>
              <Link href="/products?brand=mte" className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#D62828] transition-colors uppercase font-headline">
                View catalog
                <span className="material-symbols-outlined text-xs ml-1 select-none">arrow_forward</span>
              </Link>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-6 rounded-lg hover:border-[#D62828]/40 transition-all duration-300 group min-w-[280px] sm:min-w-0 snap-start shrink-0">
              <span className="text-[10px] font-bold text-[#D62828] tracking-widest uppercase block mb-1">Brand Portfolio</span>
              <h3 className="font-headline font-black text-lg text-white group-hover:text-[#D62828] transition-colors mb-2">Brother Labeling</h3>
              <p className="text-slate-400 text-xs font-body mb-4 line-clamp-2">Heavy-duty industrial thermal labeling and barcode printers for plants.</p>
              <Link href="/products?brand=brother" className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#D62828] transition-colors uppercase font-headline">
                View catalog
                <span className="material-symbols-outlined text-xs ml-1 select-none">arrow_forward</span>
              </Link>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-6 rounded-lg hover:border-[#D62828]/40 transition-all duration-300 group min-w-[280px] sm:min-w-0 snap-start shrink-0">
              <span className="text-[10px] font-bold text-[#D62828] tracking-widest uppercase block mb-1">Brand Portfolio</span>
              <h3 className="font-headline font-black text-lg text-white group-hover:text-[#D62828] transition-colors mb-2">TE Connectivity</h3>
              <p className="text-slate-400 text-xs font-body mb-4 line-clamp-2">Raychem power cable shrink joints, terminations, and switchgear adapters.</p>
              <Link href="/products?brand=te" className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#D62828] transition-colors uppercase font-headline">
                View catalog
                <span className="material-symbols-outlined text-xs ml-1 select-none">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Brand Ticker */}
      <BrandPartners />

      {/* 3. Who We Are Section */}
      <section className="py-16 md:py-28 bg-white bg-grid-pattern relative" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              01 / COMPANY OVERVIEW
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container leading-none tracking-tight">
              Engineering Excellence Since Inception
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed font-body">
              Synergy Engineering is a premier channel distributor and service provider for high-voltage testing instruments. We bridge the gap between global engineering manufacturers and Indian power grids with NABL accredited calibration and field technicians.
            </p>
            <ul className="space-y-4">
              {[
                "Authorized channel partner for globally leading power brands.",
                "In-house NABL ISO/IEC 17025 accredited calibration lab.",
                "Pan-India onsite commissioning and engineer testing squads."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-[#D62828] text-xl md:text-2xl shrink-0 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-bold text-primary-container font-body text-sm md:text-base mt-0.5">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                className="inline-flex items-center gap-2 bg-primary-container text-white font-headline font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-slate-800 active:scale-95 transition-all"
                href="/about"
              >
                Learn More About Us
                <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Image Stack with overlaps */}
          <div className="w-full lg:w-1/2 relative flex justify-center pb-8 lg:pb-0">
            <div className="absolute -top-4 -left-4 w-[90%] h-full border-2 border-slate-100 rounded-lg -z-10"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl w-[90%] aspect-[4/3] md:aspect-video lg:aspect-[4/3] bg-slate-100">
              <Image
                alt="Electrical testing diagnostics"
                className="object-cover"
                src="/images/img_28.webp"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
            </div>
            
            {/* Float Overlay Card */}
            <div className="absolute -bottom-6 right-2 sm:bottom-6 sm:right-6 md:right-10 bg-primary-container text-white p-4 sm:p-6 rounded-lg shadow-xl max-w-[180px] sm:max-w-[240px] border border-slate-800">
              <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl mb-3 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <h4 className="font-headline font-bold text-sm sm:text-lg mb-1 leading-tight">NABL Certified</h4>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body">Our services and equipment meet ISO/IEC 17025 calibration compliance guidelines.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Asymmetrical Product Grid ("Our Projects" Style) */}
      <section className="py-16 md:py-28 bg-slate-50 relative overflow-hidden" id="products">
        {/* Big background outline header */}
        <div className="absolute top-10 left-10 text-[6rem] sm:text-[10rem] md:text-[14rem] font-headline font-black text-slate-100 select-none pointer-events-none uppercase tracking-tighter leading-none">
          Portfolio
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
                02 / HIGH-VOLTAGE CATALOG
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
                Featured Grid Solutions
              </h2>
            </div>
            <div>
              <Link
                className="border-2 border-primary-container hover:bg-primary-container hover:text-white text-primary-container font-headline font-bold text-xs uppercase tracking-widest px-8 py-3 rounded active:scale-95 transition-all inline-block"
                href="/products"
              >
                View All 87 Products
              </Link>
            </div>
          </div>

          {/* Asymmetrical Grid layout - Optimized with grid-flow-row-dense & responsive heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max grid-flow-row-dense">
            {featuredSolutions.map((item) => {
              const isTall = item.id === 'baker-adx' || item.id === 'pws-3-3';
              return (
                <div
                  key={item.id}
                  className={`relative overflow-hidden rounded-lg border border-slate-200 group bg-white ${item.colSpan}`}
                >
                  <div className={`relative ${isTall ? 'h-[280px] sm:h-[360px] lg:h-[500px]' : 'h-[200px] sm:h-[240px]'} w-full bg-slate-100 overflow-hidden`}>
                    <Image
                      alt={item.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      src={item.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Glassmorphic Brand/Tag overlay */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded bg-primary-container text-white shadow-md">
                        {item.brand}
                      </span>
                      <span className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded bg-white/85 text-slate-800 backdrop-blur-sm shadow-md border border-slate-200">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Bottom text block */}
                  <div className="p-6 md:p-8 space-y-3 bg-white border-t border-slate-100">
                    <h3 className="font-headline font-black text-xl text-primary-container group-hover:text-[#D62828] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-on-surface-variant text-sm font-body line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/products/${item.id}`}
                        className="inline-flex items-center text-xs font-bold text-primary-container hover:text-[#D62828] transition-colors uppercase font-headline tracking-wider"
                      >
                        Specifications
                        <span className="material-symbols-outlined text-xs ml-1 select-none">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Horizontal Services List */}
      <section className="py-16 md:py-28 bg-white relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-16 text-center">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              03 / WHAT WE DO
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
              Our Professional Services
            </h2>
            <div className="w-16 h-1.5 bg-[#D62828] mx-auto mt-4"></div>
          </div>

          {/* Service Horizontal rows list */}
          <div className="border-t border-slate-200 divide-y divide-slate-200">
            {customServices.map((service, index) => (
              <div
                key={index}
                className="service-row-hover py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-slate-50/50 px-4 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Left section: Number + Title */}
                <div className="flex items-center gap-6 md:w-1/3">
                  <span className="font-headline font-black text-slate-300 text-3xl md:text-4xl leading-none">
                    {service.num}
                  </span>
                  <h3 className="font-headline font-black text-xl md:text-2xl text-primary-container group-hover:text-[#D62828] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Middle section: Description */}
                <div className="md:w-5/12">
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Right section: Hover image + Link Arrow */}
                <div className="flex items-center justify-between w-full md:w-auto gap-8 md:justify-end">
                  {/* Micro Image Preview on hover */}
                  <div className="service-row-img opacity-0 scale-95 translate-x-4 w-24 h-16 rounded overflow-hidden relative shadow-md hidden sm:block">
                    <Image
                      alt={service.title}
                      className="object-cover"
                      src={service.image}
                      fill
                      sizes="96px"
                    />
                  </div>

                  <Link
                    href={service.link}
                    className="service-row-arrow flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 text-slate-400 group-hover:border-[#D62828] group-hover:text-[#D62828] group-hover:bg-[#D62828]/5 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-lg select-none">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Synergy Advantage Stats Banner - Cleaner layout without gridlines for mobile */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A1628] to-[#142846] text-white relative overflow-hidden border-t-4 border-b-4 border-[#D62828]">
        {/* Background mesh element */}
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#D62828] opacity-[0.04] blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center">
            
            <div className="space-y-2">
              <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
              <h3 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight">10+ Years</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">Substation Audits</p>
            </div>

            <div className="space-y-2">
              <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                electric_bolt
              </span>
              <h3 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight">87+ Models</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">Standard Products</p>
            </div>

            <div className="space-y-2">
              <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                lab_research
              </span>
              <h3 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight">ISO 17025</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">NABL Calibration</p>
            </div>

            <div className="space-y-2">
              <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                support_agent
              </span>
              <h3 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight">24/7 Care</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">Onsite Commissioning</p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Quote Process Cards (Replacing SaaS Pricing) */}
      <section className="py-16 md:py-28 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              04 / FAST RFQ SYSTEM
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
              Request a Quote in 3 Steps
            </h2>
            <p className="text-on-surface-variant font-body text-sm mt-4 leading-relaxed">
              We have integrated a robust local storage Quote Cart directly on our website. You can stage multiple items and request technical quotes at once.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-xl hover:border-[#D62828]/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="text-4xl font-headline font-black text-[#D62828]">01</span>
                <h3 className="font-headline font-black text-xl text-primary-container">Stage Equipment</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Browse our 87+ high-voltage products across Megger, MTE, Brother, and TE Connectivity. Click <strong>"Add to Quote Request"</strong> on any product detail page.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8">
                <Link href="/products" className="text-xs font-bold text-[#D62828] hover:underline uppercase font-headline tracking-wider flex items-center">
                  Go to products catalog
                  <span className="material-symbols-outlined text-xs ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-white border-2 border-primary-container p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-xl relative shadow-md">
              {/* Highlight Tag */}
              <span className="absolute -top-3.5 left-8 bg-[#D62828] text-white font-headline font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded">
                Highly Efficient
              </span>
              <div className="space-y-6">
                <span className="text-4xl font-headline font-black text-primary-container">02</span>
                <h3 className="font-headline font-black text-xl text-primary-container">Review & Submit</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Navigate to your <strong>Quote Desk</strong>. Review your staged instruments, fill out your project context and quantity requirements, and submit your requisition.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8">
                <Link href="/quote" className="text-xs font-bold text-primary-container hover:underline uppercase font-headline tracking-wider flex items-center">
                  Review active cart
                  <span className="material-symbols-outlined text-xs ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-xl hover:border-[#D62828]/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="text-4xl font-headline font-black text-[#D62828]">03</span>
                <h3 className="font-headline font-black text-xl text-primary-container">Receive Quote</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Our engineering desk cross-references active lead times and calibration compliance, sending a comprehensive quotation in <strong>under 2 hours</strong>.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8">
                <Link href="/contact" className="text-xs font-bold text-[#D62828] hover:underline uppercase font-headline tracking-wider flex items-center">
                  Connect with support
                  <span className="material-symbols-outlined text-xs ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Accordion & Testimonial Section */}
      <section className="py-16 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* FAQ Accordion (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div>
              <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
                05 / SUPPORT DESK
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4 pt-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg bg-white overflow-hidden transition-shadow hover:shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left font-headline font-bold text-base md:text-lg text-primary-container focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="material-symbols-outlined text-slate-400 select-none transition-transform duration-300" style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      keyboard_arrow_down
                    </span>
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openFaq === idx ? '300px' : '0px',
                      opacity: openFaq === idx ? 1 : 0,
                      visibility: openFaq === idx ? 'visible' : 'hidden'
                    }}
                  >
                    <div className="p-4 sm:p-6 pt-0 text-on-surface-variant font-body text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Panel (Right 5 Columns) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div>
              <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
                06 / CLIENT STORIES
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
                Trusted by Grids
              </h2>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg relative overflow-hidden">
              {/* Quote marks in background */}
              <div className="absolute right-4 bottom-2 text-slate-200/50 font-headline font-black text-[12rem] leading-none pointer-events-none select-none">
                ”
              </div>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-1 text-[#D62828]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed italic">
                  "Synergy Engineering provided our grid utility with Baker ADX analyzers and onsite certification courses. Their technical support response time is phenomenal — typical calibrations were cleared within 48 hours."
                </p>
                <div className="border-t border-slate-200 pt-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-headline font-bold text-xs select-none">
                    SE
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-primary-container leading-tight">Chief Engineering Officer</h4>
                    <p className="text-slate-500 text-xs font-body">State Power Transmission Grid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Blog / Insights Grid Section */}
      <section className="py-16 md:py-28 bg-slate-50 relative animate-fade-in-up" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-12 text-center">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              07 / LATEST INSIGHTS
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
              From Our Engineering Desk
            </h2>
            <div className="w-16 h-1.5 bg-[#D62828] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((post) => (
              <div key={post.slug} className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  <Image
                    alt={post.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    src={post.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[#D62828] font-bold text-[10px] uppercase tracking-widest font-headline block">
                      {post.category}
                    </span>
                    <h3 className="font-headline font-bold text-lg text-primary-container leading-snug group-hover:text-[#D62828] transition-colors">
                      <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-on-surface-variant text-xs font-body line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-6 flex justify-between items-center">
                    <span className="text-slate-400 text-[10px] font-body">{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-primary-container hover:text-[#D62828] transition-colors uppercase font-headline tracking-wider flex items-center">
                      Read
                      <span className="material-symbols-outlined text-xs ml-1 select-none">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Split Contact Inquiry Section */}
      <section className="py-16 md:py-28 bg-white relative" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Solid Info Column */}
          <div className="lg:col-span-5 relative rounded-lg overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-12 text-white bg-[#0A1628] bg-grid-pattern border-b-4 border-[#D62828] shadow-xl">
            {/* Mesh Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 to-[#142846]/95 -z-10" />
            <div className="absolute right-0 bottom-0 w-[200px] h-[200px] bg-[#D62828] opacity-[0.05] blur-[80px] pointer-events-none rounded-full" />
            
            <div className="space-y-6">
              <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
                08 / INQUIRY DESK
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                Connect with our engineers
              </h2>
              <p className="text-slate-400 text-sm font-body leading-relaxed">
                Whether you need a commercial bid for MTE standards, Raychem accessories, or require an on-site transformer diagnostic calendar, our desk is here to help.
              </p>
            </div>

            <div className="space-y-8 pt-8 lg:pt-0 border-t border-slate-800 lg:border-none mt-8 lg:mt-0">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#D62828] text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-white leading-tight">Response Time Guarantee</h4>
                  <p className="text-slate-400 text-xs font-body">Under 2 hours during normal business hours.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#D62828] text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-white leading-tight">Direct Email</h4>
                  <p className="text-slate-400 text-xs font-body">sales@synergy-engg.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#D62828] text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-white leading-tight">Synergy Warehouse</h4>
                  <p className="text-slate-400 text-xs font-body">Bhumi World Industrial Park, Thane, Maharashtra.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 md:p-12 rounded-lg shadow-sm">
            <h3 className="font-headline font-black text-2xl text-primary-container mb-2">Submit RFQ Request</h3>
            <p className="text-slate-500 text-sm font-body mb-8">Fill in your requirements below and we will route it to the appropriate application specialist.</p>
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
