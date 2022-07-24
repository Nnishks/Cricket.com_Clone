let string=""
let press=(event,p,c,n)=>{
    let length=document.getElementById(c).value.length;
    let valu=document.getElementById(c).value
    string+=valu
    console.log(valu)


    // console.log(length)
    let maxlength=document.getElementById(c).getAttribute('maxlength');
    // console.log(maxlength)
    if(length==maxlength){
      if(n!==""){
        document.getElementById(n).focus()
      }
    }
    if(event.key=="Backspace"){
        if(p!==""){
            document.getElementById(p).focus()
        }
    }
}


let getnumber=JSON.parse(localStorage.getItem('otp'))
 let matchotp=()=>{
     if(getnumber==Number(string)){
        alert('Login Successful')
        location.href="../main/index.html"
     }
     else{
        alert('Enter Correct OTP')
     }
 }
 let button=document.getElementById('button_div').addEventListener('click',matchotp)








