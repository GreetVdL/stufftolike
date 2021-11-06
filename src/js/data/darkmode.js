/**
 * TYPES
 */

const TOGGLE_DARKMODE = "TOGGLE_DARKMODE";

/**
 * ACTIONCREATORS
 */

export const toggleDarkmode = (obj) => ({
  type: TOGGLE_DARKMODE,
});

/**
 * INITIALSTATE
 */

const initState = { darkmode: false };

/**
 * REDUCER
 */

const darkmodeReducer = (state = initState, { type }) => {
  switch (type) {
    case TOGGLE_DARKMODE:
      return { ...state, darkmode: !state.darkmode };
    default:
      return state;
  }
};

export default darkmodeReducer;
