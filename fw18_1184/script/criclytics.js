import {
  fetchingdata,
  appendfunc,
  fetchingdata2,
  appendfunc2,
  fetchingdata3,
  appendfunc3,
} from "../components/fetcappend.js";
let upcomming_div = document.querySelector("#upcomming2");

let url = `https://api.cricapi.com/v1/cricScore?apikey=09f675d8-90b6-4f11-98ff-d5a7d53cb0c5`;
fetchingdata(url).then((res) => {
  //   console.log(res.data);
  appendfunc(res.data, upcomming_div);
});
let live_div = document.querySelector("#live_div2");

let url1 = `https://api.cricapi.com/v1/currentMatches?apikey=09f675d8-90b6-4f11-98ff-d5a7d53cb0c5&offset=0`;
fetchingdata2(url1).then((res) => {
  // console.log(res.data);
  appendfunc2(res.data, live_div);
});
// completed_div2
let completed_div2 = document.querySelector("#completed_div2");
let arr = [];
let url2 = `https://api.cricapi.com/v1/match_info?apikey=09f675d8-90b6-4f11-98ff-d5a7d53cb0c5&id=70a84209-972b-4f0c-96f4-1cff117c7eed`;
fetchingdata3(url2).then((res) => {
  console.log(res);
  arr.push(res.data);
  console.log(arr);

  appendfunc3(arr, completed_div2);
});
