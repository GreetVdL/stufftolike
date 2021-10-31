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
    name: "lama",
    description: "A fluffy lama",
  },
  {
    name: "palmtree",
    description: "A bunch of palmtrees",
  },
  {
    name: "santa",
    description: "A Santa Cruz Beach playground",
  },
  {
    name: "beach",
    description: "Lampuuk Beach in Aceh-Indonesia.",
  },
];

/**
 * REDUCER
 */
export const photosReducer = (state = initialState, { type }) => state;

/**
 * STORE
 */
export const photosStore = redux.createStore(photosReducer);
