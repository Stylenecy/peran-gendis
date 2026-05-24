interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  accent?: "purple" | "teal" | "gold";
}

export default function PageHero({ tag, title, subtitle, accent = "teal" }: PageHeroProps) {
  const accentColor = {
    purple: "text-pg-purple-light",
    teal: "text-pg-teal-light",
    gold: "text-pg-gold-light",
  }[accent];

  return (
    <section className="bg-pg-dark py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {tag && (
          <p className={`text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${accentColor}`}>
            {tag}
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-pg-cream leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-pg-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
