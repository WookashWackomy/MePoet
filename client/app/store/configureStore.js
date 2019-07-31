import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootSaga from "../module/sagas";
import createSagaMiddleware from "redux-saga";
import poemReducer from "../module/poemReducer";
import errorReducer from "../module/errorReducer";
import twitterReducer from "../module/twitterReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default () => {
  const store = createStore(
    combineReducers({
      poems: poemReducer,
      error: errorReducer,
      twitter: twitterReducer,
      user: userReducer
    }),
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
