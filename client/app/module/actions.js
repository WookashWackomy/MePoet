export const SET_ERROR = "SET_ERROR";

export const GET_POEMS = "GET_POEMS";
export const POEMS_RECEIVED = "POEMS_RECEIVED";

export const getPoems = () => ({
  type: GET_POEMS
});

export const SEARCH_POEMS = "SEARCH_POEMS";
export const SEARCH_POEMS_SUCCESS = "SEARCH_POEMS_SUCCESS";

export const searchPoems = query => ({
  type: SEARCH_POEMS,
  payload: query
});

export const SEARCH_POEMS_TWITTER = "SEARCH_POEMS_TWITTER";
export const SEARCH_POEMS_TWITTER_SUCCESS = "SEARCH_POEMS_TWITTER_SUCCESS";

export const searchPoemsTwitter = query => ({
  type: SEARCH_POEMS_TWITTER,
  payload: query
});

export const NEW_POEM = "NEW_POEM";
export const POEM_POSTED = "POEM_POSTED";

export const postPoem = poem => ({
  type: NEW_POEM,
  payload: poem
});

export const DELETE_POEM = "DELETE_POEM";
export const POEM_DELETED = "POEM_DELETED";

export const deletePoem = poem => ({
  type: DELETE_POEM,
  payload: poem
});

export const EDIT_POEM = "EDIT_POEM";
export const POEM_EDITED = "POEM_EDITED";

export const editPoem = poem => ({
  type: EDIT_POEM,
  payload: poem
});
