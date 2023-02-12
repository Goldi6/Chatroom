import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import validator from "validator";
import { ChatroomContext } from "../../context/chatroomContext";
import { addMessageAction } from "../../actions/chatroomActions";
import { nanoid } from "nanoid";

const AddMessage = (props) => {
  const { chatroomDispatch } = useContext(ChatroomContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const message = e.target.querySelector("#message-input").value.trim();
    if (!validator.isEmpty(message)) {
      // props.addMessage(message);

      chatroomDispatch(
        addMessageAction({
          message,
          id: nanoid(),
          user: { username: "ReactUser", id: 12345 },
        })
      );
      e.target.reset();
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="d-flex flex-row overflow-auto add-message">
        <Form.Control
          placeholder="Write your message..."
          as="textarea"
          rows={3}
          id="message-input"
        />
        <Button type="submit">Post</Button>
      </Form.Group>
    </Form>
  );
};

export default AddMessage;
