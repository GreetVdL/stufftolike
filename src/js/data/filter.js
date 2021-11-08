/**
 * TYPES
 */

const TOGGLE_NEWS_HIDE = "TOGGLE_NEWS_HIDE";
const TOGGLE_MUSIC_HIDE = "TOGGLE_MUSIC_HIDE";
const TOGGLE_PHOTOS_HIDE = "TOGGLE_PHOTOS_HIDE";

/**
 * ACTIONCREATORS
 */

export const toggleNewsHide = (obj) => ({
  type: TOGGLE_NEWS_HIDE,
});
export const toggleMusicHide = (obj) => ({
  type: TOGGLE_MUSIC_HIDE,
});
export const togglePhotosHide = (obj) => ({
  type: TOGGLE_PHOTOS_HIDE,
});

/**
 * INITIALSTATE
 */

const initState = { newsHide: false, musicHide: false, photosHide: false };

/**
 * REDUCER
 */

const filterReducer = (state = initState, { type }) => {
  switch (type) {
    case TOGGLE_NEWS_HIDE:
      return { ...state, newsHide: !state.newsHide };
    case TOGGLE_MUSIC_HIDE:
      return { ...state, musicHide: !state.musicHide };
    case TOGGLE_PHOTOS_HIDE:
      return { ...state, photosHide: !state.photosHide };
    default:
      return state;
  }
};

export default filterReducer;
