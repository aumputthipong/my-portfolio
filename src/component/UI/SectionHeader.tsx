import React from "react";

type SectionHeaderProps = {
  label: string;
  index?: string;
  className?: string;
  /**
   * `h2` when the label is the section's only heading (About), so the outline
   * runs h1 → h2 → h3. Sections with their own display h2 keep the default `p`.
   */
  as?: "h2" | "p";
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, index, className = "", as: Tag = "p" }) => {
  return (
    <div className={`flex items-center justify-between mb-5 sm:mb-6 ${className}`}>
      {/* meta-mono: the documented eyebrow role in design.md */}
      <Tag className="text-xs font-mono font-medium uppercase tracking-[0.05em] text-muted flex items-center gap-2">
        <span className="w-5 sm:w-6 h-px bg-accent" aria-hidden /> {label}
      </Tag>
      {index && <p className="text-xs font-mono text-muted">{index}</p>}
    </div>
  );
};

export default SectionHeader;
