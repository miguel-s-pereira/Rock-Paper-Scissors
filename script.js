//Declaring variables
let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('player-score-display');
const computerScoreDisplay = document.getElementById('computer-score-display');
const resultText = document.getElementById('result-text');
const score = document.querySelector('.score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const buttons = document.querySelector('.buttons');
const btn = document.querySelector('.btn');
const playAgainButton = document.querySelector('.after-round');

//Stylize variables
playAgainButton.style.cursor = 'pointer';
playAgainButton.style.backgroundColor = 'rgba(21, 219, 213, 0.6)'
playAgainButton.style.borderRadius = '10px';
playAgainButton.style.width = '50%';
playAgainButton.style.margin = '0 auto';
playAgainButton.style.boxShadow = '0 15px 20px rgba(0, 0, 0, 0.2)';
playAgainButton.style.transitionTimingFunction = 'ease-in';
playAgainButton.style.transition = '0.5s';

//
playAgainButton.addEventListener('mouseleave', () => 
playAgainButton.style.cursor = 'pointer');

playAgainButton.addEventListener('mouseenter', () => 
playAgainButton.style.cursor = 'pointer');

//
playAgainButton.addEventListener('mouseleave', () => 
playAgainButton.style.backgroundColor = 'rgba(21, 219, 213, 0.6)');

playAgainButton.addEventListener('mouseenter', () => 
playAgainButton.style.backgroundColor = 'rgb(23, 214, 205)');

//
playAgainButton.addEventListener('mouseleave', () => 
playAgainButton.style.borderRadius = '10px');

playAgainButton.addEventListener('mouseenter', () => 
playAgainButton.style.borderRadius = '10px');

//
playAgainButton.addEventListener('mouseleave', () => 
playAgainButton.style.width = '50%');

playAgainButton.addEventListener('mouseenter', () => 
playAgainButton.style.width = '50%');

//
playAgainButton.addEventListener('mouseleave', () => 
playAgainButton.style.margin = '0 auto');

playAgainButton.addEventListener('mouseenter', () => 
playAgainButton.style.margin = '0 auto');

//
playAgainButton.addEventListener('mouseleave', () => 
playAgainButton.style.boxShadow = '0 15px 20px rgba(0, 0, 0, 0.2)');

playAgainButton.addEventListener('mouseenter', () => 
playAgainButton.style.boxShadow = '0 15px 20px rgba(0, 0, 0, 0.2)');

//
playAgainButton.addEventListener('mouseleave', () => 
playAgainButton.style.transitionTimingFunction = 'ease-out');

playAgainButton.addEventListener('mouseenter', () => 
playAgainButton.style.transitionTimingFunction = 'ease-out');

//
playAgainButton.addEventListener('mouseleave', () => 
playAgainButton.style.transition = '0.25s');

playAgainButton.addEventListener('mouseenter', () => 
playAgainButton.style.transition = '0.25s');

//
playAgainButton.addEventListener('click', restartGame);

function restartGame(){
    location.reload();
}


function computerPlay(){
    const choices = ['rock','paper','scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function convertToWord(letter){
    if(letter === 'rock') return 'Rock';
    if(letter === 'paper') return 'Paper';
    return 'Scissors';
    }

function win(playerSelection, computerSelection){
    playerScore++;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    const smallUserWord = "(user)".fontsize(1).sub();
    const smallComputerWord = "(computer)".fontsize(1).sub();
    if(playerScore < 5){
    resultText.innerHTML = `${convertToWord(playerSelection)} ${smallUserWord} beats ${convertToWord(computerSelection)} ${smallComputerWord} . You won!`;
} else if (playerScore === 5){
    resultText.innerHTML = 'You won the game!';
    endGame();
    }
}

function lose(playerSelection, computerSelection){
    computerScore++;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    const smallUserWord = "(user)".fontsize(1).sub();
    const smallComputerWord = "(computer)".fontsize(1).sub();
    if(computerScore < 5){
    resultText.innerHTML = `${convertToWord(playerSelection)} ${smallUserWord} loses to ${convertToWord(computerSelection)} ${smallComputerWord} . You lose!`;
} else if (computerScore === 5){
    resultText.innerHTML = 'You lost the game!';
    endGame();
    }    
}

function draw(playerSelection, computerSelection){
    const smallUserWord = "user".fontsize(1).sub();
    const smallComputerWord = "computer".fontsize(1).sub();
    resultText.innerHTML = `${convertToWord(playerSelection)} ${smallUserWord} ties to ${convertToWord(computerSelection)} ${smallComputerWord} . It's a draw!`;
}

function playRound(playerSelection){
    const computerSelection = computerPlay();
    switch (playerSelection + computerSelection){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(playerSelection, computerSelection);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(playerSelection, computerSelection);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(playerSelection, computerSelection);
            break;
    }
}

function endGame(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    document.querySelectorAll(".btn").forEach(e => e.remove());
    playAgainButton.innerHTML = 'Play Again?';
}

function main(){
    rock.addEventListener('click', function(){
    playRound('rock');
    })

    paper.addEventListener('click', function(){
    playRound('paper');
    })

    scissors.addEventListener('click', function(){
    playRound('scissors');
    })
}

main();
