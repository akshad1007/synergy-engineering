'use client';

import React, { useState, useEffect } from 'react';
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
  ScrollRevealText,
} from '@/components/motion/MotionWrapper';

export default function Home() {
  const SHOW_BLOG = false;
  // Get first 3 blogs for the homepage
  const featuredBlogs = blogs.slice(0, 3);
  const [openFaq, setOpenFaq] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Synergy Engineering provided our grid utility with Baker ADX analyzers and onsite certification courses. Their technical support response time is phenomenal — typical calibrations were cleared within 48 hours.",
      author: "Chief Engineering Officer",
      company: "State Power Transmission Grid",
      initials: "SG"
    },
    {
      quote: "Synergy supplied us with explosion-proof KL-ARC flash protection kits and high-voltage cable terminations for our offshore platforms. Zero issues under extreme conditions.",
      author: "Lead Safety Engineer",
      company: "ONGC Offshore Platforms",
      initials: "OG"
    },
    {
      quote: "For our ultra-supercritical thermal projects, Synergy delivered precision MTE reference standard meters on tight schedules. Their technical alignment with CPRI guidelines is flawless.",
      author: "Procurement Director",
      company: "Adani Power EPC",
      initials: "AP"
    }
  ];

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Can you supply equipment for government tenders (GeM/CPWD specifications)?",
      answer: "Yes, Synergy Engineering is fully registered on the Government e-Marketplace (GeM) and complies with CPWD and State utility guidelines. We provide OEM Manufacturer's Authorization Forms (MAF), detailed compliance sheets, and authorized certifications (Megger, MTE, etc.) to support public procurement bids."
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
      category: "TESTING & DIAGNOSTICS",
      title: "Electrical Testing",
      desc: "Comprehensive diagnostic testing for power transformers, motors, generators, and HV switchgear using high-end Megger Baker ADX systems.",
      image: "/images/img_28.webp",
      link: "/services#electrical-testing"
    },
    {
      num: "02",
      category: "PROCUREMENT",
      title: "Equipment Supply",
      desc: "Authorized procurement of portable standards, earth testers, cable fault locators, and industrial safety kits with direct warranties.",
      image: "/images/img_36.webp",
      link: "/services#equipment-supply"
    },
    {
      num: "03",
      category: "CERTIFICATION",
      title: "Calibration Services",
      desc: "NABL accredited lab testing and calibration ensuring instrument tolerances remain within strict regulatory guidelines.",
      image: "/images/img_30.webp",
      link: "/services#calibration"
    },
    {
      num: "04",
      category: "MAINTENANCE",
      title: "Onsite Maintenance",
      desc: "Troubleshooting, cable fault localization, and preventive maintenance performed by certified factory-trained service technicians.",
      image: "/images/img_22.webp",
      link: "/services#onsite-maintenance"
    },
    {
      num: "05",
      category: "TRAINING",
      title: "Technical Training",
      desc: "Operator certification courses on high-voltage equipment safety, diagnostic software interpretation, and compliance procedures.",
      image: "/images/img_23.webp",
      link: "/services#training"
    },
    {
      num: "06",
      category: "SYSTEM INTEGRATION",
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

      <section className="relative min-h-[90vh] pt-24 pb-20 px-4 sm:px-8 md:px-16 bg-[#060E1A] text-white overflow-hidden flex flex-col justify-between">
        {/* Real background video with dark gradient overlay & image fallback */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="none"
            poster="/images/electrical_substation.jpg"
            className="w-full h-full object-cover opacity-15 filter brightness-75 select-none pointer-events-none"
          >
            <source src="/videos/windmill_vedio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060E1A] via-[#060E1A]/95 to-[#060E1A]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A] via-transparent to-transparent opacity-20" />
        </div>

        {/* Animated accent blobs */}
        <div className="animate-blob-drift absolute right-0 bottom-0 w-[40%] h-[60%] bg-[#C8232A] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />
        <div className="animate-blob-drift absolute left-10 top-20 w-[300px] h-[300px] bg-sky-500 opacity-[0.02] blur-[100px] pointer-events-none rounded-full" style={{ animationDelay: '-3s' }} />

        <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
          {/* Top Title/Desc Split Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
            <div className="lg:col-span-8 space-y-6">
              <FadeInView delay={0.1}>
                <span className="animate-badge-glow inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#C8232A]/10 border border-[#C8232A]/30 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest font-headline select-none">
                  <span className="w-2 h-2 rounded-full bg-[#C8232A] animate-pulse"></span>
                  Authorized Channel Partner — Megger | MTE | Greenlee
                </span>
              </FadeInView>
              <FadeInView delay={0.25}>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.0] text-white uppercase">
                  <span className="block">Precision Testing.</span>
                  <span className="block text-[#C8232A]">Authorised Supply.</span>
                  <span className="block">Pan-India Support.</span>
                </h1>
              </FadeInView>
            </div>
            
            <div className="lg:col-span-4 space-y-6 lg:pt-14">
              <FadeInView delay={0.4} direction="right">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                  Over 10 years of delivering genuine diagnostic testing, calibration services, and industrial printing systems to utilities and grids across India.
                </p>
                <p className="text-slate-400 text-xs font-mono mt-3 flex items-center gap-1.5 uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[#C8232A] text-sm select-none">location_on</span>
                  Thane, Maharashtra · Serving Power, Infra & EPC Since 2016
                </p>
              </FadeInView>
              
              <FadeInView delay={0.55} direction="right">
                <div className="flex flex-col sm:flex-row gap-4 lg:flex-col xl:flex-row">
                  <Link
                    className="group bg-[#C8232A] hover:bg-[#de2e2c] text-white font-headline font-bold text-xs uppercase tracking-widest px-8 py-4 rounded active:scale-95 transition-all text-center flex items-center justify-center gap-3 shadow-lg shadow-[#C8232A]/15"
                    href="/quote"
                  >
                    Request a Quote →
                  </Link>
                  <Link
                    className="border border-slate-700 hover:border-white hover:bg-white/5 text-white font-headline font-bold text-xs uppercase tracking-widest px-8 py-4 rounded active:scale-95 transition-all text-center block"
                    href="/products"
                  >
                    View Catalogue
                  </Link>
                </div>
              </FadeInView>
            </div>
          </div>

          {/* Bottom Hero Cards Row */}
          <StaggerContainer stagger={0.1} delay={0.3} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pt-8 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:overflow-visible lg:snap-none border-t border-slate-800 scrollbar-none">
            {[
              { title: 'Megger Instruments', desc: 'High-voltage automatic testing, diagnostics, and insulation monitoring systems.', link: '/products?brand=megger' },
              { title: 'MTE AG Standards', desc: 'Precision three-phase calibration standard meters and power quality systems.', link: '/products?brand=mte' },
              { title: 'Brother Labeling', desc: 'Heavy-duty industrial thermal labeling and barcode printers for plants.', link: '/products?brand=brother' },
              { title: 'TE Connectivity', desc: 'Raychem power cable shrink joints, terminations, and switchgear adapters.', link: '/products?brand=te' },
            ].map((card, idx) => (
              <StaggerItem key={idx} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/85 p-6 rounded-lg hover:border-[#C8232A]/40 transition-all duration-300 group min-w-[280px] sm:min-w-0 snap-start shrink-0">
                <span className="text-[10px] font-bold text-[#C8232A] tracking-widest uppercase block mb-1">Brand Portfolio</span>
                <h3 className="font-headline font-black text-lg text-white group-hover:text-[#C8232A] transition-colors mb-2">{card.title}</h3>
                <p className="text-slate-400 text-xs font-body mb-4 line-clamp-2">{card.desc}</p>
                <Link href={card.link} className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#C8232A] transition-colors uppercase font-headline">
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
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F6F7] to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STATS BANNER — Overlapping Hero Bottom
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-20 md:-mt-16 -mt-8 max-w-6xl mx-auto px-4 w-full">
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800/80 px-6 py-10 md:py-12 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#C8232A] opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />
          
          <StaggerContainer stagger={0.08} className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6 text-center justify-center">
            
            <StaggerItem className="space-y-2">
              <div className="w-12 h-12 bg-[#C8232A] text-white flex items-center justify-center rounded mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  workspace_premium
                </span>
              </div>
              <h3 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-none tracking-tight">
                <CountUp target={10} suffix="+" className="tabular-nums" /> Years
              </h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">10+ Years Active</p>
            </StaggerItem>

            <StaggerItem className="space-y-2">
              <div className="w-12 h-12 bg-[#C8232A] text-white flex items-center justify-center rounded mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  electric_bolt
                </span>
              </div>
              <h3 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-none tracking-tight">
                <CountUp target={87} suffix="+" className="tabular-nums" /> Models
              </h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">87+ Models Stocked</p>
            </StaggerItem>

            <StaggerItem className="space-y-2">
              <div className="w-12 h-12 bg-[#C8232A] text-white flex items-center justify-center rounded mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  lab_research
                </span>
              </div>
              <h3 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-none tracking-tight">ISO 17025</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">NABL Accredited Lab</p>
            </StaggerItem>

            <StaggerItem className="space-y-2">
              <div className="w-12 h-12 bg-[#C8232A] text-white flex items-center justify-center rounded mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  support_agent
                </span>
              </div>
              <h3 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-none tracking-tight">24/7 Care</h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">24×7 Field Response</p>
            </StaggerItem>

            <StaggerItem className="space-y-2 col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-[#C8232A] text-white flex items-center justify-center rounded mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  handshake
                </span>
              </div>
              <h3 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-none tracking-tight">
                <CountUp target={6} className="tabular-nums" /> Brands
              </h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider">Partner Brands</p>
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
            <span className="text-[#C8232A] font-bold tracking-widest text-xs uppercase font-headline block">
              ABOUT SYNERGY
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container leading-none tracking-tight">
              Engineering Excellence Since Inception
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed font-body">
              <ScrollRevealText text="Synergy Engineering is a premier channel distributor and service provider for high-voltage testing instruments. We bridge the gap between global engineering manufacturers and Indian power grids with NABL accredited calibration and field technicians." />
            </p>
            <StaggerContainer stagger={0.12} as="ul" className="space-y-4">
              {[
                "Authorized channel partner for globally leading power brands.",
                "In-house NABL ISO/IEC 17025 accredited calibration lab.",
                "Pan-India onsite commissioning and engineer testing squads."
              ].map((text, idx) => (
                <StaggerItem key={idx} direction="scale" as="li" className="flex items-start gap-3 md:gap-4">
                  <span className="w-5 h-5 md:w-6 md:h-6 shrink-0 bg-[#C8232A] flex items-center justify-center rounded text-white select-none mt-0.5">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
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
            <div className="animate-nabl-float absolute -bottom-6 right-2 sm:bottom-6 sm:right-6 md:right-10 bg-[#060E1A] text-white p-4 sm:p-6 rounded-lg shadow-2xl max-w-[180px] sm:max-w-[240px] border-2 border-[#C9A84C]">
              <span className="material-symbols-outlined text-[#C9A84C] text-3xl sm:text-4xl mb-3 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <h4 className="font-headline font-bold text-sm sm:text-lg mb-1 leading-tight text-white">NABL Certified</h4>
              <p className="text-slate-400 text-[10px] sm:text-xs font-body mb-2">Our laboratory and calibration procedures meet rigorous ISO guidelines.</p>
              <span className="font-mono text-[#C9A84C] text-[9px] uppercase tracking-wider block font-bold">ISO/IEC 17025:2017</span>
            </div>
          </FadeInView>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. ASYMMETRICAL PRODUCT GRID
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-[#F5F6F7] relative overflow-hidden" id="products">
        {/* Big background outline header */}
        <div className="absolute top-10 left-10 text-[6rem] sm:text-[10rem] md:text-[14rem] font-headline font-black text-slate-200/50 dark:text-slate-800/10 select-none pointer-events-none uppercase tracking-tighter leading-none">
          Portfolio
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
          <FadeInView className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#C8232A] font-bold tracking-widest text-xs uppercase font-headline block">
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
                  <div className="absolute top-0 left-0 h-[2.5px] bg-[#C8232A] w-0 group-hover:w-full transition-all duration-300 z-30" />
                  <div className="absolute top-0 right-0 w-[2.5px] bg-[#C8232A] h-0 group-hover:h-full transition-all duration-300 delay-75 z-30" />
                  <div className="absolute bottom-0 right-0 h-[2.5px] bg-[#C8232A] w-0 group-hover:w-full transition-all duration-300 delay-150 z-30" />
                  <div className="absolute bottom-0 left-0 w-[2.5px] bg-[#C8232A] h-0 group-hover:h-full transition-all duration-300 delay-225 z-30" />

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
                      <span 
                        className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded bg-primary-container text-white shadow-md"
                        style={{ borderLeft: `3.5px solid ${
                          item.brand.toLowerCase() === 'megger' ? '#C8232A' :
                          item.brand.toLowerCase() === 'mte' || item.brand.toLowerCase() === 'emh' ? '#0ea5e9' :
                          item.brand.toLowerCase() === 'brother' ? '#64748b' :
                          item.brand.toLowerCase() === 'te' ? '#f59e0b' :
                          item.brand.toLowerCase() === 'greenlee' ? '#10b981' :
                          item.brand.toLowerCase() === 'kl-arc' ? '#f43f5e' : '#64748b'
                        }` }}
                      >
                        {item.brand}
                      </span>
                      <span className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded bg-white/85 text-slate-800 backdrop-blur-sm shadow-md border border-slate-200">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Bottom text block */}
                  <div className="p-6 md:p-8 space-y-3 bg-white border-t border-slate-100">
                    <h3 className="font-headline font-black text-xl text-primary-container group-hover:text-[#C8232A] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-on-surface-variant text-sm font-body line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/products/${item.id}`}
                        className="group/link inline-flex items-center text-xs font-bold text-primary-container hover:text-[#C8232A] transition-colors uppercase font-headline tracking-wider bg-[length:0_2px] hover:bg-[length:100%_2px] bg-gradient-to-r from-[#C8232A] to-[#C8232A] bg-no-repeat bg-left-bottom pb-0.5"
                      >
                        View Specs →
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
            <span className="text-[#C8232A] font-bold tracking-widest text-xs uppercase font-headline block">
              03 / WHAT WE DO
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
              Our Professional Services
            </h2>
            <div className="w-16 h-1.5 bg-[#C8232A] mx-auto mt-4"></div>
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
                  <div>
                    <span className="text-[9px] font-bold text-[#C8232A] tracking-widest uppercase block mb-1 font-headline">
                      {service.category}
                    </span>
                    <h3 className="font-headline font-black text-xl md:text-2xl text-primary-container group-hover:text-[#C8232A] transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>
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
                    className="service-row-arrow flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 text-slate-400 group-hover:border-[#C8232A] group-hover:text-[#C8232A] group-hover:bg-[#C8232A]/5 transition-all duration-300"
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
                    <span className="material-symbols-outlined text-[#C8232A] text-xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      settings
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-[#C8232A] tracking-widest uppercase block mb-1 font-headline">
                    {service.category}
                  </span>
                  <h3 className="font-headline font-black text-lg text-primary-container leading-tight">{service.title}</h3>
                  <p className="text-on-surface-variant text-xs font-body leading-relaxed">{service.desc}</p>
                </div>
                <div className="pt-6 border-t border-slate-200 mt-6 flex justify-between items-center">
                  <Link href={service.link} className="group/link text-xs font-bold text-primary-container hover:text-[#C8232A] transition-colors uppercase font-headline tracking-wider flex items-center">
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
          6. INDUSTRIES WE SERVE
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-[#060E1A] text-white relative overflow-hidden" id="industries">
        {/* Animated Accent Blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8232A] opacity-[0.02] blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500 opacity-[0.01] blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
          <FadeInView className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#C8232A] font-bold tracking-widest text-xs uppercase font-headline block">
              05 / SECTOR EXPERTISE
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-white mt-2">
              Industries We Serve
            </h2>
            <p className="text-slate-450 font-body text-sm mt-4 leading-relaxed">
              We supply diagnostic testing instruments, NABL-certified calibrations, and specialized engineering support to high-voltage sectors nationwide.
            </p>
            <div className="w-16 h-1.5 bg-[#C8232A] mx-auto mt-6"></div>
          </FadeInView>

          <StaggerContainer stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Power Generation", desc: "Thermal, hydro, solar, and wind utilities demanding precision surge diagnostics and monitoring.", icon: "wind_power", link: "/industries#power-gen" },
              { title: "Transmission & Distribution", desc: "Substation yards and high-voltage transmission lines requiring insulation and DGA testing.", icon: "power", link: "/industries#td" },
              { title: "Oil & Gas", desc: "Refineries, pipelines, and offshore platforms requiring flame-resistant gear and winding diagnostics.", icon: "oil_barrel", link: "/industries#oil-gas" },
              { title: "Heavy Manufacturing", desc: "Industrial process plants requiring heavy cabling terminations, labeling, and motor testing.", icon: "factory", link: "/industries#manufacturing" },
              { title: "Railways & Metro", desc: "Traction substations, metro lines, and signaling networks requiring VLF cable and ground testing.", icon: "train", link: "/industries#railways" },
              { title: "Defence & Aerospace", desc: "Research laboratories and testing facilities requiring high-precision reference calibrators.", icon: "rocket_launch", link: "/industries#aerospace" }
            ].map((item, idx) => (
              <StaggerItem
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-[#C8232A]/40 hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C8232A]/10 text-[#C8232A] flex items-center justify-center select-none group-hover:bg-[#C8232A] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>{item.icon}</span>
                  </div>
                  <h3 className="font-headline font-black text-lg text-white group-hover:text-[#C8232A] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-850 mt-6">
                  <Link
                    href={item.link}
                    className="group/link inline-flex items-center text-xs font-bold text-slate-350 hover:text-[#C8232A] transition-colors uppercase font-headline tracking-wider"
                  >
                    Explore Solutions →
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          7. QUOTE PROCESS — 3-Step Cards
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative">
          <FadeInView className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#C8232A] font-bold tracking-widest text-xs uppercase font-headline block">
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
          {isDesktop && (
            <div className="absolute top-[48%] left-[12%] right-[12%] z-0 select-none pointer-events-none">
              <svg className="w-full h-2 overflow-visible" fill="none">
                <motion.path
                  d="M 0 1 H 1200"
                  stroke="#C8232A"
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
          )}

          <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-12">
            {/* Step 1 */}
            <StaggerItem className="bg-[#F5F6F7] border border-slate-200/80 p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-xl hover:border-[#C8232A]/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="text-4xl font-headline font-black text-[#C8232A]">01</span>
                <h3 className="font-headline font-black text-xl text-primary-container">Browse & Shortlist</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Browse our 87+ high-voltage products across Megger, MTE, Brother, and TE Connectivity. Click <strong>&quot;Add to Quote Request&quot;</strong> on any product detail page.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-200/60 mt-8">
                <Link href="/products" className="group text-xs font-bold text-[#C8232A] hover:underline uppercase font-headline tracking-wider flex items-center">
                  Go to products catalog →
                </Link>
              </div>
            </StaggerItem>

            {/* Step 2 — Elevated/highlighted */}
            <StaggerItem className="bg-white border-2 border-primary-container p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-xl relative shadow-lg scale-[1.02] z-20">
              <span className="absolute -top-3.5 left-8 bg-[#C8232A] text-white font-headline font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded">
                Highly Efficient
              </span>
              <div className="space-y-6">
                <span className="text-4xl font-headline font-black text-primary-container">02</span>
                <h3 className="font-headline font-black text-xl text-primary-container">Submit Your RFQ</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Navigate to your <strong>Quote Desk</strong>. Review your staged instruments, fill out your project context and quantity requirements, and submit your requisition.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8">
                <Link href="/quote" className="group text-xs font-bold text-primary-container hover:underline uppercase font-headline tracking-wider flex items-center">
                  Review active cart →
                </Link>
              </div>
            </StaggerItem>

            {/* Step 3 */}
            <StaggerItem className="bg-[#F5F6F7] border border-slate-200/80 p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-xl hover:border-[#C8232A]/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="text-4xl font-headline font-black text-[#C8232A]">03</span>
                <h3 className="font-headline font-black text-xl text-primary-container">Get Formal Bid</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Our engineering desk cross-references active lead times and calibration compliance, sending a comprehensive quotation in <strong>under 2 hours</strong>.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-200/60 mt-8">
                <Link href="/contact" className="group text-xs font-bold text-[#C8232A] hover:underline uppercase font-headline tracking-wider flex items-center">
                  Connect with support →
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* CTA Link at bottom of Quote Process */}
          <FadeInView className="text-center">
            <Link 
              href="/products" 
              className="bg-[#C8232A] hover:bg-[#de2e2c] text-white px-8 py-4 rounded font-headline font-bold text-xs uppercase tracking-widest active:scale-95 transition-all text-center inline-flex items-center gap-2 shadow-lg shadow-[#C8232A]/15 font-body"
            >
              Start Your RFQ
              <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
            </Link>
          </FadeInView>
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
              <span className="text-[#C8232A] font-bold tracking-widest text-xs uppercase font-headline block">
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
              <span className="text-[#C8232A] font-bold tracking-widest text-xs uppercase font-headline block">
                06 / CLIENT STORIES
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
                Trusted by Grids
              </h2>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg relative overflow-hidden min-h-[300px] flex flex-col justify-between">
              {/* Quote watermark — large, very subtle */}
              <div className="absolute right-4 bottom-2 text-slate-200/[0.05] font-headline font-black text-[200px] leading-none pointer-events-none select-none">
                &ldquo;
              </div>
              <div className="space-y-6 relative z-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#C8232A] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-lg select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-on-surface-variant text-sm font-body leading-relaxed italic min-h-[90px]">
                      &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                    </p>
                    <div className="border-t border-slate-200 pt-4 flex items-center gap-4 mt-6">
                      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-headline font-bold text-xs select-none">
                        {testimonials[activeTestimonial].initials}
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-sm text-primary-container leading-tight">{testimonials[activeTestimonial].author}</h4>
                        <p className="text-slate-500 text-xs font-body">{testimonials[activeTestimonial].company}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Dot Indicators */}
                <div className="flex gap-2 justify-center pt-4">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${activeTestimonial === idx ? 'bg-[#C8232A] w-5' : 'bg-slate-300 hover:bg-slate-450'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          9. BLOG / INSIGHTS GRID
          ═══════════════════════════════════════════════════════════ */}
      {SHOW_BLOG && (
        <section className="py-16 md:py-28 bg-slate-50 relative" id="blog">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
            <FadeInView className="mb-12 text-center">
              <span className="text-[#C8232A] font-bold tracking-widest text-xs uppercase font-headline block">
                07 / LATEST INSIGHTS
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
                From Our Engineering Desk
              </h2>
              <div className="w-16 h-1.5 bg-[#C8232A] mx-auto mt-4"></div>
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
                      <span className="text-[#C8232A] font-bold text-[10px] uppercase tracking-widest font-headline block">
                        {post.category}
                      </span>
                      <h3 className="font-headline font-bold text-lg text-primary-container leading-snug group-hover:text-[#C8232A] transition-colors">
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
                      <Link href={`/blog/${post.slug}`} className="group/link text-xs font-bold text-primary-container hover:text-[#C8232A] transition-colors uppercase font-headline tracking-wider flex items-center">
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
      )}

      {/* ═══════════════════════════════════════════════════════════
          10. SPLIT CONTACT INQUIRY SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-white relative" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Info Column */}
          <FadeInView direction="left" className="lg:col-span-5 relative rounded-lg overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-12 text-white bg-[#0A1628] bg-grid-pattern border-b-4 border-[#C8232A] shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 to-[#142846]/95 -z-10" />
            <div className="absolute right-0 bottom-0 w-[200px] h-[200px] bg-[#C8232A] opacity-[0.05] blur-[80px] pointer-events-none rounded-full" />
            
            <div className="space-y-6">
              <span className="text-[#C8232A] font-bold tracking-widest text-xs uppercase font-headline block">
                07 / INQUIRY DESK
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                Connect with our engineers
              </h2>
              <p className="text-slate-400 text-sm font-body leading-relaxed">
                Whether you need a commercial bid for MTE standards, Raychem accessories, or require an on-site transformer diagnostic calendar, our desk is here to help.
              </p>
            </div>

            <div className="space-y-6 pt-8 lg:pt-0 border-t border-slate-800 lg:border-none mt-8 lg:mt-0">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#C8232A] text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-white leading-tight">Response Time Guarantee</h4>
                  <p className="text-slate-400 text-xs font-body">Under 2 hours during normal business hours.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#C8232A] text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-white leading-tight">WhatsApp Business</h4>
                  <p className="text-slate-400 text-xs font-body">
                    <a href="https://wa.me/919970341477" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors font-mono">
                      +91 99703 41477
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#C8232A] text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-white leading-tight">Direct Email</h4>
                  <p className="text-slate-400 text-xs font-body font-mono">info@synergy-engg.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#C8232A] text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <div>
                  <h4 className="font-headline font-bold text-sm text-white leading-tight">Synergy Warehouse</h4>
                  <p className="text-slate-400 text-xs font-body">E7-221, Bhumi World Industrial Park, Thane, Maharashtra.</p>
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
