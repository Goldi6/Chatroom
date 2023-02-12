export const initialUserData = { user: null };

export default function userReducer(userData, action) {
  // const myUser = { username: "ReactUser", id: 12345 };
  // const myUserCredentials = { email: "a@a.com", password: "123QWEasd" };

  switch (action.type) {
    case "USER_LOGIN":
      // const userVerify =
      //   action.userCredentials.email === myUserCredentials.email &&
      //   action.userCredentials.password === myUserCredentials.password;
      // if (userVerify) {
      //   return myUser;
      // } else {
      //   return undefined;
      // }
      return { user: { ...action.user } };
    case "USER_LOGOUT":
      return { user: null };
    default:
      return { ...userData };
  }
}
