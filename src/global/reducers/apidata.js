import { USER_DATA_LOADED, USER_DATA_ERROR } from "../actions/types";

const initialState = {
  loading: true,
  list: null,
  error: null,
};

export default function apidata(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_DATA_LOADED:
      return {
        ...state,
        loading: false,
        list: payload,
      };
    case USER_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
