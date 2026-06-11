export default function StatCounter() {
  const stats = [
    { value: '10+', label: 'Years Excellence' },
    { value: '1000+', label: 'Global Clients' },
    { value: '50+', label: 'Premium Products' },
    { value: '12+', label: 'Industries Served' },
  ];

  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="font-headline font-black text-3xl md:text-5xl text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 font-bold tracking-wider text-[10px] md:text-sm uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
