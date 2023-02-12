import { nanoid } from "nanoid";
import Message from "../components/chatroom/Message";

export const initialChatroomState = {
  users: [
    {
      username: "aviv",
      id: 1,
    },
    {
      username: "idan",
      id: 2,
    },
    {
      username: "natan",
      id: 3,
    },
    {
      username: "yoav",
      id: 4,
    },
  ],
  messages: [
    {
      message: "Hi",
      id: nanoid(),
      user: {
        username: "natan",
        id: 3,
      },
    },
    {
      message: "Hello",
      id: nanoid(),
      user: { username: "ReactUser", id: 12345 },
    },
    {
      message: "Welcome",
      id: nanoid(),
      user: {
        username: "yoav",
        id: 4,
      },
    },
    {
      message: "Hi",
      id: nanoid(),
      user: {
        username: "aviv",
        id: 1,
      },
    },
    {
      message: "Hello",
      id: nanoid(),
      user: { username: "ReactUser", id: 12345 },
    },
  ],
};

export default function chatroomReducer(chatroomState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...chatroomState,
        messages: [...chatroomState.messages, action.message],
      };
    case "REMOVE_MESSAGE":
      let newMessages = [...chatroomState.messages];
      newMessages.splice(action.index, 1);
      return { ...chatroomState, messages: newMessages };

    default:
      return chatroomState;
  }
}
