

import {nav,footer} from "../main/transfer.js"
let navbar=nav()
let foot=footer()
//console.log(foot)
document.querySelector("#navbar").innerHTML=navbar;
 document.getElementById('footer').innerHTML=foot;

let article = JSON.parse(localStorage.getItem("News_article"));
console.log(article)

article.forEach((ele)=>{
    document.getElementById("article").innerHTML=null
    document.getElementById("article1").innerHTML = null;

    let container= document.createElement("div")
    container.id="container"

    let img= document.createElement("img")
    img.src= ele.image;
    img.id="article_img"

    let date_auth= document.createElement("div")
    date_auth.id="date_auth"

    let date1 = document.createElement("div")
   date1.innerText=ele.date
    date1.id="date";
    
let auth_img= document.createElement("img")
auth_img.src = "https://www.cricket.com/svgs/author-icon.svg";
auth_img.id="auth"

    let author= document.createElement("div")
    author.innerText=ele.author
    
    date_auth.append(date1,auth_img,author)

    let  title= document.createElement("h3")
    title.innerText=ele.title;

    let des= document.createElement("div")
    des.innerText=ele.description;
    des.id="des"
    

    let article= document.createElement("p")
    article.innerText=ele.article;
    article.id="article"
    
    
    let article1 = document.getElementById("article1");
    article1.append(date_auth,title,des,article)

    container.append(img)

    document.getElementById("article").append(container)





})