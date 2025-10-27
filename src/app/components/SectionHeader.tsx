type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };
  
  export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
  }: SectionHeaderProps) {
    return (
      <div className="mb-8">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
            {eyebrow}
          </div>
        )}
  
        <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h2>
  
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-neutral-400">{subtitle}</p>
        )}
      </div>
    );
  }
  