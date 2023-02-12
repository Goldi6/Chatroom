const addMessageAction = (message) => ({
  type: "ADD_MESSAGE",
  message,
});

const removeMessageAction = (index) => ({
  type: "REMOVE_MESSAGE",
  index,
});

export { addMessageAction, removeMessageAction };
