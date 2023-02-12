import React, { createContext, useReducer } from "react";
import userReducer, { initialUserData } from "../reducers/userReducer";

export const UserContext = createContext(null);

export default function UserContextProvider(props) {
  const [userData, userDispatch] = useReducer(userReducer, initialUserData);

  return (
    <UserContext.Provider value={{ userData, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}
