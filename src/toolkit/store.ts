import { configureStore } from "@reduxjs/toolkit";
import photoSlices from "./slices/photoSlices";
import videoSlices from "./slices/videoSlices";
import adminSlices from "./slices/adminSlices";

export const store = configureStore({
  reducer: {
    photoR: photoSlices,
    videoR: videoSlices,
    adminR: adminSlices,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
