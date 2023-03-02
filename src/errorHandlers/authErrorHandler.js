export default function authErrorHandler(err) {
  err = err.message;
  console.log(err);
  switch (err) {
    case "EMAIL_EXISTS":
      return {
        email: "The email address is already in use by another account.",
      };
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return {
        general:
          "We have blocked all requests from this device due to unusual activity. Try again later.",
      };
    case "OPERATION_NOT_ALLOWED":
      return { general: "Password sign -in is disabled for this project." };
    case "EMAIL_NOT_FOUND":
      return { email: "this email is not registered, please sign up." }; //There is no user record corresponding to this identifier. The user may have been deleted.
    case "INVALID_PASSWORD":
      return { password: "The password is invalid." }; // or the user does not have a password.
    case "USER_DISABLED": {
      return {
        email: "The user account has been disabled by an administrator.",
      };
    }

    default:
      return { general: "Something went wrong. Please try again." };
  }
}
