function getComputerChoice () {
        const gameOptions = [
            'rock',
            'paper',
            'scissors'
        ];
    
        randomItem = gameOptions[Math.floor(Math.random()*gameOptions.length)];   
    
        return randomItem.toString();
}

function playRound (playerSelection, computerSelection) {
    let a = 'rock'
    let b = 'paper'
    let c = 'scissors'
    if (playerSelection === computerSelection){
        return "It's a tie!"
    } else if (playerSelection === a && computerSelection === c || playerSelection === b && computerSelection === a || playerSelection === c && computerSelection === b ){
        return "You win!"
    } else if (computerSelection === a && playerSelection === c || computerSelection === b && playerSelection === a || computerSelection === c && playerSelection === b ){
        return "The computer wins!"
    } else {
        ''
    }
}
  


let playerSelection = 'scissors';
console.log(playerSelection);
let computerSelection = getComputerChoice();
console.log(computerSelection);
playRound(playerSelection,computerSelection);
console.log(playRound(playerSelection,computerSelection));




