let teams = [
  {
    team: "INTERNATIONAL",
    team_name: "Australia",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1_actionshot_safari.jpg&w=1920&q=75",
    ranking: "ICC Ranking",
    test: "1",
    ODI: "5",
    T20: "5",
  },
  {
    team: "INTERNATIONAL",
    team_name: "Agghanistan",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1188_actionshot_safari.jpg&w=1080&q=75",
    ranking: "ICC Ranking",
    test: "-",
    ODI: "10",
    T20: "10",
  },
  {
    team: "INTERNATIONAL",
    team_name: "Bangladesh",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F2_actionshot_safari.jpg&w=1080&q=75",
    ranking: "ICC Ranking",
    test: "9",
    ODI: "7",
    T20: "0",
  },
  {
    team: "INTERNATIONAL",
    team_name: "England",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F3_actionshot_safari.jpg&w=1080&q=75",
    ranking: "ICC Ranking",
    test: "5",
    ODI: "2",
    T20: "2",
  },
  {
    team: "INTERNATIONAL",
    team_name: "India",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F4_actionshot_safari.jpg&w=1080&q=75",
    ranking: "ICC Ranking",
    test: "5",
    ODI: "1",
    T20: "1",
  },
  {
    team: "INTERNATIONAL",
    team_name: "New Zealand",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F5_actionshot_safari.jpg&w=1080&q=75",
    ranking: "ICC Ranking",
    test: "5",
    ODI: "1",
    T20: "6",
  },
  {
    team: "INTERNATIONAL",
    team_name: "Pakistan",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F6_actionshot_safari.jpg&w=1080&q=75",
    ranking: "ICC Ranking",
    test: "6",
    ODI: "4",
    T20: "3",
  },
  {
    team: "INTERNATIONAL",
    team_name: "South Africa",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F7_actionshot_safari.jpg&w=1080&q=75",
    ranking: "ICC Ranking",
    test: "3",
    ODI: "6",
    T20: "4",
  },
  {
    team: "INTERNATIONAL",
    team_name: "Sri Lanka",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F8_actionshot_safari.jpg&w=1080&q=75",
    ranking: "ICC Ranking",
    test: "7",
    ODI: "8",
    T20: "8",
  },
  {
    team: "INTERNATIONAL",
    team_name: "West Indies",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F9_actionshot_safari.jpg&w=1080&q=75",
    ranking: "ICC Ranking",
    test: "8",
    ODI: "9",
    T20: "7",
  },
];

let women = [
  {
    team: "INTERNATIONAL",
    team_name: "Australian Women",
    team_img:
      "https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1080&q=75",
  },
  {
    team: "INTERNATIONAL",
    team_name: "England Women",
    team_img:
      "https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1080&q=75",
  },
  {
    team: "INTERNATIONAL",
    team_name: "India Women",
    team_img:
      "https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1080&q=75",
  },
  {
    team: "INTERNATIONAL",
    team_name: "New Zealand Women",
    team_img:
      "https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1080&q=75",
  },
  {
    team: "INTERNATIONAL",
    team_name: "Pakistan Women",
    team_img:
      "https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1080&q=75",
  },
  {
    team: "INTERNATIONAL",
    team_name: "South Africa Women",
    team_img:
      "https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1080&q=75",
  },
  {
    team: "INTERNATIONAL",
    team_name: "Sri Lanka Women",
    team_img:
      "https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1080&q=75",
  },
  {
    team: "INTERNATIONAL",
    team_name: "West Indies Women",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1135_actionshot_safari.jpg&w=1080&q=75",
  },
];

 let display_teams=(teams)=>{
    document.getElementById("box1").innerHTML=null

    teams.forEach((ele)=>{

        let card=document.createElement("div")
        card.id="card"

        let name= document.createElement("h5")
        name.innerText= ele.team_name
        name.id="team_name"

        let img=document.createElement("img")
        img.src=ele.team_img;
        img.id="team_img"

        let ranking= document.createElement("p")
        ranking.innerText=ele.ranking;
        ranking.id="rank";

        let hr= document.createElement("hr")
        hr.id="horizontal_line"

        let match_type= document.createElement("div")
        match_type.id="match"

        let test=document.createElement("div")
        test.id="test"

        let test0= document.createElement("div")
        test0.innerText=ele.test;
        test0.style.color = "#d64b4b";
        test0.style.fontSize="16px"

        let test1=document.createElement("div")
        test1.innerText="Test"
        test1.style.color="lightgrey"

        test.append(test0,test1)

        let odi= document.createElement("div")
        odi.id="odi"

        let odi0=document.createElement("div")
        odi0.innerText=ele.ODI;
         odi0.style.color = "#d64b4b";
         odi0.style.fontSize = "16px";

        let odi1= document.createElement("div")
        odi1.innerText="ODI"
        odi1.style.color="lightgrey"

        odi.append(odi0,odi1)
        
        let t20= document.createElement("div")
        t20.id="t20"

        let t200=document.createElement("div")
        t200.innerText=ele.T20;
         t200.style.color = "#d64b4b";
         t200.style.fontSize = "16px";

        let t201=document.createElement("div")
        t201.innerText="T20"
        t201.style.color="lightgrey"

        let match_div= document.createElement("div")
        match_div.id="match_div"
        match_div.append(test,odi,t20)

        t20.append(t200,t201)

        card.append(name,img,ranking,hr,match_div)

        document.getElementById("box1").append(card)


    })
}
display_teams(teams)

