let seconds = 00;
let tens = 00;
let mins = 00;
let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let getMins = document.querySelector(".mins");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let interval;

btnStart.addEventListener("click", () => {
  clearInterval(interval); // Clearing the interval  so that it doesn't run multiple times
  interval = setInterval(startTimer, 10); // 10ms = 0.01s
});
btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
btnReset.addEventListener("click", () => {
  clearInterval(interval); // Clearing the interval to stop the timer

  // Resetting the values to 0
  tens = "00";
  seconds = "00";
  mins = "00";
  // Displaying the values
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens;
  getMins.innerHTML = mins;
});

function startTimer() {
  tens++; // Incrementing by 1 every 10ms
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = "0" + seconds;
    tens = 0;
    getTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    mins++;
    getMins.innerHTML = "0" + mins;
    seconds = 0;
    getSeconds.innerHTML = "0" + 0;
  }
  if (mins > 9) {
    getSeconds.innerHTML = mins;
  }
}
