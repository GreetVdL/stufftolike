import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import newsReducer from "./news";
import musicReducer from "./music";
import photosReducer from "./photos";
import likesReducer from "./likes";

const rootReducer = combineReducers({
  newsReducer,
  musicReducer,
  photosReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export const likesStore = createStore(likesReducer);