// display for team of womens

let display_womes=(women)=>{
    document.getElementById("box2").innerHTML=null

    women.forEach((ele)=>{

        let card = document.createElement("div");
        card.id = "women_team";

        let name = document.createElement("h5");
        name.innerText = ele.team_name;

        let img= document.createElement("img")
        img.src=ele.team_img
        img.id="women_img"

        card.append(name,img)
        document.getElementById("box2").append(card)

    })

    
}
display_womes(women)

// function on -click on international//

document
  .getElementById("international").addEventListener("click", display_international);

function display_international(){
    display_teams(teams)
    display_womes(women)
    window.location.reload
    console.log("click")

}
// data for other leagues//
let other_leagues = [
  {
    team_name: "Royal Challengers Banglore",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1105_actionshot_safari.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "",
  },
  {
    team_name: "Kolkata Knight Riders",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1106_actionshot_safari.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "2012,2014",
  },
  {
    team_name: "Punjab Kings",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1107_actionshot_safari.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "",
  },
  {
    team_name: "Chennai Super Kings",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1108_actionshot_safari.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "2010,2011,2018,2021",
  },
  {
    team_name: "Delhi Capitals",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1109_actionshot_safari.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "",
  },
  {
    team_name: "Rajastan Royals",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1110_actionshot_safari.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "2008",
  },
  {
    team_name: "Mumbai Indians",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1111_actionshot_safari.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "2013,2015,2017,2019,2020",
  },

  {
    team_name: "Sunrisers Hydrabad",
    team_img:
      "https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1379_actionshot_safari.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "2016",
  },
  {
    team_name: "Lucknow Super Giants",
    team_img:
      "https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "",
  },
  {
    team_name: "Gujarat Titans",
    team_img:
      "https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1080&q=75",
    cup: "https://www.cricket.com/svgs/trophy2.svg",
    year: "2022",
  },
];


let display_leagues= (other_leagues)=>{
  document.getElementById("box1").innerHTML=null;
  document.getElementById("box2").innerHTML = null;


    other_leagues.forEach((ele)=>{

      let card= document.createElement("div")
      card.id="women_div"

      let name= document.createElement("h5")
      name.innerText=ele.team_name;

      let img=document.createElement("img")
      img.src=ele.team_img;
      img.id="ipl_img"

      let winner= document.createElement("div")
      winner.id="winner";

      let cup= document.createElement("img")
      cup.src=ele.cup 
      cup.id="cup"
      
      let year= document.createElement("p")
      year.innerText=ele.year;
      year.id="year1";

      winner.append(cup,year)
      card.append(name,img,winner)
      document.getElementById("box2").append(card)
    })
}

document.getElementById("other_league").addEventListener("click",display_league)

function display_league(){

  document.getElementById("women").innerText=null
  

    display_leagues(other_leagues)
}



  

    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "c09b3dcdb7mshcc55e7fcc52919dp142149jsn36e9a732302b",
    //     "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    //   },
    // };

    // fetch(
    //   "https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international",
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   team_name()
    //   .catch((err) => console.error(err));


    import {nav,footer} from "../main/transfer.js"
let navbar=nav()
let foot=footer()
//console.log(foot)
document.querySelector("#navbar").innerHTML=navbar;
//  document.getElementById('footer').innerHTML=foot;

      function team_name(response){
        response.forEach((ele)=>{

          let name= document.createElement("div")
          name.id=name;

          let p= document.createElement("p")
          p.innerText=ele.teamName;

          name.append(p)
          document.getElementById("result").append(name)

        })

      }