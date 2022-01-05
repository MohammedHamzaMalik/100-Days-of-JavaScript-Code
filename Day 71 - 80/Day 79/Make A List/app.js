var addBtn = document.getElementById("addBtn");
var deleteBtn = document.getElementById("deleteBtn");
var ele = document.getElementById("inputEle");
var input = document.querySelector(".input");

addBtn.addEventListener("click", () => {
  var elements = document.createElement("div");
  elements.style.backgroundColor = "#333";
  elements.style.color = "#fff";
  elements.style.margin = "0.5rem";
  elements.style.padding = "0.5rem";
  elements.style.borderRadius = "5px";
  var val = document.createTextNode(ele.value);
  elements.appendChild(val);
  input.appendChild(elements);
});

deleteBtn.addEventListener("click", () => {
  input.innerHTML = "";
});
