let start = document.querySelector("#start");
let input = document.querySelector("#input");
let count = document.querySelector("#count");
let alertPop = document.querySelector("#alert");

start.addEventListener("click", () => {
  if (start.innerText === "Start CountDown") {
    if (!isNaN(input.value)) {
      let counter = Math.floor(input.value);
      start.innerText = "Countdown Running...";
      count.classList.remove("invisible");
      count.innerText = counter;
      const int = setInterval(() => {
        counter--;
        if (counter === 0) {
          clearInterval(int);
          start.innerText = "Start CountDown";
          alertPop.classList.remove("hidden");
          // start.classList.remove("invisible");
          alertPop.classList.add("flex");
          count.classList.add("invisible");
          setTimeout(() => {
            alertPop.classList.add("hidden");
            alertPop.classList.remove("flex");
          }, 1200);
        }
        count.innerText = counter;
      }, 1000);
    } else {
      alert("Add a valid number");
    }
  }
});
