import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import { ScrollRevealText } from '@/components/motion/MotionWrapper';

export default function About() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About Us' }
  ];

  const faqsStory = [
    {
      year: "2016",
      title: "Inception in Thane",
      desc: "Founded as a specialized diagnostic consultancy catering to industrial utilities in Maharashtra."
    },
    {
      year: "2020",
      title: "Grid & Service Expansion",
      desc: "Expanded scope to cover PAN-India maintenance contracts, spanning over 10 states with critical grid testing projects."
    },
    {
      year: "2024",
      title: "Pan-India Engineering Partner",
      desc: "Evolved into the trusted national channel partner for Tier-1 utilities, handling complex winding surge and DGA projects."
    }
  ];

  const values = [
    {
      num: "01",
      icon: "target",
      title: "Precision",
      desc: "Meticulous attention to detail in every technical tolerance and testing calculation we perform."
    },
    {
      num: "02",
      icon: "verified_user",
      title: "Reliability",
      desc: "Consistently delivering products, calibrations, and diagnostic results that ensure grid stability."
    },
    {
      num: "03",
      icon: "handshake",
      title: "Customer First",
      desc: "Aligning our application engineering support with our clients' operational and safety goals."
    },
    {
      num: "04",
      icon: "lightbulb",
      title: "Innovation",
      desc: "Adopting modern online transformer monitoring and digital tracking workflows for grid safety."
    }
  ];

  const team = [
    {
      name: "Rajesh Khanna",
      role: "Managing Director",
      dept: "Executive Leadership",
      image: "/images/img_16.webp"
    },
    {
      name: "Ananya Sharma",
      role: "Operations Head",
      dept: "Strategic Planning",
      image: "/images/img_17.webp"
    },
    {
      name: "Vikram Singh",
      role: "Technical Director",
      dept: "Engineering Design",
      image: "/images/img_18.webp"
    },
    {
      name: "Priya Mehta",
      role: "Quality Assurance",
      dept: "Standards Compliance",
      image: "/images/img_19.webp"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Header */}
      <HeroSection
        title="About Synergy Engineering"
        subtitle="10+ Years of Engineering Excellence Across India. Precise solutions for the nation's most demanding sectors."
        backgroundImage="/images/windmill.jpg"
        backgroundVideo="/videos/windmill_vedio.mp4"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Our Story Section with Collaged Images and Styled Vertical Timeline */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Overlapping Image Collage */}
          <div className="lg:col-span-6 relative flex justify-center pb-12 lg:pb-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl w-[80%] aspect-square bg-slate-100 border border-slate-200">
              <Image
                alt="High-voltage transformer diagnostic testing"
                className="object-cover"
                src="/images/img_15.webp"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
              />
            </div>
            {/* Overlapping small card image */}
            <div className="absolute bottom-0 right-4 sm:right-10 w-[45%] aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-white z-20 hover:scale-105 transition-transform duration-300 bg-slate-100">
              <Image
                alt="Engineering operations planning"
                className="object-cover"
                src="/images/img_28.webp"
                fill
                sizes="(max-width: 1024px) 45vw, 20vw"
              />
            </div>
          </div>

          {/* Right Side: Text & Stylized Vertical Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
                OUR HISTORY
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2 leading-none">
                From Thane to PAN-India
              </h2>
            </div>
            
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed font-body">
              <ScrollRevealText text="Synergy Engineering was founded on the principles of technical integrity and industrial innovation. Starting as a specialized engineering desk in Thane, we have evolved into a nationwide authority supplying and maintaining electrical test and measurement infrastructure." />
            </p>

            {/* Vertical timeline */}
            <div className="border-l-2 border-slate-100 pl-8 ml-3 space-y-8 relative pt-2">
              {faqsStory.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-white bg-[#D62828] shadow-md transition-transform group-hover:scale-110"></div>
                  
                  <span className="font-headline font-black text-xl text-[#D62828] block leading-none mb-1">
                    {item.year}
                  </span>
                  <h4 className="font-headline font-bold text-base md:text-lg text-primary-container mb-2">
                    {item.title}
                  </h4>
                  <p className="text-on-surface-variant text-xs sm:text-sm font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Mission, Vision, and Goals (Redesigned Cards) */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white border-t-4 border-[#D62828] p-8 sm:p-10 rounded-lg relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full border border-slate-200">
            <span className="absolute right-6 bottom-4 font-headline font-black text-slate-100 text-8xl select-none pointer-events-none group-hover:text-slate-200/40 transition-colors">
              01
            </span>
            <div className="space-y-6 relative z-10">
              <span className="material-symbols-outlined text-[#D62828] text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                rocket_launch
              </span>
              <h3 className="text-2xl font-headline font-black text-primary-container">
                Our Mission
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed font-body">
                To empower industries with world-class electrical testing, diagnostic, and industrial printing solutions — backed by genuine products, responsive service, and application-based technical expertise tailored to the specific needs of utilities, industries, and infrastructure projects.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white border-t-4 border-[#0A1628] p-8 sm:p-10 rounded-lg relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full border border-slate-200">
            <span className="absolute right-6 bottom-4 font-headline font-black text-slate-100 text-8xl select-none pointer-events-none group-hover:text-slate-200/40 transition-colors">
              02
            </span>
            <div className="space-y-6 relative z-10">
              <span className="material-symbols-outlined text-primary-container text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                visibility
              </span>
              <h3 className="text-2xl font-headline font-black text-primary-container">
                Our Vision
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed font-body">
                To be the most trusted engineering partner across India, building long-term relationships with customers, suppliers, employees, and all stakeholders by fostering trust, accountability, and professional growth.
              </p>
            </div>
          </div>

          {/* Goal Card */}
          <div className="bg-white border-t-4 border-[#D62828] p-8 sm:p-10 rounded-lg relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full border border-slate-200">
            <span className="absolute right-6 bottom-4 font-headline font-black text-slate-100 text-8xl select-none pointer-events-none group-hover:text-slate-200/40 transition-colors">
              03
            </span>
            <div className="space-y-6 relative z-10">
              <span className="material-symbols-outlined text-[#D62828] text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                flag
              </span>
              <h3 className="text-2xl font-headline font-black text-primary-container">
                Our Goal
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed font-body">
                To build long-term relationships by delivering reliable electrical solutions, timely support, and consistent service quality that exceed customer expectations and earn lasting trust.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Corporate Values Grid */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-16 text-center">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              OUR FOUNDATION
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
              Core Corporate Values
            </h2>
            <div className="w-16 h-1 bg-[#D62828] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white border border-slate-200 hover:bg-primary-container hover:border-primary-container hover:text-white transition-all duration-500 rounded-lg flex flex-col justify-between h-full relative overflow-hidden hover:shadow-xl"
              >
                {/* Large Background Numeral */}
                <span className="absolute right-6 top-4 font-headline font-black text-slate-100 text-6xl select-none pointer-events-none group-hover:text-white/5 transition-colors">
                  {item.num}
                </span>

                <div className="space-y-6 relative z-10">
                  <span className="material-symbols-outlined text-[#D62828] text-4xl group-hover:text-white transition-colors select-none">
                    {item.icon}
                  </span>
                  <h4 className="text-xl font-headline font-black text-primary-container group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant group-hover:text-slate-300 font-body transition-colors leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Accredited Standards (Certifications) */}
      <section className="py-20 md:py-28 bg-[#0A1628] bg-grid-pattern text-white border-t-4 border-b-4 border-[#D62828] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#D62828] opacity-[0.03] blur-3xl rounded-full z-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
          <div className="mb-16 text-center">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              REGULATORY ACCREDITATION
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-white mt-2">
              Accredited Standards
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-body text-sm mt-4 leading-relaxed">
              We adhere to the highest international quality and safety standards in the electrical diagnostic and testing industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-20 h-20 flex-shrink-0 bg-white/5 p-4 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[#D62828] text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-headline font-black text-white mb-1">ISO 9001:2015</h4>
                <p className="text-slate-400 font-body text-sm">Quality Management System Certified Operations</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-20 h-20 flex-shrink-0 bg-white/5 p-4 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[#D62828] text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  account_balance
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-headline font-black text-white mb-1">NABL Accreditation</h4>
                <p className="text-slate-400 font-body text-sm">Testing &amp; Calibration Compliance (ISO/IEC 17025)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section with Rectangular Portrait Cards */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-16">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase font-headline block">
              THE ARCHITECTS
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-primary-container mt-2">
              Leadership &amp; Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person, idx) => (
              <div key={idx} className="group flex flex-col h-full bg-slate-50 border border-slate-200/60 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Grayscale-to-color portrait image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <Image
                    alt={person.name}
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                    src={person.image}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/* Text details */}
                <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-headline font-black text-lg text-primary-container leading-tight">
                      {person.name}
                    </h4>
                    <span className="inline-block bg-[#D62828]/10 text-[#D62828] font-headline font-extrabold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded mt-1.5">
                      {person.role}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs font-body pt-2 border-t border-slate-200/50 mt-4">
                    {person.dept}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section with Crimson/Slate Mesh Banner */}
      <section className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-[#D62828] to-[#0A1628] relative overflow-hidden border-t-4 border-[#D62828]">
        {/* Mesh Circle overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-white opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-white tracking-tight leading-none">
            Ready to Engineer Your Next Success?
          </h2>
          <p className="text-slate-200 max-w-xl mx-auto font-body text-sm sm:text-base leading-relaxed">
            Connect with our Thane engineering desk today to schedule on-site calibrations, transformer testing, or request equipment procurement plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              className="bg-white text-primary-container font-headline font-bold text-xs uppercase tracking-widest px-10 py-4 rounded hover:bg-slate-100 active:scale-95 transition-all text-center block shadow-lg shadow-black/10"
              href="/contact"
            >
              Start a Project
            </Link>
            <Link
              className="border-2 border-white/20 hover:border-white hover:bg-white/5 text-white font-headline font-bold text-xs uppercase tracking-widest px-10 py-4 rounded active:scale-95 transition-all text-center block"
              href="/contact"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
