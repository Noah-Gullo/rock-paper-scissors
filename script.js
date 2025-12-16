let humanScore = 0;
let computerScore = 0;
let numRounds = 5;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultText = document.querySelector(".results");

rockButton.addEventListener("click", () => getHumanChoice("rock"));
paperButton.addEventListener("click",() => getHumanChoice("paper"));
scissorsButton.addEventListener("click", () => getHumanChoice("scissors"));

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

function getHumanChoice(userInput){
    return userInput;
}

function playGame(){
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
        }else if (playerWin){
            message = "You win! Your " + humanChoice + " beats the computer's " + computerChoice + ".";
            humanScore++;
        } else {
            message = "You lose. Your " + humanChoice + " loses to the computer's " + computerChoice + ".";
            computerScore++;
        }

        results.textContent = message;
    }

    declareWinner()
}

function declareWinner(){
    let message = ""
    if(humanScore > computerScore){
        message = "You won! "
    }else{
        message = "You lost. ";
    }

    message = message + "You had " + humanScore + " points and the computer had " + computerScore + " points.";
    message = message + "\nOut of five rounds " + (5 - (humanScore + computerScore)) + " were tied."; 

    console.log(message);
}

playGame();