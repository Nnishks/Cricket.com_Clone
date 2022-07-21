let article = JSON.parse(localStorage.getItem("News_article"));
console.log(article)

article.forEach((ele)=>{
    document.getElementById("article").innerHTML=null

    let container= document.createElement("div")
    container.id="container"

    let img= document.createElement("img")
    img.src= ele.image;

    let date_auth= document.createElement("div")
    date_auth.id="date_auth"

    let date1 = document.createElement("div")
   date1.innerText=ele.date
    date1.id="date";
    
    let author= document.createElement("div")
    author.innerText=ele.author
    
    date_auth.append(date1,author)

    let  title= document.createElement("h3")
    title.innerText=ele.title;

    let des= document.createElement("div")
    des.innerText=ele.description;

    let article= document.createElement("p")
    article.innerText=ele.article;

    container.append(img,date_auth,title,des,article)

    document.getElementById("article").append(container)





})