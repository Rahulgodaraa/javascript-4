"use strict";

// console.log(document.querySelector('.message').textContent)
const secretnumber = Math.trunc(Math.random() * 10) - 1;
document.querySelector(".number").textContent ;
let score = 10;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message ;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!";
    displaymessage("No number!");
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess !== secretnumber) {
    if (score > 1) {
    displaymessage( guess > secretnumber ? "Too high"  :   "Too low") ;
    score--;
      document.querySelector(".score").textContent = score;
  } else {
    document.querySelector('.score').textContent = 0 ;
    displaymessage('You lost the game!')
  }
  } else if (guess == secretnumber) {
    if (score < 10) {
      displaymessage("Correct guess!");
      document.querySelector("body").style.backgroundColor =
        " rgb(35, 174, 33)";
      score++;
      document.querySelector(".score").textContent = score;

    if (score > highscore) { 
        highscore = score ; 
        document.querySelector('.highscore').textContent = highscore ;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click' , function() {
const secretnumber = Math.trunc(Math.random *10) - 1;
document.querySelector(".number").textContent ;
let score = 10;
let highscore = 0;
displaymessage("Start guessing.....")
document.querySelector(".score").textContent = score;
document.querySelector(".number").textContent  = '?';
document.querySelector(".guess").value = '';
document.querySelector(".highscore").textContent;

document.querySelector('body').style.backgroundColor =  '#333' ; 
})
