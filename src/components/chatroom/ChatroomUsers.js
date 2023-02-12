import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CiSearch } from "react-icons/ci";
import PrivetMessage from "./PrivetMessage";
import { ChatroomContext } from "../../context/chatroomContext";

const ChatroomUsers = () => {
  const { chatroomState } = useContext(ChatroomContext);
  const [usersToShow, setUsersToShow] = useState([...chatroomState.users]);
  const [privetMessageUser, setPrivetMessageUser] = useState(null);

  const onInputFilterUsers = (e) => {
    const searchValue = e.target.value.trim();
    const regex = new RegExp("^" + searchValue, "i");

    setUsersToShow(
      searchValue === ""
        ? chatroomState
        : chatroomState.filter((el) => el.username.match(regex))
    );
  };

  const sendPrivetMessage = () => {
    setPrivetMessageUser(null);
  };
  const closePrivetMessage = () => {
    setPrivetMessageUser(null);
  };
  return (
    <div className="chatroom__users">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search fo users..."
          onInput={onInputFilterUsers}
        />

        <InputGroup.Text className="text-muted">
          {" "}
          <CiSearch />
        </InputGroup.Text>
      </InputGroup>
      <h3>Users:</h3>
      {usersToShow.map((user) => {
        return (
          <div
            className="user"
            key={user.id}
            onClick={() => setPrivetMessageUser(user)}>
            {user.username}
          </div>
        );
      })}
      {!!privetMessageUser && (
        <PrivetMessage
          user={privetMessageUser}
          sendPrivetMessage={sendPrivetMessage}
          closePrivetMessage={closePrivetMessage}
        />
      )}
    </div>
  );
};

export default ChatroomUsers;
