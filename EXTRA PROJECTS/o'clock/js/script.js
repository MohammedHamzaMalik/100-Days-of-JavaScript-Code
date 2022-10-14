import $ from "jquery";

// moment.tz.setDefault("Asia/Jakarta");

// components
let clockSeconds = $(".clock-seconds");
let clockMinutes = $(".clock-minutes");
let clockHours = $(".clock-hours");

$(document).ready(() => {
  setInterval(setClock, 1000);

  function setClock() {
    let time = new Date();
    let second = time.getSeconds() * 6;
    let minute = time.getMinutes() * 6;
    let minutetoHour = time.getMinutes() / 60;
    let hour = (time.getHours() + minutetoHour) * 30;
    clockSeconds.css("transform", `rotateZ(${second}deg)`);
    clockMinutes.css("transform", `rotateZ(${minute}deg)`);
    clockHours.css("transform", `rotateZ(${hour}deg)`);
  }
});
