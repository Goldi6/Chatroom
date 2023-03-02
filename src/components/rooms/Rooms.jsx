import React, { useContext, useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import RoomsCreate from "./RoomsCreate";
import RoomsChoice from "./RoomsChoice";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import roomsReducer from "../../reducers/roomsReducer";
import { addRoom, setRooms } from "../../actions/roomActions";
import Axios from "axios";
import { getRoomsFromDB, postRoomInDB } from "../../server/db";
import Loader from "../main/Loader/Loader";
import { UserContext } from "../../context/userContext";

export default function Rooms() {
  // const initialRoomsState = [
  //   { name: "Room 1", id: nanoid() },
  //   { name: "Room 4", id: nanoid() },
  //   { name: "Room 3", id: nanoid() },
  //   { name: "Room 4", id: nanoid() },
  //   { name: "banana", id: nanoid() },
  //   { name: "apple", id: nanoid() },
  //];

  // const state = [
  //   {
  //     name: "banana",
  //     users: [
  //       { username: "shir", id: "01" },
  //       { username: "amit", id: "02" },
  //       { username: "yonatan", id: "03" },
  //       { username: "jkjkj", id: "04" },

  //       { username: "akjdkjd", id: "02" },
  //     ],
  //   },
  //   {
  //     name: "apples",
  //     users: [
  //       { username: "shir", id: "01" },
  //       { username: "amit", id: "02" },
  //       { username: "yonatan", id: "03" },
  //       { username: "jkjkj", id: "04" },

  //       { username: "akjdkjd", id: "02" },
  //     ],
  //   },
  //   {
  //     name: "Room 1",
  //     users: [
  //       { username: "shir", id: "01" },
  //       { username: "amit", id: "02" },
  //       { username: "yonatan", id: "03" },
  //       { username: "jkjkj", id: "04" },

  //       { username: "akjdkjd", id: "02" },
  //     ],
  //   },
  //   {
  //     name: "Room 4",
  //     users: [
  //       { username: "shir", id: "01" },
  //       { username: "amit", id: "02" },
  //       { username: "yonatan", id: "03" },
  //       { username: "jkjkj", id: "04" },

  //       { username: "akjdkjd", id: "02" },
  //     ],
  //   },
  //   {
  //     name: "Room 3",
  //     users: [
  //       { username: "shir", id: "01" },
  //       { username: "amit", id: "02" },
  //       { username: "yonatan", id: "03" },
  //       { username: "jkjkj", id: "04" },

  //       { username: "akjdkjd", id: "02" },
  //     ],
  //   },
  //   {
  //     name: "Room 4",
  //     users: [
  //       { username: "shir", id: "01" },
  //       { username: "amit", id: "02" },
  //       { username: "yonatan", id: "03" },
  //       { username: "jkjkj", id: "04" },

  //       { username: "akjdkjd", id: "02" },
  //     ],
  //   },
  // ];

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       for (let room of state) {
  //         const res = await Axios.post(
  //           process.env.REACT_APP_DB + "rooms.json",
  //           room
  //         );
  //         console.log(res.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [rooms]);

  const [rooms, roomsDispatch] = useReducer(roomsReducer, []);
  const [isRoomLoaded, setIsRoomLoaded] = useState(false);

  const { userData } = useContext(UserContext);

  useEffect(() => {
    let isComponentExist = true;

    getRoomsFromDB(userData.token).then((roomsResult) => {
      if (isComponentExist) {
        roomsDispatch(setRooms(roomsResult));
        setIsRoomLoaded(true);
      }
    });

    return () => {
      isComponentExist = false;
    };
  }, [userData.token]);

  const navigate = useNavigate();

  const createNewRoom = (newName) => {
    postRoomInDB(newName, userData.token).then((roomId) => {
      navigate("/chatroom/" + roomId);
    });
    // roomsDispatch(addRoom({ name: newName, id: nanoid() }));
  };
  return (
    <>
      {isRoomLoaded ? (
        <Container className="rooms page-container">
          <RoomsChoice items={rooms} />
          <RoomsCreate createNewRoom={createNewRoom} />
        </Container>
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </>
  );
}
