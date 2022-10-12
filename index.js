    let playerScore = 0;
    let computerScore = 0;
    const a = 'rock';
    const b = 'paper';
    const c = 'scissors';
    const rock  = document.querySelector('#rock');
    rock.onclick = () => playRound(a, getComputerChoice());
    const paper  = document.querySelector('#paper');
    paper.onclick = () => playRound(b, getComputerChoice());
    const scissors  = document.querySelector('#scissors');
    scissors.onclick = () => playRound(c, getComputerChoice());

    function getComputerChoice() {
        const gameOptions = [a, b, c];
    
        randomItem = gameOptions[Math.floor(Math.random()*gameOptions.length)];   
    
        return randomItem.toString();
    }

    function keepScore() {
        if (playerScore >= 5){
            document.getElementById('announceWinner').innerText = `You win the game!`
            setTimeout(location.reload.bind(location),1000);
        } else if (computerScore >= 5){
            document.getElementById('announceWinner').innerText = `The computer wins the game!`
            setTimeout(location.reload.bind(location),1000);
        }
        return (`Player: ${playerScore} Computer: ${computerScore}`);
    }
    
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection){
            document.getElementById('scoreboard').innerText = `It's a tie!`;
            document.getElementById('runningTotal').innerText = keepScore()
        } else if (playerSelection === a && computerSelection === c || playerSelection === b && computerSelection === a || playerSelection === c && computerSelection === b ){
            playerScore++;
            document.getElementById('scoreboard').innerText = `The player wins!`;
            document.getElementById('runningTotal').innerText = keepScore()
        } else if (computerSelection === a && playerSelection === c || computerSelection === b && playerSelection === a || computerSelection === c && playerSelection === b ){
            computerScore++;
            document.getElementById('scoreboard').innerText = `The computer wins!`;
            document.getElementById('runningTotal').innerText = keepScore()
        } else {
            console.log(`Something went wrong.`)
        }
        
    } 

    
   




   