import * as redux from "redux";

import "../css/style.scss";

import Newsitem from "./components/newsitem";
import Song from "./components/song";
import Photo from "./components/photo";
import { photosStore } from "./data/photos";
import { musicStore } from "./data/music";
import { newsStore } from "./data/news";

// Click event listener for cards

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (event) => {
    console.log(event.target.parentElement.id);
    event.target.style.color = "yellow";
    if (event.target.parentElement.classList.contains("photo")) {
      const targetObject = photosStore
        .getState()
        .filter((item) => item.id === event.target.parentElement.id)[0];
      targetObject.render(targetObject.likesHolder);
    }
  });
});
