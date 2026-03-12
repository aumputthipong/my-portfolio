import { Laptop } from "@mui/icons-material";
import { FaPlay } from "react-icons/fa";

export default function VideoProject() {
  const videos = [
      {
          name: "AI Usage Workflow",
        desc:"Demo of how to use AI services within the platform",
          url: "https://www.youtube.com/embed/fFF1u_CTjZM",
        },
      {
        name: "Adding New AI Services",
        desc:"Demo of how to integrate new AI services into the platform",
        url: "https://www.youtube.com/embed/B7YQeZ6N9No",
      },
    ];
  return (
     <div className="bg-white p-8 m-4 rounded-2xl border border-gray-200">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 bg-gradient-to-br from-red-700 via-red-500 to-red-400 rounded-xl flex items-center justify-center flex-shrink-0">
        <FaPlay className="w-4 h-4 text-white " />
      </div>
      <h3 className="text-3xl font-bold uppercase text-indigo-700">
        Project Video Demo
      </h3>

    </div>

    {/* Video Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {videos.map((video, index) => (
        <div key={index} className="group flex flex-col bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">

          {/* Video Title */}
          <div className="px-5 py-4 flex items-center gap-3 border-b border-gray-200">
            <div className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaPlay className="w-2.5 h-2.5 text-white ml-0.5" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              {video.name}
            </h4>
          </div>

          {/* Video Embed */}
          <div className="relative bg-black" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={video.url}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Footer */}
          <div className="px-5 py-3">
            <p className="text-sm text-gray-500 text-center">
              {video.desc}
            </p>
          </div>

        </div>
      ))}
    </div>
  </div>
</div>
  );
}
