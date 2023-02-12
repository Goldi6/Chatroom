import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

import validator from "validator";
import { UserContext } from "../../../context/userContext";
import { userLoginAction } from "../../../actions/userActions";

const LoginForm = (props) => {
  const { userData, userDispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInputValid, setIsEmailInputValid] = useState(true);
  const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);

  const isSubmitDisabled = () => {
    return email === "" || password === "";
  };

  const onBlurEmailInput = (event) => {
    const emailValue = event.target.value.trim();
    if (emailValue === "" || !validator.isEmail(emailValue)) {
      setEmail("");
      setIsEmailInputValid(false);
    } else {
      setEmail(emailValue);
      setIsEmailInputValid(true);
    }
  };

  const onBlurPasswordInput = (event) => {
    const passwordValue = event.target.value.trim();
    if (passwordValue === "") {
      setPassword("");
      setIsPasswordInputValid(false);
    } else {
      setPassword(passwordValue);
      setIsPasswordInputValid(true);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("login form ", email, password);
    userDispatch(userLoginAction({ email, password }));
    // if (userData) navigate("/rooms", { replace: true });
    navigate("/rooms", { replace: true });
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group controlId="form-group-id" className="form-group">
        <h3>Login</h3>
        {!isEmailInputValid && (
          <Form.Text className="text-danger">Please enter an Email</Form.Text>
        )}
        <Form.Control
          className={!isEmailInputValid ? "is-invalid" : ""}
          type="text"
          placeholder="Enter your email"
          onBlur={onBlurEmailInput}
        />

        {!isPasswordInputValid && (
          <Form.Text className="text-danger">Please enter a Password</Form.Text>
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
