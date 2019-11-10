import Router from "next/router";
import axios from "axios";
import { REGISTER, AUTHENTICATE, DEAUTHENTICATE } from "../types";
import { API } from "../../config";
import { setCookie, removeCookie } from "../../utils/cookie";

// register user
const register = ({ name, email, password }, type) => {
  if (type !== "register") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios
      .post(`${API}/${type}`, {
        name,
        email,
        password
      })
      .then(response => {
        Router.push("/signin");
      })
      .catch(err => {
        switch (error.response.error) {
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
      });
  };
};
