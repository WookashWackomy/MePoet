import { SET_ERROR } from "./actions";

export default function errorReducer(state = null, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
}
