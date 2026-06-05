
export default function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16">
      {tag ? (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-semibold tracking-wider uppercase mb-5">
          {tag}
        </span>
      ) : (
        ""
      )}

      <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}