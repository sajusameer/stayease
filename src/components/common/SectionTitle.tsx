interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="badge badge-primary badge-lg">
          {badge}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}