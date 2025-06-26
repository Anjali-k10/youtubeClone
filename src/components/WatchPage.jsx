import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sideSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import VideoDetails from "./VideoDetails";
import { videoData } from "../utils/videoSlice";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchparams] = useSearchParams();
  const videoId = searchparams.get("v");
  const dispatch = useDispatch();
  const location = useLocation();
  const videoInfo = location.state?.videoInfo;

  useEffect(() => {
    dispatch(closeMenu());
    if (videoInfo) dispatch(videoData(videoInfo));
  }, []);

  return (
    <div className="px-5 py-4 text-white bg-black">
      <div className="flex gap-4">
        {/* Left Side: Video + VideoDetails */}
        <div className="flex flex-col w-[65%]">
          <iframe
            height="450"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-xl w-full"
          ></iframe>
          <VideoDetails />
        </div>

        {/* Right Side: Live Chat */}
        <div className="w-[35%] max-h-[600px]">
          <LiveChat />
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
