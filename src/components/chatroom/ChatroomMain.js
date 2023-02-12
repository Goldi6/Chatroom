import React, { useContext } from "react";
import Message from "./Message";
import AddMessage from "./AddMessage";
import { ChatroomContext } from "../../context/chatroomContext";

const ChatroomMain = (props) => {
  const { chatroomState } = useContext(ChatroomContext);

  return (
    <React.Fragment>
      <div className="chatroom__main">
        <AddMessage addMessage={props.addMessage} />
        <h3>Room Name:{props.roomName}</h3>
        <div className="chat overflow-scroll border rounded">
          {chatroomState.messages.map((message, i) => {
            return (
              <Message
                index={i}
                message={message}
                userId={props.myUser.id}
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
