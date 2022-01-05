const counter = document.querySelectorAll(".counter");

// counting in each counter
counter.forEach((singleCounter) => {
//   initializing each counter to 0
  singleCounter.innerText = 0;

  const counting = () => {
//     assigning the value of total
    const totalCount = +singleCounter.getAttribute("data-counter");
    
    const incrementing = +singleCounter.innerText;

//     controlling the speed of the counter
    const speed = totalCount / 1000;

    if (incrementing < totalCount) {
      singleCounter.innerText = `${Math.floor(incrementing + speed)}`;
      setTimeout(counting, 1);
    } else {
      singleCounter.innerText = totalCount;
    }
  };
  counting();
});
