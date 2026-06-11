import Link from 'next/link';

export default function IndustryCard({ id, title, icon, description, primaryEquipment }) {
  return (
    <div className="group flex flex-col md:flex-row bg-surface-container-lowest overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-secondary shadow-sm rounded-r-lg">
      {/* Left Column: Description */}
      <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <span 
            className="material-symbols-outlined text-4xl text-secondary select-none"
            data-weight="fill"
          >
            {icon}
          </span>
          <h3 className="text-2xl md:text-[28px] font-headline font-bold text-primary leading-none">
            {title}
          </h3>
        </div>
        <p className="text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base">
          {description}
        </p>
        <Link 
          className="inline-flex items-center text-secondary font-bold uppercase tracking-widest text-xs group-hover:gap-3 transition-all hover:opacity-80"
          href="/industries"
        >
          View Solutions <span className="material-symbols-outlined text-sm ml-1 select-none">arrow_forward</span>
        </Link>
      </div>

      {/* Right Column: Key Equipment */}
      <div className="md:w-1/2 p-8 md:p-10 bg-surface-container-low flex flex-col justify-center border-t md:border-t-0 md:border-l border-outline-variant/10">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
          Primary Equipment
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {primaryEquipment}
        </span>
      </div>
    </div>
  );
}
