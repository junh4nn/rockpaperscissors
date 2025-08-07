const hand = ["rock", "paper", "scissors"];
var userScore = 0, compScore = 0;
const userTag = "user".fontsize(3).sub();
const compTag = "comp".fontsize(3).sub();

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const page1_div = document.querySelector(".page1");
const page2_div = document.querySelector(".page2");
const start_button = document.getElementById("start")


function getCompChoice() {
  let choice = Math.floor(Math.random() * 3);
    return hand[choice];
}


function glow(userChoice, colour) {
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add(colour);
  setTimeout(() => {userChoice_div.classList.remove(colour);}, 300);
}


function tie(userChoice) {
  result_div.innerHTML = "It's a tie!";
  glow(userChoice, "grey-glow");
}

function win(userChoice, compChoice) {
  result_div.innerHTML = `You win! ${userChoice}${userTag} beats ${compChoice}${compTag}`;
  userScore++;
  userScore_span.innerHTML = userScore;
  glow(userChoice, "green-glow");
}

function lose(userChoice, compChoice) {
  result_div.innerHTML = `You lose! ${compChoice}${compTag} beats ${userChoice}${userTag}`;
  compScore++;
  compScore_span.innerHTML = compScore;
  glow(userChoice, "red-glow");
}


function startGame(userChoice) {
  let compChoice = getCompChoice();

  if (userChoice == compChoice) {
    tie(userChoice);
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


rock_div.addEventListener('click', () => startGame("rock"));

paper_div.addEventListener('click', () => startGame("paper"));

scissors_div.addEventListener('click', () => startGame("scissors"));

start_button.onclick = function(){
  page1_div.classList.add("fadeOut");
  page2_div.classList.add("fadeIn");
}