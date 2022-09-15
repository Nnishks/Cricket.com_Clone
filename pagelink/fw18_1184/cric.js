import {
    fetchingdata,
    appendfunc,
    fetchingdata2,
    appendfunc2,
    fetchingdata3,
    appendfunc3,
  } from "./fetcappend.js";

  alert("max api hit in total is 500,if any problem ,this could be the one... if req , use another api key from https://cricketdata.org/ and try")
  
  let upcomming_div = document.querySelector("#upcomming2");
  

  let url = `https://api.cricapi.com/v1/cricScore?apikey=0913de50-7a39-45b8-8b5f-1517c21f4e21`;
  fetchingdata(url).then((res) => {
      console.log(res);
    appendfunc(res.data, upcomming_div);
  });
  let live_div = document.querySelector("#live_div2");
  
  let url1 = `https://api.cricapi.com/v1/currentMatches?apikey=0913de50-7a39-45b8-8b5f-1517c21f4e21`;
  fetchingdata2(url1).then((res) => {
    // console.log(res.data);
    appendfunc2(res.data, live_div);
  });
  // completed_div2
  let completed_div2 = document.querySelector("#completed_div2");
  let arr = [];
  let url2 = `https://api.cricapi.com/v1/match_info?apikey=0913de50-7a39-45b8-8b5f-1517c21f4e21`;
  fetchingdata3(url2).then((res) => {
    console.log(res);
    arr.push(res.data);
    console.log(arr);
  
    appendfunc3(arr, completed_div2);
  });

  import {nav,footer} from "../main/transfer.js"
let navbar=nav()
let foot=footer()
//console.log(foot)
document.querySelector("#navbar").innerHTML=navbar;
 document.getElementById('footer').innerHTML=foot;