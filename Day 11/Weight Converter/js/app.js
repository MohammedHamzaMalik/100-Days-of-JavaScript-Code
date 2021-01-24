// selecting the form tag
const form = document.querySelector("form");

// adding event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.querySelector("input");
    var convertedWeight = document.querySelector("span");
    var kgTOpound;
//     error if the input value is less than zero or it is not a number
    if ((isNaN(input.value)) || input.value <= 0) {
        convertedWeight.classList.add("error");
        convertedWeight.innerHTML = "<p>Please enter a valid number!</p>";
        
//         removing the class after specific interval of time
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
