import * as redux from "redux";
import { nanoid } from "nanoid";

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
    id: nanoid(),
    name: "lama",
    description: "A fluffy lama",
  },
  {
    id: nanoid(),
    name: "palmtree",
    description: "A bunch of palmtrees",
  },
  {
    id: nanoid(),
    name: "santa",
    description: "A Santa Cruz Beach playground",
  },
  {
    id: nanoid(),
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
