import env from "react-dotenv";

const loginFetch = async (user) => {
  const response = await fetch(`http://localhost:${env.BE_PORT}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
};

const authFetch = async (user) => {
  const response = await fetch(`http://localhost:${env.BE_PORT}/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
};

export const startLoading = () => {
  return (dispatch) => {
    dispatch({
      type: "loading",
    });
  };
};

export const login = (user) => {
  return async (dispatch) => {
    const res = await loginFetch(user);
    //Timeout purely for the loading animation
    setTimeout(() => {
      if (res.status === 200) {
        localStorage.setItem("seemsneat-access-token", res.token);
        console.log(user.id);
        dispatch({
          type: "loggedIn",
          payload: user.id,
        });
      } else {
        dispatch({
          type: "unauthorized",
        });
      }
    }, 1000);
  };
};

export const localStorageLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("seemsneat-access-token");
    if (token) {
      const res = await authFetch({ token: token });
      //Timeout purely for the loading animation
      setTimeout(() => {
        if (res.status === 200) {
          dispatch({
            type: "loggedIn",
            payload: res.id,
          });
        } else {
          localStorage.removeItem("seemsneat-access-token");
          dispatch({
            type: "invalidAccessToken",
          });
        }
      }, 1000);
    } else {
      dispatch({
        type: "noLocalStorage",
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("seemsneat-access-token");
    dispatch({
      type: "logout",
    });
  };
};
