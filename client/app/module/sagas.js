import "regenerator-runtime/runtime";
import { put, takeEvery, all, call } from "redux-saga/effects";
import {
  GET_POEMS,
  POEMS_RECEIVED,
  GET_MY_POEMS,
  MY_POEMS_RECEIVED,
  SEARCH_POEMS_SUCCESS,
  SEARCH_POEMS,
  SET_ERROR,
  NEW_POEM,
  POEM_POSTED,
  DELETE_POEM,
  POEM_DELETED,
  EDIT_POEM,
  POEM_EDITED,
  SEARCH_POEMS_TWITTER,
  SEARCH_POEMS_TWITTER_SUCCESS,
  LOGIN_FACEBOOK,
  LOGIN_FACEBOOK_SUCCESS
} from "./actions";
import * as api from "./api";
//////////////////////////

function* getPoems() {
  try {
    const poems = yield call(api.fetchPoems);
    yield put({ type: POEMS_RECEIVED, payload: poems });
  } catch (error) {
    console.log(error);
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* watchGetPoems() {
  yield takeEvery(GET_POEMS, getPoems);
}
/////////////////////////////////////
function* getMyPoems(action) {
  try {
    const poems = yield call(api.fetchMyPoems, action);
    yield put({ type: MY_POEMS_RECEIVED, payload: poems });
  } catch (error) {
    console.log(error);
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* watchGetMyPoems() {
  yield takeEvery(GET_MY_POEMS, getMyPoems);
}
/////////////////////////////////////
function* searchPoems(action) {
  try {
    const poems = yield call(api.searchPoems, action);
    yield put({ type: SEARCH_POEMS_SUCCESS, payload: poems });
  } catch (error) {
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* watchSearchPoems() {
  yield takeEvery(SEARCH_POEMS, searchPoems);
}
/////////////////////////////////////
function* searchPoemsTwitter(action) {
  console.log("XD");
  try {
    const poems = yield call(api.searchPoemsTwitter, action);
    yield put({ type: SEARCH_POEMS_TWITTER_SUCCESS, payload: poems });
  } catch (error) {
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* watchSearchPoemsTwitter() {
  yield takeEvery(SEARCH_POEMS_TWITTER, searchPoemsTwitter);
}

/////////////////////////////////////
function* postPoem(action) {
  try {
    const poemResponse = yield call(api.postPoem, action);
    yield put({ type: POEM_POSTED, payload: poemResponse });
  } catch (error) {
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* watchPostPoem() {
  yield takeEvery(NEW_POEM, postPoem);
}
////////////////////////////////////
function* deletePoem(action) {
  try {
    yield call(api.deletePoem, action);
    yield put({ type: POEM_DELETED, payload: action.payload });
  } catch (error) {
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* watchDeletePoem() {
  yield takeEvery(DELETE_POEM, deletePoem);
}

////////////////////////////////////

function* editPoem(action) {
  try {
    yield call(api.editPoem, action);
    yield put({ type: POEM_EDITED, payload: action.payload });
  } catch (error) {
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* watchEditPoem() {
  yield takeEvery(EDIT_POEM, editPoem);
}

function* loginFacebook(action) {
  try {
    yield call(api.loginFacebok, action);
    yield put({ type: LOGIN_FACEBOOK_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* watchLoginFacebook() {
  yield takeEvery(LOGIN_FACEBOOK, loginFacebook);
}

export default function* rootSaga() {
  yield all([
    watchGetPoems(),
    watchSearchPoems(),
    watchPostPoem(),
    watchEditPoem(),
    watchDeletePoem(),
    watchSearchPoemsTwitter(),
    watchLoginFacebook(),
    watchGetMyPoems()
  ]);
}
