'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BrandPartners from '@/components/sections/BrandPartners';
import ContactForm from '@/components/forms/ContactForm';
import { blogs } from '@/data/blogs';
import { motion } from 'framer-motion';
import {
  FadeInView,
  StaggerContainer,
  StaggerItem,
  CountUp,
  AnimatedAccordion,
  RevealMask,
} from '@/components/motion/MotionWrapper';

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

  const projectGallery = [
    {
      title: "Transmission Networks",
      subtitle: "High-Voltage T&D Lines",
      image: "/images/electricity tower.jpg",
      description: "Insulation testing and online monitoring systems deployed across major high-voltage transmission grids.",
      link: "/industries#td"
    },
    {
      title: "Wind Power Farms",
      subtitle: "Renewable Generation",
      image: "/images/windmill.jpg",
      description: "Diagnostic instrumentation and predictive surge testing for grid-connected wind energy platforms.",
      link: "/industries#power-gen"
    },
    {
      title: "Hydropower Dams",
      subtitle: "Heavy Utilities",
      image: "/images/dams.jpg",
      description: "Providing precision three-phase working standards and DGA oil telemetry for hydroelectric plants.",
      link: "/industries#power-gen"
    },
    {
      title: "Substation Yards",
      subtitle: "Grid Infrastructure",
      image: "/images/electrical_substation.jpg",
      description: "Supply and calibration of ISO/IEC 17025 standard insulation testers and transformer analyzers.",
      link: "/industries#infrastructure"
    },
    {
      title: "Industrial Plants",
      subtitle: "Heavy Manufacturing",
      image: "/images/factory.jpg",
      description: "Integrated labeling, cabling accessories, and offline motor testing systems for manufacturing lines.",
      link: "/industries#manufacturing"
    },
    {
      title: "Solar Power Arrays",
      subtitle: "Clean Energy Integration",
      image: "/images/solar_pannel.jpg",
      description: "Supplying earth grid testers and diagnostic systems to large scale solar photovoltaic platforms.",
      link: "/industries#power-gen"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">

      <section className="relative min-h-[90vh] pt-24 pb-20 px-4 sm:px-8 md:px-16 bg-[#0A1628] text-white overflow-hidden flex flex-col justify-between">
        {/* Real background video with dark gradient overlay & image fallback */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/electrical_substation.jpg"
            className="w-full h-full object-cover opacity-15 filter brightness-75 select-none pointer-events-none"
          >
            <source src="/videos/windmill_vedio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/95 to-[#0A1628]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-20" />
        </div>

        {/* Animated accent blobs */}
        <div className="animate-blob-drift absolute right-0 bottom-0 w-[40%] h-[60%] bg-[#D62828] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />
        <div className="animate-blob-drift absolute left-10 top-20 w-[300px] h-[300px] bg-sky-500 opacity-[0.02] blur-[100px] pointer-events-none rounded-full" style={{ animationDelay: '-3s' }} />

        <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
          {/* Top Title/Desc Split Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
            <div className="lg:col-span-8 space-y-6">
              <FadeInView delay={0.1}>
                <span className="animate-badge-glow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D62828]/10 border border-[#D62828]/35 text-[#D62828] font-bold text-[10px] sm:text-xs uppercase tracking-widest font-headline select-none">
                  <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse"></span>
                  Authorized Channel Partner
                </span>
              </FadeInView>
              <FadeInView delay={0.25}>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-headline tracking-tighter leading-[1.05] text-white">
                  REVOLUTIONIZING <br />
                  <span className="text-[#D62828]">POWER</span> FOR A <br />
                  BRIGHTER TOMORROW!
                </h1>
              </FadeInView>
            </div>
            
            <div className="lg:col-span-4 space-y-6 lg:pt-14">
              <FadeInView delay={0.4} direction="right">
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-body">
                  Over 10 years of delivering genuine diagnostic testing, calibration services, and industrial printing systems to utilities and grids across India.
                </p>
              </FadeInView>
              
              <FadeInView delay={0.55} direction="right">
                <div className="flex flex-col sm:flex-row gap-4 lg:flex-col xl:flex-row">
                  <Link
                    className="group bg-[#D62828] text-white font-headline font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-[#de2e2c] active:scale-95 transition-all text-center flex items-center justify-center gap-3 shadow-lg shadow-[#D62828]/15"
                    href="/quote"
                  >
                    Request a Quote
                    <span className="material-symbols-outlined text-sm select-none group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
                  </Link>
                  <Link
                    className="border border-slate-700 hover:border-white hover:bg-white/5 text-white font-headline font-bold text-xs uppercase tracking-widest px-8 py-4 rounded active:scale-95 transition-all text-center block"
                    href="/products"
                  >
                    Explore Products
                  </Link>
                </div>
              </FadeInView>
            </div>
          </div>

          {/* Bottom Hero Cards Row */}
          <StaggerContainer stagger={0.1} delay={0.3} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pt-8 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:overflow-visible lg:snap-none border-t border-slate-800 scrollbar-thin">
            {[
              { title: 'Megger Instruments', desc: 'High-voltage automatic testing, diagnostics, and insulation monitoring systems.', link: '/products?brand=megger' },
              { title: 'MTE AG Standards', desc: 'Precision three-phase calibration standard meters and power quality systems.', link: '/products?brand=mte' },
              { title: 'Brother Labeling', desc: 'Heavy-duty industrial thermal labeling and barcode printers for plants.', link: '/products?brand=brother' },
              { title: 'TE Connectivity', desc: 'Raychem power cable shrink joints, terminations, and switchgear adapters.', link: '/products?brand=te' },
            ].map((card, idx) => (
              <StaggerItem key={idx} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-6 rounded-lg hover:border-[#D62828]/40 transition-all duration-300 group min-w-[280px] sm:min-w-0 snap-start shrink-0">
                <span className="text-[10px] font-bold text-[#D62828] tracking-widest uppercase block mb-1">Brand Portfolio</span>
                <h3 className="font-headline font-black text-lg text-white group-hover:text-[#D62828] transition-colors mb-2">{card.title}</h3>
                <p className="text-slate-400 text-xs font-body mb-4 line-clamp-2">{card.desc}</p>
                <Link href={card.link} className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#D62828] transition-colors uppercase font-headline">
                  View catalog
                  <span className="material-symbols-outlined text-xs ml-1 select-none group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bouncing Scroll Down Mouse Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 select-none pointer-events-none opacity-40">
          <div className="w-5 h-8 rounded-full border border-white/60 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-white"
            />
          </div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F9FA] to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STATS BANNER — Overlapping Hero Bottom
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-20 md:-mt-16 -mt-8 max-w-6xl mx-auto px-4 w-full">
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800/80 px-6 py-10 md:py-12 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#D62828] opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />
          
          <StaggerContainer stagger={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center">
            
            <StaggerItem className="space-y-2">
              <FadeInView direction="none" className="inline-block" style={{ transform: 'rotate(-10deg)' }}>
                <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  workspace_premium
                </span>
              </FadeInView>
              <h3 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                <CountUp target={10} suffix="+" className="tabular-nums" /> Years
              </h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">Substation Audits</p>
            </StaggerItem>

            <StaggerItem className="space-y-2">
              <FadeInView direction="none" className="inline-block" style={{ transform: 'rotate(-10deg)' }}>
                <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  electric_bolt
                </span>
              </FadeInView>
              <h3 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                <CountUp target={87} suffix="+" className="tabular-nums" /> Models
              </h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">Standard Products</p>
            </StaggerItem>

            <StaggerItem className="space-y-2">
              <FadeInView direction="none" className="inline-block" style={{ transform: 'rotate(-10deg)' }}>
                <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  lab_research
                </span>
              </FadeInView>
              <h3 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight font-headline">ISO 17025</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">NABL Calibration</p>
            </StaggerItem>

            <StaggerItem className="space-y-2">
              <FadeInView direction="none" className="inline-block" style={{ transform: 'rotate(-10deg)' }}>
                <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  support_agent
                </span>
              </FadeInView>
              <h3 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight font-headline">24/7 Care</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">Onsite Commissioning</p>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. BRAND PARTNERS — Associates Strip + Customer Marquee
          ═══════════════════════════════════════════════════════════ */}
      <BrandPartners />

      {/* ═══════════════════════════════════════════════════════════
          3. WHO WE ARE SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-white bg-grid-pattern relative" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text — slides in from left */}
          <FadeInView direction="left" className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              01 / COMPANY OVERVIEW
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container leading-none tracking-tight">
              Engineering Excellence Since Inception
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed font-body">
              Synergy Engineering is a premier channel distributor and service provider for high-voltage testing instruments. We bridge the gap between global engineering manufacturers and Indian power grids with NABL accredited calibration and field technicians.
            </p>
            <StaggerContainer stagger={0.12} as="ul" className="space-y-4">
              {[
                "Authorized channel partner for globally leading power brands.",
                "In-house NABL ISO/IEC 17025 accredited calibration lab.",
                "Pan-India onsite commissioning and engineer testing squads."
              ].map((text, idx) => (
                <StaggerItem key={idx} direction="scale" as="li" className="flex items-start gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-[#D62828] text-xl md:text-2xl shrink-0 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-bold text-primary-container font-body text-sm md:text-base mt-0.5">
                    {text}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="pt-2">
              <Link
                className="group inline-flex items-center gap-2 bg-primary-container text-white font-headline font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-slate-800 active:scale-95 transition-all"
                href="/about"
              >
                Learn More About Us
                <span className="material-symbols-outlined text-sm select-none group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
              </Link>
            </div>
          </FadeInView>

          {/* Right Image Stack — slides in from right */}
          <FadeInView direction="right" delay={0.15} className="w-full lg:w-1/2 relative flex justify-center pb-8 lg:pb-0">
            <div className="absolute -top-4 -left-4 w-[90%] h-full border-2 border-slate-100 rounded-lg -z-10"></div>
            <RevealMask className="relative rounded-lg shadow-2xl w-[90%] aspect-[4/3] md:aspect-video lg:aspect-[4/3] bg-slate-100 group">
              <Image
                alt="Electrical testing diagnostics"
                className="object-cover group-hover:scale-[1.05] transition-transform duration-[6000ms] ease-out"
                src="/images/industry.jpg"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
            </RevealMask>
            
            {/* NABL Float Overlay Card */}
            <div className="animate-nabl-float absolute -bottom-6 right-2 sm:bottom-6 sm:right-6 md:right-10 bg-primary-container text-white p-4 sm:p-6 rounded-lg shadow-xl max-w-[180px] sm:max-w-[240px] border border-slate-800">
              <span className="material-symbols-outlined text-[#D62828] text-3xl sm:text-4xl mb-3 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <h4 className="font-headline font-bold text-sm sm:text-lg mb-1 leading-tight">NABL Certified</h4>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body">Our services and equipment meet ISO/IEC 17025 calibration compliance guidelines.</p>
            </div>
          </FadeInView>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. ASYMMETRICAL PRODUCT GRID
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-slate-50 relative overflow-hidden" id="products">
        {/* Big background outline header */}
        <div className="absolute top-10 left-10 text-[6rem] sm:text-[10rem] md:text-[14rem] font-headline font-black text-slate-100 select-none pointer-events-none uppercase tracking-tighter leading-none">
          Portfolio
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
          <FadeInView className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
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
          </FadeInView>

          {/* Asymmetrical Grid */}
          <StaggerContainer stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max grid-flow-row-dense">
            {featuredSolutions.map((item) => {
              const isTall = item.id === 'baker-adx' || item.id === 'pws-3-3';
              const isWide = item.id === 'baker-adx' || item.id === 'ek354';
              return (
                <StaggerItem
                  key={item.id}
                  className={`relative overflow-hidden rounded-lg border border-slate-200 group bg-white ${item.colSpan}`}
                  duration={isWide ? 0.7 : 0.5}
                >
                  {/* Crimson Hover Draw-Line Borders */}
                  <div className="absolute top-0 left-0 h-[2.5px] bg-[#D62828] w-0 group-hover:w-full transition-all duration-300 z-30" />
                  <div className="absolute top-0 right-0 w-[2.5px] bg-[#D62828] h-0 group-hover:h-full transition-all duration-300 delay-75 z-30" />
                  <div className="absolute bottom-0 right-0 h-[2.5px] bg-[#D62828] w-0 group-hover:w-full transition-all duration-300 delay-150 z-30" />
                  <div className="absolute bottom-0 left-0 w-[2.5px] bg-[#D62828] h-0 group-hover:h-full transition-all duration-300 delay-225 z-30" />

                  <div className={`relative ${isTall ? 'h-[280px] sm:h-[360px] lg:h-[500px]' : 'h-[200px] sm:h-[240px]'} w-full bg-slate-100 overflow-hidden`}>
                    <Image
                      alt={item.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      src={item.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Brand/Tag overlay — fade in on hover */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
                        className="group/link inline-flex items-center text-xs font-bold text-primary-container hover:text-[#D62828] transition-colors uppercase font-headline tracking-wider bg-[length:0_2px] hover:bg-[length:100%_2px] bg-gradient-to-r from-[#D62828] to-[#D62828] bg-no-repeat bg-left-bottom pb-0.5"
                      >
                        Specifications
                        <span className="material-symbols-outlined text-xs ml-1 select-none">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. HORIZONTAL SERVICES LIST
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-white relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <FadeInView className="mb-16 text-center">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              03 / WHAT WE DO
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
              Our Professional Services
            </h2>
            <div className="w-16 h-1.5 bg-[#D62828] mx-auto mt-4"></div>
          </FadeInView>

          {/* Desktop view: Service rows */}
          <StaggerContainer stagger={0.06} className="hidden md:block border-t border-slate-200 divide-y divide-slate-200">
            {customServices.map((service, index) => (
              <StaggerItem
                key={index}
                className="service-row-hover py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-slate-50/50 px-4 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Left: Number + Title */}
                <div className="flex items-center gap-6 md:w-1/3">
                  <span className="font-headline font-black text-slate-300 text-3xl md:text-4xl leading-none">
                    {service.num}
                  </span>
                  <h3 className="font-headline font-black text-xl md:text-2xl text-primary-container group-hover:text-[#D62828] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Middle: Description */}
                <div className="md:w-5/12">
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Right: Hover image + Link Arrow */}
                <div className="flex items-center justify-between w-full md:w-auto gap-8 md:justify-end">
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
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Mobile view: Swipeable card deck */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none scroll-smooth">
            {customServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 p-6 rounded-lg min-w-[280px] snap-start shrink-0 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-headline font-black text-slate-300 text-2xl leading-none">{service.num}</span>
                    <span className="material-symbols-outlined text-[#D62828] text-xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      settings
                    </span>
                  </div>
                  <h3 className="font-headline font-black text-lg text-primary-container">{service.title}</h3>
                  <p className="text-on-surface-variant text-xs font-body leading-relaxed">{service.desc}</p>
                </div>
                <div className="pt-6 border-t border-slate-200 mt-6 flex justify-between items-center">
                  <Link href={service.link} className="group/link text-xs font-bold text-primary-container hover:text-[#D62828] transition-colors uppercase font-headline tracking-wider flex items-center">
                    Learn more
                    <span className="material-symbols-outlined text-xs ml-1 select-none group-hover/link:translate-x-1 transition-transform duration-200">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. INFRASTRUCTURE & SECTOR EXPERIENCE SHOWCASE
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-[#0A1628] text-white relative overflow-hidden" id="showcase">
        {/* Animated Accent Blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D62828] opacity-[0.02] blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500 opacity-[0.01] blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
          <FadeInView className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              05 / SECTOR EXPERIENCE
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-white mt-2">
              Industrial & Infrastructure Gallery
            </h2>
            <p className="text-slate-400 font-body text-sm mt-4 leading-relaxed">
              Our products, field calibration laboratories, and engineering teams are deployed across critical infrastructure sectors nationwide, ensuring uninterrupted grid stability.
            </p>
            <div className="w-16 h-1.5 bg-[#D62828] mx-auto mt-6"></div>
          </FadeInView>

          <StaggerContainer stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectGallery.map((item, idx) => (
              <StaggerItem
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/50 hover:border-[#D62828]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Reveal Mask wrapper */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                  <Image
                    alt={item.title}
                    src={item.image}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-65" />
                  
                  {/* Category badge */}
                  <span className="absolute bottom-4 left-4 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded bg-[#D62828] text-white shadow-md">
                    {item.subtitle}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-headline font-black text-lg text-white group-hover:text-[#D62828] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-body leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-800/60 mt-4">
                    <Link
                      href={item.link}
                      className="group/link inline-flex items-center text-xs font-bold text-slate-300 hover:text-[#D62828] transition-colors uppercase font-headline tracking-wider"
                    >
                      Explore Sector Solutions
                      <span className="material-symbols-outlined text-xs ml-1 select-none group-hover/link:translate-x-1 transition-transform duration-200">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          7. QUOTE PROCESS — 3-Step Cards
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative">
          <FadeInView className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              04 / FAST RFQ SYSTEM
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
              Request a Quote in 3 Steps
            </h2>
            <p className="text-on-surface-variant font-body text-sm mt-4 leading-relaxed">
              We have integrated a robust local storage Quote Cart directly on our website. You can stage multiple items and request technical quotes at once.
            </p>
          </FadeInView>

          {/* Animated SVG Dotted Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-[58%] left-[12%] right-[12%] z-0 select-none pointer-events-none">
            <svg className="w-full h-2 overflow-visible" fill="none">
              <motion.path
                d="M 0 1 H 1200"
                stroke="#D62828"
                strokeWidth="2.5"
                strokeDasharray="8, 8"
                initial={{ strokeDashoffset: 16 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "linear"
                }}
              />
            </svg>
          </div>

          <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <StaggerItem className="bg-white border border-slate-200 p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-xl hover:border-[#D62828]/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="text-4xl font-headline font-black text-[#D62828]">01</span>
                <h3 className="font-headline font-black text-xl text-primary-container">Stage Equipment</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Browse our 87+ high-voltage products across Megger, MTE, Brother, and TE Connectivity. Click <strong>&quot;Add to Quote Request&quot;</strong> on any product detail page.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8">
                <Link href="/products" className="group text-xs font-bold text-[#D62828] hover:underline uppercase font-headline tracking-wider flex items-center">
                  Go to products catalog
                  <span className="material-symbols-outlined text-xs ml-1 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
                </Link>
              </div>
            </StaggerItem>

            {/* Step 2 — Elevated/highlighted */}
            <StaggerItem className="bg-white border-2 border-primary-container p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-xl relative shadow-lg scale-[1.02]">
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
                <Link href="/quote" className="group text-xs font-bold text-primary-container hover:underline uppercase font-headline tracking-wider flex items-center">
                  Review active cart
                  <span className="material-symbols-outlined text-xs ml-1 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
                </Link>
              </div>
            </StaggerItem>

            {/* Step 3 */}
            <StaggerItem className="bg-white border border-slate-200 p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-xl hover:border-[#D62828]/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="text-4xl font-headline font-black text-[#D62828]">03</span>
                <h3 className="font-headline font-black text-xl text-primary-container">Receive Quote</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Our engineering desk cross-references active lead times and calibration compliance, sending a comprehensive quotation in <strong>under 2 hours</strong>.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8">
                <Link href="/contact" className="group text-xs font-bold text-[#D62828] hover:underline uppercase font-headline tracking-wider flex items-center">
                  Connect with support
                  <span className="material-symbols-outlined text-xs ml-1 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          8. FAQ ACCORDION & TESTIMONIAL
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* FAQ Accordion (Left 7 Columns) */}
          <FadeInView direction="left" className="lg:col-span-7 space-y-6 md:space-y-8">
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
                  <AnimatedAccordion isOpen={openFaq === idx}>
                    <div className="p-4 sm:p-6 pt-0 text-on-surface-variant font-body text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </AnimatedAccordion>
                </div>
              ))}
            </div>
          </FadeInView>

          {/* Testimonial Panel (Right 5 Columns) */}
          <FadeInView direction="right" delay={0.15} className="lg:col-span-5 space-y-6 md:space-y-8">
            <div>
              <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
                06 / CLIENT STORIES
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
                Trusted by Grids
              </h2>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg relative overflow-hidden">
              {/* Quote watermark — large, very subtle */}
              <div className="absolute right-4 bottom-2 text-slate-200/[0.05] font-headline font-black text-[200px] leading-none pointer-events-none select-none">
                &ldquo;
              </div>
              <div className="space-y-6 relative z-10">
                <StaggerContainer stagger={0.05} className="flex gap-1 text-[#D62828]">
                  {[...Array(5)].map((_, i) => (
                    <StaggerItem key={i} direction="scale">
                      <span className="material-symbols-outlined text-lg select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed italic">
                  &ldquo;Synergy Engineering provided our grid utility with Baker ADX analyzers and onsite certification courses. Their technical support response time is phenomenal — typical calibrations were cleared within 48 hours.&rdquo;
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
          </FadeInView>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          9. BLOG / INSIGHTS GRID
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-slate-50 relative" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <FadeInView className="mb-12 text-center">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              07 / LATEST INSIGHTS
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
              From Our Engineering Desk
            </h2>
            <div className="w-16 h-1.5 bg-[#D62828] mx-auto mt-4"></div>
          </FadeInView>

          <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pb-8">
            {featuredBlogs.map((post, idx) => {
              const isEven = idx === 1;
              return (
                <StaggerItem
                  key={post.slug}
                  className={`group cursor-pointer bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full ${
                    isEven ? 'md:translate-y-6' : ''
                  }`}
                >
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
                    <Link href={`/blog/${post.slug}`} className="group/link text-xs font-bold text-primary-container hover:text-[#D62828] transition-colors uppercase font-headline tracking-wider flex items-center">
                      Read
                      <span className="material-symbols-outlined text-xs ml-1 select-none group-hover/link:translate-x-1 transition-transform duration-200">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          10. SPLIT CONTACT INQUIRY SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-white relative" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Info Column */}
          <FadeInView direction="left" className="lg:col-span-5 relative rounded-lg overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-12 text-white bg-[#0A1628] bg-grid-pattern border-b-4 border-[#D62828] shadow-xl">
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
          </FadeInView>

          {/* Right Side: Inquiry Form */}
          <FadeInView direction="right" delay={0.15} className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 md:p-12 rounded-lg shadow-sm">
            <h3 className="font-headline font-black text-2xl text-primary-container mb-2">Submit RFQ Request</h3>
            <p className="text-slate-500 text-sm font-body mb-8">Fill in your requirements below and we will route it to the appropriate application specialist.</p>
            <ContactForm />
          </FadeInView>

        </div>
      </section>
    </div>
  );
}
