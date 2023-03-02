import React from "react";

import Chatroom from "./Chatroom";

import ChatroomContextProvider from "../../context/chatroomContext";
import { useParams } from "react-router-dom";

const ChatroomLoader = () => {
  const { id } = useParams();

  return (
    <ChatroomContextProvider roomId={id}>
      <Chatroom />
    </ChatroomContextProvider>
  );
};

export default ChatroomLoader;
