import * as redux from "redux";
import Photo from "../components/photo";

// Photos

const lama = new URL("../../images/lama.jpg", import.meta.url);
const palmtrees = new URL("../../images/palmtrees.jpg", import.meta.url);
const santa = new URL("../../images/santacruz.jpg", import.meta.url);
const beach = new URL("../../images/beach.jpg", import.meta.url);

/**
 * ACTIONTYPES
 */

const TOGGLEPHOTO = "TOGGLEPHOTO";

/**
 * ACTION CREATORS
 */

export const togglePhoto = (obj) => ({
  type: TOGGLEPHOTO,
  payload: obj,
});

/**
 * INITIAL DATA
 */

const initialState = [
  new Photo("lama", lama, "A fluffy lama"),
  new Photo("palmtree", palmtrees, "A bunch of palmtrees"),
  new Photo("santa", santa, "A Santa Cruz Beach playground"),
  new Photo("beach", beach, "Lampuuk Beach in Aceh-Indonesia."),
];

/**
 * REDUCER
 */
const photosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLEPHOTO:
      return [...state].map((el) => {
        if (el === payload) {
          el.liked = !el.liked;
        }
        return el;
      });
    default:
      return state;
  }
};

export default photosReducer;
