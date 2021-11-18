import { nanoid } from "nanoid";

class Song {
  constructor(songURL, title, img, author, name) {
    this.name = name;
    this.category = "music";
    this.holder = document.querySelector("#music");
    this.likesHolder = document.querySelector(".likes__main");
    this.author = author;
    this.title = title;
    this.path = songURL;
    this.photo = img;
    this.id = "a" + nanoid();
    this.liked = false;
    this.render(this.holder);
  }

  render = (holder) => {
    let extra = "";
    if (
      holder === this.likesHolder &&
      document.querySelector("span").classList.contains("darkmode")
    ) {
      extra = "darkmode";
    }
    holder.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card song" data-id="${this.id}">
        <h2 class="song__author">${this.author}</h2>
        <h3 class="song__title">${this.title}</h3>
        <img class="song__photo" src="${this.photo}" alt= "{this.#title}">
        <audio controls class="song__path" src="${this.path}" type="audio/mpeg"></audio>
        <div class="like ${extra}">
        <svg class="icon icon-star-empty">
          <use href="#icon-star-full"></use>
        </svg>
      </div>
      </div>
      `
    );
  };
}

export default Song;
