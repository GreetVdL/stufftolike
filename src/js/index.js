import * as redux from "redux";

import "../css/style.scss";

import Newsitem from "./components/newsitem";
import Song from "./components/song";
import Photo from "./components/photo";

import store from "./data";
import { likesStore } from "./data";
import { togglePhoto } from "./data/photos";
import { toggleNews } from "./data/news";
import { toggleSong } from "./data/music";

// Click event listener for cards

document.querySelectorAll(".like").forEach((card) => {
  card.addEventListener("click", (event) => {
    // If the card is a photo, toggle photo
    if (event.target.parentElement.classList.contains("photo")) {
      const targetObject = store
        .getState()
        .photosReducer.filter(
          (item) => item.id === event.target.parentElement.id
        )[0];
      // targetObject.render(targetObject.likesHolder);
      store.dispatch(togglePhoto(targetObject));

      if (targetObject.liked) {
        event.target.style.color = "yellow";
      } else {
        event.target.style.color = "white";
      }
    }
    // If the card is a newsitem, toggle newsitem
    if (event.target.parentElement.classList.contains("post")) {
      const targetObject = store
        .getState()
        .newsReducer.filter(
          (item) => item.id === event.target.parentElement.id
        )[0];
      // targetObject.render(targetObject.likesHolder);
      store.dispatch(toggleNews(targetObject));
      // console.log(store.getState());
      if (targetObject.liked) {
        event.target.style.color = "yellow";
      } else {
        event.target.style.color = "white";
      }
    }
    // If the card is a song, toggle song
    if (event.target.parentElement.classList.contains("song")) {
      const targetObject = store
        .getState()
        .musicReducer.filter(
          (item) => item.id === event.target.parentElement.id
        )[0];
      // targetObject.render(targetObject.likesHolder);
      store.dispatch(toggleSong(targetObject));
      // console.log(store.getState());
      if (targetObject.liked) {
        event.target.style.color = "yellow";
      } else {
        event.target.style.color = "white";
      }
    }
  });
});
