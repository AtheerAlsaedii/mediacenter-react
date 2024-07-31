import React from "react";
import { Outlet } from "react-router-dom";

export const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  );
};
