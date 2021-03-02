var text = document.getElementById("text");
// console.log(text.innerText);

const speed = document.getElementById("speed");

// var userText = document.getElementById("user-text");
// console.log(userText);
// var content = userText.innerText;
var sentence = "This is the HULK!";

// const start = document.getElementById("start");
// const stopIt = document.getElementById("stop");
let index = 1;
// let speedChanger = 500 / speed.value;
let speedChanger = 250;

writingSentence();
// start.addEventListener("click", ()=>{
// //     // text.innerText = userText.innerText;
// //     text.innerText.replace(content);
//     writingSentence();
// })
// stopIt.addEventListener("click", ()=> {
//     speedChanger--;
// })
function writingSentence() {
  text.innerText = sentence.slice(0, index);
  index++;

  if (index > sentence.length) {
    index = 1;
  }
  setTimeout(writingSentence, speedChanger);
}

// speed.addEventListener('input',(e)=> {
//     // console.log(e);
//     speedChanger = 500 / e.target.value;
// })
