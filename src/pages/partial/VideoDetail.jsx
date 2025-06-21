const VideoDetail = () => {
  return (
    <div className="bg-gradient-to-br from-[#B91C1C] to-[#322D81] h-full flex justify-center items-center">
      <div className="w-full h-full">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoDetail;
