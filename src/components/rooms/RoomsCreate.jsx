import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function RoomsCreate({ createNewRoom }) {
  function onClickCreateRoom(e) {
    e.preventDefault();
    const roomName = e.target.querySelector("input").value.trim();
    if (roomName.length > 0) {
      createNewRoom(roomName);
    }
  }

  return (
    <div>
      <Form
        action=""
        onSubmit={onClickCreateRoom}
        className="rooms__create-form">
        <h3>Create room:</h3>
        <Form.Control type="text" />
        <Button type="submit">Create</Button>
      </Form>
    </div>
  );
}
