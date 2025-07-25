
function getHumanChoice() {
    let person = prompt("Choississez pierre, feuille ou ciseaux");
    const humanChoice = person.toLowerCase() ;
    return humanChoice
}
console.log(getHumanChoice())


var humanScore = 0
var computerScore = 0



var tab = ["pierre" , "feuille" , "ciseaux"]

function getComputerChoice() {
    const indexAleatoire = Math.floor (Math.random () * 3)
    let choose = tab[indexAleatoire]
    
    console.log (choose)
}
getComputerChoice()




function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


