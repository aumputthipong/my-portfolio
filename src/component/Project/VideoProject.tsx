export default function VideoProject() {
  const videos = [
    {
      name: "Name 1",
      url: "https://www.youtube.com/embed/B7YQeZ6N9No",
    },
    {
      name: "Name 2",
      url: "https://www.youtube.com/embed/fFF1u_CTjZM",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((video, index) => (
        <div key={index} className="w-full">
          <p className="mb-4 text-lg font-semibold">{video.name}</p>

          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={video.url}
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  );
}
