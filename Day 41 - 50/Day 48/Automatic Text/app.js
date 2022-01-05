var text = document.getElementById("text");
// console.log(text.innerText);
// var userText = document.getElementById("user-text");
// console.log(userText);
// var content = userText.innerText;
var sentence = "This is the HULK!";

// const start = document.getElementById("start");
// const stopIt = document.getElementById("stop");
let index = 1;
let speedChanger = 250; // this is the speed of letters coming in

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
  // going from index=0 till the last alphabet
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
