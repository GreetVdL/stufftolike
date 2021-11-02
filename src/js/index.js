import "../css/style.scss";

import store from "./data";
import { likesStore } from "./data";
import { togglePhoto } from "./data/photos";
import { toggleNews } from "./data/news";
import { toggleSong } from "./data/music";
import { add, remove } from "./data/likes";

// save to local storage

const saveStore = () => {
  window.localStorage.setItem("store", JSON.stringify(store.getState()));
};
const saveLikesStore = () => {
  window.localStorage.setItem("likesStore", JSON.stringify(store.getState()));
};

store.subscribe(saveStore);
likesStore.subscribe(saveLikesStore);

// update UI when data has changed
//  handle what happens after like state being toggled

const likesChanged = (obj) => {
  // if the card was liked
  if (obj.liked) {
    // make the star yellow
    document.querySelector(`#${obj.id} .like`).classList.add("like--active");
    // ik the card was unliked
  } else {
    // make the star white again
    document.querySelector(`#${obj.id} .like`).classList.remove("like--active");
  }
};

// Change data when left card is clicked
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
      // add the card to the likesStore
      likesStore.dispatch(add(targetObject));
      // ik the card was unliked
    } else {
      // remove the card from the likesStore
      likesStore.dispatch(remove(targetObject));
    }
    //  handle what happens after like state being toggled
    likesChanged(targetObject);
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
    // console.log(obj);
    obj.render(obj.likesHolder);

    document
      .querySelector(`.likes__main #${obj.id} .like`)
      .classList.add("like--active");
  });
};

likesStore.subscribe(renderLikes);

// Handle cards in the "liked zone" being clicked

const handleLikedCardsClick = (event, className, reducer, action) => {
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
    //  handle what happens after like state being toggled
    likesChanged(targetObject);
  }
};

// Click event listener for cards in the "liked" zone

document.querySelector(".likes__main").addEventListener("click", (event) => {
  handleLikedCardsClick(event, "photo", "photosReducer", togglePhoto);
  handleLikedCardsClick(event, "post", "newsReducer", toggleNews);
  handleLikedCardsClick(event, "song", "musicReducer", toggleSong);
});

// Show and hide likes zone when heart icon gets clicked on small screens

document.querySelector(".heart").addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("heart--active");
  if (event.currentTarget.classList.contains("heart--active")) {
    document.querySelector(".likes").style.display = "block";
    document.querySelector("#root > main").style.display = "none";
  } else {
    document.querySelector(".likes").style.display = "none";
    document.querySelector("#root > main").style.display = "block";
  }
});

// Sync application with local storage

const lsStore = JSON.parse(window.localStorage.getItem("store"));

const reduxStore = store.getState();

const sync = (reducer, action) => {
  lsStore[reducer].forEach((object) => {
    if (object.liked) {
      const targetObject = reduxStore[reducer].filter(
        (obj) => obj.name === object.name
      )[0];
      console.log(targetObject);
      // toggle whether it was liked
      store.dispatch(action(targetObject));

      // add the card to the likesStore
      likesStore.dispatch(add(targetObject));

      //  handle what happens after like state being toggled
      likesChanged(targetObject);
    }
  });
};

sync("newsReducer", toggleNews);
sync("musicReducer", toggleSong);
sync("photosReducer", togglePhoto);
