const container = document.getElementById("container");
const animation = document.getElementById("animation");
const smallParts = 50;
const parts = [];
const widthOfPart = Math.ceil(window.innerWidth / smallParts);
const heightOfPart = Math.ceil(window.innerHeight / smallParts);

createBlocks();

function createBlocks() {
  for (let i = 0; i < smallParts; i++) {
    const row = [];
    for (let j = 0; j < smallParts; j++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.style.width = widthOfPart + "px";
      block.style.height = heightOfPart + "px";
      block.style.top = "100vh";
      block.style.left = "100vw";
      block.style.backgroundPosition = `${-widthOfPart * j}px ${-heightOfPart * i}px`;
      row.push(block);
      container.appendChild(block);
    }
    parts.push(row);
  }

  setTimeout(() => {
    animateBlocks(animation);
  }, 1000);
}

function animateBlocks() {
  parts.forEach((row, i) => {
    row.forEach((block, j) => {
      block.style.top = heightOfPart * i + "px";
      block.style.left = widthOfPart * j + "px";
      block.style.transitionDelay = i * smallParts + j * smallParts + "ms";
    });
  });
}

function cleanUp() {
  parts.forEach((row, i) => {
    row.forEach((block, j) => {
      block.remove();
    });
  });
  parts.splice(0, parts.length);
}
