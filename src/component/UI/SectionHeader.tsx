import React from "react";

type SectionHeaderProps = {
  label: string;
  /** Small text on the right of a left-aligned title, e.g. a count */
  index?: string;
  /** One line under the title */
  sub?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
};

/**
 * A section title in the site's voice: bold, widely tracked, with a short mustard
 * bar under it. Centered titles open full-width sections; left ones sit beside content.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  index,
  sub,
  align = "left",
  className = "",
  as: Tag = "h2",
}) => {
  const centered = align === "center";
  return (
    <div className={`mb-8 sm:mb-10 ${centered ? "text-center" : "flex items-end justify-between gap-4"} ${className}`}>
      <div>
        <Tag className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] leading-tight text-ink">
          {label}
        </Tag>
        <span aria-hidden className={`block mt-3 h-1 w-16 rounded-full bg-accent ${centered ? "mx-auto" : ""}`} />
        {sub && <p className={`mt-4 text-sm sm:text-base text-muted ${centered ? "mx-auto max-w-xl" : "max-w-xl"}`}>{sub}</p>}
      </div>
      {index && !centered && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted whitespace-nowrap">{index}</p>
      )}
    </div>
  );
};

export default SectionHeader;
