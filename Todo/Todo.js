const addBttn=document.querySelector("#bouton")
const name1=document.querySelector("#input1")
const content=document.querySelector("#input2")
const list=document.querySelector("#list")

/**Function to test if a string is composed by only spaces */
function isWhitespace(str) {
    
    return /^\s*$/.test(str);
  }

let nom
let contenu
const manipulateDisabledbttn=(nom,contenu)=>{
    if(nom&&contenu&&!isWhitespace(nom)&&!isWhitespace(contenu)){
        addBttn.removeAttribute("disabled")
        
    }
    else
        addBttn.setAttribute("disabled",null)
}


name1.addEventListener('input',(e)=>{
nom=e.target.value
manipulateDisabledbttn(nom,contenu)
})



content.addEventListener('input',(e)=>{
contenu=e.target.value;
manipulateDisabledbttn(nom,contenu)
    })



function createListItem(nom,contenu){
    const a=document.createElement('li')
    a.classList.add("list-item")
    const div1=document.createElement('div')
    div1.innerHTML=nom+" : "+contenu
    const buttn=document.createElement('img')
    buttn.src="/images/garbage.png"
    buttn.style.width="15px"
    buttn.style.margin="7px"
    buttn.addEventListener('click',()=>{
        a.remove()
    })
    div1.appendChild(buttn)
    a.appendChild(div1)
    return(a)
}
    

addBttn.addEventListener('click',()=>{
    list.appendChild(createListItem(nom,contenu))
    name1.value=null
    content.value=null
    nom=""
    contenu=""
    addBttn.setAttribute("disabled",null)
})    