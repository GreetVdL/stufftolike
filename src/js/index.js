import * as redux from "redux";

import "../css/style.scss";

import store from "./data";
import { likesStore } from "./data";
import { togglePhoto } from "./data/photos";
import { toggleNews } from "./data/news";
import { toggleSong } from "./data/music";
import { add, remove } from "./data/likes";

// Handle left side cards being clicked

const handleCardsClick = (event, className, reducer, action) => {
  // if the card is of a certain type (newsitem, song or photo)
  if (event.target.parentElement.classList.contains(`${className}`)) {
    // get the corresponding object from the store
    const targetObject = store
      .getState()
      [reducer].filter((item) => item.id === event.target.parentElement.id)[0];
    // toggle whether it was liked
    store.dispatch(action(targetObject));

    if (targetObject.liked) {
      event.target.classList.add("like--active");
      likesStore.dispatch(add(targetObject));
    } else {
      event.target.classList.remove("like--active");
      likesStore.dispatch(remove(targetObject));
    }
  }
};

// Click event listener for cards on the left side

document.querySelectorAll(".like").forEach((card) => {
  card.addEventListener("click", (event) => {
    handleCardsClick(event, "photo", "photosReducer", togglePhoto);
    handleCardsClick(event, "post", "newsReducer", toggleNews);
    handleCardsClick(event, "song", "musicReducer", toggleSong);
  });
});

// Render liked cards on the right side

renderLikes = () => {
  document.querySelector(".likes__main").innerHTML = "";
  likesStore.getState().forEach((obj) => {
    obj.render(obj.likesHolder);

    document
      .querySelector(`.likes__main #${obj.id} .like`)
      .classList.add("like--active");
  });
};

likesStore.subscribe(renderLikes);

// Click event listener for liked cards

document.querySelector(".likes__main").addEventListener("click", (event) => {
  // If the card is a photo, remove photo
  if (
    event.target.classList.contains("like") &&
    event.target.parentElement.classList.contains("photo")
  ) {
    const targetObject = store
      .getState()
      .photosReducer.filter(
        (item) => item.id === event.target.parentElement.id
      )[0];
    // targetObject.render(targetObject.likesHolder);
    store.dispatch(togglePhoto(targetObject));
    likesStore.dispatch(remove(targetObject));
    // targetObject.star.style.color = "white";
    targetObject.star.classList.remove("like--active");
  }
  // If the card is a newsitem, remove newsitem
  if (
    event.target.classList.contains("like") &&
    event.target.parentElement.classList.contains("post")
  ) {
    const targetObject = store
      .getState()
      .newsReducer.filter(
        (item) => item.id === event.target.parentElement.id
      )[0];
    // targetObject.render(targetObject.likesHolder);
    store.dispatch(toggleNews(targetObject));
    likesStore.dispatch(remove(targetObject));
    // targetObject.star.style.color = "white";
    targetObject.star.classList.remove("like--active");
  }
  // If the card is a song, remove song
  if (
    event.target.classList.contains("like") &&
    event.target.parentElement.classList.contains("song")
  ) {
    const targetObject = store
      .getState()
      .musicReducer.filter(
        (item) => item.id === event.target.parentElement.id
      )[0];
    // targetObject.render(targetObject.likesHolder);
    store.dispatch(toggleSong(targetObject));
    // console.log(store.getState());

    likesStore.dispatch(remove(targetObject));
    // targetObject.star.style.color = "white";
    targetObject.star.classList.remove("like--active");
  }
});
