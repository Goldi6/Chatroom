import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
const Header = () => {
  const { userData, userDispatch } = useContext(UserContext);
  console.log("state", userData);
  const navigate = useNavigate();

  const logout = () => {
    userDispatch({ type: "LOGOUT" });
    navigate("/home");
  };

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
          {false ? (
            <NavLink
              className={({ isActive }) => (isActive ? " active" : "")}
              to="/login">
              Login
            </NavLink>
          ) : (
            <div onClick={logout} className="header__logout-nav">
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
