import React from "react";
import { useSelector } from "react-redux";

// Format numbers like 1.2K or 3.4M
const formatCount = (num) => {
  if (!num) return "0";
  const number = parseInt(num);
  if (number >= 1e6) return (number / 1e6).toFixed(1) + "M";
  if (number >= 1e3) return (number / 1e3).toFixed(1) + "K";
  return number;
};

const VideoDetails = () => {
  const videoInfo = useSelector((store) => store.video);

  if (!videoInfo || !videoInfo.snippet || !videoInfo.statistics) return null;

  const { snippet, statistics } = videoInfo;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="text-white px-4 py-3 border-b border-gray-700">
      {/* Video Title */}
      <h1 className="text-2xl font-semibold mb-3">{title}</h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        {/* Left: Channel Info */}
        <div className="flex items-center gap-4">
          {/* Channel Icon */}
          <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center">
            {thumbnails?.default?.url ? (
              <img
                src={thumbnails.default.url}
                alt="channel"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xl">👤</span>
            )}
          </div>

          {/* Channel Name & Views */}
          <div>
            <p className="font-semibold">{channelTitle}</p>
            <p className="text-xs text-gray-400">
              {formatCount(statistics.viewCount)} views
            </p>
          </div>

          {/* Subscribe Button */}
          <button className="ml-4 px-4 py-1.5 text-sm border border-gray-600 rounded-full hover:bg-red-600 hover:border-red-600 transition">
            🔔 Subscribe
          </button>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
          <div className="flex border border-gray-600 bg-gray-800 rounded-full overflow-hidden text-sm">
            <button className="flex items-center gap-1 px-4 py-1.5 hover:bg-gray-700 transition">
              👍 {formatCount(statistics.likeCount)}
            </button>
            <div className="w-px bg-gray-600 my-2" />
            <button className="flex items-center gap-1 px-4 py-1.5 hover:bg-gray-700 transition">
              👎
            </button>
          </div>

          <button className="flex items-center gap-1 px-4 py-1.5 text-sm border border-gray-600 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            🔁 Share
          </button>
          <button className="flex items-center gap-1 px-4 py-1.5 text-sm border border-gray-600 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            ⬇️ Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
