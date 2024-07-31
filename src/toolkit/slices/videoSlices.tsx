import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddVideoFormData, VideoState } from "../../types";
import api from "../../api";
const initialState: VideoState = {
  videos: [],
  video: null,
  error: null,
  isLoading: false,
};
//Api call:
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await api.get(`/videos`);
  return response.data;
});
export const fetchVideoById = createAsyncThunk(
  "videos/fetchVideoById",
  async (videoId: string | undefined) => {
    const response = await api.get(`/videos/${videoId}`);
    return response.data;
  }
);
export const fetchAddVideo = createAsyncThunk(
  "admins/fetchAddVideo",
  async (video: AddVideoFormData) => {
    const response = await api.post(`/videos`, video);
    return response.data;
  }
);
const videoSlice = createSlice({
  name: "video",
  initialState: initialState,
  reducers: {},
  //extra reducer for 3 states
  extraReducers(builder) {
    //For display All videos
    builder.addCase(fetchVideos.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.error = action.error.message || "An error occured";
      state.isLoading = false;
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      console.log(action.payload.data.items);
      state.videos = action.payload.data.items;
      state.isLoading = false;
    });
    //For display single video
    builder.addCase(fetchVideoById.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchVideoById.rejected, (state, action) => {
      state.error = action.error.message || "An error occured";
      state.isLoading = false;
    });
    builder.addCase(fetchVideoById.fulfilled, (state, action) => {
      //console.log(action.payload.data);
      state.video = action.payload.data;
      state.isLoading = false;
    });
    //For add new video
    builder.addCase(fetchAddVideo.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchAddVideo.rejected, (state, action) => {
      state.error = action.error.message || "An error occured";
      state.isLoading = false;
    });
    builder.addCase(fetchAddVideo.fulfilled, (state, action) => {
      //console.log(action.payload.data);
      //state.photo = action.payload.data;
      state.videos.push(action.payload.data);
      state.isLoading = false;
    });
  },
});
export default videoSlice.reducer;
