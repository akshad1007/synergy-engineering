import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CareerApplicationForm from '@/components/forms/CareerApplicationForm';
import { careers } from '@/data/careers';

export async function generateStaticParams() {
  return careers.map((role) => ({
    slug: role.slug,
  }));
}

export async function generateMetadata({ params }) {
  const role = careers.find((c) => c.slug === params.slug);
  if (!role) return {};

  return {
    title: `${role.title} | Careers | Synergy Engineering`,
    description: `Apply for the ${role.title} position at Synergy Engineering. Located in ${role.location}. Department: ${role.department}.`,
  };
}

export default function CareerDetail({ params }) {
  const role = careers.find((c) => c.slug === params.slug);

  if (!role) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full relative bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary-container py-20 px-8 overflow-hidden">
        {/* Ambient Gradient Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(135deg,#000000_0%,#101c2e_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <nav className="flex items-center space-x-2 text-on-primary-container text-sm mb-6 font-body">
            <Link className="hover:text-white transition-colors" href="/careers">
              Careers
            </Link>
            <span className="material-symbols-outlined text-xs select-none">chevron_right</span>
            <span className="text-white">{role.title}</span>
          </nav>
          <nav className="flex mb-6 text-sm font-medium tracking-wide text-slate-300 font-body">
            <Link className="hover:text-white cursor-pointer" href="/">
              Home
            </Link>
            <span className="mx-2 text-secondary">&gt;</span>
            <Link className="hover:text-white cursor-pointer" href="/careers">
              Careers
            </Link>
            <span className="mx-2 text-secondary">&gt;</span>
            <span className="text-white">{role.title}</span>
          </nav>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight font-headline">
            {role.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-on-primary-container font-body">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary select-none">location_on</span>
              <span className="font-medium text-white">{role.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary select-none">work</span>
              <span className="font-medium text-white">{role.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary select-none">bolt</span>
              <span className="font-medium text-white">{role.department}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Job Description */}
            <section>
              <h2 className="text-2xl font-extrabold text-primary-container mb-6 flex items-center gap-4 font-headline">
                <span className="w-12 h-[2px] bg-secondary"></span>
                Job Description
              </h2>
              <div className="text-on-surface-variant leading-relaxed space-y-4 font-body">
                {role.description.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </section>

            {/* Key Responsibilities */}
            <section className="bg-surface-container p-8 rounded-xl border border-slate-200/50">
              <h2 className="text-2xl font-extrabold text-primary-container mb-8 font-headline">
                Key Responsibilities
              </h2>
              <ul className="grid grid-cols-1 gap-6 font-body">
                {role.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1 select-none">
                      check_circle
                    </span>
                    <span className="text-on-surface-variant leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-extrabold text-primary-container mb-8 font-headline">
                Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-secondary bg-surface-container-low">
                    <h4 className="font-bold text-primary-container mb-1">Education</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {role.requirements.education}
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-secondary bg-surface-container-low">
                    <h4 className="font-bold text-primary-container mb-1">Experience</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {role.requirements.experience}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-secondary bg-surface-container-low">
                    <h4 className="font-bold text-primary-container mb-1">Technical Skills</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {role.requirements.skills}
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-secondary bg-surface-container-low">
                    <h4 className="font-bold text-primary-container mb-1">Communication</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {role.requirements.communication}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Join Us */}
            <section className="relative overflow-hidden rounded-2xl bg-primary-container p-10 text-white shadow-xl">
              <div className="absolute -right-20 -bottom-20 opacity-5 text-white pointer-events-none select-none">
                <span className="material-symbols-outlined text-[20rem]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
              </div>
              <h2 className="text-3xl font-extrabold mb-6 relative z-10 font-headline">
                Why Join Synergy Engineering?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 font-body">
                <div>
                  <h4 className="text-secondary font-bold mb-2 font-headline">Industrial Innovation</h4>
                  <p className="text-on-primary-container text-sm leading-relaxed">
                    Work with the latest smart manufacturing tech and contribute to patents in the precision engineering space.
                  </p>
                </div>
                <div>
                  <h4 className="text-secondary font-bold mb-2 font-headline">Growth Path</h4>
                  <p className="text-on-primary-container text-sm leading-relaxed">
                    Clear trajectory from Application Engineer to Senior Architect and Lead Technical Strategist.
                  </p>
                </div>
                <div>
                  <h4 className="text-secondary font-bold mb-2 font-headline">Authority &amp; Impact</h4>
                  <p className="text-on-primary-container text-sm leading-relaxed">
                    Lead high-stakes projects for Fortune 500 industrial giants across the APAC region.
                  </p>
                </div>
                <div>
                  <h4 className="text-secondary font-bold mb-2 font-headline">Premium Culture</h4>
                  <p className="text-on-primary-container text-sm leading-relaxed">
                    A professional, high-standard environment that values architectural precision and editorial quality.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar Form */}
          <aside className="lg:col-span-4">
            <div className="sticky top-[100px]">
              <CareerApplicationForm />
              
              {/* Quick Contacts */}
              <div className="mt-8 p-6 bg-surface-container-low rounded-xl flex items-center justify-between border border-slate-200/50 font-body">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary select-none">help</span>
                  <span className="text-sm font-bold text-primary-container">Questions?</span>
                </div>
                <a className="text-xs font-bold text-secondary hover:underline transition-all" href="mailto:careers@synergy-engg.com">
                  careers@synergy-engg.com
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
