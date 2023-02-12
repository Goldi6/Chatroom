import React from "react";
import ChatroomUsers from "./ChatroomUsers";
import ChatroomMain from "./ChatroomMain";
//import { nanoid } from "nanoid";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

const Chatroom = () => {
  const { roomName } = useParams();
  const myUser = { username: "ReactUser", id: 12345 };
  // const users = [
  //   {
  //     username: "aviv",
  //     id: nanoid(),
  //   },
  //   {
  //     username: "idan",
  //     id: nanoid(),
  //   },
  //   {
  //     username: "natan",
  //     id: nanoid(),
  //   },
  // ];

  // const [messages, setMessages] = useState([
  //   { message: "Hi", id: nanoid(), user: users[1] },
  //   { message: "Hello", id: nanoid(), user: myUser },
  //   { message: "Welcome", id: nanoid(), user: users[0] },
  //   { message: "Hi", id: nanoid(), user: users[1] },
  //   { message: "Hello", id: nanoid(), user: myUser },
  //   { message: "Welcome", id: nanoid(), user: users[0] },
  //   { message: "Hi", id: nanoid(), user: users[1] },
  //   { message: "Hello", id: nanoid(), user: myUser },
  //   { message: "Welcome", id: nanoid(), user: users[0] },
  //   { message: "Hi", id: nanoid(), user: users[1] },
  //   { message: "Hello", id: nanoid(), user: myUser },
  //   { message: "Welcome", id: nanoid(), user: users[0] },
  // ]);

  // const addMessage = (messageContent) => {
  //   setMessages(
  //     messages.concat({
  //       message: messageContent,
  //       id: nanoid(),
  //       user: myUser,
  //     })
  //   );
  // };
  // const deleteMessage = (index) => {
  //   let newMessages = [...messages];
  //   console.log(newMessages);
  //   console.log(index);
  //   newMessages.splice(index, 1);
  //   console.log(newMessages);
  //   setMessages(newMessages);
  // };

  return (
    <Container className="chatroom page-container">
      <ChatroomUsers
      //  users={users}
      />
      <ChatroomMain
        roomName={roomName}
        //messages={messages}
        myUser={myUser}
        //addMessage={addMessage}
        //deleteMessage={deleteMessage}
      />
    </Container>
  );
};

export default Chatroom;
