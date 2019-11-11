import Router from "next/router";
import axios from "axios";
import { ADD_POST, ALL_POSTS } from "../types";
const API = "http://localhost:4000/api/post/";

const addPost = ({ token, content }, type) => {
  if (type !== "add") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios
      .post(`${API}/${type}`, { token, content })
      .then(response => {
        Router.push("/");
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
const allPosts = ({ token }, type) => {
  if (type !== "all") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios
      .post(`${API}/${type}`, { token })
      .then(response => {
        dispatch({ type: ALL_POSTS, payload: response.data });
        Router.push("/");
      })
      .catch(error => {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              alert(error.response.data.message);
              break;
            case 401:
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

export default { addPost, allPosts };
