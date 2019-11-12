import { AUTHENTICATE, DEAUTHENTICATE } from "../types";

const initialState = {
  token: null,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return Object.assign({}, state, {
        token: action.payload.token,
        user: {
          id: action.payload.user._id,
          username: action.payload.user.username
        }
      });
    case DEAUTHENTICATE:
      return { token: null, user: null };
    default:
      return state;
  }
};
