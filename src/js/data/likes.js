// import { nanoid } from "nanoid";

/**
 * TYPES
 */
const ADD = "ADD";
const REMOVE = "REMOVE";

/**
 * ACTIONCREATORS
 */
export const add = (name, age) => ({
  type: ADD,
  payload: {
    name,
    age,
  },
});
export const remove = (id) => ({
  type: REMOVE,
  payload: id,
});
export const age = (id) => ({
  type: AGE,
  payload: id,
});

/**
 * INITIALSTATE
 */
const initState = [];

/**
 * REDUCER
 */
export default (state = initState, { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, { name: payload.name, age: payload.age, id: nanoid() }];
    case AGE:
      return state.map((friend) =>
        friend.id === payload ? { ...friend, age: friend.age + 1 } : friend
      );
    case REMOVE:
      return state.filter((friend) => friend.id !== payload);
    default:
      return state;
  }
};
