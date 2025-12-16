let humanScore = 0;
let computerScore = 0;
let tiedRounds = 0;

const rockButton = document.querySelector(".buttons #rock");
const paperButton = document.querySelector(".buttons #paper");
const scissorsButton = document.querySelector(".buttons #scissors");
const humanScoreText = document.querySelector(".humanScoreDisplay");
const computerScoreText = document.querySelector(".computerScoreDisplay");
const resultText = document.querySelector(".results");

resultText.textContent = "Welcome to Rock, Paper, Scissors! Press a button to get started."

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

function getComputerChoice() {
    let randomNum = Math.random() * 100;
    if (randomNum >= 0 && randomNum < 34) {
        return "Rock";
    } else if (randomNum >= 34 && randomNum < 66){
        return "Paper";
    } else if (randomNum >= 67 && randomNum < 100){
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let message = "";
    let tie = false;
    let playerWin = false;


    if (humanChoice == computerChoice){
        tie = true
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        playerWin = true;
    } 

    if (tie){
        message = "Tied round. You both chose " + humanChoice + ".";
        tiedRounds++;
        document.body.style.backgroundColor = "#ffffff";
    }else if (playerWin){
        message = "You win! Your " + humanChoice + " beats the computer's " + computerChoice + ".";
        humanScore++;
        document.body.style.backgroundColor = "#b8ffc0";
        humanScoreText.textContent = "Human Score: " + humanScore;
    } else {
        message = "You lose. Your " + humanChoice + " loses to the computer's " + computerChoice + ".";
        computerScore++;
        document.body.style.backgroundColor = "#ffb8b8";
        computerScoreText.textContent = "Computer Score: " + computerScore;
    }

    resultText.textContent = message;

    if(humanScore >= 5 || computerScore >= 5){
        rockButton.remove();
        paperButton.remove();
        scissorsButton.remove();
        
        humanScoreText.remove();
        computerScoreText.remove();

        declareWinner();
    }
}

function declareWinner(){
    let message = ""
    if(humanScore > computerScore){
        message = "You won! ";
        document.body.style.backgroundColor = "#24ff4c";
    }else{
        message = "You lost. ";
        document.body.style.backgroundColor = "#ff2424";
    }

    message = message + "You had " + humanScore + " points and the computer had " + computerScore + " points.";
    message = message + "\nThere were " + tiedRounds + " tied rounds.";
    message = message + " Refresh the page to play again.";

    resultText.textContent = message;
}