const t=prompt("sélectionner le niveau de difficulté");
const x=Math.round(Math.random()*10)
console.log(x);
let i=0
for (;i<t;i++){
    const e=prompt("Guess number:")
    if(e==x){
        alert("Succés")
        break
    }
    else if(i!=t-1)
    {
        alert("autre essai?")
    }
}
console.log(i)
if(i==t)
alert('tu as perdu tous les tentatives')
