import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Admin, AdminState } from "../../types";
import api from "../../api";
const data =
  localStorage.getItem("loginData") != null
    ? JSON.parse(String(localStorage.getItem("loginData")))
    : [];

const initialState: AdminState = {
  admin: data.userData,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};
//Api call:
export const fetchLogin = createAsyncThunk(
  "admins/fetchLogin",
  async (admin: Admin) => {
    //console.log(admin);
    const response = await api.post(`/admins/login`, admin);
    return response.data;
  }
);

const adminSlice = createSlice({
  name: "admins",
  initialState: initialState,
  reducers: {
    logoutAdmin: (state) => {
      state.isLoggedIn = false;
      state.admin = null;
      localStorage.setItem(
        "loginData",
        JSON.stringify({
          isLoggedIn: state.isLoggedIn,
          Admin: state.admin,
        })
      );
    },
  },
  //extra reducer for 3 states
  extraReducers(builder) {
    //For admin Login
    builder.addCase(fetchLogin.pending, (state) => {
      state.error = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.error = action.error.message || "An error occured";
      state.isLoading = false;
      state.isLoggedIn = false;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.isLoggedIn = true;
      }
      state.isLoading = false;
      state.admin = action.payload;
      localStorage.setItem(
        "loginData",
        JSON.stringify({
          isLoggedIn: state.isLoggedIn,
          userData: state.admin,
        })
      );
    });
  },
});
export const { logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
