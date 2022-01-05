const holes = document.querySelectorAll(".hole");
const score = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const startBtn = document.querySelector(".startBtn");
const countDown = document.querySelector(".countDown");

let lastHole;
let timeUp = false;
let timeLimit = 20000;
let currentScore = 0;
let cuurentCountDown;

function pickRandomHole(holes) {
  const randomHole = Math.floor(Math.random() * holes.length);
  const hole = holes[randomHole];
  if (hole == lastHole) {
    return pickRandomHole(holes);
  }
  lastHole = hole;
  return hole;
}
function popUp() {
  const time = Math.random() * 1300 + 400;
  const hole = pickRandomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) popUp();
  }, time);
}
// popUp();

function startGame() {
  cuurentCountDown = timeLimit / 1000;
  score.textContent = 0;
  score.style.display = "block";
  cuurentCountDown.textContent = countDown;
  timeUp = false;
  currentScore = 0;
  popUp();
  setTimeout(() => {
    timeUp = true;
  }, timeLimit);
  let startCountDown = setInterval(() => {
    cuurentCountDown--;
    countDown.textContent = cuurentCountDown;

    if (cuurentCountDown < 0) {
      cuurentCountDown = 0;
      clearInterval(startCountDown);
      countDown.textContent = `Times Up! Thank you for protecting our planet! This is the way!`;
    }
  }, 1000);
}

function whack(event) {
  currentScore++;
  this.style.backgroundImage = "url(yoda2.png)";
  this.style.pointerEvents = "none";
  setTimeout(() => {
    this.style.backgroundImage = "url(yoda1.png)";
    this.style.pointerEvents = "all";
  }, 800);
  score.textContent = currentScore;
}
moles.forEach((mole) => mole.addEventListener("click", whack));
startBtn.addEventListener("click", startGame);
