import { useSelector } from "react-redux";


const VideoCard = ({ videoInfo }) => {
 
    // const isSidebarOpen =useSelector((store)=>store.menu.isMenuOpen);
  if (!videoInfo) return null;
  const { snippet, statistics } = videoInfo;
  const { title, channelTitle, thumbnails } = snippet;

  return (
  <div className="hover:scale-[1.03] transition-transform duration-200 ease-in-out cursor-pointer w-full">
      <img
        className="rounded-xl w-full aspect-video object-cover"
        src={thumbnails.medium.url}
        alt="Video Thumbnail"
      />

      <div className="flex mt-3 gap-3">
       <div className="w-8 h-8 p-2 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm">
  👤
</div>

        <div className="flex flex-col">
          <p className="font-semibold text-white line-clamp-2">{title}</p>
          <p className="text-sm text-gray-400">{channelTitle}</p>
          <p className="text-sm text-gray-400">{statistics.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};



export default VideoCard;

