import { LOGIN_FACEBOOK, LOGIN_FACEBOOK_SUCCESS } from "./actions.js";

const initialState = {
  fbID: "",
  username: "",
  email: "",
  isLoggedIn: false,
  loading: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FACEBOOK:
      return { ...state, loading: true };
    case LOGIN_FACEBOOK_SUCCESS:
      const data = action.payload;
      console.log(action.payload);
      return {
        ...state,
        fbID: data.id,
        username: data.name,
        email: data.email,
        isLoggedIn: true,
        loading: false
      };
    default:
      return state;
  }
}
