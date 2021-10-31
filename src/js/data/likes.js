import * as redux from "redux";
// import { nanoid } from "nanoid";

/**
 * TYPES
 */
const ADD = "ADD";
const REMOVE = "REMOVE";

/**
 * ACTIONCREATORS
 */
export const add = (obj) => ({
  type: ADD,
  payload: obj,
});
export const remove = (obj) => ({
  type: REMOVE,
  payload: obj,
});

/**
 * INITIALSTATE
 */
const initState = [];

/**
 * REDUCER
 */
const likesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case REMOVE:
      return state.filter((obj) => obj !== payload);
    default:
      return state;
  }
};

export default likesReducer;
