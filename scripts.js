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
    let playerChoice = prompt("Enter 'rock,' 'paper,' or 'scissors.'").toLowerCase();
    return playerChoice;
}

// play a single round and return the winner
function playOneRound(playerChoice, computerChoice) {
    switch(playerChoice) {
        case "rock":
            if(computerChoice === "rock") {
                console.log("It's a tie, both chose rock.");
                return "tie";
            }
            else if(computerChoice === "paper") {
                console.log("You lose, paper beats rock.");
                return "computer";
            }
            else if(computerChoice === "scissors") {
                console.log("You win, rock beats scissors.");
                return "player";
            }
            else {
                break;
            }
        case "paper":
            if(computerChoice === "rock") {
                console.log("You win, paper beats rock.");
                return "player";
            }
            else if(computerChoice === "paper") {
                console.log("It's a tie, both chose paper.");
                return "tie";
            }
            else if(computerChoice === "scissors") {
                console.log("You lose, scissors beats paper.");
                return "computer";
            }
            else {
                break;
            }
        case "scissors":
            if(computerChoice === "rock") {
                console.log("You lose, rock beats scissors.");
                return "computer";
            }
            else if(computerChoice === "paper") {
                console.log("You win, scissors beats paper.");
                return "player";
            }
            else if(computerChoice === "scissors") {
                console.log("It's a tie, both chose scissors.");
                return "tie";
            }
            else {
                break;
            }
    }
}

// play a game consisting of a specified number of rounds
function playGame() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
    
        let winner = playOneRound(playerChoice, computerChoice);
    
        if (winner === "player") {
            playerWins++;
        } else if (winner === "computer") {
            computerWins++;
        }
    }
    

    if(playerWins > computerWins) {
        console.log(`Game over, you win ${playerWins} to ${computerWins}`);
    }
    else if(computerWins > playerWins) {
        console.log(`Game over, you lose ${playerWins} to ${computerWins}`);
    }
    else {
        console.log(`It's a tie, ${playerWins} to ${computerWins}`);
    }
}

playGame();