import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
// import PrivetMessage from "./PrivetMessage";

export default function RoomsChoice({ items }) {
  const [itemsToShow, setItemsToShow] = useState(items);
  //const [privetMessageUser, setPrivetMessageUser] = useState(null);
  const onInputFilterUsers = (e) => {
    const searchValue = e.target.value.trim();
    const regex = new RegExp("^" + searchValue, "i");

    setItemsToShow(
      searchValue === "" ? items : items.filter((el) => el.name.match(regex))
    );
  };
  //console.log(items);

  return (
    <div className="chatroom__choice">
      <h3>Rooms:</h3>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search fo rooms..."
          onInput={onInputFilterUsers}
        />

        <InputGroup.Text className="text-muted">
          {" "}
          <CiSearch />
        </InputGroup.Text>
      </InputGroup>
      {itemsToShow.map((item) => {
        return (
          <Link
            to={`/chatroom/${item.name}`}
            key={item.id}
            className="choice"

            //  onClick={() => setPrivetMessageUser(user)}
          >
            {item.name}
          </Link>
        );
      })}
      {/* {!!privetMessageUser && (
        <PrivetMessage
          user={privetMessageUser}
          sendPrivetMessage={sendPrivetMessage}
          closePrivetMessage={closePrivetMessage}
        />
      )} */}
    </div>
  );
}
