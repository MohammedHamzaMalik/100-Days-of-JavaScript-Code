const ele = document.documentElement;

ele.addEventListener("mousemove", (event) => {
  ele.style.setProperty("--x", event.clientX + "px");
  ele.style.setProperty("--y", event.clientY + "px");
});
