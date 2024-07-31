import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddPhotoFormData, PhotoState } from "../../types";
import api from "../../api";
const initialState: PhotoState = {
  photos: [],
  photo: null,
  error: null,
  isLoading: false,
};
//Api call:
export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const response = await api.get(`/photos`);
  return response.data;
});
export const fetchPhotoById = createAsyncThunk(
  "photos/fetchPhotoById",
  async (photoId: string | undefined) => {
    const response = await api.get(`/photos/${photoId}`);
    return response.data;
  }
);
export const fetchAddPhoto = createAsyncThunk(
  "admins/fetchAddPhoto",
  async (photo: AddPhotoFormData) => {
    //console.log(admin);
    const response = await api.post(`/photos`, photo);
    console.log(response.data);
    return response.data;
  }
);
const photoSlice = createSlice({
  name: "photos",
  initialState: initialState,
  reducers: {},
  //extra reducer for 3 states
  extraReducers(builder) {
    //For display All photos
    builder.addCase(fetchPhotos.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.error = action.error.message || "An error occured";
      state.isLoading = false;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload.data.items;
      state.isLoading = false;
    });
    //For display single photo
    builder.addCase(fetchPhotoById.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchPhotoById.rejected, (state, action) => {
      state.error = action.error.message || "An error occured";
      state.isLoading = false;
    });
    builder.addCase(fetchPhotoById.fulfilled, (state, action) => {
      state.photo = action.payload.data;
      state.isLoading = false;
    });
    //For add new photo
    builder.addCase(fetchAddPhoto.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchAddPhoto.rejected, (state, action) => {
      state.error = action.error.message || "An error occured";
      state.isLoading = false;
    });
    builder.addCase(fetchAddPhoto.fulfilled, (state, action) => {
      //console.log(action.payload.data);
      //state.photo = action.payload.data;
      state.photos.push(action.payload.data);
      state.isLoading = false;
    });
  },
});
export default photoSlice.reducer;
