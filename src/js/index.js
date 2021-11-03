import "../css/style.scss";

import store from "./data";
import { likesStore } from "./data";
import { togglePhoto } from "./data/photos";
import { toggleNews } from "./data/news";
import { toggleSong } from "./data/music";
import { add, remove } from "./data/likes";

import "animate.css";

// Save both stores to local storage

const saveStore = () => {
  window.localStorage.setItem("store", JSON.stringify(store.getState()));
};
const saveLikesStore = () => {
  window.localStorage.setItem(
    "likesStore",
    JSON.stringify(likesStore.getState())
  );
};

store.subscribe(saveStore);
likesStore.subscribe(saveLikesStore);

//  Function to update stars' color

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

// Function to handle left side cards being clicked: change the data

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
    //  update the star's color
    likesChanged(targetObject);
  }
};

// Click event listener for cards on the left side of the UI

document.querySelectorAll(".like").forEach((card) => {
  card.addEventListener("click", (event) => {
    handleCardsClick(event, "photo", "photosReducer", togglePhoto);
    handleCardsClick(event, "post", "newsReducer", toggleNews);
    handleCardsClick(event, "song", "musicReducer", toggleSong);
  });
});

// Function to render liked cards in the "liked" zone

const renderLikes = () => {
  // first make the likes zone empty again
  document.querySelector(".likes__main").innerHTML = "";
  // then render each card from the likesStore
  likesStore.getState().forEach((obj) => {
    obj.render(obj.likesHolder);
    // and color its star yellow
    document
      .querySelector(`.likes__main #${obj.id} .like`)
      .classList.add("like--active");
  });
};

likesStore.subscribe(renderLikes);

// Function to handle cards in the "liked zone" being clicked

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
    //  update the star's color
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
  const left = document.querySelector("#root > main");
  const right = document.querySelector(".likes");

  if (event.currentTarget.classList.contains("heart--active")) {
    right.style.top = `${window.scrollY + 8}px`;
    right.classList.remove("animate__backOutRight");
    right.classList.add("animate__backInRight");
    // window.scrollTo(0, 0);
  } else {
    right.classList.remove("animate__backInRight");
    right.classList.add("animate__backOutRight");
  }
});

// Sync application with local storage

// Sync store

const lsStore = JSON.parse(window.localStorage.getItem("store"));

const reduxStore = store.getState();

const syncStore = (reducer, action) => {
  // get the matching liked card from the store
  lsStore[reducer].forEach((object) => {
    if (object.liked) {
      const targetObject = reduxStore[reducer].filter(
        (obj) => obj.name === object.name
      )[0];
      // toggle whether it was liked
      store.dispatch(action(targetObject));
      //  set its star's color
      likesChanged(targetObject);
    }
  });
};

syncStore("newsReducer", toggleNews);
syncStore("musicReducer", toggleSong);
syncStore("photosReducer", togglePhoto);

// Sync likesStore
// the likesStore needs to be synced separately so that the liked cards get rendered in the right order

const lsLikesStore = JSON.parse(window.localStorage.getItem("likesStore"));

const syncLikesStore = () => {
  // find the liked cards
  lsLikesStore.forEach((obj) => {
    const storeNews = store.getState().newsReducer;
    const storeSongs = store.getState().musicReducer;
    const storePhotos = store.getState().photosReducer;
    let targetObject;
    storeNews.forEach((object) => {
      if (obj.name === object.name) {
        targetObject = object;
      }
    });
    storeSongs.forEach((object) => {
      if (obj.name === object.name) {
        targetObject = object;
      }
    });
    storePhotos.forEach((object) => {
      if (obj.name === object.name) {
        targetObject = object;
      }
    });
    // and add them to the likesStore
    likesStore.dispatch(add(targetObject));
  });
};

syncLikesStore();
