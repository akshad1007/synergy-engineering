import Link from 'next/link';

export default function ServiceCard({ icon, title, description, href = '/services' }) {
  return (
    <div className="bg-surface-container-lowest p-10 group hover:bg-surface-container-low transition-all duration-300 flex flex-col items-start border-l-4 border-transparent hover:border-secondary shadow-sm">
      <span 
        className="material-symbols-outlined text-[64px] text-secondary mb-8 transition-transform group-hover:scale-110 select-none"
        data-icon={icon}
      >
        {icon}
      </span>
      <h3 className="text-2xl font-bold text-primary-container mb-4 font-headline">
        {title}
      </h3>
      <p className="text-on-surface-variant mb-8 leading-relaxed text-sm md:text-base">
        {description}
      </p>
      <Link 
        className="text-secondary font-bold flex items-center group/link text-sm uppercase tracking-wider hover:opacity-85"
        href={href}
      >
        Learn More <span className="ml-2 transition-transform group-hover/link:translate-x-2">→</span>
      </Link>
    </div>
  );
}
