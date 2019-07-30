import {
  SEARCH_POEMS_TWITTER,
  SEARCH_POEMS_TWITTER_SUCCESS
} from "./actions.js";

const initialState = {
  poems: [],
  loading: false
};

export default function twitterReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_POEMS_TWITTER:
      return { ...state, loading: true };
    case SEARCH_POEMS_TWITTER_SUCCESS:
      return {
        ...state,
        poems: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
