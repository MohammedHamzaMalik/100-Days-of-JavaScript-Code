
const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.querySelector("input");
    var convertedWeight = document.querySelector("span");
    var kgTOpound;

    if ((isNaN(input.value)) || input.value <= 0) {
        convertedWeight.classList.add("error");
        convertedWeight.innerHTML = "<p>Please enter a valid number!</p>";

        setTimeout(() => {
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("error");
        }, 2500);
        input.value = "";
    } else {
        kgTOpound = Number(input.value) * 2.20462;
        convertedWeight.classList.add("successfull");
        convertedWeight.innerHTML = `${kgTOpound.toFixed(2)}`;

        setTimeout(() => {
            convertedWeight.innerHTML = "";
            input.value = "";
            convertedWeight.classList.remove("successfull");
        }, 20000);
    }
})