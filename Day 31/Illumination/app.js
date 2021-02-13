var mouseMovement = document.documentElement;

mouseMovement.addEventListener("mousemove", (e) => {
  mouseMovement.style.setProperty("--x", e.clientX + "px");
  mouseMovement.style.setProperty("--y", e.clientY + "px");
});
