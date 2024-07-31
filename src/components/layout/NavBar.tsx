import React from "react";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../../toolkit/slices/adminSlices";
export const NavBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.adminR);
  const handleLogout = () => {
    dispatch(logoutAdmin());
  };
  return (
    <nav>
      <ul className="nav_links">
        {isLoggedIn && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin/dashbored/photo">Managing Photos</Link>
            </li>
            <li>
              <Link to="/admin/dashbored/video">Managing Videos</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Toure</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
