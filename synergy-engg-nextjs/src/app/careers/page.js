import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import CareerCard from '@/components/cards/CareerCard';
import AdvantageCard from '@/components/cards/AdvantageCard';
import { careers } from '@/data/careers';

export const metadata = {
  title: 'Careers | Synergy Engineering',
  description: 'Join Synergy Engineering and build your career in industrial technology, customer support, and engineering excellence.',
};

export default function Careers() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Careers' }
  ];

  const advantages = [
    {
      icon: 'public',
      title: 'PAN-India Reach',
      description: 'Operate across a vast network of industrial hubs, delivering precision engineering at scale from Thane to the corners of India.'
    },
    {
      icon: 'precision_manufacturing',
      title: 'Technical Excellence',
      description: 'Work with cutting-edge diagnostic tools and high-performance machinery that define global industry standards.'
    },
    {
      icon: 'lightbulb',
      title: 'Constant Innovation',
      description: "A workspace that encourages the 'What If'. We iterate, test, and deploy solutions that solve complex industrial challenges."
    },
    {
      icon: 'groups',
      title: 'Mentorship & Growth',
      description: 'Learn from the best in the business. Our leadership team is committed to the professional trajectory of every engineer.'
    }
  ];

  return (
    <div className="flex flex-col w-full relative bg-background">
      {/* Hero Section */}
      <HeroSection
        title="Join the Synergy Team"
        subtitle="Engineered for excellence. Driven by innovation. We are looking for the next generation of industrial architects to build the future of Indian engineering."
        backgroundImage="/images/img_22.webp"
        breadcrumbs={breadcrumbs}
      />

      {/* Why Work With Us Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Bolt Watermark Background */}
        <div className="absolute right-[-10%] top-[10%] opacity-[0.03] text-secondary pointer-events-none select-none z-0 rotate-[-15deg] hidden lg:block">
          <span className="material-symbols-outlined text-[35rem]" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary mb-6">
                Why Work With Us?
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <p className="text-on-surface-variant leading-relaxed font-body">
                At Synergy Engineering, we don't just provide solutions; we engineer progress. Join a culture of technical mastery and collaborative innovation.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((adv, index) => (
                <div 
                  key={index}
                  className={`bg-surface-container-lowest p-8 rounded-lg shadow-sm ${
                    index === 0 ? 'border-l-4 border-secondary' : ''
                  }`}
                >
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {adv.icon}
                  </span>
                  <h3 className="font-headline font-bold text-xl mb-3 text-primary">
                    {adv.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-surface-container">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">
                Open Positions
              </h2>
              <p className="text-on-surface-variant mt-2 font-body">
                Find your place in our growing family of experts.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-1 bg-surface-container-highest text-primary-container font-semibold text-xs rounded-full uppercase tracking-wider font-headline">
                All Roles
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((role) => (
              <CareerCard
                key={role.slug}
                id={role.id}
                slug={role.slug}
                title={role.title}
                location={role.location}
                type={role.type}
                icon={role.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">
              Our Culture
            </h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto font-body">
              More than just work, it's a commitment to professional excellence and mutual respect in an industrial environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[500px] lg:h-[600px]">
            <div className="md:col-span-8 relative rounded-lg overflow-hidden group min-h-[300px]">
              <Image
                alt="Team Meeting"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/img_23.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent flex items-end p-8 md:p-12">
                <h5 className="text-white font-headline text-2xl font-bold">
                  Collaborative Excellence
                </h5>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="h-1/2 relative rounded-lg overflow-hidden group min-h-[200px]">
                <Image
                  alt="Workplace"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="/images/img_24.webp"
                />
              </div>
              <div className="h-1/2 relative rounded-lg overflow-hidden group min-h-[200px]">
                <Image
                  alt="Innovation Session"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="/images/img_25.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[linear-gradient(135deg,#000000_0%,#101c2e_100%)] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="font-headline text-4xl font-extrabold mb-8">
            Ready to Engineer the Future?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg font-body">
            If you don't see a role that fits but think you belong at Synergy Engineering, send us your resume for future considerations.
          </p>
          <Link
            className="bg-secondary text-white px-10 py-4 rounded-md font-headline font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg inline-block text-sm uppercase tracking-wider"
            href="/contact"
          >
            Drop Your Resume
          </Link>
        </div>
        {/* Subtle decorative watermark */}
        <div className="absolute -left-10 -bottom-10 opacity-5 pointer-events-none select-none text-white">
          <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            bolt
          </span>
        </div>
      </section>
    </div>
  );
}
