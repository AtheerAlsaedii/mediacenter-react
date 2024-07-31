import React, { useEffect } from "react";
import { SinglePhoto } from "./SinglePhoto";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../toolkit/store";
import { fetchPhotos } from "../toolkit/slices/photoSlices";
import { SingleEvent } from "./SingleEvent";
import { Event } from "./Event";
export const Photos = () => {
  const { photos, isLoading, error } = useSelector(
    (state: RootState) => state.photoR
  );

  //console.log(photos);
  //UseEffect
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchPhotos());
    };
    fetchData();
  }, []);
  return (
    <article className="event-section" id="target-section">
      <h2 className="section-title">POPULAR TOURES</h2>
      <hr />
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error{error} ...</p>}
      <section className="photos-section">
        {photos &&
          photos.length > 0 &&
          photos.map((photo) => (
            <SinglePhoto key={photo.photoId} photo={photo} />
          ))}
      </section>
    </article>
  );
};
