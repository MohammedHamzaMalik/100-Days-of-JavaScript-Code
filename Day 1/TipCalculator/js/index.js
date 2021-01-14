function tipCalculator() {
    var billAmount = document.getElementById("bill").value;
    var serviceQuality = document.getElementById("service").value;
    var numberOfPeople = document.getElementById("numOfPeople").value;

    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter required values!")
        return;
    }

    if ( numberOfPeople === "" || numberOfPeople <=1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    var totalAmount = (billAmount * serviceQuality) / numberOfPeople;
    totalAmount = Math.round(totalAmount * 100) / 100;
    totalAmount = totalAmount.toFixed(2);
    document.getElementById("tip-container").style.display = "block";
    document.getElementById("tip").innerHTML = totalAmount;
}

document.getElementById("tip-container").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate-btn").onclick = function() {
    tipCalculator();
};
