import * as redux from "redux";

import "../css/style.scss";

import Newsitem from "./components/newsitem";
import Song from "./components/song";
import Photo from "./components/photo";

// Songs and their images

const changesSong = new URL(
  "../sound/Black Sabbath-Changes.mp3",
  import.meta.url
);
const changesImg = new URL("../images/blacksabbath.jpeg", import.meta.url);

const mosquitoesSong = new URL(
  "../sound/Four Tet-No More Mosquitoes.mp3",
  import.meta.url
);
const mosquitoesImg = new URL("../images/fourtet.jpg", import.meta.url);

const biscayaSong = new URL("../sound/James Last-Biscaya.mp3", import.meta.url);
const biscayaImg = new URL("../images/jameslast.jpg", import.meta.url);

const danceSong = new URL(
  "../sound/JE Sunde-I Don't Care To Dance.mp3",
  import.meta.url
);
const danceImg = new URL("../images/jesunde.jpg", import.meta.url);

// Photos

const lama = new URL("../images/lama.jpg", import.meta.url);

// Create the newsitems

new Newsitem("democracy");
new Newsitem("luchtbalonnen");
new Newsitem("alligator");
new Newsitem("klimaat");
new Newsitem("zeespiegel");

// Create the songs

new Song(changesSong, "Changes", changesImg);
new Song(mosquitoesSong, "No More Mosquitoes", mosquitoesImg);
new Song(biscayaSong, "Biscaya", biscayaImg);
new Song(danceSong, "I don't care to dance", danceImg);

new Photo("lama", lama);
