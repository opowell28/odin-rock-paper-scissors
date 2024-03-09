let computerChoice;

// randomly return either rock, paper, or scissors based on a random number
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 100) + 1;

    if(randNum >= 1 && randNum < 33) {
        computerChoice = "rock";
    }
    else if(randNum >= 33 && randNum < 66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
}

getComputerChoice();