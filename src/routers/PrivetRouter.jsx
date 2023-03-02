import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function PrivetRoute({ children }) {
  const { userData } = useContext(UserContext);

  //const navigate = useNavigate();

  // useEffect(() => {
  //   if (userData.user === null) {
  //     return navigate("/login", {
  //       state: { needToLogin: true, replace: true },
  //     });
  //   }
  // });
  if (userData.user === null) {
    return <Navigate to="/login" state={{ needToLogin: true }} />;
  }
  return children;
}
