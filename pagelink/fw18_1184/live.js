import { fet, appe } from "./livefetapp.js";
let url = `https://api.cricapi.com/v1/currentMatches?apikey=f9442542-1875-46e8-9809-b3e8d36f1816`;
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

import {nav,footer} from "../main/transfer.js"
let navbar=nav()
let foot=footer()
//console.log(foot)
document.querySelector("#navbar").innerHTML=navbar;
 document.getElementById('footer').innerHTML=foot;