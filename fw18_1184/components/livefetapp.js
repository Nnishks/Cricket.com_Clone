let fet = async (url) => {
  let res = await fetch(url);
  let y = await res.json();
  return y;
};
let count = 0;
let appe = (arr, container, gid_box_head) => {
  container.innerHTML = null;
  gid_box_head.innerHTML = null;

  arr.forEach((elem) => {
    if (count <= 2) {
      const name = document.createElement("h1");
      name.innerText = elem.name;
      const level = document.createElement("h2");
      level.innerText = "INT";
      gid_box_head.append(level, name);
      const main_div = document.createElement("div");

      const matchType_div = document.createElement("div");
      matchType_div.id = "matchType_div";
      const matchType = document.createElement("p");
      matchType.innerText = elem.matchType;
      matchType_div.append(matchType);

      const location_div = document.createElement("div");
      location_div.id = "location_div";
      const location_Icon = document.createElement("img");
      location_Icon.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHx7o6pX1HcTm1J1g0zvnhRz0Rx4imQfdpWg&usqp=CAU`;
      const location_name = document.createElement("p");

      location_name.innerText = elem.venue;
      location_div.append(location_Icon, location_name);

      const flag1_t1_date = document.createElement("div");
      flag1_t1_date.id = "flag1_t1_date";
      const flag1 = document.createElement("img");
      flag1.src = elem.teamInfo[0].img;
      const t1 = document.createElement("p");
      t1.innerText = elem.teamInfo[0].shortname;
      const date = document.createElement("p");
      // var dt = new Date(elem.dateTimeGMT);
      // d_month.innerText = "jul" + " " + dt.getUTCDate()
      date.innerText = elem.date;
      flag1_t1_date.append(flag1, t1, date);

      const flag2_t2_time = document.createElement("div");
      flag2_t2_time.id = "flag2_t2_time";
      const flag2 = document.createElement("img");
      flag2.src = elem.teamInfo[1].img;
      const t2 = document.createElement("p");
      t2.innerText = elem.teamInfo[1].shortname;
      const time = document.createElement("p");
      var dt1 = new Date(elem.dateTimeGMT);
      var h = dt1.getHours();
      var m = dt1.getMinutes();
      if (h > 12) {
        var m1 = `${m} PM`;
      } else {
        var m1 = `${m} AM`;
      }
      time.innerText = h + ":" + m1;

      flag2_t2_time.append(flag2, t2, time);
      main_div.append(
        matchType_div,
        location_div,
        flag1_t1_date,
        flag2_t2_time
      );
      container.append(main_div);
    }
    count++;
  });
};
export { fet, appe };
// matchType
//venue
// div- elem.teamInfo[0].img ,elem.teams[0],date
//div- elem.teamInfo[1].img,elem.teams[1],elem.dateTimeGMT
