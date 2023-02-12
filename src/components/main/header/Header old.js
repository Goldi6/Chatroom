import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "nav-link-main active" : "nav-link-main"
          }>
          Home
        </NavLink>

        <div>
          <NavLink
            to="/rooms"
            className={({ isActive }) => (isActive ? " active" : "")}>
            Rooms
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? " active" : "")}
            to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
