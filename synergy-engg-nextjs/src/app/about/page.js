import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';

export default function About() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About Us' }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection
        title="About Synergy Engineering"
        subtitle="10+ Years of Engineering Excellence Across India. Precise solutions for the nation's most demanding sectors."
        backgroundImage="/images/img_14.webp"
        breadcrumbs={breadcrumbs}
      />

      {/* Our Story Section */}
      <section className="py-24 px-4 sm:px-8 md:px-16 bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="relative group">
            <div className="absolute -inset-4 bg-surface-container-low rounded-xl z-0 transition-all group-hover:bg-surface-container"></div>
            <div className="relative z-10 w-full aspect-square relative rounded overflow-hidden shadow-2xl">
              <Image
                className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
                alt="industrial engineer working on complex machinery"
                src="/images/img_15.webp"
                fill
              />
            </div>
          </div>
          <div>
            <span className="text-secondary font-bold tracking-widest text-sm mb-4 block uppercase font-headline">
              Our Story
            </span>
            <h2 className="text-4xl font-extrabold text-primary-container mb-6 leading-tight font-headline">
              From Thane to PAN-India
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8 text-lg font-body">
              Synergy Engineering was founded on the principles of technical integrity and industrial innovation. Starting as a specialized consultancy in Thane, we have evolved into a nationwide powerhouse providing end-to-end engineering solutions. Our journey is defined by a relentless pursuit of precision and an unwavering commitment to client success.
            </p>
            {/* Timeline */}
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary"></div>
                  <div className="w-px h-full bg-outline-variant opacity-30 mt-2"></div>
                </div>
                <div>
                  <span className="font-black text-secondary text-lg font-headline">2016</span>
                  <p className="text-on-surface font-semibold font-body">Inception in Thane</p>
                  <p className="text-sm text-on-surface-variant font-body">Founded with a vision for specialized industrial maintenance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary-container"></div>
                  <div className="w-px h-full bg-outline-variant opacity-30 mt-2"></div>
                </div>
                <div>
                  <span className="font-black text-primary-container text-lg font-headline">2020</span>
                  <p className="text-on-surface font-semibold font-body">Service Expansion</p>
                  <p className="text-sm text-on-surface-variant font-body">Reached over 10 states with critical infrastructure projects.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary"></div>
                </div>
                <div>
                  <span className="font-black text-secondary text-lg font-headline">2024</span>
                  <p className="text-on-surface font-semibold font-body">Pan-India Authority</p>
                  <p className="text-sm text-on-surface-variant font-body">Leading national engineering partner for Tier-1 industrial giants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Mission Card */}
          <div className="bg-surface-container-lowest p-12 border-t-8 border-secondary shadow-sm hover:shadow-md transition-shadow rounded-md">
            <span className="material-symbols-outlined text-secondary text-5xl mb-6 select-none">
              rocket_launch
            </span>
            <h3 className="text-3xl font-extrabold text-primary-container mb-4 font-headline">
              Our Mission
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed font-body">
              To empower Indian industries through uncompromising engineering quality, innovative problem-solving, and a dedication to operational safety that sets new global benchmarks.
            </p>
          </div>
          {/* Vision Card */}
          <div className="bg-surface-container-lowest p-12 border-t-8 border-primary-container shadow-sm hover:shadow-md transition-shadow rounded-md">
            <span className="material-symbols-outlined text-primary-container text-5xl mb-6 select-none">
              visibility
            </span>
            <h3 className="text-3xl font-extrabold text-primary-container mb-4 font-headline">
              Our Vision
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed font-body">
              To be the most trusted name in engineering excellence across Asia, bridging the gap between traditional reliability and future-ready technological integration.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-8 md:px-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16 text-center">
            <span className="text-secondary font-bold tracking-widest text-sm mb-4 block uppercase font-headline">
              Our Foundation
            </span>
            <h2 className="text-4xl font-extrabold text-primary-container font-headline">
              Core Corporate Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Precision */}
            <div className="group p-8 bg-surface border border-outline-variant/10 hover:bg-primary-container transition-all duration-300 rounded-md">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:text-white select-none">
                target
              </span>
              <h4 className="text-xl font-extrabold text-primary-container mb-2 group-hover:text-white font-headline transition-colors">
                Precision
              </h4>
              <p className="text-sm text-on-surface-variant group-hover:text-slate-300 font-body transition-colors">
                Meticulous attention to detail in every calculation and installation.
              </p>
            </div>
            {/* Reliability */}
            <div className="group p-8 bg-surface border border-outline-variant/10 hover:bg-primary-container transition-all duration-300 rounded-md">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:text-white select-none">
                verified_user
              </span>
              <h4 className="text-xl font-extrabold text-primary-container mb-2 group-hover:text-white font-headline transition-colors">
                Reliability
              </h4>
              <p className="text-sm text-on-surface-variant group-hover:text-slate-300 font-body transition-colors">
                Consistently delivering results that stand the test of time and scale.
              </p>
            </div>
            {/* Customer First */}
            <div className="group p-8 bg-surface border border-outline-variant/10 hover:bg-primary-container transition-all duration-300 rounded-md">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:text-white select-none">
                handshake
              </span>
              <h4 className="text-xl font-extrabold text-primary-container mb-2 group-hover:text-white font-headline transition-colors">
                Customer First
              </h4>
              <p className="text-sm text-on-surface-variant group-hover:text-slate-300 font-body transition-colors">
                Aligning our engineering success with our clients&apos; growth goals.
              </p>
            </div>
            {/* Innovation */}
            <div className="group p-8 bg-surface border border-outline-variant/10 hover:bg-primary-container transition-all duration-300 rounded-md">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:text-white select-none">
                lightbulb
              </span>
              <h4 className="text-xl font-extrabold text-primary-container mb-2 group-hover:text-white font-headline transition-colors">
                Innovation
              </h4>
              <p className="text-sm text-on-surface-variant group-hover:text-slate-300 font-body transition-colors">
                Adopting modern methodologies for complex industrial challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-4 sm:px-8 md:px-16 bg-primary-container relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-secondary opacity-5 blur-3xl rounded-full z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4 font-headline">
              Accredited Standards
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-body">
              We adhere to the highest international quality and safety standards in the engineering industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-surface-container-lowest p-10 flex items-center gap-8 rounded-lg shadow-xl border-l-8 border-secondary">
              <div className="w-24 h-24 flex-shrink-0 bg-surface-container p-4 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-primary-container mb-1 font-headline">ISO 9001:2015</h4>
                <p className="text-on-surface-variant font-medium font-body">Quality Management System Certified</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 flex items-center gap-8 rounded-lg shadow-xl border-l-8 border-secondary">
              <div className="w-24 h-24 flex-shrink-0 bg-surface-container p-4 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  account_balance
                </span>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-primary-container mb-1 font-headline">NABL Accreditation</h4>
                <p className="text-on-surface-variant font-medium font-body">National Accreditation Board for Testing and Calibration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-8 md:px-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
            <span className="text-secondary font-bold tracking-widest text-sm mb-4 block uppercase font-headline">
              The Architects
            </span>
            <h2 className="text-4xl font-extrabold text-primary-container font-headline">
              Leadership &amp; Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Rajesh Khanna */}
            <div className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-secondary rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 z-0"></div>
                <div className="relative z-10 w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Rajesh Khanna"
                    src="/images/img_16.webp"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
              <h4 className="text-xl font-extrabold text-primary-container font-headline">Rajesh Khanna</h4>
              <p className="text-secondary font-bold text-sm tracking-wide uppercase font-headline">Managing Director</p>
              <p className="text-xs text-on-surface-variant mt-2 font-body">Executive Leadership</p>
            </div>
            {/* Ananya Sharma */}
            <div className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-secondary rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 z-0"></div>
                <div className="relative z-10 w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Ananya Sharma"
                    src="/images/img_17.webp"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
              <h4 className="text-xl font-extrabold text-primary-container font-headline">Ananya Sharma</h4>
              <p className="text-secondary font-bold text-sm tracking-wide uppercase font-headline">Operations Head</p>
              <p className="text-xs text-on-surface-variant mt-2 font-body">Strategic Planning</p>
            </div>
            {/* Vikram Singh */}
            <div className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-secondary rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 z-0"></div>
                <div className="relative z-10 w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Vikram Singh"
                    src="/images/img_18.webp"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
              <h4 className="text-xl font-extrabold text-primary-container font-headline">Vikram Singh</h4>
              <p className="text-secondary font-bold text-sm tracking-wide uppercase font-headline">Technical Director</p>
              <p className="text-xs text-on-surface-variant mt-2 font-body">Engineering Design</p>
            </div>
            {/* Priya Mehta */}
            <div className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-secondary rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 z-0"></div>
                <div className="relative z-10 w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Priya Mehta"
                    src="/images/img_19.webp"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
              <h4 className="text-xl font-extrabold text-primary-container font-headline">Priya Mehta</h4>
              <p className="text-secondary font-bold text-sm tracking-wide uppercase font-headline">Quality Assurance</p>
              <p className="text-xs text-on-surface-variant mt-2 font-body">Standards Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 bg-primary-container relative">
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight font-headline">
            Ready to Engineer Your Next Success?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              className="bg-secondary text-on-secondary px-10 py-4 rounded-md font-extrabold text-lg uppercase tracking-wider hover:brightness-110 shadow-lg active:scale-95 transition-all text-center font-headline"
              href="/contact"
            >
              Start a Project
            </Link>
            <Link
              className="border-2 border-secondary border-opacity-30 text-white px-10 py-4 rounded-md font-extrabold text-lg uppercase tracking-wider hover:bg-secondary hover:border-secondary transition-all active:scale-95 text-center font-headline"
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
