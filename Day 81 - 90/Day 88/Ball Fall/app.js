var ball = document.getElementById("ball");
var game = document.getElementById("game");

var interval,
  both = 0,
  count = 0,
  currentBlocks = [];

function moveLeft() {
  var left = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
  if (left > 0) {
    ball.style.left = left - 2 + "px";
  }
}
function moveRight() {
  var left = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
  if (left < 380) {
    ball.style.left = left + 2 + "px";
  }
}
document.addEventListener("keydown", (event) => {
  if (both == 0) {
    both++;
    if (event.key == "ArrowLeft") {
      interval = setInterval(moveLeft, 1);
    }
    if (event.key == "ArrowRight") {
      interval = setInterval(moveRight, 1);
    }
  }
});
document.addEventListener("keyup", (event) => {
  clearInterval(interval);
  both = 0;
});

var blocks = setInterval(() => {
  var lastBlock = document.getElementById("block" + (count - 1));
  var lastHole = document.getElementById("hole" + (count - 1));

  if (count > 0) {
    var lastBlockTop = parseInt(
      window.getComputedStyle(lastBlock).getPropertyValue("top")
    );
    var lastHoleTop = parseInt(
      window.getComputedStyle(lastHole).getPropertyValue("top")
    );
  }
  if (lastBlockTop < 400 || count == 0) {
    var block = document.createElement("div");
    var hole = document.createElement("div");
    block.setAttribute("class", "block");
    hole.setAttribute("class", "hole");
    block.setAttribute("id", "block" + count);
    hole.setAttribute("id", "hole" + count);
    block.style.top = lastBlockTop + 100 + "px";
    hole.style.top = lastHoleTop + 100 + "px";
    var random = Math.floor(Math.random() * 360);
    hole.style.left = random + "px";
    game.appendChild(block);
    game.appendChild(hole);
    currentBlocks.push(count);
    count++;
  }
  var ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
  var ballLeft = parseInt(
    window.getComputedStyle(ball).getPropertyValue("left")
  );
  var drop = 0;
  if (ballTop <= 0) {
    alert("GAME OVER\nYour score is: " + (count - 9));
    clearInterval(blocks);
    Location.reload();
  }
  for (let i = 0; i < currentBlocks.length; i++) {
    let currentBlock = currentBlocks[i];
    let iTHblock = document.getElementById("block" + currentBlock);
    let iTHHole = document.getElementById("hole" + currentBlock);
    let iTHblock_top = parseFloat(
      window.getComputedStyle(iTHblock).getPropertyValue("top")
    );
    let iTHHole_left = parseFloat(
      window.getComputedStyle(iTHHole).getPropertyValue("left")
    );
    iTHblock.style.top = iTHblock_top - 0.5 + "px";
    iTHHole.style.top = iTHblock_top - 0.5 + "px";
    if (iTHblock_top < -20) {
      currentBlocks.shift();
      iTHblock.remove();
      iTHHole.remove();
    }
    if (iTHblock_top - 20 < ballTop && iTHblock_top > ballTop) {
      drop++;
      if (iTHHole_left <= ballLeft && iTHHole_left + 20 >= ballLeft) {
        drop = 0;
      }
    }
  }
  if (drop == 0) {
    if (ballTop < 480) {
      ball.style.top = ballTop + 2 + "px";
    }
  } else {
    ball.style.top = ballTop - 0.5 + "px";
  }
}, 1);
