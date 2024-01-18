import { combineReducers } from "redux";
import posts from "./post.reducers.js";
import modal from "./modal.reducers.js";

export default combineReducers({
  posts,
  modal,
});
