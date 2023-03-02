import React, { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { ChatroomContext } from "../../context/chatroomContext";
import { removeMessageAction } from "../../actions/chatroomActions";
import { UserContext } from "../../context/userContext";

const Message = ({ message, index }) => {
  const { chatroomDispatch } = useContext(ChatroomContext);
  const { userData } = useContext(UserContext);

  const onClickRemoveMessage = () => {
    //deleteMessage(index);
    chatroomDispatch(removeMessageAction(index));
  };

  const isUserMessage = message.user.id === userData.user.id;

  return (
    <Alert
      variant={isUserMessage ? "warning" : "secondary"}
      className="message">
      <div className="d-flex flew-row justify-content-between">
        <h6 className="user__name">{message.user.username}</h6>
        {isUserMessage && (
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
