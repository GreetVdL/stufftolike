import * as redux from "redux";

import "../css/style.scss";

import Newsitem from "./components/newsitem";
import Song from "./components/song";

// Songs

const changesURL = "../../../sound/Black Sabbath-Changes.mp3";

new Newsitem("democracy");
new Newsitem("luchtbalonnen");
new Newsitem("alligator");
new Newsitem("klimaat");
new Newsitem("zeespiegel");

new Song(changesURL, "Changes");
