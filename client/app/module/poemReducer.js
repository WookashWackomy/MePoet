import {
  GET_POEMS,
  POEMS_RECEIVED,
  GET_MY_POEMS,
  MY_POEMS_RECEIVED,
  SEARCH_POEMS,
  SEARCH_POEMS_SUCCESS,
  NEW_POEM,
  POEM_POSTED,
  DELETE_POEM,
  POEM_DELETED,
  EDIT_POEM,
  POEM_EDITED
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
    case GET_MY_POEMS:
      return { ...state, loading: true };
    case MY_POEMS_RECEIVED:
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
    case NEW_POEM:
      return {
        ...state,
        loading: true
      };
    case POEM_POSTED:
      return {
        ...state,
        poems: [action.payload, ...state.poems],
        loading: false
      };
    case DELETE_POEM:
      return { ...state, loading: true };
    case POEM_DELETED:
      const newPoems = state.poems.filter(
        oldNote => oldNote.id !== action.payload.id
      );
      return { ...state, poems: newPoems, loading: false };
    case EDIT_POEM:
      return { ...state, loading: true };
    case POEM_EDITED:
      return {
        ...state,
        poems: state.poems.map(note =>
          note.id === action.payload.id ? action.payload : note
        ),
        loading: false
      };
    default:
      return state;
  }
}
