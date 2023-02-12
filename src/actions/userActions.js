export const userLoginAction = (userCredentials = {}) => ({
  type: "USER_LOGIN",
  // userCredentials,
  user: { username: "ReactUser", id: "12345" },
});

export const userLogoutAction = () => ({
  type: "USER_LOGOUT",
});
