import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function PrivetMessage({
  user,
  sendPrivetMessage,
  closePrivetMessage,
}) {
  return (
    <>
      <Modal show="true">
        <Modal.Header closeButton>
          <Modal.Title>Privet Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Send Message to: {user.username}</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closePrivetMessage()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => sendPrivetMessage()}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
