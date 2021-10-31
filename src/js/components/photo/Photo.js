// import * as redux from "redux";
// import { photosStore, photosReducer } from "../../data/photos.js";
import { nanoid } from "nanoid";

class Photo {
  #name;
  #holder;
  // #photoItem;
  #description;
  #photo;
  // #id;
  constructor(name, img, desc) {
    this.#name = name;
    this.#holder = document.querySelector("#photos");
    this.likesHolder = document.querySelector(".likes__main");
    // this.#photoItem = photosStore
    //   .getState()
    //   .filter((photo) => photo.name === name)[0];
    // console.log(this.#photoItem);
    this.#description = desc;
    this.#photo = img;
    this.id = nanoid();
    this.liked = false;
    this.render(this.#holder);
  }

  render = (holder) => {
    holder.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card photo" id="${this.id}">
        <img class="photo__img" src="${this.#photo}" alt="${this.#description}">
        <p class="photo__desc">${this.#description}</p>
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

export default Photo;
