function game () {
    let playerScore = 0;
    let computerScore = 0;

    function getComputerChoice () {
        const gameOptions = [
            'rock',
            'paper',
            'scissors'
        ];
    
        randomItem = gameOptions[Math.floor(Math.random()*gameOptions.length)];   
    
        return randomItem.toString();
}

    function playRound () {
        let a = 'rock';
        let b = 'paper';
        let c = 'scissors';
        if (playerSelection === computerSelection){
            const tie = console.log("It's a tie!");
            console.log(tie);
        } else if (playerSelection === a && computerSelection === c || playerSelection === b && computerSelection === a || playerSelection === c && computerSelection === b ){
            playerScore++;
            const playerWin = "You win!";
            console.log (playerWin);
            console.log("Player:","",playerScore);
        } else if (computerSelection === a && playerSelection === c || computerSelection === b && playerSelection === a || computerSelection === c && playerSelection === b ){
            computerScore++;
            const compWin = "The computer wins!";
            console.log(compWin);
            console.log("Computer:","",computerScore);
        } else {
            '' 
        }
        
} 

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("rock, paper, or scissors?");
        console.log(playerSelection);
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound();         
}
    
}

console.log(game())


