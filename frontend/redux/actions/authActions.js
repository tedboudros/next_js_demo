import Router from "next/router";
import axios from "axios";
import { AUTHENTICATE, DEAUTHENTICATE } from "../types";
const API = "http://localhost:4000/api/user";
import { setCookie, removeCookie } from "../../utils/cookie";

const register = ({ username, email, password }, type) => {
  if (type !== "register") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios
      .post(`${API}/${type}`, { username, email, password })
      .then(response => {
        Router.push("/signin");
      })
      .catch(error => {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              alert(error.response.data.message);
              break;
            case 500:
              alert("Interval server error! Try again!");
              break;
            default:
              alert(error.response.data.message);
              break;
          }
        }
      });
  };
};
// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ email, password }, type) => {
  if (type !== "login") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios
      .post(`${API}/${type}`, { email, password })
      .then(response => {
        setCookie("token", response.data.token);
        setCookie("user_id", response.data.user._id);
        setCookie("user_name", response.data.user.username);
        Router.push("/");
        dispatch({
          type: AUTHENTICATE,
          payload: response.data
        });
      })
      .catch(error => {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              alert(error.response.data.message);
              break;
            case 500:
              alert("Interval server error! Try again!");
              break;
            default:
              alert(error.response.data.message);
              break;
          }
        }
      });
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = auth => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: auth });
  };
};

// removing the token
const deauthenticate = () => {
  return dispatch => {
    removeCookie("token");
    removeCookie("user_id");
    removeCookie("user_name");
    Router.push("/");
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  register,
  authenticate,
  reauthenticate,
  deauthenticate
};
