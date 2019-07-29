import "regenerator-runtime/runtime";
import { put, takeEvery, all, call } from "redux-saga/effects";
import {
  GET_POEMS,
  POEMS_RECEIVED,
  SEARCH_POEMS_SUCCESS,
  SEARCH_POEMS,
  SET_ERROR
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

function* searchPoems(action) {
  try {
    const poems = yield call(api.searchPoems, action);
    yield put({ type: SEARCH_POEMS_SUCCESS, payload: poems });
  } catch (error) {
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* watchSearchNotes() {
  yield takeEvery(SEARCH_POEMS, searchPoems);
}

export default function* rootSaga() {
  yield all([watchGetPoems(), watchSearchNotes()]);
}
