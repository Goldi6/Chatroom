export const userLoginAction = ({ user, token }) => ({
  type: "USER_LOGIN",
  user,
  token,
});

export const userLogoutAction = () => ({
  type: "USER_LOGOUT",
});
