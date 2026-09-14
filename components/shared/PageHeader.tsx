interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function PageHeader({ eyebrow, title, subtitle, centered = true }: PageHeaderProps) {
  return (
    <div className={`pt-28 md:pt-36 pb-12 md:pb-16 ${centered ? "text-center" : ""}`}>
      <div className="container-default">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-tight text-text-primary max-w-3xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 md:mt-6 text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
