var specification = document.getElementsByClassName("specification");
var array = [];
var currentWord = 0;

specification[currentWord].style.opacity = 1;
for (let i = 0; i < specification.length; i++) {
  eachLetter(specification[i]);
}

function eachLetter(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];

  for (let i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  array.push(letters);
}

function wordIsChanging() {
  var currentWd = array[currentWord];
  var newWd =
    currentWord == specification.length - 1 ? array[0] : array[currentWord + 1];
  for (let i = 0; i < currentWd.length; i++) {
    animateOut(currentWd, i);
  }
  for (let i = 0; i < newWd.length; i++) {
    newWd[i].className = "letter behind";
    newWd[0].parentElement.style.opacity = 1;
    animateIn(newWd, i);
  }
  currentWord = currentWord == array.length - 1 ? 0 : currentWord + 1;
}

function animateOut(currentWd, i) {
  setTimeout(() => {
    currentWd[i].className = "letter out";
  }, i * 80);
}
function animateIn(newWd, i) {
  setTimeout(() => {
    newWd[i].className = "letter in";
  }, 340 + i * 80);
}

wordIsChanging();
setInterval(wordIsChanging, 2000);
