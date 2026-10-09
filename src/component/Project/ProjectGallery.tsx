"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand, FaPlay } from "react-icons/fa";
import Lightbox, { LightboxItem, isMobileItem, youtubeThumb } from "@/component/UI/Lightbox";

type Layout = "web" | "mobile";

interface ProjectGalleryProps {
  items: LightboxItem[];
  layout: Layout;
}

const thumbSrc = (item: LightboxItem) => (item.type === "video" ? youtubeThumb(item.id) : item.src);

/**
 * One screenshot at a time on a soft "mat", sized to fit the viewport height so
 * the stage and its thumbnail rail are both visible on arrival. Mobile projects
 * show the neighbouring screens peeking in at the sides. Items can override the
 * layout one by one, so a web project can carry its phone screens (e.g. a LINE
 * mini app) in the same rail.
 */
export default function ProjectGallery({ items, layout }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [railFade, setRailFade] = useState({ left: false, right: false });
  const railRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const total = items.length;
  const current = items[index];
  const isMobile = layout === "mobile";
  const currentMobile = isMobileItem(current, layout);
  const hasMobile = items.some((item) => isMobileItem(item, layout));

  const go = (i: number) => {
    setIndex(Math.max(0, Math.min(total - 1, i)));
    setPlaying(false);
  };

  // Centre the active thumbnail inside the rail without scrolling the page
  useEffect(() => {
    const rail = railRef.current;
    const thumb = thumbRefs.current[index];
    if (!rail || !thumb) return;
    rail.scrollTo({
      left: thumb.offsetLeft - (rail.clientWidth - thumb.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [index]);

  // Fade only the rail edges that have more thumbnails beyond them
  const updateRailFade = () => {
    const rail = railRef.current;
    if (!rail) return;
    const left = rail.scrollLeft > 1;
    const right = rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 1;
    setRailFade((f) => (f.left === left && f.right === right ? f : { left, right }));
  };

  useEffect(() => {
    updateRailFade();
    window.addEventListener("resize", updateRailFade);
    return () => window.removeEventListener("resize", updateRailFade);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
  };

  // On lg the stage has a viewport-based minimum but grows (flex-1) to match
  // the info panel beside it, so the two columns always end on the same line.
  // Below lg the stage takes the shape of the current item; on lg it keeps one
  // size, tall enough for phone screens whenever the gallery has any.
  const stageSize = `${currentMobile ? "h-[26rem] sm:h-[30rem]" : "aspect-video"} lg:h-auto lg:aspect-auto lg:flex-1 ${
    hasMobile ? "lg:min-h-[clamp(20rem,calc(100dvh-15rem),36rem)]" : "lg:min-h-[clamp(16rem,calc(100dvh-15rem),36rem)]"
  }`;

  return (
    <div className="h-full flex flex-col gap-3" onKeyDown={onKeyDown}>
      {/* Stage */}
      <div className={`group relative overflow-hidden rounded-2xl bg-surface border border-line ${stageSize}`}>
        {currentMobile ? (
          <MobileStage items={items} layout={layout} index={index} onSelect={go} onOpen={() => setLightboxIndex(index)} />
        ) : current.type === "video" && playing ? (
          <iframe
            key={current.id}
            src={`https://www.youtube.com/embed/${current.id}?autoplay=1&rel=0&vq=hd1080`}
            title={current.name}
            className="absolute inset-0 w-full h-full bg-black"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => (current.type === "video" ? setPlaying(true) : setLightboxIndex(index))}
            aria-label={current.type === "video" ? `Play video: ${current.name}` : `Enlarge screenshot ${index + 1}`}
            className={`absolute inset-0 flex items-center justify-center p-3 sm:p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent ${
              current.type === "video" ? "cursor-pointer" : "cursor-zoom-in"
            }`}
          >
            <img
              key={thumbSrc(current)}
              src={current.type === "video" ? youtubeThumb(current.id, "maxresdefault") : current.src}
              onError={(e) => {
                // Not every upload has a max-res thumbnail
                if (current.type === "video") e.currentTarget.src = youtubeThumb(current.id, "hqdefault");
              }}
              alt=""
              className="stage-in max-h-full max-w-full object-contain rounded-lg shadow-[0_1px_2px_rgba(15,23,42,0.06),0_8px_24px_-12px_rgba(15,23,42,0.18)] dark:brightness-90"
            />
            {current.type === "video" && (
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-gray-900 shadow-lg transition-transform group-hover:scale-105">
                  <FaPlay className="ml-1 text-lg" />
                </span>
                <span className="rounded-full bg-black/65 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm font-semibold text-white">
                  {current.name}
                </span>
              </span>
            )}
          </button>
        )}

        {/* Prev / next */}
        {index > 0 && (
          <StageArrow side="left" onClick={() => go(index - 1)} />
        )}
        {index < total - 1 && (
          <StageArrow side="right" onClick={() => go(index + 1)} />
        )}

        {/* Counter + enlarge (hidden while a video plays, so YouTube's controls stay clear) */}
        {!playing && (
          <>
            <span className="pointer-events-none absolute left-3 bottom-3 rounded-full bg-canvas/90 border border-line px-2.5 py-1 text-[11px] sm:text-xs font-medium tabular-nums text-body">
              {index + 1} / {total}
              {current.type === "image" && current.group && <span className="font-semibold text-ink"> · {current.group}</span>}
            </span>
            <button
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label="View full screen"
              title="View full screen"
              className="absolute right-3 top-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-canvas/90 border border-line text-body hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FaExpand className="text-xs" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail rail */}
      {total > 1 && (
        <div
          ref={railRef}
          onScroll={updateRailFade}
          data-fade-left={railFade.left || undefined}
          data-fade-right={railFade.right || undefined}
          className="thumb-rail flex flex-shrink-0 items-center gap-2 overflow-x-auto p-1 -m-1"
        >
          {items.map((item, i) => {
            const active = i === index;
            const itemMobile = isMobileItem(item, layout);
            const group = item.type === "image" ? item.group : undefined;
            const prev = items[i - 1];
            // Mark where a named set (e.g. the LINE screens) starts in the rail
            const startsGroup = i > 0 && group && group !== (prev.type === "image" ? prev.group : undefined);
            return (
              <Fragment key={i}>
                {startsGroup && (
                  <span className="flex-shrink-0 self-stretch flex items-center gap-2 pl-1">
                    <span aria-hidden className="w-px h-3/4 bg-line" />
                    <span className="text-[11px] sm:text-xs font-semibold text-muted">{group}</span>
                  </span>
                )}
                <button
                  ref={(el) => { thumbRefs.current[i] = el; }}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={item.type === "video" ? `Show video: ${item.name}` : `Show screenshot ${i + 1}`}
                  aria-current={active}
                  className={`relative flex-shrink-0 overflow-hidden rounded-lg bg-surface transition-[opacity,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    !itemMobile
                      ? "w-20 h-[2.8125rem] sm:w-24 sm:h-[3.375rem]"
                      : isMobile
                        ? "w-10 h-[5.25rem] sm:w-11 sm:h-[5.75rem]"
                          // Phone screens in a web rail: a little taller than the web thumbnails so they stay legible
                        : "w-9 h-[3.75rem] sm:w-10 sm:h-[4.25rem]"
                  } ${active ? "ring-2 ring-accent ring-offset-2 ring-offset-canvas" : "opacity-45 hover:opacity-100"}`}
                >
                  <img src={thumbSrc(item)} alt="" loading="lazy" className="w-full h-full object-cover object-top dark:brightness-90" />
                  {item.type === "video" && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <FaPlay className="text-white text-[10px] ml-0.5" />
                    </span>
                  )}
                </button>
              </Fragment>
            );
          })}
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          initialIndex={lightboxIndex}
          layout={layout}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}

function StageArrow({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const Icon = side === "left" ? FaChevronLeft : FaChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-canvas/90 border border-line text-ink shadow-sm transition-opacity lg:opacity-0 lg:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        side === "left" ? "left-3" : "right-3"
      }`}
    >
      <Icon className="text-xs" />
    </button>
  );
}

/** Current phone screen in the middle, neighbours dimmed at the sides. */
function MobileStage({
  items, layout, index, onSelect, onOpen,
}: { items: LightboxItem[]; layout: Layout; index: number; onSelect: (i: number) => void; onOpen: () => void }) {
  const slots = [index - 1, index, index + 1];

  return (
    <div className="absolute inset-0 flex items-center justify-center gap-4 sm:gap-6 py-5 sm:py-6">
      {slots.map((i) => {
        const isCurrent = i === index;
        // Only phone screens peek in beside a phone screen
        const item = items[i] && isMobileItem(items[i], layout) ? items[i] : undefined;
        if (!item) return <span key={`empty-${i}`} aria-hidden className="h-[86%] aspect-[9/19] flex-shrink-0" />;
        return (
          <button
            key={i}
            type="button"
            onClick={() => (isCurrent ? onOpen() : onSelect(i))}
            aria-label={isCurrent ? `Enlarge screenshot ${i + 1}` : `Show screenshot ${i + 1}`}
            tabIndex={isCurrent ? 0 : -1}
            className={`flex-shrink-0 overflow-hidden rounded-[1.25rem] border border-line bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-opacity ${
              isCurrent
                ? "h-full cursor-zoom-in shadow-[0_12px_32px_-16px_rgba(15,23,42,0.35)]"
                : "h-[86%] opacity-35 hover:opacity-70 cursor-pointer"
            }`}
          >
            {/* Frame follows the screenshot's own ratio, so tall phones and
                wider in-app views (e.g. LINE LIFF) are never cropped */}
            <img
              key={thumbSrc(item)}
              src={thumbSrc(item)}
              alt=""
              className={`h-full w-auto max-w-none block dark:brightness-90 ${isCurrent ? "stage-in" : ""}`}
            />
          </button>
        );
      })}
    </div>
  );
}
