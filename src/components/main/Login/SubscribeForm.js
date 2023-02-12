import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import { Fragment } from "react";

import validator from "validator";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { userLoginAction } from "../../../actions/userActions";

const LoginForm = (props) => {
  const { userDispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const [invalidInput_message, setInvalidInput_message] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [isValidInputs_array, setIsValidInputs_array] = useState({
    username: true,
    age: true,
    email: true,
    password: true,
    passwordRepeat: true,
  });

  const [username, setUsername] = useState("");

  const [age, setAge] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const isSubmitDisabled = () => {
    const inputsNotEmpty = [username, age, email, password].every(
      (val) => val !== ""
    );
    const inputsAreValid = Object.values(isValidInputs_array).every(
      (val) => val
    );

    console.log(!inputsNotEmpty && !inputsAreValid);
    return !inputsNotEmpty || !inputsAreValid;
  };

  const onBlurValidate_PasswordRepeatInput = (e) => {
    const comparePasswords = (repeatedPassword) => {
      return repeatedPassword === password;
    };

    const input = e.target;
    const inputValue = input.value.trim();
    const inputName = input.getAttribute("name");

    validateInput(
      inputValue,
      inputName,
      comparePasswords,
      "passwords don't match"
    );
  };

  const onBlurValidate_PasswordInput = (e) => {
    const verifyPassword = (passwordInput) => {
      // const regex = new RegExp();
      const options = { min: 6, minSymbols: 0 };
      return validator.isStrongPassword(passwordInput, options);
    };

    const input = e.target;
    const inputValue = input.value.trim();
    const inputName = input.getAttribute("name");

    setPassword(
      validateInput(
        inputValue,
        inputName,
        verifyPassword,
        "password length must be at least 6 chars and contain lower and uppercase letters and a number"
      )
        ? inputValue
        : ""
    );
  };
  const onBlurValidate_EmailInput = (e) => {
    const input = e.target;
    const inputValue = input.value.trim();
    const inputName = input.getAttribute("name");

    setEmail(
      validateInput(
        inputValue,
        inputName,
        validator.isEmail,
        "invalid Email format"
      )
        ? inputValue
        : ""
    );
  };

  const onBlurValidate_UsernameInput = (e) => {
    const verifyUsername = (usernameInput) => {
      return !usernameInput.toLowerCase().includes("admin");
    };
    const input = e.target;
    const inputValue = input.value.trim();
    const inputName = input.getAttribute("name");

    setUsername(
      validateInput(
        inputValue,
        inputName,
        verifyUsername,
        `Username cannot include 'admin'`
      )
        ? inputValue
        : ""
    );
  };

  const onBlurValidate_AgeInput = (e) => {
    const minAge = 12;
    const verifyAge = (ageInput) => {
      return parseInt(ageInput) >= minAge;
    };

    const input = e.target;
    const inputValue = input.value.trim();
    const inputName = input.getAttribute("name");

    setAge(
      validateInput(
        inputValue,
        inputName,
        verifyAge,
        `Min age for registration is ${minAge}`
      )
        ? inputValue
        : ""
    );
  };

  const validateInput = (
    inputValue,
    inputName,
    validateCallBack,
    invalidInputMessage
  ) => {
    const errorMessages = { ...invalidInput_message };
    const validInputsArray = { ...isValidInputs_array };

    let validatedResult = validator.isEmpty(inputValue);
    if (validatedResult) {
      errorMessages[inputName] = "Please enter " + inputName;
      validInputsArray[inputName] = false;
    } else {
      validatedResult = validateCallBack(inputValue);

      if (validatedResult) {
        validInputsArray[inputName] = true;
        errorMessages[inputName] = "";
      } else {
        errorMessages[inputName] = invalidInputMessage;
        validInputsArray[inputName] = false;
      }
    }
    setInvalidInput_message(errorMessages);
    setIsValidInputs_array(validInputsArray);

    console.log(username, email, password, age);
    return validatedResult;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    ///console.log("login form ", username, age, email, password);

    userDispatch(userLoginAction());
    navigate("/rooms", { replace: true });
  };

  const inputs = [
    {
      type: "text",
      name: "username",
      placeholder: "Please enter username",
      validator: onBlurValidate_UsernameInput,
    },
    {
      type: "number",
      name: "age",
      placeholder: "Please enter your age",
      validator: onBlurValidate_AgeInput,
    },
    {
      type: "text",
      name: "email",
      placeholder: "Please enter your email",
      validator: onBlurValidate_EmailInput,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Please enter a password",
      validator: onBlurValidate_PasswordInput,
    },
    {
      type: "password",
      name: "passwordRepeat",
      placeholder: "Repeat your password",
      validator: onBlurValidate_PasswordRepeatInput,
    },
  ];

  function inputMessage(inp, key) {
    return (
      <Form.Text className="text-danger" key={key + "text"}>
        {invalidInput_message[inp.name]}
      </Form.Text>
    );
  }
  function inputField(inp, key) {
    return (
      <Form.Control
        key={key + "field"}
        className={!isValidInputs_array[inp.name] ? "is-invalid" : ""}
        type={inp.type}
        name={inp.name}
        placeholder={inp.placeholder}
        onBlur={inp.validator}
      />
    );
  }

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group controlId="form-group-id" className="form-group">
        <h3>Subscribe</h3>

        {inputs.map((inp, i) => {
          return (
            <Fragment key={i}>
              {inputMessage(inp, i)} {inputField(inp, i)}
            </Fragment>
          );
        })}

        {/* ///// 
        {!isValidInputs_array.username && (
          <Form.Text className="text-danger">
            {invalidInput_message.username}
          </Form.Text>
        )}
        <Form.Control
          className={!isValidInputs_array.username ? "is-invalid" : ""}
          type="text"
          name="username"
          placeholder="Enter a username"
          onBlur={onBlurValidate_UsernameInput}
        />

        {!isValidInputs_array.age && (
          <Form.Text className="text-danger">
            {invalidInput_message.age}
          </Form.Text>
        )}
        <Form.Control
          className={!isValidInputs_array.age ? "is-invalid" : ""}
          type="number"
          name="age"
          placeholder="Enter your age"
          onBlur={onBlurValidate_AgeInput}
        />

        {!isValidInputs_array.email && (
          <Form.Text className="text-danger">
            {invalidInput_message.email}
          </Form.Text>
        )}
        <Form.Control
          className={!isValidInputs_array.email ? "is-invalid" : ""}
          type="text"
          name="email"
          placeholder="Enter your email"
          onBlur={onBlurValidate_EmailInput}
        />

        {!isValidInputs_array.password && (
          <Form.Text className="text-danger">
            {invalidInput_message.password}
          </Form.Text>
        )}
        <Form.Control
          className={!isValidInputs_array.password ? "is-invalid" : ""}
          type="password"
          name="password"
          placeholder="Enter password"
          onBlur={onBlurValidate_PasswordInput}
        />

        {!isValidInputs_array.passwordRepeat && (
          <Form.Text className="text-danger">
            {invalidInput_message.passwordRepeat}
          </Form.Text>
        )}
        <Form.Control
          className={!isValidInputs_array.passwordRepeat ? "is-invalid" : ""}
          type="password"
          name="passwordRepeat"
          placeholder="Repeat password"
          onBlur={onBlurValidate_PasswordRepeatInput}
        /> */}

        <div className="d-flex flex-row justify-content-between align-items-baseline">
          <Button type="submit" variant="primary" disabled={isSubmitDisabled()}>
            Submit
          </Button>
          <Nav.Link className="text-muted form-link" onClick={props.switchForm}>
            Login
          </Nav.Link>
        </div>
      </Form.Group>
    </Form>
  );
};
export default LoginForm;
