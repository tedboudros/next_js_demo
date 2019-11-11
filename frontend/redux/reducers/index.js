import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  authentication: authReducer,
  postReducer
});

export default rootReducer;
