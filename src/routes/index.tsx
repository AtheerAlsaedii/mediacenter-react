import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Error,
  Login,
  PhotoDetails,
  AdminDashboard,
} from "../pages/index";
import { NavBar } from "../components/layout/NavBar";
import { Footer } from "../components/layout/Footer";
import { AdminPhotoMangment } from "../components/AdminPhotoMangment";
import { AdminVideoMangment } from "../components/AdminVideoMangment";

export const Index = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/photos/:photoId" element={<PhotoDetails />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route
            path="/admin/dashbored/photo"
            element={<AdminPhotoMangment />}
          />
          <Route
            path="admin/dashbored/video"
            element={<AdminVideoMangment />}
          />
          admin/dashbored/video
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
