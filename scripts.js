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
    let playerChoice = prompt("Enter 'rock,' 'paper,' or 'scissors.'");
}
