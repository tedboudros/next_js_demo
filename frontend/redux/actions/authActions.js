import Router from "next/router";
import axios from "axios";
import { AUTHENTICATE, DEAUTHENTICATE, USER } from "../types";
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
        Router.push("/");
        dispatch({
          type: AUTHENTICATE,
          payload: response.data.token
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
const reauthenticate = token => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: token });
  };
};

// removing the token
const deauthenticate = () => {
  return dispatch => {
    removeCookie("token");
    Router.push("/");
    dispatch({ type: DEAUTHENTICATE });
  };
};

const getUser = ({ token }, type) => {
  console.log(token);
  return dispatch => {
    axios
      .get(`${API}/${type}`)
      .then(response => {
        dispatch({ type: USER, payload: response.data.user });
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

export default {
  register,
  authenticate,
  reauthenticate,
  deauthenticate,
  getUser
};
