import React from 'react'

type ProjectModalProps  = {
  project: {
    title: string;
    images: string[];
  };
  onClose: () => void;
};
const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
<div
  className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 "
  onClick={onClose}
>
  <div
    onClick={(e) => e.stopPropagation()} // ป้องกันคลิกใน modal แล้วปิด
    className="bg-white rounded-lg max-w-3xl w-[80%] my-[5%] p-6 relative max-h-screen overflow-y-auto"
  >
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-500 hover:text-black"
    >
      ✕
    </button>
    <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {project.images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Project Image ${i + 1}`}
          className="rounded-lg w-full h-auto object-cover"
        />
      ))}
    </div>
  </div>
</div>

  )
}

export default ProjectModal
