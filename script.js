var tab = ["Pierre" , "Feuille" , "Ciseaux"]

function getComputerChoice() {
    const indexAleatoire = Math.floor (Math.random () * 3)
    let choose = tab[indexAleatoire]
    
    console.log (choose)
}
getComputerChoice()


function getHumanChoice() {
let person = prompt("Choississez Pierre, Feuille ou Ciseaux");
const humanChoice = person ;
return humanChoice
}
console.log(getHumanChoice())