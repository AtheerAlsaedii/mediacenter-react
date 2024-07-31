export type Photo = {
  photoId: string;
  title: string;
  type: string;
  location: string;
  description: string;
  createDate: string;
  imageUrl: string;
};
export type PhotoState = {
  photos: Photo[];
  photo: Photo | null;
  error: null | string;
  isLoading: boolean;
};
export type Video = {
  videoId: string;
  title: string;
  type: string;
  location: string;
  description: string;
  createDate: string;
  videoUrl: string;
};
export type VideoState = {
  videos: Video[];
  video: Video | null;
  error: null | string;
  isLoading: boolean;
};
export type Admin = {
  //adminId: string;
  //name: string;
  email: string;
  password: string;
};
export type AdminState = {
  admin: Admin | null;
  error: null | string;
  isLoading: boolean;
  isLoggedIn: boolean;
};
export type LoginFormData = {
  email: string;
  password: string;
};
export type AddPhotoFormData = {
  title: string;
  type: string;
  location: string;
  description?: string;
  imageUrl: string;
};
export type AddVideoFormData = {
  title: string;
  type: string;
  location: string;
  description?: string;
  videoUrl: string;
};
