"use client";

import { useState } from "react";
import { FaPlay, FaTimes, FaYoutube } from "react-icons/fa";
import { seniorVideos as videos } from "@/data/SeniorProjectData";

export default function VideoProject() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeVideo = videos.find((v) => v.id === openId);

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setOpenId(video.id)}
            className="group cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-900 overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 group-hover:scale-110">
                  <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-1" />
                </div>
              </div>
              {/* YouTube badge */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                <FaYoutube className="text-red-500 text-sm" />
                <span className="text-white text-[10px] font-semibold">YouTube</span>
              </div>
            </div>

            {/* Info */}
            <div className="px-3 sm:px-4 py-3 bg-white">
              <p className="font-semibold text-gray-800 text-xs sm:text-sm">{video.name}</p>
              <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video popup modal */}
      {openId && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4"
          onClick={() => setOpenId(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpenId(null)}
              className="absolute -top-11 right-0 w-9 h-9 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <FaTimes />
            </button>

            {/* Title bar */}
            <div className="bg-gray-950 rounded-t-xl px-3 sm:px-5 py-3 sm:py-4 flex items-center gap-3">
              <FaYoutube className="text-red-500 text-lg sm:text-xl flex-shrink-0" />
              <p className="font-semibold text-sm sm:text-base truncate" style={{ color: '#ffffff' }}>
                {activeVideo?.name}
              </p>
            </div>

            {/* iframe */}
            <div className="relative aspect-video bg-black rounded-b-xl overflow-hidden shadow-2xl">
              <iframe
                key={openId}
                src={`https://www.youtube.com/embed/${openId}?autoplay=1&rel=0&vq=hd1080`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
