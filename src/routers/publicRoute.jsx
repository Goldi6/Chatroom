import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function PrivetRoute({ children }) {
  const { userData } = useContext(UserContext);

  if (userData.user !== null) {
    return <Navigate to="/home" />;
  }
  return children;
}
