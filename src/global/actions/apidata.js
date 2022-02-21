import axios from "axios";
import { USER_DATA_LOADED, USER_DATA_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load Data
export const loadData = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:8080/users/data");

    dispatch({
      type: USER_DATA_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_DATA_ERROR,
    });
  }
};
