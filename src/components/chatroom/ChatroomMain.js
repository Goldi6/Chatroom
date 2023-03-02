import React, { useContext, useEffect } from "react";
import Message from "./Message";
import AddMessage from "./AddMessage";
import { ChatroomContext } from "../../context/chatroomContext";

const ChatroomMain = (props) => {
  const { chatroomState } = useContext(ChatroomContext);

  // useEffect(() => {
  //   console.log("chatroom rendering");
  // });
  // useEffect(() => {
  //   console.log("chatroom born");
  // }, []);
  // useEffect(() => {
  //   return () => {
  //     console.log("chatroom dies");
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log("chatroom changed messages");
  //   return () => {
  //     console.log("cleanup");
  //   };
  // }, [chatroomState.messages]);

  return (
    <React.Fragment>
      <div className="chatroom__main">
        <AddMessage addMessage={props.addMessage} />
        <h3>Room Name:{chatroomState.name}</h3>
        <div className="chat overflow-scroll border rounded">
          {chatroomState.messages.map((message, i) => {
            return (
              <Message
                index={i}
                message={message}
                key={message.id}
                // deleteMessage={props.deleteMessage}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatroomMain;
