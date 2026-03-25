import React, { useState } from "react";
import VideoProject from "./VideoProject";

type ProjectModalProps = {
  project: {
    id: number;
    title: string;
    images: string[];
    layout: string;
  };
  onClose: () => void;
};
const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (img: string) => {
    const index = project.images.findIndex((image) => image === img);
    setCurrentImageIndex(index);
    setSelectedImage(img);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % project.images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(project.images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? project.images.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(project.images[prevIndex]);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 "
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg max-w-7xl w-full max-h-[95vh] overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 leading-none  hover:text-gray-600 text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ×
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex-1 overflow-y-auto p-6">
              <div
                className={`grid gap-6 ${
                  project.layout === "mobile"
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" // Mobile layout: ใช้ column เยอะขึ้นเพราะรูปแคบ
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Desktop layout: รูปกว้าง ใช้ column น้อยลง
                }`}
              >
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50"
                    onClick={() => handleImageClick(img)}
                  >
                    <img
                      src={img}
                      alt={`Project screenshot ${i + 1}`}
                      className={`w-full block transition-transform duration-500 group-hover:scale-105 ${
                        project.layout === "mobile"
                          ? "aspect-[9/19] object-cover object-top" // เน้นสัดส่วนมือถือ และชิดขอบบน
                          : "h-48 object-cover"
                      }`}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2 shadow-lg">
                        <svg
                          className="w-5 h-5 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-60 p-4"
          onClick={closeImageModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* ปุ่มปิด */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10 leading-none pb-1"
            >
              ×
            </button>

            {/* ปุ่ม Previous */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="cursor-pointer absolute left-6 top-1/2 -translate-y-1/2 
             text-gray-700 text-5xl leading-none 
             w-20 h-20 flex items-center justify-center 
             rounded-full bg-white/60 hover:bg-white/80 
             backdrop-blur-sm transition-all duration-300 
             z-10 shadow-lg"
              >
                <svg
                  className="w-10 h-10 text-gray-700 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* ปุ่ม Next */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="cursor-pointer absolute right-6 top-1/2 -translate-y-1/2 
             text-gray-700 text-5xl leading-none 
             w-20 h-20 flex items-center justify-center 
             rounded-full bg-white/60 hover:bg-white/80 
             backdrop-blur-sm transition-all duration-300 
             z-10 shadow-lg"
              >
                <svg
                  className="w-10 h-10 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* รูปภาพ */}
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* แสดงลำดับรูป (ถ้ามีมากกว่า 1 รูป) */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;
