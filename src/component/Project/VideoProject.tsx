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
     <div className="bg-gradient-to-br from-slate-50 to-blue-50 -800 p-8 m-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-full aspect-square max-w-[2.5rem] bg-red-600 rounded-lg flex items-center justify-center">
            <FaPlay className="w-4/10 h-4/10 text-white ml-0.5" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 ">
            Project Video Demo
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group">
              <div className="bg-white  rounded-[10px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ">
                {/* Video Title */}
                <div className="p-4 bg-zinc-800">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <div className="w-full aspect-square max-w-[2rem] bg-red-600 rounded-lg flex items-center justify-center">
                <FaPlay className="w-1/2 h-1/2 text-white ml-0.5" />
                    </div>
                    {video.name}
                  </h4>
                </div>

                {/* Video Container */}
                <div className="relative bg-black" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={video.url}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* Video Footer */}
                <div className="p-3 bg-slate-100  border-t border-gray-200 ">
                  <p className="text-sm text-gray-600  text-center">
                   {video.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
