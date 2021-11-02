import { nanoid } from "nanoid";

class Song {
  constructor(songURL, title, img, author, name) {
    this.holder = document.querySelector("#music");
    this.likesHolder = document.querySelector(".likes__main");
    this.author = author;
    this.title = title;
    this.path = songURL;
    this.photo = img;
    this.id = "a" + nanoid();
    this.liked = false;
    this.render(this.holder);
    this.star = document.querySelector(`#${this.id} .like`);
    this.name = name;
  }

  render = (holder) => {
    holder.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card song" id="${this.id}">
        <h2 class="song__author">${this.author}</h2>
        <h3 class="song__title">${this.title}</h3>
        <img class="song__photo" src="${this.photo}" alt= "{this.#title}">
        <audio class="song__path" controls src="${this.path}"></audio>
        <div class="like">
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
