import { nanoid } from "nanoid";

export const state = () => [
  { name: "bananas", id: nanoid() },
  { name: "apples", id: nanoid() },
  { name: "Room 1", id: nanoid() },
  { name: "Room 4", id: nanoid() },
  { name: "Room 3", id: nanoid() },
  { name: "Room 4", id: nanoid() },
];

const roomsReducer = (rooms, action) => {
  console.log(rooms);
  switch (action.type) {
    case "ADD_ROOM":
      return rooms.concat(action.room);
    case "DELETE_ROOM":
      return rooms.filter((room) => room.id !== action.room.id);
    case "SET_ROOMS":
      return [...action.rooms];
    default:
      return rooms;
  }
};

export default roomsReducer;
