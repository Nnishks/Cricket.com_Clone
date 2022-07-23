import { fet, appe } from "../components/livefetapp.js";
let url = `https://api.cricapi.com/v1/currentMatches?apikey=361679f1-8c93-4bf4-aa57-d33b67950cac&offset=0`;
let container = document.querySelector("#grid_box_body");
const heading = document.querySelector("#gid_box_head");
let a;
fet(url).then((res) => {
  console.log(res.data);
  appe(res.data, container, heading);
});
