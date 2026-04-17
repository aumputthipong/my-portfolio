"use client";
import { useState } from "react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  layout: "web" | "mobile";
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-4"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10 leading-none pb-1"
        >
          ×
        </button>

        {images.length > 1 && (
          <button
            onClick={prev}
            className="cursor-pointer absolute left-6 top-1/2 -translate-y-1/2 text-gray-700 text-5xl leading-none w-20 h-20 flex items-center justify-center rounded-full bg-white/60 hover:bg-white/80 backdrop-blur-sm transition-all duration-300 z-10 shadow-lg"
          >
            <svg className="w-10 h-10 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
            </svg>
          </button>
        )}

        {images.length > 1 && (
          <button
            onClick={next}
            className="cursor-pointer absolute right-6 top-1/2 -translate-y-1/2 text-gray-700 text-5xl leading-none w-20 h-20 flex items-center justify-center rounded-full bg-white/60 hover:bg-white/80 backdrop-blur-sm transition-all duration-300 z-10 shadow-lg"
          >
            <svg className="w-10 h-10 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
            </svg>
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
