var timeLeft = 3;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft <= 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = 'Redirecting in '+timeLeft;
    timeLeft--;
  }
}