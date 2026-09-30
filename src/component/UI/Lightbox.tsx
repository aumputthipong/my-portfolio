"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaTimes } from "react-icons/fa";

export type LightboxItem =
  | { type: "image"; src: string }
  | { type: "video"; id: string; name: string };

interface LightboxProps {
  items?: LightboxItem[];
  images?: string[];
  initialIndex: number;
  layout: "web" | "mobile";
  onClose: () => void;
}

// mqdefault / maxresdefault are 16:9; hqdefault is 4:3 with black bars baked in
export const youtubeThumb = (id: string, size: "mqdefault" | "hqdefault" | "maxresdefault" = "mqdefault") =>
  `https://img.youtube.com/vi/${id}/${size}.jpg`;

export default function Lightbox({ items, images, initialIndex, layout, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const resolved: LightboxItem[] = items
    ?? (images?.map((src) => ({ type: "image", src })) ?? []);

  const total = resolved.length;
  const current = resolved[currentIndex];
  const isMobile = layout === "mobile";

  const prev = useCallback(() => setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1)), [total]);
  const next = useCallback(() => setCurrentIndex((i) => (i + 1) % total), [total]);

  // Keyboard: Esc closes, arrows step through
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  // Keep the page behind from scrolling while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  useEffect(() => {
    thumbRefs.current[currentIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [currentIndex]);

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot viewer"
      className="fixed inset-0 z-[60] flex flex-col bg-black/95"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-3 text-white/70 text-xs sm:text-sm">
        <span className="tabular-nums">{currentIndex + 1} / {total}</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <FaTimes />
        </button>
      </div>

      {/* Stage */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center px-12 sm:px-20">
        {total > 1 && (
          <button
            type="button"
            onClick={(e) => { stop(e); prev(); }}
            aria-label="Previous"
            className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <FaChevronLeft />
          </button>
        )}
        {total > 1 && (
          <button
            type="button"
            onClick={(e) => { stop(e); next(); }}
            aria-label="Next"
            className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <FaChevronRight />
          </button>
        )}

        {current.type === "video" ? (
          // Width is capped by the available height so the 16:9 player never
          // runs under the filmstrip on short screens.
          <div className="w-full max-w-[min(64rem,calc((100dvh-13rem)*16/9))]" onClick={stop}>
            <div className="bg-gray-950 rounded-t-xl px-3 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPlay className="text-white text-[8px] sm:text-[9px] ml-0.5" />
              </div>
              <p className="font-semibold text-xs sm:text-sm truncate text-white">{current.name}</p>
            </div>
            <div className="relative aspect-video bg-black rounded-b-xl overflow-hidden">
              <iframe
                key={current.id}
                src={`https://www.youtube.com/embed/${current.id}?autoplay=1&rel=0&vq=hd1080`}
                title={current.name}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt={`Screenshot ${currentIndex + 1} of ${total}`}
            onClick={stop}
            className={`max-h-full w-auto max-w-full object-contain ${isMobile ? "rounded-[1.25rem]" : "rounded-lg"}`}
          />
        )}
      </div>

      {/* Filmstrip — keeps the whole set in view while zoomed in */}
      {total > 1 && (
        <div className="flex justify-center px-3 pt-3 pb-4" onClick={stop}>
          <div className="lightbox-strip flex gap-2 overflow-x-auto max-w-full px-1 py-1">
            {resolved.map((item, i) => {
              const src = item.type === "video" ? youtubeThumb(item.id) : item.src;
              const active = i === currentIndex;
              return (
                <button
                  key={i}
                  ref={(el) => { thumbRefs.current[i] = el; }}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={item.type === "video" ? `Play ${item.name}` : `Show screenshot ${i + 1}`}
                  aria-current={active}
                  className={`relative flex-shrink-0 overflow-hidden rounded-md transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isMobile ? "w-8 h-16 sm:w-9 sm:h-[4.5rem]" : "w-16 h-10 sm:w-20 sm:h-12"
                  } ${active ? "opacity-100 ring-2 ring-white" : "opacity-40 hover:opacity-80"}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover object-top" />
                  {item.type === "video" && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <FaPlay className="text-white text-[9px]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
