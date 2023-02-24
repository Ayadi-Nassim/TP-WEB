const listItems=document.querySelector('ul')

listItems.addEventListener('click',(e)=>{
console.log(e);
const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
e.target.style.backgroundColor=randomColor
    })
