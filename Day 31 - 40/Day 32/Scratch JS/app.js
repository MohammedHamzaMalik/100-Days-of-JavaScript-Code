document.addEventListener("mousemove", (e) => {
  const body = document.querySelector("body");
//   creating span element for scratching 
  const scratcher = document.createElement("span");
  scratcher.style.left = -75 + e.offsetX + "px";
  scratcher.style.top = -75 + e.offsetY + "px";
  body.appendChild(scratcher);
});
