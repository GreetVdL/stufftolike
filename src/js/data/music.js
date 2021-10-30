import * as redux from "redux";

/**
 * ACTIONTYPES
 */

/**
 * ACTION CREATORS
 */

/**
 * INITIAL DATA
 */

export const initialState = [
  {
    author: "Black Sabbath",
    title: "Changes",
    path: "Black Sabbath-Changes.mp3",
    photo: "blacksabbath.jpg",
  },
];

/**
 * REDUCER
 */
export const musicReducer = (state = initialState, { type }) => state;

/**
 * STORE
 */
export const musicStore = redux.createStore(musicReducer);
