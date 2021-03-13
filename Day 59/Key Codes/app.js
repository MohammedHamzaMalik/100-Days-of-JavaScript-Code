const container = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
  console.log(e);
  container.innerHTML = `<div class="key-container"><h4>Key</h4>${
    e.key === " " ? "Space" : e.key
  }</div> <div class="key-container"><h4>Code</h4>${
    e.code
  }</div><div class="key-container"><h4>Key Code</h4>${e.keyCode}</div>`;
});
