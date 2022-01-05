var j = document.getElementById("j");
var u = document.getElementById("u");
var p = document.getElementById("p");
var y = document.getElementById("y");
var t = document.getElementById("t");
var e = document.getElementById("e");
var r = document.getElementById("r");
var jupyter = document.getElementById("complete");

j.addEventListener("click", () => {
  j.style.display = "none";
  u.style.display = "block";
});
u.addEventListener("click", () => {
  u.style.display = "none";
  p.style.display = "block";
});
p.addEventListener("click", () => {
  p.style.display = "none";
  y.style.display = "block";
});
y.addEventListener("click", () => {
  y.style.display = "none";
  t.style.display = "block";
});
t.addEventListener("click", () => {
  t.style.display = "none";
  e.style.display = "block";
});
e.addEventListener("click", () => {
  e.style.display = "none";
  r.style.display = "block";
});
r.addEventListener("click", () => {
  r.style.display = "none";
  jupyter.style.display = "block";
});
jupyter.addEventListener("click", () => {
  jupyter.style.display = "none";
  j.style.display = "block";
});
