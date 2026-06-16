import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  breadcrumbs = [],
  height = 'min-h-[400px]',
  ctaButtons = [],
  showTicker = false,
}) {
  const isFullScreen = height === 'h-screen';

  return (
    <section className={`relative w-full flex items-center overflow-hidden bg-primary-container ${height}`}>
      {/* Background Image / Video */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-[#0A1628] ${isFullScreen ? 'opacity-70' : 'opacity-50'} z-10`} />
        {backgroundVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="none"
            poster={backgroundImage}
            className="w-full h-full object-cover opacity-20 filter brightness-75 select-none pointer-events-none"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <Image
            alt={title}
            className="w-full h-full object-cover grayscale"
            src={backgroundImage}
            fill
            priority
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 pt-[72px] pb-[72px]">
        <div className="max-w-4xl w-full">
          {/* Breadcrumbs */}
          {!isFullScreen && breadcrumbs.length > 0 && (
            <nav className="flex items-center space-x-2 text-slate-300 text-sm mb-6 font-medium tracking-wide">
              {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center">
                  {idx > 0 && <span className="mx-2 text-secondary">&gt;</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white cursor-pointer transition-colors">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.name}</span>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Title & Subtitle */}
          <h1 className="font-headline font-black text-4xl md:text-6xl lg:text-[64px] text-white leading-tight mb-8 tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaButtons.map((btn, idx) => {
                const isSecondary = btn.style === 'secondary';
                return (
                  <Link
                    key={idx}
                    href={btn.href}
                    className={`px-8 md:px-10 py-4 font-headline font-bold text-base md:text-lg rounded-md transition-all active:scale-[0.97] duration-150 text-center inline-block ${
                      isSecondary
                        ? 'border-2 border-white text-white hover:bg-white hover:text-[#0A1628]'
                        : 'bg-secondary text-white hover:bg-opacity-90 shadow-lg'
                    }`}
                  >
                    {btn.text}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Ticker (for Homepage) */}
      {showTicker && (
        <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md py-4 md:py-6 border-t border-white/20 z-30 overflow-hidden">
          <div className="ticker-scroll">
            <div className="flex items-center gap-8 md:gap-16 px-8 shrink-0">
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">Megger</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">MTE AG</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">Brother</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">TE Connectivity</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">Greenlee</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">KL-ARC</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">ISO 9001:2015</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">NABL Accredited</span>
            </div>
            <div className="flex items-center gap-8 md:gap-16 px-8 shrink-0" aria-hidden="true">
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">Megger</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">MTE AG</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">Brother</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">TE Connectivity</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">Greenlee</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">KL-ARC</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">ISO 9001:2015</span>
              <span className="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">NABL Accredited</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
