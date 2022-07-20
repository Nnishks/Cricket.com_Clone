
let cont=document.querySelector("#h_n_btm")

let url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=901bd0d3f4af4d1698306a25b880c39b `

let get=async (url)=>{
    let res= await fetch(url);
    let res1= await res.json();
    let dataa=res1.articles
   // console.log(data)
   let data= dataa.filter(function(el){
        return (el.source.name=="ESPN Cric Info" || el.source.name=="Cricbuzz" || el.source.name=="Hindustan Times"
       || el.source.name=="Cricketaddictor.com"|| el.source.name=="International Cricket Council"
       ||  el.source.name=="Crictracker.com" || el.source.name=="Cricket.Com Staff"
       || el.source.name=="Cricket.Com Staff")
  })
  console.log(data)
    display(cont,data)
}
get(url)


let display=(cont,data)=>{

    cont.innerHTML="";

let res=data.forEach(({description,title,urlToImage,source,publishedAt,content},index)=>{

// console.log(data)
    // if(index>2){
    //     return
    // }
    let divs=document.createElement("div");
    divs.setAttribute("class","h_n_in")
    // divs.addEventListener("click",()=>{
    //  let obj={
    //     description:description,
    //     title:title,
    //     urlToImage:urlToImage,
    //     content:content
    //  }
    //  localStorage.setItem("news",JSON.stringify(obj));
    //  location.href='news.html'
    // })
    let div1=document.createElement("div");
    div1.setAttribute("id","div1")
    let div2=document.createElement("div");
    div2.setAttribute("id","div2");

    let idiv=document.createElement("div");
    idiv.setAttribute("class","divi")
    let imag=document.createElement("img");
    if(urlToImage==null){
        imag.src="https://tse2.mm.bing.net/th?id=OIP.s2s2eHdYaHlQQgUYCI3HywHaE6&pid=Api&P=0"
        imag.style.width="600px"
        imag.style.height="200px"
        // imag.style.height="100px"
        imag.style.borderRadius="5px"
        imag.style.overflow="hidden"
    }
    else{imag.src=urlToImage
    //console.log(urlToImage,imag)
    imag.style.width="420px"
    imag.style.height="220px"
    imag.style.borderRadius="5px"
    imag.style.overflow="hidden"
    // imag.strech="200px"
}

let divextra=document.createElement("div");
divextra.innerText="NEWS"
divextra.setAttribute("class","home_e")

idiv.append(imag,divextra)
   

    let tle=document.createElement("h3");
    tle.innerText=title;
    let desc=document.createElement("p");
     desc.innerText=description;
     div2.append(tle,desc)

     let div3=document.createElement("div");
     div3.setAttribute("id","div3")

     let athr=document.createElement("p");
     athr.innerText=source.name

     let date=document.createElement("p");
     let dt=publishedAt.split("-");
     //console.log(dt)
     let x=[dt[2][0],dt[2][1]]
    //  x=+x;
     dt.pop();
     dt.map(Number);
     let year=dt[0]
     let month=dt[1]
     let dayy=x[0]
     let da=x[1]
     let day=`${dayy}${da}`
     //console.log(year,month,day)
   let mon=check(month)
   //console.log(mon)
   date.innerText=`${day}  ${mon} ${year}`
  
   div3.append(athr,date)

   div1.append(div2,div3)
    divs.append(idiv,div1);
    cont.append(divs)
})

}

// document.querySelector("#h_img_1").addEventListener("click",h_img1)

// function h_img1(){
// let img1=document.querySelector("#h_img_1");
// img1.style. backgroundColor="black"
// img1.style.borderBottom="0.1px solid rgb(188, 177, 177)"
// img1.style.borderTop=" 0.1px solid rgb(188, 177, 177) "
// img1.style.borderLeft=" 0.1px solid rgb(188, 177, 177) "
// // img1.style.borderTop=" 0.1px solid rgb(188, 177, 177) "
// }

function check(str){
if (str==01){
    return "jan"
}
else if(str==02){
    return "feb"
}
else if(str==03){
    return "march"
}
else if(str==04){
    return "april"
}
else if(str==05){
    return "may"
}
else if(str==06){
    return "june"
}
else if(str==07){
    return "july"
}
else if(str==08){
    return "august"
}
else if(str==09){
    return "sep"
}
else if(str==10){
    return "oct"
}
else if(str==11){
    return "nov"
}
else{
    return "dec"
}

}