export const addRoom = (room) => {
  return {
    type: "ADD_ROOM",
    room,
  };
};

export const setRoom = (room) => ({
  type: "SET_ROOM",
  room,
});

export const setRooms = (rooms) => ({
  type: "SET_ROOMS",
  rooms,
});
