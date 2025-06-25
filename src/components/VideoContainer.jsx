import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Youtube_Api_Url } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { videoData } from '../utils/videoSlice';

const VideoContainer = () => {
  const dispatch=useDispatch();
  const [videos, setVideos] = useState([]);
  const getVideo = async () => {
    const response = await fetch(Youtube_Api_Url);
    const json = await response.json();
    setVideos(json.items);
    dispatch(videoData(json.items));
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div
      className={`grid gap-6 px-6 transition-all duration-300`}
      style={{
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {videos.map((video) => (
        <Link 
          key={video.id}
          to={"/watch?v=" + video.id}
          state={{ videoInfo: video }} 
          className="no-underline"
        >
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;



