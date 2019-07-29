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

export const SET_ERROR = "SET_ERROR";
