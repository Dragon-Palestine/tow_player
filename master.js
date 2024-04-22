"use strict";

const newGame = document.querySelector(".new-game");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
let points = document.querySelector(".points");
let playerScores = document.querySelectorAll(".player-score");
let currentScore = document.querySelectorAll(".current-score");
let currentBox = document.querySelectorAll(".current");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let rand = 0,
  sumRand = 0,
  indexOfActive = 0;
// let indexOfActive = function () {
//   if (document.querySelector(".left").classList.contains("active")) return 0;
//   else return 1;
// };
const funHold = function () {
  if (!indexOfActive) {
    left.classList.remove("active");
    right.classList.add("active");
  } else {
    right.classList.remove("active");
    left.classList.add("active");
  }
  playerScores[indexOfActive].textContent =
    "" + (Number(playerScores[indexOfActive].textContent) + sumRand);
  currentScore[indexOfActive].textContent = "0";
  sumRand = 0;
  indexOfActive = indexOfActive == 0 ? 1 : 0;
};

const stop = function () {
  roll.disabled = true;
  hold.disabled = true;
};
roll.addEventListener("click", function () {
  rand = Math.trunc(Math.random() * 6) + 1;
  points.src = `point${rand}.jpg`;

  points.classList.remove("hidden");
  points.textContent = rand;
  if (rand == 1) funHold();
  else {
    sumRand += rand;
    currentScore[indexOfActive].textContent = "" + sumRand;
  }
  if (sumRand + Number(playerScores[indexOfActive].textContent) >= 100) {
    playerScores[indexOfActive].textContent =
      "" + (Number(playerScores[indexOfActive].textContent) + sumRand);
    if (!indexOfActive) left.style.backgroundColor = "#008000ab";
    else right.style.backgroundColor = "#008000ab";
    newGame.classList.add("animation");
    stop();
  }
});

hold.addEventListener("click", funHold);

newGame.addEventListener("click", function () {
  location.reload();
});
