// import * as redux from "redux";
// import { musicStore, musicReducer } from "../../data/music.js";
import { nanoid } from "nanoid";

class Song {
  #holder;
  // #song;
  #author;
  #title;
  #path;
  #photo;
  constructor(songURL, title, img, author) {
    this.#holder = document.querySelector("#music");
    this.likesHolder = document.querySelector(".likes__main");
    // this.#song = musicStore
    //   .getState()
    //   .filter((song) => song.title === title)[0];
    this.#author = author;
    this.#title = title;
    this.#path = songURL;
    this.#photo = img;
    this.id = nanoid();
    this.liked = false;
    this.render(this.#holder);
    console.log("song constructor called");
  }

  render = (holder) => {
    holder.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card song" id="${this.id}">
        <h2 class="song__author">${this.#author}</h2>
        <h3 class="song__title">${this.#title}</h3>
        <img class="song__photo" src="${this.#photo}" alt= "{this.#title}">
        <audio class="song__path" controls src="${this.#path}"></audio>
        <div class="like">
        <svg class="icon icon-star-empty">
          <use href="#icon-star-full"></use>
        </svg>
      </div>
      </div>
      `
    );
  };
  //   #generateHTML() {
  //     this.#holder.insertAdjacentHTML(
  //       "beforeend",
  //       `
  //         <div class="square"></div>
  //       `
  //     );
  //     return this.#holder.querySelector(".square:last-child");
  //   }
  //   #setStyling() {
  //     const styles = {
  //       left: this.#x + "px",
  //       top: this.#y + "px",
  //       width: this.#size + "px",
  //       height: this.#size + "px",
  //       backgroundColor: "blue",
  //     };
  //     Object.assign(this.htmlRef.style, styles);
  //   }
  //   #setUpEvents() {
  //     this.htmlRef.onclick = () => {
  //       this.htmlRef.style.backgroundColor = "red";
  //       this.#clicked++;
  //       if (this.#clicked === 5) {
  //         this.#holder.removeChild(this.htmlRef);
  //       }
  //     };
  //   }
  //   get x() {
  //     return this.#x + "px";
  //   }
  //   get y() {
  //     return this.#y + "px";
  //   }
  //   set x(str) {
  //     this.#x = parseInt(str);
  //   }
}

export default Song;
