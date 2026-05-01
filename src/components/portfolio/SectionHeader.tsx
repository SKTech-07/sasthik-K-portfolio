import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) => (
  <div className={`text-center max-w-2xl mx-auto mb-14 ${className}`}>
    <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">
      {eyebrow}
    </p>
    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);
