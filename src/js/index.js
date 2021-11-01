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
    // if the card was liked
    if (targetObject.liked) {
      // make the star yellow
      event.target.classList.add("like--active");
      // add the card to the likesStore
      likesStore.dispatch(add(targetObject));
      // ik the card was unliked
    } else {
      // make the star white again
      event.target.classList.remove("like--active");
      // remove the card from the likesStore
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

// Render liked cards in the "liked" zone

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

// Handle cards in the "liked zone" being clicked

const handleLikedCardsclick = (event, className, reducer, action) => {
  // if the star is being clicked and the card is of a certain type (newsitem, song or photo)
  if (
    event.target.classList.contains("like") &&
    event.target.parentElement.classList.contains(`${className}`)
  ) {
    // get the corresponding object from the store
    const targetObject = store
      .getState()
      [reducer].filter((item) => item.id === event.target.parentElement.id)[0];
    // toggle whether it was liked
    store.dispatch(action(targetObject));
    // remove the card from the likesStore
    likesStore.dispatch(remove(targetObject));
    // make the star white again
    targetObject.star.classList.remove("like--active");
  }
};

// Click event listener for cards in the "liked" zone

document.querySelector(".likes__main").addEventListener("click", (event) => {
  handleLikedCardsClick(event, "photo", "photosReducer", togglePhoto);
  handleLikedCardsClick(event, "post", "newsReducer", toggleNews);
  handleLikedCardsClick(event, "song", "musicReducer", toggleSong);
});
