import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootSaga from "../module/sagas";
import createSagaMiddleware from "redux-saga";
import poemReducer from "../module/notesReducer";
import errorReducer from "../module/errorReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default () => {
  const store = createStore(
    combineReducers({
      poemReducer: poemReducer,
      errorReducer: errorReducer
    }),
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
