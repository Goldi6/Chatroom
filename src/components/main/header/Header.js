import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { userLogoutAction } from "../../../actions/userActions";
import { deleteUserFromCookie } from "../../../cookies/cookies";
const Header = () => {
  const { userData, userDispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    userDispatch(userLogoutAction());
    deleteUserFromCookie();
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
          {userData.user ? (
            <div onClick={logout} className="header__logout-nav">
              Logout
            </div>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? " active" : "")}
              to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
