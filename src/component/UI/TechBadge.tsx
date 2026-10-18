import React from "react";

/** Black, single-colour logos that would vanish on the dark ground */
const MONO_ICON = /(nextjs|react-native|express-js|github).png$/;

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
      className="inline-flex items-center gap-1.5 bg-chip text-ink/85 text-xs font-semibold uppercase tracking-[0.06em] px-2.5 py-1 rounded"
    >
      {src && (
        <img src={src} alt="" className={`h-3.5 w-3.5 object-contain ${MONO_ICON.test(src) ? "dark:invert" : ""}`} />
      )}
      {tech.name}
    </span>
  );
};

export default TechBadge;
