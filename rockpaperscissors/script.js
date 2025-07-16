const hand = ["rock", "paper", "scissors"];
var userScore = 0, compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


rock_div.addEventListener('click', function() {
  startGame("rock");
})

paper_div.addEventListener('click', function() {
  startGame("paper");
})

scissors_div.addEventListener('click', function() {
  startGame("scissors");
})


function getCompChoice() {
  let choice = Math.floor(Math.random() * 3);
    return hand[choice];
}


function startGame(userChoice) {
  let compChoice = getCompChoice();

  if (userChoice == compChoice) {
    tie(userChoice, compChoice);
  }
  else if (userChoice == "rock" && compChoice == "scissors" ||
           userChoice == "paper" && compChoice == "rock" ||
           userChoice == "scissors" && compChoice == "paper") {
    win(userChoice, compChoice);
  }
  else {
    lose(userChoice, compChoice);
  }
}


function tie() {
  result_div.innerHTML = "It's a tie!";
}

function win(userChoice, compChoice) {
  result_div.innerHTML = `You win! ${userChoice} beats ${compChoice}.`;
  userScore++;
  userScore_span.innerHTML = userScore;
}

function lose(userChoice, compChoice) {
  result_div.innerHTML = `You lose! ${compChoice} beats ${userChoice}.`;
  compScore++;
  compScore_span.innerHTML = compScore;
}