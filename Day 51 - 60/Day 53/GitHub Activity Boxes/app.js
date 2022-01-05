const container = document.getElementById("container");

// adding different green color codes in an array
var greenColorCodes = [
  "#7CFC00",
  "#78AB46",
  "#3B5323",
  "#458B00",
  "#BCED91",
  "#61B329",
  "#5DFC0A",
  "#4CBB17",
  "#4AC948",
  "#00EE00",
  "#33FF33",
  "#00C957",
];

// this will be our total number of squares for activity
const numberOfSquares = 182;

// using for loop for adding event listener to each activity box
for (let i = 0; i < numberOfSquares; i++) {
  const activity = document.createElement("div");
  activity.classList.add("activity");

  activity.addEventListener("mouseover", () => {
    addColor(activity);
  });
  activity.addEventListener("mouseout", () => {
    stickColor(activity);
  });
//   adding our activity div to container
  container.appendChild(activity);
}

function addColor(x) {
//   below line will give us random colors from the added color in the above array
  const gettingColor = greenColors();
  x.style.backgroundColor = gettingColor;
  x.style.boxShadow = `0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;
}

function stickColor(x) {
  const gettingColor = greenColors();
  x.style.backgroundColor = `${gettingColor}`;
  x.style.boxShadow = `0 0 2px rgb(151, 151, 151)`;
}

function greenColors() {
  return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}
