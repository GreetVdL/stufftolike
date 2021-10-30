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
  },
  {
    author: "Four Tet",
    title: "No More Mosquitoes",
  },
  {
    author: "James Last",
    title: "Biscaya",
  },
  {
    author: "J.E. Sunde",
    title: "I don't care to dance",
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
