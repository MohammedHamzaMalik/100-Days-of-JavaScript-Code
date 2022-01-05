window.onload = function () {
  var seconds = 00;
  var mili = 00;
  var addSeconds = document.querySelector(".seconds");
  var addMili = document.querySelector(".mili");
  var startBtn = document.querySelector(".start");
  var stopBtn = document.querySelector(".stop");
  var resetBtn = document.querySelector(".reset");
  var interval;

  startBtn.onclick = function () {
    clearInterval(interval);
    interval = setInterval(start, 10);
  };

  stopBtn.onclick = function () {
    clearInterval(interval);
  };

  resetBtn.onclick = function () {
    clearInterval(interval);
    seconds = "00";
    mili = "00";
    addSeconds.innerHTML = seconds;
    addMili.innerHTML = mili;
  };

  function start() {
    mili++;

    if (mili > 9) {
      addMili.innerHTML = mili;
    }
    if (mili < 9) {
      addMili.innerHTML = "0" + mili;
    }

    if (mili > 99) {
      console.log(seconds);
      seconds++;
      addSeconds.innerHTML = "0" + seconds;
      mili = 0;
      addMili.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      addSeconds.innerHTML = seconds;
    }
  }
};
