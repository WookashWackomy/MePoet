import {
  GET_POEMS,
  POEMS_RECEIVED,
  SEARCH_POEMS,
  SEARCH_POEMS_SUCCESS
} from "./actions.js";

const initialState = {
  poems: [],
  loading: false
};

export default function poemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POEMS:
      return { ...state, loading: true };
    case POEMS_RECEIVED:
      console.log(action);
      return {
        ...state,
        poems: action.payload,
        loading: false
      };
    case SEARCH_POEMS:
      return { ...state, loading: true };
    case SEARCH_POEMS_SUCCESS:
      return {
        ...state,
        poems: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
