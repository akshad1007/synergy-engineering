export default function AdvantageCard({ icon, title, description }) {
  return (
    <div className="group p-8 bg-surface border border-outline-variant/10 hover:bg-primary-container transition-all duration-300 rounded-md">
      <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:text-white select-none">
        {icon}
      </span>
      <h4 className="text-xl font-extrabold text-primary-container mb-2 group-hover:text-white font-headline transition-colors">
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant group-hover:text-slate-300 transition-colors">
        {description}
      </p>
    </div>
  );
}
