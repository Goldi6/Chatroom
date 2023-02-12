import React, { useState } from "react";

import LoginForm from "./LoginForm";
import SubscribeForm from "./SubscribeForm";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const changeToLogin = () => {
    setIsLogin(true);
  };
  const showSubscribeForm = () => {
    setIsLogin(false);
  };

  return (
    <div className="page-container login-page">
      <div className="login-page__form">
        {isLogin ? (
          <LoginForm switchForm={showSubscribeForm} />
        ) : (
          <SubscribeForm switchForm={changeToLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;
