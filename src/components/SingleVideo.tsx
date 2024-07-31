import React from "react";
import { Video } from "../types";
import { Link } from "react-router-dom";
export const SingleVideo = (props: { video: Video }) => {
  const { video } = props;
  //console.log(video);
  return (
    <article className="video-card">
      <iframe
        src={video.videoUrl}
        className="video-img"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="video-body">
        <p className="title">{video.title}</p>
        {/*         <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>{video.location}</p>
        </div>
        <Link to={`/videos/${video.videoId}`}>
          <button>Discover</button>
        </Link> */}
      </div>
    </article>
  );
};
