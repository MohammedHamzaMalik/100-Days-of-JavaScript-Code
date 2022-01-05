const container = document.querySelector(".search-container");
const input = document.querySelector(".search");
const button = document.querySelector(".button");
const x = document.querySelector(".fa-times");

button.addEventListener("click", () => {
  container.classList.toggle("active");
  button.classList.toggle("active");
  x.classList.toggle("active");
  input.focus();
});
// in the above lines of code we will toggle the class active for the width of search container, for changing the symbol
