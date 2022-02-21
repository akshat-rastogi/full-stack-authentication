import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import apidata from "./apidata";

export default combineReducers({
  alert,
  auth,
  apidata,
});
