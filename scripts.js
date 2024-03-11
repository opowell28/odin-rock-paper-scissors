// randomly return either rock, paper, or scissors based on a random number
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 100) + 1;

    if(randNum >= 1 && randNum < 33) {
        return "rock";
    }
    else if(randNum >= 33 && randNum < 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// ask for user input
function getPlayerChoice() {
    let playerChoice = prompt("Enter 'rock,' 'paper,' or 'scissors.'").toString().toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}

// play a single round and return the winner
function playOneRound(playerChoice, computerChoice) {
    switch(playerChoice) {
        case "rock":
            if(computerChoice === "rock") {
                alert("Both chose rock, it's a tie.");
                return "tie";
            }
            else if(computerChoice === "paper") {
                alert("You lose, paper beats rock.");
                return "computer";
            }
            else if(computerChoice === "scissors") {
                alert("You win, rock beats scissors.");
                return "player";
            }
            else {
                alert("ERROR");
                return "error";
            }
            break;
        case "paper":
            if(computerChoice === "rock") {
                alert("You win, paper beats rock.");
                return "player";
            }
            else if(computerChoice === "paper") {
                alert("Both chose paper, it's a tie.");
                return "tie";
            }
            else if(computerChoice === "scissors") {
                alert("You lose, scissors beats paper.");
                return "computer";
            }
            else {
                alert("ERROR");
                return "error";
            }
            break;
        case "scissors":
            if(computerChoice === "rock") {
                alert("You lose, rock beats scissors.");
                return "computer";
            }
            else if(computerChoice === "paper") {
                alert("You win, scissors beats paper.");
                return "player";
            }
            else if(computerChoice === "scissors") {
                alert("It's a tie, both chose scissors.");
                return "tie";
            }
            else {
                alert("ERROR");
                return "error";
            }
            break;
    }
}

// play a game consisting of a specified number of rounds
function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    let roundsPlayed = 0;

    while(roundsPlayed < 5) {
        if(playOneRound(getPlayerChoice(), getComputerChoice()) === "player") {
            playerWins++;
            roundsPlayed++;
        }
        else if(playOneRound(getPlayerChoice(), getComputerChoice()) === "computer") {
            computerWins++;
            roundsPlayed++;
        }
        else if(playOneRound(getPlayerChoice(), getComputerChoice()) === "tie") {
            ties++;
            roundsPlayed++;
        }
        else {
            roundsPlayed++;
        }
    }

    if(playerWins > computerWins) {
        alert(`Game over, you win ${playerWins} to ${computerWins}`);
    }
    else if(computerWins > playerWins) {
        alert(`Game over, you lose ${playerWins} to ${computerWins}`);
    }
}

playGame();