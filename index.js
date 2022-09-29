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

function game (){
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

    function getComputerChoice () {
        const gameOptions = [
            'rock',
            'paper',
            'scissors'
        ];
    
        randomItem = gameOptions[Math.floor(Math.random()*gameOptions.length)];   
    
        return randomItem.toString();

    }


     for (let i = 0; i < 5; i++){
        let playerSelection = prompt("rock, paper, or scissors?")
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
}
}



