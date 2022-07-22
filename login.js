
let button=document.getElementById('button_div')

let array=[]
 
    let number=()=>{
        let input=document.getElementById('number').value
        array.push(input)
        // console.log(array)
        let last_number=array[array.length-1].length
        if(last_number==10){
            button.style.backgroundColor='red'
            button.addEventListener("click",function(){
                getotp()
                document.getElementById('number').innerHTML=null
            })
            
        }
        else{
            button.style.backgroundColor='grey'
        }
    }
    

    
    let getotp=()=>{
        window.location.href="otp.html"
        let x=Math.random(0,999999)
        let y=Math.trunc(x*1000000)
        console.log(y)
        alert(y)
        localStorage.setItem('otp',JSON.stringify(y))
    }







    
