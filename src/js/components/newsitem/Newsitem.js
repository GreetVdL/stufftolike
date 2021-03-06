import { nanoid } from "nanoid";
import moment from "moment";
import "moment/locale/nl";
class Newsitem {
  constructor(name, date, title, intro, href) {
    this.name = name;
    this.category = "news";
    this.holder = document.querySelector("#news");
    this.likesHolder = document.querySelector(".likes__main");
    this.title = title;
    this.date = date;
    this.moment = moment(this.date).locale("nl-be").format("dddd D MMM YYYY");
    this.intro = intro;
    this.link = href;
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
      <div class="card post" data-id="${this.id}">
        <h2 class="post__title">${this.title}</h2>
        <p class="post__date">${this.moment}</p>
        <p class="post__intro">${this.intro}</p>
        <a class="post__link" href="${this.link}" target="blank">Read article</a>
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

export default Newsitem;
