let clock = document.getElementById("digital-clock");

setInterval(() => {
  let date = new Date();
//   eturns a string with a language sensitive representation of the time portion of this date
//   for more information visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
