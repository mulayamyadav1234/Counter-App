let btn1=document.querySelector("#add");
let btn2=document.querySelector("#minus");
let btn3=document.querySelector("#resetbtn");
let counter=document.querySelector("#count");
let num=0;

btn1.addEventListener("click",function(){
   num=num+1;
   counter.innerHTML = num
});

btn2.addEventListener("click",function(){
    if(num === 0){
        return 0;
    }else{
         num=num-1;
        counter.innerHTML = num
    }
});

btn3.addEventListener("click",function(){
    num=0;
    counter.innerHTML = num;
});