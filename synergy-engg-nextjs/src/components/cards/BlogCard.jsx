import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ slug, title, category, date, image, excerpt }) {
  return (
    <article className="bg-surface-container-lowest overflow-hidden group flex flex-col h-full">
      <div className="aspect-video overflow-hidden relative rounded-md">
        <Image
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          width={400}
          height={250}
        />
        <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
          {category}
        </div>
      </div>
      
      <div className="py-8 flex flex-col flex-grow">
        <time className="text-on-primary-container text-xs font-semibold uppercase tracking-widest block mb-4">
          {date}
        </time>
        <h3 className="font-headline font-bold text-2xl text-on-primary-fixed leading-tight mb-4 group-hover:text-secondary transition-colors">
          <Link href={`/blog/${slug}`} className="hover:text-secondary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
          {excerpt}
        </p>
        <Link
          className="inline-flex items-center text-secondary font-headline font-bold text-sm hover:translate-x-2 transition-transform self-start"
          href={`/blog/${slug}`}
        >
          Read More <span className="material-symbols-outlined text-sm ml-1 select-none">arrow_forward</span>
        </Link>
      </div>
    </article>
  );
}
