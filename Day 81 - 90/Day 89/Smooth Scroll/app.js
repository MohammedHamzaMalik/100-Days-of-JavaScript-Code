function scrollingSmoothly(target, time_duration) {
  var target = document.querySelector(target);
  var target_pos = target.getBoundingClientRect().top;
  var start_pos = window.pageYOffset;
  var distance = target_pos - start_pos;
  var start_time = null;

  function animate(current_time) {
    if (start_time == null) start_time = current_time;
    var time_elapsed = current_time - start_time;
    var scroll = ease(time_elapsed, start_pos, distance, time_duration);
    window.scrollTo(0, scroll);
    if (time_elapsed < time_duration) requestAnimationFrame(animate);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animate);
}

var upperPart = document.querySelector(".upperPart");

var belowPart = document.querySelector(".belowPart");

upperPart.addEventListener("click", () => {
  scrollingSmoothly(".belowPart", 2500);
});

belowPart.addEventListener("click", () => {
  scrollingSmoothly(".upperPart", 2500);
});
