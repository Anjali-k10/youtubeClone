import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sideSlice";
import {  useLocation, useSearchParams } from "react-router-dom";
import VideoDetails from "./VideoDetails";
import { videoData } from "../utils/videoSlice";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchparams] = useSearchParams();
  const videoId = searchparams.get("v");
  const dispatch = useDispatch();
  const location = useLocation();
  const videoInfo = location.state?.videoInfo;
   dispatch(videoData(videoInfo));;
   useEffect(() => {
    dispatch(closeMenu());
  }, []);

    return (
    <div className="px-5 text-white bg-black">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-xl"
      ></iframe>

      <VideoDetails  />
      <CommentContainer/>
    </div>
  );
};

export default WatchPage;