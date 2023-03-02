import React, { useState } from "react";

import LoginForm from "./LoginForm";
import SubscribeForm from "./SubscribeForm";
import { useLocation } from "react-router-dom";

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const changeToLogin = () => {
    setIsLogin(true);
  };
  const showSubscribeForm = () => {
    setIsLogin(false);
  };
  const location = useLocation();
  const errorMessage = location.state?.needToLogin
    ? "You need to login to continue!"
    : "";

  return (
    <div className="page-container login-page">
      <div className="login-page__form">
        {isLogin ? (
          <LoginForm
            switchForm={showSubscribeForm}
            errorMessage={errorMessage}
          />
        ) : (
          <SubscribeForm switchForm={changeToLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;
