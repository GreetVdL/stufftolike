import { nanoid } from "nanoid";

class Photo {
  constructor(name, img, desc) {
    this.name = name;
    this.holder = document.querySelector("#photos");
    this.likesHolder = document.querySelector(".likes__main");
    this.description = desc;
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
      <div class="card photo" id="${this.id}">
        <img class="photo__img" src="${this.photo}" alt="${this.description}">
        <p class="photo__desc">${this.description}</p>
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

export default Photo;
