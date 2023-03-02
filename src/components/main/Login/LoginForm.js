import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

import validator from "validator";
import { UserContext } from "../../../context/userContext";
import { userLoginAction } from "../../../actions/userActions";
import { loginToSite } from "../../../server/auth";
import authErrorHandler from "../../../errorHandlers/authErrorHandler";
import { saveUserOnCookie } from "../../../cookies/cookies";

const LoginForm = (props) => {
  const { userDispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInputValid, setIsEmailInputValid] = useState(true);
  const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const [invalidInput_message, setInvalidInput_message] = useState({
    email: "",
    password: "",
    general: "",
  });

  useEffect(() => {
    if (props.errorMessage) setErrorMessage(props.errorMessage);
  }, [props.errorMessage]);

  const isSubmitDisabled = () => {
    return email === "" || password === "";
  };

  const onBlurEmailInput = (event) => {
    const emailValue = event.target.value.trim();
    if (emailValue === "" || !validator.isEmail(emailValue)) {
      setEmail("");
      setInvalidInput_message({
        ...invalidInput_message,
        email: "Invalid email",
      });
      setIsEmailInputValid(false);
    } else {
      setEmail(emailValue);
      setInvalidInput_message({ ...invalidInput_message, email: "" });

      setIsEmailInputValid(true);
    }
  };

  const onBlurPasswordInput = (event) => {
    const passwordValue = event.target.value.trim();
    if (passwordValue === "") {
      setPassword("");
      setInvalidInput_message({
        ...invalidInput_message,
        password: "enter password",
      });
      setIsPasswordInputValid(false);
    } else {
      setPassword(passwordValue);
      setIsPasswordInputValid(true);
      setInvalidInput_message({ ...invalidInput_message, password: "" });
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    loginToSite(email, password)
      .then((userData) => {
        userDispatch(userLoginAction(userData));
        saveUserOnCookie(userData);
        navigate("/rooms", { replace: true });
      })
      .catch((err) => {
        const errorMessage = authErrorHandler(err);
        console.log(errorMessage);
        setInvalidInput_message({ ...invalidInput_message, ...errorMessage });
        if (invalidInput_message.email !== "") setIsEmailInputValid(false);
        if (invalidInput_message.password !== "")
          setIsPasswordInputValid(false);
      });
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group controlId="form-group-id" className="form-group">
        <h3>Login</h3>
        {errorMessage !== "" && (
          <div className="alert alert-danger error-message">{errorMessage}</div>
        )}
        {invalidInput_message.general !== "" && (
          <div className="alert alert-danger error-message">
            {invalidInput_message.general}
          </div>
        )}
        {!isEmailInputValid && (
          <Form.Text className="text-danger">
            {invalidInput_message.email}
          </Form.Text>
        )}
        <Form.Control
          className={!isEmailInputValid ? "is-invalid" : ""}
          type="text"
          placeholder="Enter your email"
          onBlur={onBlurEmailInput}
        />

        {!isPasswordInputValid && (
          <Form.Text className="text-danger">
            {invalidInput_message.password}
          </Form.Text>
        )}
        <Form.Control
          className={!isPasswordInputValid ? "is-invalid" : ""}
          type="password"
          placeholder="Enter password"
          onBlur={onBlurPasswordInput}
        />
        <div className="d-flex flex-row justify-content-between align-items-baseline">
          <Button type="submit" variant="primary" disabled={isSubmitDisabled()}>
            Submit
          </Button>
          <Nav.Link className="text-muted form-link" onClick={props.switchForm}>
            Subscribe
          </Nav.Link>
        </div>
      </Form.Group>
    </Form>
  );
};
export default LoginForm;
