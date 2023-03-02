import React, { createContext, useReducer } from "react";
import userReducer, { initialUserData } from "../reducers/userReducer";
import Cookies from "js-cookie";
import { getUserFromCookie } from "../cookies/cookies";

export const UserContext = createContext(null);

export default function UserContextProvider(props) {
  // const getInitialState = () => {
  //   console.log(Cookies.get("token"));
  //   if (Cookies.get("token")) {
  //     return getUser(Cookies.get("token")).then((userData) => {});
  //   }
  //   return null;
  // };
  //const initialUser = getInitialState();

  //console.log(initialUser);
  const cookieUserData = getUserFromCookie();
  const [userData, userDispatch] = useReducer(
    userReducer,
    cookieUserData || initialUserData
  );

  return (
    <UserContext.Provider value={{ userData, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}
