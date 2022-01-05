const letters = document.querySelectorAll(".letters span");

// toggleing active for each letter
letters.forEach((letter, index) => {
  letter.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });
  letter.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });

//   setTimeout(() => {
//     letter.classList.add("active");
//   }, 750 * (idx + 1));
});
