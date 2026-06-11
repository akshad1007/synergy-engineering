import Link from 'next/link';

export default function CareerCard({ id, slug, title, location, type, icon }) {
  return (
    <div className="bg-surface-container-lowest p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 rounded-lg border border-outline-variant/15 h-full">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="bg-surface-container-low text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {type}
          </span>
          <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors select-none">
            {icon}
          </span>
        </div>
        
        <h4 className="font-headline text-2xl font-bold text-primary mb-2">
          {title}
        </h4>
        
        <div className="flex items-center gap-2 text-on-surface-variant mb-8">
          <span className="material-symbols-outlined text-sm select-none">location_on</span>
          <span className="text-sm font-medium">{location}</span>
        </div>
      </div>

      <Link
        className="w-full border border-secondary text-secondary font-headline font-bold py-3 rounded-md hover:bg-secondary hover:text-white transition-all active:scale-95 text-center block"
        href={`/careers/${slug}`}
      >
        Apply Now
      </Link>
    </div>
  );
}
