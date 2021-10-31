// import * as redux from "redux";
// import { newsStore, newsReducer } from "../../data/news.js";
import { nanoid } from "nanoid";
class Newsitem {
  #name;
  #holder;
  // #post;
  #title;
  #date;
  #intro;
  #link;
  constructor(name, date, title, intro, href) {
    this.#name = name;
    this.#holder = document.querySelector("#news");
    this.likesHolder = document.querySelector(".likes__main");
    // this.#post = newsStore.getState().filter((post) => post.name === name)[0];
    this.#title = title;
    this.#date = date;
    this.#intro = intro;
    this.#link = href;
    this.id = "a" + nanoid();
    this.liked = false;
    this.render(this.#holder);
    this.star = document.querySelector(`#${this.id} .like`);
  }

  render = (holder) => {
    holder.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card post" id="${this.id}">
        <h2 class="post__title">${this.#title}</h2>
        <p class="post__date">${this.#date}</p>
        <p class="post__intro">${this.#intro}</p>
        <a class="post__link" href="${
          this.#link
        }" target="blank">Read article</a>
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

export default Newsitem;
