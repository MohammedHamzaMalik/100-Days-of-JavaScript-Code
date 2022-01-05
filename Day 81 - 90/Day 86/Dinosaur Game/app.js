var character = document.getElementById("character");
var block = document.getElementById("block");
var score = document.getElementById("score");
var jumpBtn = document.getElementById("btn");
var message = document.getElementById("message");

var count = 0;

var body = document.body;
body.addEventListener("click", () => {
  jump();
});
jumpBtn.addEventListener("click", () => {
  jump();
});
function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");

    count++;
    score.innerText = "Score : " + count;
  }
  setTimeout(() => {
    character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(() => {
  var charTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    message.style.opacity = "1";
    alert(
      "You lost!\nYour score is " +
        count +
        "\nRefresh the page to restart the game"
    );
    score.innerText = "Score : " + 0;
  }
}, 10);
