import React from "react";

import Chatroom from "./Chatroom";

import ChatroomContextProvider from "../../context/chatroomContext";

const ChatroomLoader = () => {
  return (
    <ChatroomContextProvider>
      <Chatroom />
    </ChatroomContextProvider>
  );
};

export default ChatroomLoader;
