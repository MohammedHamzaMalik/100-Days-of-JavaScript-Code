const form = document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  if (height === " " || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter a valid input";
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid input";
  } else {
    const yourBMIis = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${yourBMIis}</span>`;
  }
});
