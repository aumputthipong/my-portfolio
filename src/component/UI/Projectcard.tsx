interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  thumbnail?: string
}

export default function ProjectCard({
  title,
  description,
  techStack,
  thumbnail,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors duration-200">
      
      {/* Thumbnail */}
      {thumbnail && (
        <div className="w-full h-48 overflow-hidden bg-gray-50">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
          {title}
        </h3>

        {/* Divider */}
        <hr className="border-gray-100" />

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}