//  COPIED FROM INDEDX

import React from "react";
import ReactDOM from "react-dom/client";
import validator from "validator";
import { nanoid } from "nanoid";
import "./styles/style.scss";
import "./styles/dataBindings.scss";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

//import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

let title = "React";
let subTitle = "React is fun";
let titleClass = "headline";

const onInputChangeTitle = (event) => {
  const newTitle = event.target.value.trim();
  if (newTitle.length === 0) {
    title = "React";
    return;
  }
  title = newTitle;
  console.log(newTitle);
  renderUI();
};

////
let offsetX = 0;
let offsetY = 0;
let isDisabled = true;

///
function colorize(event) {
  const e = event.nativeEvent;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  //const div = e.target;

  let r = 0;
  let g = 0;
  let b = 0;
  r = offsetX >= 150 ? 250 : 0;
  g = offsetY >= 150 ? 250 : 0;
  b = offsetY < 150 && offsetY < 150 ? 250 : 0;
  let color = `rgb(${r},${g},${b})`;
  document.documentElement.style.setProperty("--square-bg-color", color);
  //if (div.classList.contains("active")) div.style.backgroundColor = color;

  renderUI();
}

let isDivShow = true;
const onClickBtnShow = () => {
  isDivShow = !isDivShow;
  renderUI();
};

let isCircleDiv = true;
function onChangeShape(e) {
  if (e.target.value === "circle") isCircleDiv = true;
  else isCircleDiv = false;
  renderUI();
}

let inputClass = "";
function validateEmail(event) {
  const val = event.target.value;
  inputClass = val === "" ? "" : !validator.isEmail(val) ? "is-invalid" : "";

  console.log(inputClass);
  renderUI();
}
let isButtonDisabled = true;
let messages = [];
function setupDisabled(e) {
  const value = e.target.value.trim();
  if (value.length === 0) {
    isButtonDisabled = true;
    renderUI();
  } else if (isButtonDisabled && value.length > 0) {
    isButtonDisabled = !isButtonDisabled;
    renderUI();
  }
}
function onSubmitFormMessages(event) {
  event.preventDefault();
  const message = event.target.children[1].value.trim();
  messages.push({ message, id: nanoid() });
  renderUI();
}
function removeMessage(i) {
  messages.splice(i, 1);
  renderUI();
}
let isBlack = true;
let counter = 8;
const startWithBlack = [15, 31, 47];
const startWithWhite = [7, 23, 39, 55];
let damkaArray = new Array(64).fill({ isEmpty: true });
damkaArray = damkaArray.map((el, i) => {
  el.class = isBlack ? "black" : "white";
  if (startWithBlack.includes(i)) {
    isBlack = true;
  } else if (startWithWhite.includes(i)) {
    isBlack = false;
  } else isBlack = !isBlack;

  return { ...el };
});

function figureDisplay(i) {
  if (damkaArray[i].class === "black") {
    damkaArray[i].isEmpty = !damkaArray[i].isEmpty;
    renderUI();
  }
}

function Damka() {
  return (
    <div className="damka">
      {damkaArray.map((obj, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              figureDisplay(i);
            }}
            className={obj.class}
          >
            {!obj.isEmpty && <div className="figure"></div>}
          </div>
        );
      })}
    </div>
  );
}

function renderUI() {
  const jsx = (
    <div>
      <h1 className={titleClass}>
        {title}
        <Badge bg="secondary" as="Button">
          New
        </Badge>
      </h1>
      <h2>{subTitle}</h2>
      <input placeholder="change title..." onInput={onInputChangeTitle}></input>
      <div className="color-block active" onMouseMove={colorize}>
        <div>
          offset x: <span id="x">{offsetX}</span> offset y:{" "}
          <span id="y">{offsetY}</span>
        </div>
      </div>
      <Button disabled={isDisabled}>
        {isDisabled ? "blocked" : "click me"}
      </Button>
      <Button onClick={onClickBtnShow}>{isDivShow ? "Remove" : "Show"}</Button>
      {isDivShow && <div className="div-show">Showing</div>}
      <select name="" id="" onChange={onChangeShape}>
        <option value="circle">circle</option>
        <option value="square">square</option>
      </select>
      {isCircleDiv ? (
        <div className="shape circle">circle</div>
      ) : (
        <div className="shape square">square</div>
      )}
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={inputClass}
            type="text"
            placeholder="Enter email"
            onInput={validateEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
      <div>
        {[
          <div key={"1"}>1</div>,
          <div key={"2"}>2</div>,
          <div key={"3"}>3</div>,
        ]}
      </div>
      <div className="messages">
        {messages.length > 0
          ? messages.map((message, i) => (
              <div
                className={
                  i % 2 === 0
                    ? "bg-dark text-light message"
                    : "bg-light message"
                }
              >
                <div key={message.id}>{message.message}</div>
                <Button variant="danger" onClick={() => removeMessage(i)}>
                  X
                </Button>
              </div>
            ))
          : "no messages"}
      </div>

      <Form action="" onSubmit={onSubmitFormMessages}>
        <Form.Label>Message:</Form.Label>
        <Form.Control
          type="text"
          onInput={setupDisabled}
          placeholder="write a message...."
        />
        <Button
          disabled={isButtonDisabled}
          type="submit"
          variant="dark"
          onClick={() => console.log("Dark")}
        >
          Dark
        </Button>
      </Form>

      <br />
      <br />
      <br />
      <br />
      <Damka />

      {/* <div className="damka">
        {damkaArray.map((obj, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                figureDisplay(i);
              }}
              className={obj.class}
            >
              {!obj.isEmpty && <div className="figure"></div>}
            </div>
          );
        })}
      </div> */}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
  root.render(jsx);
}
renderUI();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
