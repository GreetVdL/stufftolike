import * as redux from "redux";
import { musicStore, musicReducer } from "../../data/music.js";

class Song {
  #holder;
  #song;
  #author;
  #title;
  #path;
  #photo;
  constructor(songURL, title, img) {
    this.#holder = document.querySelector("#music");
    this.#song = musicStore.getState().filter((song) => song.title === title);
    this.#author = this.#song[0].author;
    this.#title = this.#song[0].title;
    this.#path = songURL;
    this.#photo = img;
    this.render();
  }

  render = () => {
    this.#holder.insertAdjacentHTML(
      "beforeend",
      `
      <div class="song">
        <h2 class="song__author">${this.#author}</h2>
        <h3 class="song__title">${this.#title}</h3>
        <img class="song__photo" src="${this.#photo}" alt= "{this.#title}">
        <audio class="song__path" controls src="${this.#path}"></audio>
        <div class="like"></div>
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
