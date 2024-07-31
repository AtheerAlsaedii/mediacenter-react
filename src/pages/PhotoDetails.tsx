import React, { useEffect } from "react";
import { PageTitle } from "../components/PageTitle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { AppDispatch } from "../toolkit/store";
import { fetchPhotoById } from "../toolkit/slices/photoSlices";

export const PhotoDetails = () => {
  const { photoId } = useParams<{ photoId: string }>();
  const { photo, isLoading, error } = useSelector(
    (state: RootState) => state.photoR
  );

  //UseEffect
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchPhotoById(photoId));
    };
    fetchData();
  }, []);

  return (
    <div className="photo-details-container">
      <PageTitle title={photo?.title || "Photo Details"} />
      {isLoading && <p className="loading">Loading ...</p>}
      {error && <p className="error">Error: {error}</p>}
      {photo && (
        <div className="detail-body">
          <h1>{photo.title}</h1>
          <img src={photo.imageUrl} alt={photo.title} className="photo-image" />
          <div className="photo-info">
            <p className="photo-location">Location: {photo.location}</p>
            <p className="photo-description">{photo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
