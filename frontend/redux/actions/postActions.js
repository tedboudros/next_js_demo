import Router from "next/router";
import axios from "axios";
import { ADD_POST, ALL_POSTS, CHANGE_POST, ADD_LIKE } from "../types";
const API = "http://localhost:4000/api/post/";

// CREATES NEW POST
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
//type PROPERTY will be postID
//DELETE POST
const deletePost = ({ token, id }, type) => {
  if (type !== "delete") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios
      .post(`${API}/${type}`, { token, id })
      .then(response => {
        Router.push("/?deleted");
      })
      .catch(error => {
        if (error.message) {
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
//UPDATES POST
const changePost = ({ token, content }, type) => {
  return dispatch => {
    axios
      .post(`${API}/${type}`, { token, content })
      .then(response => {
        Router.push("/");
      })
      .catch(error => {
        if (error.message) {
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

//GETS ALL POSTS FROM mongoDB
const allPosts = ({ token }, type) => {
  if (type !== "all") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios
      .post(`${API}/${type}`, { token })
      .then(response => {
        dispatch({ type: ALL_POSTS, payload: response.data });
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

// ADD LIKES
const addLike = ({ token, postID }, type) => {
  if (type !== "postLike") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    axios.post(`${API}/${type}`, { token }).then(response => {
      dispatch(Router.push("/")).catch(error => {
        if (error.message) {
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
    });
  };
};

export default { addPost, allPosts, changePost, deletePost };
