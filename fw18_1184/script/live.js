import { fet, appe } from "../components/livefetapp.js";
let url = `https://api.cricapi.com/v1/currentMatches?apikey=09f675d8-90b6-4f11-98ff-d5a7d53cb0c5&offset=0`;
let container = document.querySelector("#grid_box_body");
const heading = document.querySelector("#gid_box_head");
const live = document.querySelector("#live");
const results = document.querySelector("#results");
const upcomming = document.querySelector("#upcomming");
const a3 = document.querySelector("#a3");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");

fet(url).then((res) => {
  upcomming.style.background = "none";
  results.style.background = "none";
  a1.style.color = "black";
  a3.style.color = "black";

  a2.style.color = "white";

  live.style.background = "linear-gradient(270deg, #d44030, #9b000d)";
  console.log(res.data);
  appe(res.data, container, heading);
});
