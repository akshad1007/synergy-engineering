import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ id, name, brand, desc, image }) {
  // Brand badge color mapping
  const getBrandBadge = (b) => {
    switch (b.toLowerCase()) {
      case 'megger':
        return { text: 'Megger', bg: 'bg-secondary-fixed text-secondary-container' };
      case 'emh':
      case 'mte':
        return { text: 'MTE / EMH', bg: 'bg-tertiary-fixed text-[#004b74]' };
      case 'brother':
        return { text: 'Brother', bg: 'bg-slate-200 text-black' };
      case 'te':
        return { text: 'TE Connectivity', bg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300' };
      case 'greenlee':
        return { text: 'Greenlee', bg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300' };
      case 'kl-arc':
        return { text: 'KL-ARC', bg: 'bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300' };
      default:
        return { text: b.toUpperCase(), bg: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' };
    }
  };

  // Material icon mapping based on product ID
  const getCategoryIcon = (productId) => {
    switch (productId) {
      case '680-adx':
        return 'analytics';
      case 'bite5':
        return 'battery_charging_full';
      case 'mte-filters':
        return 'settings_input_component';
      case 'pt-e850tkw':
        return 'print';
      case 'bm5200':
        return 'electric_bolt';
      case 'mit5252':
        return 'brightness_high';
      case 'mte-reactors':
        return 'bolt';
      case 'pt-e560btvp':
        return 'print';
      default:
        return 'construction';
    }
  };

  const badge = getBrandBadge(brand);
  const icon = getCategoryIcon(id);

  return (
    <div className="bg-surface-container-lowest p-6 rounded-lg group hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-outline-variant/20">
      <div className="flex justify-between items-start mb-6">
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${badge.bg}`}>
          {badge.text}
        </span>
        <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors select-none">
          {icon}
        </span>
      </div>
      
      <div className="aspect-square mb-6 bg-surface-container-low rounded-md overflow-hidden p-4 flex items-center justify-center relative">
        <Image
          alt={name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          src={image}
          width={200}
          height={200}
        />
      </div>

      <h3 className="font-headline font-bold text-primary-container text-lg mb-2">
        {name.replace('Megger ', '').replace('Brother ', '').replace('MTE ', '')}
      </h3>
      <p className="text-on-surface-variant text-sm mb-6 flex-grow">
        {desc}
      </p>

      <Link
        className="w-full py-3 border-2 border-secondary text-secondary font-headline font-bold text-xs uppercase tracking-widest rounded hover:bg-secondary hover:text-white transition-all text-center block"
        href={`/products/${id}`}
      >
        View Details
      </Link>
    </div>
  );
}
