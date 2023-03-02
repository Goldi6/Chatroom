import React, { useContext } from "react";
import ChatroomUsers from "./ChatroomUsers";
import ChatroomMain from "./ChatroomMain";
//import { nanoid } from "nanoid";
import Container from "react-bootstrap/Container";
import { ChatroomContext } from "../../context/chatroomContext";
import Loader from "../main/Loader/Loader";

const Chatroom = () => {
  const { chatroomState } = useContext(ChatroomContext);
  return (
    <>
      {chatroomState.isRoomExists ? (
        <Container className="chatroom page-container">
          <ChatroomUsers />
          <ChatroomMain />
        </Container>
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Chatroom;
