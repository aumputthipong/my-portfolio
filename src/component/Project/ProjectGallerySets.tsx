"use client";

import { useState } from "react";
import ProjectGallery from "@/component/Project/ProjectGallery";
import { LightboxItem } from "@/component/UI/Lightbox";

export interface GallerySet {
  label: string;
  layout: "web" | "mobile";
  items: LightboxItem[];
}

/**
 * Projects that ship on more than one surface (e.g. a web back office plus a
 * LINE mini app) keep each set in its own gallery, so desktop and phone
 * screenshots are never squeezed into the same stage shape.
 */
export default function ProjectGallerySets({ sets }: { sets: GallerySet[] }) {
  const [active, setActive] = useState(0);
  const current = sets[active];

  if (sets.length === 1) return <ProjectGallery items={current.items} layout={current.layout} />;

  return (
    <div className="h-full flex flex-col gap-3">
      <div role="tablist" aria-label="Screenshot sets" className="flex flex-shrink-0 gap-1 self-start rounded-full bg-surface border border-line p-1">
        {sets.map((set, i) => {
          const selected = i === active;
          return (
            <button
              key={set.label}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                selected ? "bg-canvas text-ink shadow-sm" : "text-muted hover:text-ink"
              }`}
            >
              {set.label}
              <span className={`ml-1.5 tabular-nums font-medium ${selected ? "text-muted" : "text-muted/70"}`}>{set.items.length}</span>
            </button>
          );
        })}
      </div>

      {/* Keyed so each set starts from its first screenshot */}
      <ProjectGallery key={current.label} items={current.items} layout={current.layout} />
    </div>
  );
}
