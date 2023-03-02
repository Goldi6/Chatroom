import Axios from "axios";
export const subscribeToSite = async (email, password) => {
  try {
    const res = await Axios.post(process.env.REACT_APP_SUBSCRIBE, {
      email,
      password,
      returnSecureToken: true,
    });
    //console.log(res.data.idToken);
    return {
      token: res.data.idToken,
      user: { username: "ReactUser", id: res.data.localId },
    };
  } catch (err) {
    if (err.response && err.response.status === 400) {
      throw new Error(err.response.data.error.message);
    }
  }
};
export const loginToSite = async (email, password) => {
  try {
    const res = await Axios.post(process.env.REACT_APP_LOGIN, {
      email,
      password,
      returnSecureToken: true,
    });
    //    console.log(res.data);

    return {
      token: res.data.idToken,
      user: { username: "ReactUser", id: res.data.localId },
    };
  } catch (err) {
    if (err.response && err.response.status === 400) {
      throw new Error(err.response.data.error.message);
    }
  }
};

// export const getUser = async (token) => {
//   try {
//     const res = await Axios.post(process.env.REACT_APP_GET_USER, {
//       idToken: token,
//     });

//     console.log(res.data.users[0]);
//     return {
//       token: token,
//       user: { username: "ReactUser", id: res.data.users[0].localId },
//     };
//   } catch (err) {
//     if (err.response && err.response.status === 400) {
//       throw new Error(err.response.data.error.message);
//     }
//   }
// };
