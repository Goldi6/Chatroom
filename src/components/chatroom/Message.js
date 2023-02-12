import React, { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { ChatroomContext } from "../../context/chatroomContext";
import { removeMessageAction } from "../../actions/chatroomActions";

const Message = ({ message, userId, index }) => {
  const { chatroomDispatch } = useContext(ChatroomContext);
  const onClickRemoveMessage = () => {
    //deleteMessage(index);
    chatroomDispatch(removeMessageAction(index));
  };

  return (
    <Alert
      variant={message.user.id === userId ? "warning" : "secondary"}
      className="message">
      <div className="d-flex flew-row justify-content-between">
        <h6 className="user__name">{message.user.username}</h6>
        {message.user.id === userId && (
          <Button variant="secondary" size="sm" onClick={onClickRemoveMessage}>
            x
          </Button>
        )}
      </div>
      <span className="user__message">{message.message}</span>
    </Alert>
  );
};

export default Message;
