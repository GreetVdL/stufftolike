import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import newsReducer from "./news";
import musicReducer from "./music";
import photosReducer from "./photos";

// const saveStoreToLocalStorage = (store) => (next) => (action) => {
//   console.log(action.type);

//   console.group("prevState");
//   console.log(store.getState());
//   console.groupEnd("prevState");
//   next(action);
//   console.group("nextState");
//   console.log(store.getState());
//   console.groupEnd("nextState");

//   window.localStorage.setItem("store", JSON.stringify(store.getState()));
// };

const rootReducer = combineReducers({
  newsReducer,
  musicReducer,
  photosReducer,
});

export default createStore(
  rootReducer
  //   composeWithDevTools(applyMiddleware(logger))
);
