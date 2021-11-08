import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import newsReducer from "./news";
import musicReducer from "./music";
import photosReducer from "./photos";
import likesReducer from "./likes";
import darkmodeReducer from "./darkmode";
import filterReducer from "./filter";

const rootReducer = combineReducers({
  newsReducer,
  musicReducer,
  photosReducer,
});

export default createStore(rootReducer);

export const likesStore = createStore(likesReducer);

export const darkmodeStore = createStore(darkmodeReducer);

export const filterStore = createStore(filterReducer);
