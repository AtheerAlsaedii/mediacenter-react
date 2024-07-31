import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../toolkit/store";
import { fetchVideos } from "../toolkit/slices/videoSlices";
import { SingleVideo } from "./SingleVideo";
export const Videos = () => {
  const { videos, isLoading, error } = useSelector(
    (state: RootState) => state.videoR
  );

  console.log(videos);
  //UseEffect
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchVideos());
    };
    fetchData();
  }, []);
  return (
    <article className="video-section">
      <h2 className="section-title">DISCOVER THE WORLD IN A NEW WAY</h2>
      <hr />
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error: {error} ...</p>}
      <section className="video-container">
        {videos &&
          videos.length > 0 &&
          videos.map((video) => (
            <SingleVideo key={video.videoId} video={video} />
          ))}
      </section>
    </article>
  );
};
