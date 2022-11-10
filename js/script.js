// variable for score
let pScore = 0;
let cScore = 0;

// query selectors
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let result = document.querySelector("#result");
let round = document.querySelector("#round");

let chooseRock = document.querySelector("#chooseRock");
let choosePaper = document.querySelector("#choosePaper");
let chooseScissors = document.querySelector("#chooseScissors");
let playBtn = document.querySelector("#playBtn");
let resetBtn = document.querySelector(".resetBtn");

let playerRock = document.querySelector(".playerRock");
let playerPaper = document.querySelector(".playerPaper");
let playerScissors = document.querySelector(".playerScissors");

let computerRock = document.querySelector(".computerRock");
let computerPaper = document.querySelector(".computerPaper");
let computerScissors = document.querySelector(".computerScissors");

// function for computer to get random choices
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * 3);
  return choices[randomChoices];
}

// function for player score to increment 1 if the player won
function win(playerChoice, computerChoice) {
  pScore++;
  playerScore.innerHTML = pScore;
  result.innerHTML = playerChoice.toUpperCase() + " beats " + computerChoice.toUpperCase() + ", Player WON!";
}

// function for computer score to increment 1 if the player lost
function lose(playerChoice, computerChoice) {
  cScore++;
  computerScore.innerHTML = cScore;
  result.innerHTML = computerChoice.toUpperCase() + " beats " + playerChoice.toUpperCase() + ", Computer WON!";
}

// function if the game is draw
function draw(playerChoice, computerChoice) {
  result.innerHTML = "Draw!".toUpperCase();
}

// function for condition how the game works
function game(playerChoice) {
  const computerChoice = getComputerChoice();
  
  // conditions for player if the value is rock
  if(playerChoice === "rock") {
    if(computerChoice === "scissors") {
      computerScissors.style.display = "block";
      computerRock.style.display = "none";
      computerPaper.style.display = "none";
      win(playerChoice, computerChoice);
    } else if (computerChoice === "paper") {
      computerPaper.style.display = "block";
      computerScissors.style.display = "none";
      computerRock.style.display = "none";
      lose(playerChoice, computerChoice);
    } else {
      computerRock.style.display = "block";
      computerPaper.style.display = "none";
      computerScissors.style.display = "none";
      draw(playerChoice, computerChoice);
    }
  }

  // conditions for player if the value is paper
  if(playerChoice === "paper") {
    if(computerChoice === "rock") {
      computerScissors.style.display = "none";
      computerRock.style.display = "block";
      computerPaper.style.display = "none";
      win(playerChoice, computerChoice);
    } else if (computerChoice === "scissors") {
      computerPaper.style.display = "none";
      computerScissors.style.display = "block";
      computerRock.style.display = "none";
      lose(playerChoice, computerChoice);
    } else {
      computerRock.style.display = "none";
      computerPaper.style.display = "block";
      computerScissors.style.display = "none";
      draw(playerChoice, computerChoice);
    }
  }

  // conditions for player if the value is scissors
  if(playerChoice === "scissors") {
    if(computerChoice === "paper") {
      computerScissors.style.display = "none";
      computerRock.style.display = "none";
      computerPaper.style.display = "block";
      win(playerChoice, computerChoice);
    } else if (computerChoice === "rock") {
      computerPaper.style.display = "none";
      computerScissors.style.display = "none";
      computerRock.style.display = "block";
      lose(playerChoice, computerChoice);
    } else {
      computerRock.style.display = "none";
      computerPaper.style.display = "none";
      computerScissors.style.display = "block";
      draw(playerChoice, computerChoice);
    }
  }
}

// function to start the game
function startGame() {
  chooseRock.addEventListener("click", function() {
    game("rock");
    playerRock.style.display = "block";
    playerPaper.style.display = "none";
    playerScissors.style.display = "none";
    gameOver();
  })

  choosePaper.addEventListener("click", function() {
    game("paper");
    playerPaper.style.display = "block";
    playerRock.style.display = "none";
    playerScissors.style.display = "none";
    gameOver();
  })

  chooseScissors.addEventListener("click", function() {
    game("scissors");
    playerScissors.style.display = "block";
    playerPaper.style.display = "none";
    playerRock.style.display = "none";
    gameOver();
  })
}

// function if the game is over
function gameOver() {
  if (pScore === 5) {
    round.innerHTML = "GAME OVER! Player won the MATCH!";
    chooseRock.setAttribute("disabled", "");
    choosePaper.setAttribute("disabled", "");
    chooseScissors.setAttribute("disabled", "");
    resetBtn.style.display = "block";
  } else if (cScore === 5) {
    round.innerHTML = "GAME OVER! Computer won the MATCH!";
    chooseRock.setAttribute("disabled", "");
    choosePaper.setAttribute("disabled", "");
    chooseScissors.setAttribute("disabled", "");
    resetBtn.style.display = "block";
  } else {

  }
}

// event for reset button and function to reset the game
playBtn.addEventListener("click", function() {
  chooseRock.removeAttribute("disabled", "");
  choosePaper.removeAttribute("disabled", "");
  chooseScissors.removeAttribute("disabled", "");
  resetBtn.style.display = "none";
  pScore = 0;
  cScore = 0;
  playerScore.innerHTML = pScore;
  computerScore.innerHTML = cScore;
  round.innerHTML = "";
  playerRock.style.display = "block";
  playerPaper.style.display = "none";
  playerScissors.style.display = "none";
  computerRock.style.display = "block";
  computerPaper.style.display = "none";
  computerScissors.style.display = "none";
})
  

startGame();