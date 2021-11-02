import { nanoid } from "nanoid";
class Newsitem {
  constructor(name, date, title, intro, href) {
    this.name = name;
    this.holder = document.querySelector("#news");
    this.likesHolder = document.querySelector(".likes__main");
    this.title = title;
    this.date = date;
    this.intro = intro;
    this.link = href;
    this.id = "a" + nanoid();
    this.liked = false;
    this.render(this.holder);
  }

  render = (holder) => {
    holder.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card post" id="${this.id}">
        <h2 class="post__title">${this.title}</h2>
        <p class="post__date">${this.date.toDateString()}</p>
        <p class="post__intro">${this.intro}</p>
        <a class="post__link" href="${
          this.link
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
}

export default Newsitem;
