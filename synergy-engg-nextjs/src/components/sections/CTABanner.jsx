import Link from 'next/link';

export default function CTABanner({
  title = 'Ready to Engineer Your Next Success?',
  subtitle = '',
  primaryText = 'Start a Project',
  primaryHref = '/contact',
  secondaryText = 'Contact Sales',
  secondaryHref = '/contact',
}) {
  return (
    <section className="py-20 px-8 md:px-16 bg-primary-container relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-on-primary-container text-lg mb-8 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <Link
            className="bg-secondary text-on-secondary px-10 py-4 rounded-md font-extrabold text-lg uppercase tracking-wider hover:brightness-110 shadow-lg active:scale-95 transition-all text-center"
            href={primaryHref}
          >
            {primaryText}
          </Link>
          <Link
            className="border-2 border-secondary border-opacity-30 text-white px-10 py-4 rounded-md font-extrabold text-lg uppercase tracking-wider hover:bg-secondary hover:border-secondary transition-all active:scale-95 text-center"
            href={secondaryHref}
          >
            {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
