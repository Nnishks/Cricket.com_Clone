import { fet, appe, fet2, appe2 } from "../components/schedulefetc&append.js";
let url = `https://api.cricapi.com/v1/series_info?apikey=09f675d8-90b6-4f11-98ff-d5a7d53cb0c5&id=609a8eef-d782-44b3-b9f3-8a389c85cb90`;
let container = document.querySelector("#grid_box_body");
const heading = document.querySelector("#gid_box_head");

fet(url).then((res) => {
  console.log(res.data.matchList);
  appe(res.data.matchList, container, heading);
});

let url2 = `https://api.cricapi.com/v1/series_info?apikey=09f675d8-90b6-4f11-98ff-d5a7d53cb0c5&id=e71accc9-d837-43a6-935f-ffda66dcded7`;

let container2 = document.querySelector("#grid_box2_body2");
const heading2 = document.querySelector("#gid_box2_head2");
fet2(url2).then((res) => {
  console.log(res.data.matchList);
  appe2(res.data.matchList, container2, heading2);
});
// 09f675d8-90b6-4f11-98ff-d5a7d53cb0c5
