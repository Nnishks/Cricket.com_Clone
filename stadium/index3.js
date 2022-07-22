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
    