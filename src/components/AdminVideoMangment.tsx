import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../toolkit/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddVideoFormData } from "../types";
import { fetchAddVideo, fetchVideos } from "../toolkit/slices/videoSlices";
import { toast } from "react-toastify";

export const AdminVideoMangment = () => {
  const { videos, isLoading, error } = useSelector(
    (state: RootState) => state.videoR
  );
  const dispatch: AppDispatch = useDispatch();
  const [addModel, setAddModel] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddVideoFormData>();
  const onSubmit: SubmitHandler<AddVideoFormData> = async (
    data: AddVideoFormData
  ) => {
    // console.log("form is submit", data);
    const response = await dispatch(fetchAddVideo(data));
    const isSuccess = response.payload.data;
    isSuccess
      ? toast.success(response.payload.message)
      : toast.error(response.payload.message);
    setAddModel(!addModel);
  };
  useEffect(() => {
    const fatchData = async () => {
      await dispatch(fetchVideos());
    };
    fatchData();
  }, []);
  const openModelToAdd = () => {
    setAddModel(!addModel);
  };
  return (
    /* pop-up to add photo */
    <div>
      {addModel && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="popup-body">
                <button onClick={openModelToAdd} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <h2 className="pop-up-header">Add Video</h2>
              </div>
              <div>
                <div className="add-photo-section">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      id="title"
                      placeholder="Enter Post Title:"
                      required
                      {...register("title", { required: "title is Required" })}
                    />
                    <input
                      type="text"
                      id="type"
                      placeholder="Enter Post Type:"
                      required
                      {...register("type", { required: "type is Required" })}
                    />
                    <input
                      type="text"
                      id="location"
                      placeholder="Enter Post Location:"
                      required
                      {...register("location", {
                        required: "type is Required",
                      })}
                    />
                    <textarea
                      id="description"
                      placeholder="Enter The Description:"
                      required
                      {...register("description", {
                        required: "type is Required",
                      })}
                    />
                    <input
                      type="text"
                      id="videoUrl"
                      placeholder="Enter The Video Url:"
                      required
                      {...register("videoUrl", {
                        required: "videoUrl is Required",
                      })}
                    />
                    <button type="submit">Add</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="admin-dashboard">
        <div className="main-dashboard-container">
          <div className="welcom-section">
            <h2>Hello, Welcome back...</h2>
            <p>
              Here in the dashboard you can post new video,update and delete ...
            </p>
            <button onClick={openModelToAdd}>Add</button>
          </div>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <div className="photo-management-card-container">
            {videos && videos.length > 0 ? (
              videos.map((video) => (
                <div className="photo-management-card" key={video.videoId}>
                  <iframe
                    src={video.videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="photo-management-image"
                  />
                  <div className="photo-management-details">
                    <h3>{video.title}</h3>
                    <p>Type: {video.type}</p>
                    <p>Location: {video.location}</p>
                    <div className="button-container">
                      <button className="edit-btn">
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      <button className="delete-btn">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No videos available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
