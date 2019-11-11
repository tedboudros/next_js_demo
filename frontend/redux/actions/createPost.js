import Router from "next/router";
import axios from "axios";
import { ADD_POST, UPDATE_POST, DELETE_POST } from "../types";
const API = "http://localhost:4000/api/post/add";

//dispatched when item needs to be created
const addPost = content => async dispatch => {
  const res = await axios.post(`"${API}"`, { content });

  dispatch({ type: ADD_POST, payload: res.data });
};

export default addPost;
