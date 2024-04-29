

// Function to get user input
function getUserInput() {
    let userInput = "";
    let buttons = document.querySelectorAll(".button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            userInput = button.id;
            let computerMove = getComputerMove();
            compareMoves(userInput, computerMove);
        })
    }
 };


// Function to get computer move
function getComputerMove() {
    let computerOptions = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let computerMove = computerOptions[randomChoice];
    return computerMove;
};

let computerMove = getComputerMove();




// Function to compare
function compareMoves(userInput, computerMove) {    
    let action = document.getElementById("action");
    let winner = document.getElementById("winner"); 

    let capUserInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    let capComputerMove = computerMove.charAt(0).toUpperCase() + computerMove.slice(1);
    

    if(userInput === computerMove){
        action.textContent = `${capUserInput} is the same as ${capComputerMove}`;
        winner.textContent = "It's a TIE !";
    } else if (userInput === "rock" && computerMove === "paper"){
        action.textContent = `${capComputerMove} covers ${capUserInput}`;
        winner.textContent = "Computer wins!";
    } else if (userInput === "rock" && computerMove === "scissors"){
        action.textContent = `${capUserInput} crushes ${capComputerMove}`;
        winner.textContent = "Player wins!";
    } else if (userInput === "paper" && computerMove === "scissors"){
        action.textContent = `${capComputerMove} cuts ${capUserInput}`;
        winner.textContent = "Computer wins!";
    } else if (userInput === "paper" && computerMove === "rock"){
        action.textContent = `${capUserInput} covers ${capComputerMove}`;
        winner.textContent = "Player wins!";
    } else if (userInput === "scissors" && computerMove === "rock"){
        action.textContent = `${capComputerMove} crushes ${capUserInput}`;
        winner.textContent = "Computer wins!";
    } else if (userInput === "scissors" && computerMove === "paper"){
        action.textContent = `${capUserInput} cuts ${capComputerMove}`;
        winner.textContent = "Player wins!";
    } else {
        action.textContent = "Invalid move";
        winner.textContent = "";
    }
    incrementScore(winner.textContent);
    return action;    
  };


// Increment scor depending on the winner
function incrementScore(winner) {
    let pScore = document.getElementById("player-score");
    let cScore = document.getElementById("computer-score");

    if( winner === "Player wins!"){
        pScore.textContent = parseInt(pScore.textContent) +1;
    }else if (winner === "Computer wins!"){
        cScore.textContent = parseInt(cScore.textContent) +1;
    };
};


// End the game when one of the players get 20 points  
function checkGameEnd() {}

getUserInput();
getComputerMove();
compareMoves();

  
