import React, { createContext, useContext, useEffect, useReducer } from "react";
import chatroomReducer, {
  initialChatroomState,
} from "../reducers/chatroomReducer";
import { getRoomData } from "../server/db";
import { initRoomAction } from "../actions/chatroomActions";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";

export const ChatroomContext = createContext(null);

export default function ChatroomContextProvider(props) {
  const navigate = useNavigate();
  const [chatroomState, chatroomDispatch] = useReducer(
    chatroomReducer,
    initialChatroomState
  );

  const { userData } = useContext(UserContext);

  useEffect(() => {
    let isComponentExists = true;

    getRoomData(props.roomId, userData.token)
      .then((roomData) => {
        if (isComponentExists) chatroomDispatch(initRoomAction(roomData));
      })
      .catch((error) => {
        navigate("/NotFound404", { replace: true, state: { error: error } });
        console.log(error);
      });

    return () => {
      isComponentExists = false;
    };
  }, [props.roomId, navigate, userData.token]);

  return (
    <ChatroomContext.Provider value={{ chatroomState, chatroomDispatch }}>
      {props.children}
    </ChatroomContext.Provider>
  );
}
