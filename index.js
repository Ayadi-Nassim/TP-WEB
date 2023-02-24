const input1=document.querySelector("#input1")
const input2=document.querySelector("#input2")
const input3=document.querySelector("#input3")

const text=document.querySelector(".para")

let size=20
let color=""
let fontFamily=""

input1.addEventListener('input',(e)=>{
    color=e.target.value;
    text.style.color=color
})
input2.addEventListener('input',(e)=>{
    size=e.target.value;
    text.style.fontSize=size+"px"  
})
input3.addEventListener('input',(e)=>{
    const a=input3.options[e.target.value].innerHTML;
    text.style.fontFamily=a;
})






