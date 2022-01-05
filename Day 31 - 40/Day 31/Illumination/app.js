var mouseMovement = document.documentElement;

// adding event listener for the movement of mouse
mouseMovement.addEventListener("mousemove", (e) => {
  mouseMovement.style.setProperty("--x", e.clientX + "px");
  mouseMovement.style.setProperty("--y", e.clientY + "px");
});
