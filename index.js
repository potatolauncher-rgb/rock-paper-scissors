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
    if (playerSelection && computerSelection === 'rock'){
        return "It's a tie!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return "Paper beats Rock. The machine wins!"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return "Rock beats Scissors. You win!"
    } else if (playerSelection && computerSelection === 'paper'){
        return "It's a tie!"  
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return "Paper beats Rock. You win!"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return "Scissors beat Paper. The machine wins!"
    } else if (playerSelection && computerSelection === 'scissors'){
        return "It's a tie!"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return "Scissors beats Paper. You win!"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return "Rock beats Scissors. The machine wins!"
    } else { 
        return "Try Again"
    }

}

const playerSelection ='rock';
const computerSelection = getComputerChoice(); //for some reason when i try to call the getComputerChoice  
//function the bottom function defaults to try again, so it doesn't meet any of the conditions besides else.
console.log(playRound(playerSelection,computerSelection));

