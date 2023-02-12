import React, { createContext, useReducer } from "react";
import chatroomReducer, {
  initialChatroomState,
} from "../reducers/chatroomReducer";

export const ChatroomContext = createContext(null);

export default function ChatroomContextProvider(props) {
  const [chatroomState, chatroomDispatch] = useReducer(
    chatroomReducer,
    initialChatroomState
  );

  return (
    <ChatroomContext.Provider value={{ chatroomState, chatroomDispatch }}>
      {props.children}
    </ChatroomContext.Provider>
  );
}
