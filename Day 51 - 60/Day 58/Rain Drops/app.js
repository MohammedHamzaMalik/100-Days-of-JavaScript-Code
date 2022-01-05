setInterval(fallingDrops, 50);

const container = document.querySelector(".container");

function fallingDrops() {
  const drop = document.createElement("span");
  drop.classList.add("drops");
  
  const dropIcon = document.createElement("i");
  dropIcon.classList.add("fas", "fa-tint");
  
  drop.style.fontSize = 20 + Math.random() * 40 + "px";
  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.animationDuration = 1 + Math.random() * 3 + "s";
  
  dropIcon.style.animationDuration = 1 + Math.random() * 3 + "s";
  
  drop.appendChild(dropIcon);
  container.appendChild(drop);
  
  setTimeout(() => {
    drop.remove();
  }, 5000);
}
