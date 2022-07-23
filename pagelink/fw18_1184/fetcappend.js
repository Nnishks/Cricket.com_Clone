let fetchingdata = async (url) => {
    let res = await fetch(url);
    let y = await res.json();
    return y;
  };
  let count = 0;
  let appendfunc = (arr, container) => {
    container.innerHTML = null;
    // console.log(arr);
    arr.forEach((elem) => {
      if (count <= 1) {
        const div1 = document.createElement("div");
        div1.id = "typeofmatch";
        let h1 = document.createElement("h1");
        h1.innerText = `${elem.matchType}-${elem.t1} vs ${elem.t2}`;
        div1.append(h1);
  
        const div2 = document.createElement("div");
  
        const div3 = document.createElement("div");
        div3.id = "d_time_team";
        const div4 = document.createElement("div");
        div4.id = "team";
        const div6 = document.createElement("div");
        div6.id = "flag1_team1";
        const flag1 = document.createElement("img");
        flag1.src = elem.t1img;
        const team1 = document.createElement("p");
        team1.innerText = elem.t1;
        div6.append(flag1, team1);
  
        const div7 = document.createElement("div");
        div7.id = "flag2_team2";
        const flag2 = document.createElement("img");
        flag2.src = elem.t2img;
  
        const team2 = document.createElement("p");
        team2.innerText = elem.t2;
  
        div7.append(flag2, team2);
        div4.append(div6, div7);
        const div5 = document.createElement("div");
        div5.id = "d_time";
  
        const div8 = document.createElement("div");
        div8.className = "d_month";
        const d_month = document.createElement("p");
        var dt = new Date(elem.dateTimeGMT);
        d_month.innerText = "jul" + " " + dt.getUTCDate();
        const div9 = document.createElement("div");
        div9.className = "d_month";
        const time = document.createElement("p");
        var dt1 = new Date(elem.dateTimeGMT);
        var h = dt1.getHours();
        var m = "0" + dt1.getMinutes();
        if (h > 12) {
          var m1 = `${m} PM`;
        } else {
          var m1 = `${m} AM`;
        }
        time.innerText = h + ":" + m1;
  
        div8.append(d_month);
        div9.append(time);
        div5.append(div8, div9);
        div3.append(div4, div5);
        div2.append(div1, div3);
        container.append(div2);
      }
      ++count;
    });
  };
  let fetchingdata2 = async (url1) => {
    let res = await fetch(url1);
    let y = await res.json();
    return y;
  };
  let count1 = 0;
  let appendfunc2 = (arr, container) => {
    container.innerHTML = null;
    // console.log(arr);
    arr.forEach((elem) => {
      if (count1 <= 1) {
        const div1 = document.createElement("div");
        div1.id = "typeofmatch";
        let h1 = document.createElement("h1");
        h1.innerText = `${elem.name}`;
        const divgreen = document.createElement("div");
        divgreen.className = "divgreen";
        div1.append(h1, divgreen);
  
        const div2 = document.createElement("div");
  
        const div3 = document.createElement("div");
        div3.id = "f_score";
  
        const div6 = document.createElement("div");
        div6.id = "flag1_team1";
        const flag1 = document.createElement("img");
        flag1.src = elem.teamInfo[0].img;
        const team1 = document.createElement("p");
        team1.innerText = ` ${elem.teamInfo[0].shortname}  ${elem.score[0].r}/${elem.score[0].w}  (${elem.score[0].o})`;
        div6.append(flag1, team1);
  
        const div7 = document.createElement("div");
        div7.id = "flag2_team2";
        const flag2 = document.createElement("img");
        flag2.src = elem.teamInfo[1].img;
  
        const team2 = document.createElement("p");
        team2.innerText = `${elem.teamInfo[1].shortname} ${elem.score[1].r}/${elem.score[1].w} (${elem.score[1].o})`;
  
        div7.append(flag2, team2);
        div3.append(div6, div7);
  
        div2.append(div1, div3);
        container.append(div2);
      }
      ++count1;
    });
  };
  let fetchingdata3 = async (url2) => {
    let res = await fetch(url2);
    let y = await res.json();
    return y;
  };
  let count2 = 0;
  let appendfunc3 = (arr, container) => {
    container.innerHTML = null;
    // console.log(arr);
    arr.forEach((elem) => {
      if (count2 <= 3) {
        const div1 = document.createElement("div");
        div1.id = "typeofmatch";
        let h1 = document.createElement("h1");
        h1.innerText = `${elem.name}`;
        div1.append(h1);
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        div3.id = "f_score";
        const div6 = document.createElement("div");
        div6.id = "flag1_team1";
        const flag1 = document.createElement("img");
        flag1.src = elem.teamInfo[0].img;
        const team1 = document.createElement("p");
        team1.innerText = `${elem.teamInfo[0].shortname} ${elem.score[0].r}/${elem.score[0].w} (${elem.score[0].o})`;
        div6.append(flag1, team1);
        const div7 = document.createElement("div");
        div7.id = "flag2_team2";
        const flag2 = document.createElement("img");
        flag2.src = elem.teamInfo[1].img;
  
        const team2 = document.createElement("p");
        team2.innerText = ` ${elem.teamInfo[1].shortname}  ${elem.score[1].r}/${elem.score[1].w}  (${elem.score[1].o})`;
        const status = document.createElement("h5");
        status.innerText = elem.status;
        status.className = "status";
        div7.append(flag2, team2);
  
        div3.append(div6, div7, status);
  
        div2.append(div1, div3);
        container.append(div2);
      }
      ++count2;
    });
  };
  export {
    fetchingdata,
    appendfunc,
    fetchingdata2,
    appendfunc2,
    fetchingdata3,
    appendfunc3,
  };