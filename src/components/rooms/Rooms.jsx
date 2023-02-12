import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import RoomsCreate from "./RoomsCreate";
import RoomsChoice from "./RoomsChoice";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import roomsReducer from "../../reducers/roomsReducer";
import { addRoom } from "../../actions/roomActions";

export default function Rooms() {
  const initialRoomsState = [
    { name: "Room 1", id: nanoid() },
    { name: "Room 4", id: nanoid() },
    { name: "Room 3", id: nanoid() },
    { name: "Room 4", id: nanoid() },
    { name: "banana", id: nanoid() },
    { name: "apple", id: nanoid() },
  ];
  const [rooms, roomsDispatch] = useReducer(roomsReducer, initialRoomsState);

  const navigate = useNavigate();
  const createNewRoom = (newName) => {
    roomsDispatch(addRoom({ name: newName, id: nanoid() }));
    navigate("/chatroom/" + newName);
  };
  return (
    <Container className="rooms page-container">
      <RoomsChoice items={rooms} />
      <RoomsCreate createNewRoom={createNewRoom} />
    </Container>
  );
}
