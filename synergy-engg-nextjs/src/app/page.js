import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import BrandPartners from '@/components/sections/BrandPartners';
import StatCounter from '@/components/sections/StatCounter';
import CTABanner from '@/components/sections/CTABanner';
import AdvantageCard from '@/components/cards/AdvantageCard';
import { blogs } from '@/data/blogs';
import { services } from '@/data/services';

export default function Home() {
  // Get first 3 blogs for the homepage
  const featuredBlogs = blogs.slice(0, 3);

  const heroCta = [
    { text: 'Explore Products', href: '/products', style: 'primary' },
    { text: 'Request a Quote', href: '/quote', style: 'secondary' }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        title="Precision. Performance. Reliability."
        backgroundImage="/images/img_1.webp"
        height="h-screen"
        ctaButtons={heroCta}
        showTicker={true}
      />

      {/* Brand Partners */}
      <BrandPartners />

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-surface-container-low" id="about">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-[55%]">
            <span className="text-secondary font-bold tracking-widest text-sm mb-4 block font-headline uppercase">
              WHO WE ARE
            </span>
            <h2 className="font-headline font-extrabold text-3xl md:text-5xl text-primary-container mb-8 leading-tight">
              Engineering Excellence Since Inception
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-8 leading-relaxed font-body">
              Synergy Engineering is a premier distributor and service provider for high-end electrical test and measurement equipment. We bridge the gap between global technology leaders and local industrial requirements with unparalleled technical expertise.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="font-semibold text-primary-container font-body">
                  Authorized distributor for world-leading brands.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="font-semibold text-primary-container font-body">
                  Comprehensive NABL accredited calibration services.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="font-semibold text-primary-container font-body">
                  Expert technical support and onsite training.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[45%] relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary z-0"></div>
            <div className="relative z-10 overflow-hidden shadow-2xl rounded-md aspect-video md:aspect-auto">
              <Image
                alt="professional electrical engineer"
                className="w-full h-auto object-cover"
                src="/images/img_28.webp"
                width={500}
                height={350}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer (Services Overview) */}
      <section className="py-16 md:py-24 bg-dark-bg" id="services">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-white mb-4">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Direct Cards matching original index.html */}
            <Link
              className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-secondary group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(185,12,23,0.3)] transition-all duration-300 block"
              href="/services#electrical-testing"
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="bolt">
                bolt
              </span>
              <h3 className="font-headline font-bold text-xl text-primary-container mb-4">
                Electrical Testing
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                Comprehensive testing solutions for transformers, motors, and high-voltage switchgear using industry-standard equipment.
              </p>
            </Link>

            <Link
              className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-secondary group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(185,12,23,0.3)] transition-all duration-300 block"
              href="/services#equipment-supply"
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="settings_input_component">
                settings_input_component
              </span>
              <h3 className="font-headline font-bold text-xl text-primary-container mb-4">
                Equipment Supply
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                Direct access to authentic products from Megger, MTE AG, and EMH with manufacturer-backed warranties.
              </p>
            </Link>

            <Link
              className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-secondary group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(185,12,23,0.3)] transition-all duration-300 block"
              href="/services#calibration"
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="precision_manufacturing">
                precision_manufacturing
              </span>
              <h3 className="font-headline font-bold text-xl text-primary-container mb-4">
                Calibration Services
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                NABL accredited calibration laboratory ensuring your instruments maintain peak precision and compliance.
              </p>
            </Link>

            <Link
              className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-secondary group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(185,12,23,0.3)] transition-all duration-300 block"
              href="/services#onsite-maintenance"
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="construction">
                construction
              </span>
              <h3 className="font-headline font-bold text-xl text-primary-container mb-4">
                Onsite Maintenance
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                Preventive maintenance and troubleshooting services conducted by certified factory-trained engineers.
              </p>
            </Link>

            <Link
              className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-secondary group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(185,12,23,0.3)] transition-all duration-300 block"
              href="/services#training"
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="school">
                school
              </span>
              <h3 className="font-headline font-bold text-xl text-primary-container mb-4">
                Technical Training
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                Specialized training programs on equipment operation and interpretation of complex diagnostic results.
              </p>
            </Link>

            <Link
              className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-secondary group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(185,12,23,0.3)] transition-all duration-300 block"
              href="/services#integration"
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="monitoring">
                monitoring
              </span>
              <h3 className="font-headline font-bold text-xl text-primary-container mb-4">
                System Integration
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                Custom engineering solutions for integrating measurement systems into existing industrial workflows.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <StatCounter />

      {/* Our Products Collections */}
      <section className="py-16 md:py-24" id="products">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary-container">
              Our Products
            </h2>
            <div className="w-16 h-1 bg-secondary mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Megger Collection */}
            <div className="relative h-[350px] md:h-[450px] overflow-hidden group rounded-lg">
              <Image
                alt="Megger equipment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                src="/images/img_29.webp"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-90 z-10" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full z-20">
                <h3 className="font-headline font-black text-2xl md:text-3xl mb-2">Megger</h3>
                <p className="text-white/80 text-xs md:text-sm mb-6 font-body">
                  Electrical Test Equipment for Power Systems.
                </p>
                <Link
                  className="bg-secondary px-6 py-2 rounded-md font-bold text-[10px] md:text-xs uppercase tracking-widest inline-block font-headline"
                  href="/products?brand=megger"
                >
                  Explore Collection
                </Link>
              </div>
            </div>

            {/* MTE & EMH Collection */}
            <div className="relative h-[350px] md:h-[450px] overflow-hidden group rounded-lg">
              <Image
                alt="Advanced monitoring"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                src="/images/img_5.webp"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-90 z-10" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full z-20">
                <h3 className="font-headline font-black text-2xl md:text-3xl mb-2">MTE AG & EMH</h3>
                <p className="text-white/80 text-xs md:text-sm mb-6 font-body">
                  Precision Meter Testing & Energy Measurement.
                </p>
                <Link
                  className="bg-secondary px-6 py-2 rounded-md font-bold text-[10px] md:text-xs uppercase tracking-widest inline-block font-headline"
                  href="/products?brand=mte-emh"
                >
                  Explore Collection
                </Link>
              </div>
            </div>

            {/* Brother Collection */}
            <div className="relative h-[350px] md:h-[450px] overflow-hidden group rounded-lg sm:col-span-2 lg:col-span-1">
              <Image
                alt="Brother systems"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                src="/images/img_10.webp"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-90 z-10" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full z-20">
                <h3 className="font-headline font-black text-2xl md:text-3xl mb-2">Brother</h3>
                <p className="text-white/80 text-xs md:text-sm mb-6 font-body">
                  Industrial Labeling & Identification Systems.
                </p>
                <Link
                  className="bg-secondary px-6 py-2 rounded-md font-bold text-[10px] md:text-xs uppercase tracking-widest inline-block font-headline"
                  href="/products?brand=brother"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-surface-container" id="industries">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary-container mb-12 md:mb-16">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-outline-variant/30">
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#power-utilities"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="factory">
                factory
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Power Utilities
              </h4>
            </Link>
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#automotive"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="electric_car">
                electric_car
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Automotive
              </h4>
            </Link>
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#oil-gas"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="oil_barrel">
                oil_barrel
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Oil & Gas
              </h4>
            </Link>
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#real-estate"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="apartment">
                apartment
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Real Estate
              </h4>
            </Link>
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#railways"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="directions_railway">
                directions_railway
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Railways
              </h4>
            </Link>
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#healthcare"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="medical_services">
                medical_services
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Healthcare
              </h4>
            </Link>
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#data-centers"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="dns">
                dns
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Data Centers
              </h4>
            </Link>
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#renewables"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="solar_power">
                solar_power
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Renewables
              </h4>
            </Link>
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#aerospace"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="rocket_launch">
                rocket_launch
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Aerospace
              </h4>
            </Link>
            <Link
              className="border-b border-r border-outline-variant/30 py-8 md:py-12 px-4 md:px-6 hover:bg-primary-container group transition-colors duration-300 block"
              href="/industries#water-treatment"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:text-white" data-icon="water_drop">
                water_drop
              </span>
              <h4 className="font-headline font-bold text-[10px] md:text-sm text-primary-container group-hover:text-white uppercase tracking-wider">
                Water Treatment
              </h4>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-white" id="blog">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary-container mb-4">
              Latest Insights
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((post) => (
              <div key={post.slug} className="group cursor-pointer block">
                <div className="overflow-hidden rounded-lg mb-6 relative aspect-video">
                  <Image
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%] group-hover:grayscale-0"
                    src={post.image}
                    fill
                  />
                </div>
                <span className="text-secondary font-bold text-xs uppercase tracking-widest font-headline">
                  {post.category}
                </span>
                <h3 className="font-headline font-bold text-xl text-primary-container mt-2 mb-4">
                  <Link href={`/blog/${post.slug}`} className="hover:text-secondary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 font-body">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 md:py-24 bg-surface-container-low" id="careers">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary-container mb-6">
              Join the Synergy Team
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-8 leading-relaxed font-body">
              We are always looking for passionate engineers and technical experts to join our growing team. Shape the future of electrical testing with us.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-secondary shrink-0" data-icon="work">
                  work
                </span>
                <div>
                  <h4 className="font-bold text-primary-container font-headline">Application Engineer</h4>
                  <p className="text-xs text-slate-500 font-body">Full-time • Thane, MH</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-secondary shrink-0" data-icon="work">
                  work
                </span>
                <div>
                  <h4 className="font-bold text-primary-container font-headline">Service Technician</h4>
                  <p className="text-xs text-slate-500 font-body">Full-time • Thane, MH</p>
                </div>
              </div>
            </div>
            <Link
              className="bg-secondary text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-all text-center block sm:inline-block font-headline uppercase"
              href="/careers"
            >
              View All Openings
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto">
            <Image
              alt="Engineering team"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              src="/images/img_28.webp"
              width={500}
              height={350}
            />
          </div>
        </div>
      </section>

      {/* The Synergy Advantage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary-container mb-12 md:mb-16">
            The Synergy Advantage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <AdvantageCard
              icon="public"
              title="Global Brands"
              description="Direct partnerships with the world's most trusted engineering manufacturers."
            />
            <AdvantageCard
              icon="verified_user"
              title="Certified Quality"
              description="ISO 9001:2015 certified operations with NABL accredited service laboratory."
            />
            <AdvantageCard
              icon="support_agent"
              title="Expert Support"
              description="Dedicated team of application engineers providing 24/7 technical assistance."
            />
            <AdvantageCard
              icon="local_shipping"
              title="Nationwide Reach"
              description="Strategic logistics network ensuring rapid delivery across the country."
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
