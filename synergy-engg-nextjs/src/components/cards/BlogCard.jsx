import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ slug, title, category, date, image, excerpt }) {
  const getCategoryBadge = (cat) => {
    switch (cat.toLowerCase()) {
      case 'electrical testing':
        return 'bg-sky-100 text-sky-800 border border-sky-300/30 dark:bg-sky-950/40 dark:text-sky-300';
      case 'case study':
      case 'case studies':
        return 'bg-rose-100 text-rose-800 border border-rose-300/30 dark:bg-rose-950/40 dark:text-rose-300';
      case 'industry trends':
        return 'bg-emerald-100 text-emerald-800 border border-emerald-300/30 dark:bg-emerald-950/40 dark:text-emerald-300';
      default:
        return 'bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200';
    }
  };

  return (
    <article className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-805 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full group">
      <div className="aspect-video overflow-hidden relative z-10">
        <Image
          alt={title}
          className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.03]"
          src={image}
          width={400}
          height={225}
        />
        <div className={`absolute top-4 left-4 text-[9px] font-headline font-black px-2.5 py-1 uppercase tracking-widest rounded shadow-sm z-20 ${getCategoryBadge(category)}`}>
          {category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <time className="text-slate-400 dark:text-slate-500 text-[10px] font-headline font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3.5">
          <span className="material-symbols-outlined text-[13px] select-none text-[#D62828]" style={{ fontVariationSettings: "'FILL' 1" }}>
            calendar_today
          </span>
          {date}
        </time>
        <h3 className="font-headline font-black text-lg text-primary-container leading-snug mb-3 group-hover:text-[#D62828] transition-colors line-clamp-2">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {excerpt}
        </p>
        <Link
          className="inline-flex items-center text-[#D62828] hover:text-[#de2e2c] font-headline font-bold text-xs uppercase tracking-widest gap-1 group/btn w-fit active:scale-95 transition-transform"
          href={`/blog/${slug}`}
        >
          Read Insight 
          <span className="material-symbols-outlined text-sm select-none transition-transform group-hover/btn:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  );
}
