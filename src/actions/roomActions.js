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
