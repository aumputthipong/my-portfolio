"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

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

export default function Lightbox({ items, images, initialIndex, layout, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const resolved: LightboxItem[] = items
    ?? (images?.map((src) => ({ type: "image", src })) ?? []);

  const total = resolved.length;
  const current = resolved[currentIndex];

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % total);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-2 sm:p-4"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 text-2xl sm:text-3xl font-light w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10 leading-none pb-1"
        >
          ×
        </button>

        {/* Prev */}
        {total > 1 && (
          <button
            onClick={prev}
            className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-sm transition-all duration-200 z-10 shadow-lg"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m15 19-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next */}
        {total > 1 && (
          <button
            onClick={next}
            className="cursor-pointer absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-sm transition-all duration-200 z-10 shadow-lg"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m9 5 7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Content */}
        {current.type === "video" ? (
          <div
            className="w-full max-w-4xl mx-12 sm:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video title bar */}
            <div className="bg-gray-950 rounded-t-xl px-3 sm:px-5 py-2.5 sm:py-3.5 flex items-center gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPlay className="text-white text-[8px] sm:text-[9px] ml-0.5" />
              </div>
              <p className="font-semibold text-xs sm:text-sm truncate text-white">
                {current.name}
              </p>
            </div>
            <div className="relative aspect-video bg-black rounded-b-xl overflow-hidden shadow-2xl">
              <iframe
                key={current.id}
                src={`https://www.youtube.com/embed/${current.id}?autoplay=1&rel=0&vq=hd1080`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <img
            src={current.src}
            alt={`Screenshot ${currentIndex + 1}`}
            className={`max-h-[85vh] sm:max-h-[88vh] w-auto object-contain rounded-lg shadow-2xl ${
              layout === "mobile" ? "max-w-[70vw] sm:max-w-[50vw]" : "max-w-[82vw] sm:max-w-[88vw]"
            }`}
            onClick={(e) => e.stopPropagation()}
          />
        )}

        {/* Counter */}
        {total > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
            {currentIndex + 1} / {total}
          </div>
        )}
      </div>
    </div>
  );
}
