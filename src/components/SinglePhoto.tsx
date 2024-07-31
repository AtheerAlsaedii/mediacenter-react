import React from "react";
import { Photo } from "../types";
import { Link } from "react-router-dom";
export const SinglePhoto = (props: { photo: Photo }) => {
  const { photo } = props;
  return (
    <article
      className="photo-card"
      style={{ backgroundImage: `url(${photo.imageUrl})` }}
    >
      <div className="photo-body">
        <p className="title">{photo.title}</p>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>{photo.location}</p>
        </div>
        <div>
          <Link to={`/photos/${photo.photoId}`}>
            <button>Discover</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SinglePhoto;