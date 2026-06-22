import React from "react";

export type TechItem = { name: string; icon?: string };

type TechBadgeProps = {
  tech: TechItem;
  /** Optional override for icon src; defaults to tech.icon as-is */
  iconSrc?: string;
};

const TechBadge: React.FC<TechBadgeProps> = ({ tech, iconSrc }) => {
  const src = iconSrc ?? tech.icon;
  return (
    <span
      className="inline-flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-accent-soft hover:border-accent/40 text-[11px] sm:text-xs font-mono px-2.5 py-1.5 rounded-md transition-all duration-200"
      style={{ color: "#374151" }}
    >
      {src && (
        <img src={src} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
      )}
      {tech.name}
    </span>
  );
};

export default TechBadge;
