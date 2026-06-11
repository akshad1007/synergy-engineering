import Link from 'next/link';
import Image from 'next/image';

export default function BrandPartners() {
  const partners = [
    {
      brand: 'megger',
      alt: 'Megger logo',
      logo: '/screenshots/megger_logo.svg',
      width: 200,
      height: 80,
    },
    {
      brand: 'emh',
      alt: 'EMH logo',
      logo: '/screenshots/emh-logo-r2.png',
      width: 200,
      height: 80,
    },
    {
      brand: 'brother',
      alt: 'Brother logo',
      logo: '/screenshots/Brother-Logo.png',
      width: 200,
      height: 80,
    },
    {
      brand: 'te',
      alt: 'TE Connectivity logo',
      logo: '/screenshots/TE_Connectivity_Logo.png',
      width: 200,
      height: 80,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-8 text-center">
        <h2 className="font-headline font-bold text-slate-400 tracking-[0.2em] mb-12 md:mb-16 text-xs md:text-sm uppercase">
          Authorized Partners &amp; Stockists
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner) => (
            <Link
              key={partner.brand}
              href={`/products?brand=${partner.brand}`}
              className="flex justify-center opacity-75 grayscale-[20%] hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <Image
                alt={partner.alt}
                className="h-16 md:h-20 max-w-[200px] w-auto object-contain"
                src={partner.logo}
                width={partner.width}
                height={partner.height}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
