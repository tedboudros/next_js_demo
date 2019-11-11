import { ALL_POSTS } from "../types";

const initialState = {
  posts: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_POSTS:
      return Object.assign({}, state, { posts: action.payload.posts });
    default:
      return state;
  }
};
