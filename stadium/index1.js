// document.querySelector("#btnsi2").addEventListener("click",function(){
//    scrollLeft
    // let arr=[
    //     "https://images.cricket.com/stadiums/112_actionshot_safari.jpg",
    //     "https://images.cricket.com/stadiums/84_actionshot_safari.jpg",
    //     "https://images.cricket.com/stadiums/34_actionshot_safari.jpg",
    //     "https://images.cricket.com/stadiums/34_actionshot_safari.jpg",
    //    "https://images.cricket.com/stadiums/159_actionshot_safari.jpg",
    //     "https://images.cricket.com/stadiums/82_actionshot_safari.jpg",
    //     " https://images.cricket.com/stadiums/161_actionshot_safari.jpg"
    // ]

    // let imgnum=5;

// })
const productContainers = [...document.querySelectorAll('.stad')];
const nxtBtn = document.querySelectorAll('.nxt-btn_stad');
const preBtn =document.querySelectorAll('.pre-btn_stad');

productContainers.forEach((item, i) => {
    
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
    
        preBtn[i].addEventListener('click', () => {
             item.scrollLeft -= containerWidth;
         })
     })
    