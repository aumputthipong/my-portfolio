import type { ReactNode } from "react";
import { FaExternalLinkAlt, FaPlay } from "react-icons/fa";

/*
 * The external actions on a project card, shared by the featured cards and
 * the grid so they look and size the same everywhere. Detail pages use their own
 * full-width buttons. All sit above a card's stretched link (relative z-10 on
 * the parent) and grow to 44px on touch screens.
 */

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card";

const demoStyle =
  "inline-flex items-center gap-1.5 h-9 pointer-coarse:h-11 px-3.5 rounded-lg border border-accent bg-accent-soft text-accent hover:bg-accent hover:text-on-accent text-sm font-semibold transition-colors";

/** The one action that hands the visitor a running product, so it gets the accent. */
export function DemoAction({ href, project }: { href: string; project: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project} live demo (opens in a new tab)`}
      className={`${demoStyle} ${focusRing}`}
    >
      <FaExternalLinkAlt className="size-2.5" />
      Live demo
    </a>
  );
}

/** For a project with no live demo: plays its demo video in place, so it takes the demo's accent. */
export function VideoAction({ project, onClick }: { project: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      aria-label={`Watch the ${project} demo video`}
      className={`${demoStyle} ${focusRing}`}
    >
      <FaPlay className="size-2.5" />
      Watch demo
    </button>
  );
}

/** Source or design file, shown as its familiar mark (GitHub, Figma) with a full accessible name. */
export function IconAction({ href, label, title, icon }: { href: string; label: string; title: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={title}
      className={`inline-flex items-center justify-center size-9 pointer-coarse:size-11 rounded-lg border border-line bg-card text-body hover:text-ink hover:border-ink transition-colors ${focusRing}`}
    >
      {icon}
    </a>
  );
}
