import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  authentication: authReducer,
  post: postReducer
});

export default rootReducer;
