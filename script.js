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
    }else if (playerWin){
        message = "You win! Your " + humanChoice + " beats the computer's " + computerChoice + ".";
        humanScore++;
        humanScoreText.textContent = "Human Score: " + humanScore;
    } else {
        message = "You lose. Your " + humanChoice + " loses to the computer's " + computerChoice + ".";
        computerScore++;
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
        message = "You won! "
    }else{
        message = "You lost. ";
    }

    message = message + "You had " + humanScore + " points and the computer had " + computerScore + " points.";
    message = message + "\nThere were " + tiedRounds + " tied rounds."

    resultText.textContent = message;
}