const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegree = ((hours / 12) * 360);
  const minuteDegree = ((minutes / 60) * 360);
  const secondDegree = ((seconds / 60) * 360);

  if (hourDegree === 0) {
    hourHand.style.transition = "all 0s";
  } else {
    hourHand.style.transition = "all 0.2s linear";
  }

  if (minuteDegree === 0) {
    minuteHand.style.transition = "all 0s";
  } else {
    minuteHand.style.transition = "all 0.2s linear";
  }

  if (secondDegree === 0) {
    secondHand.style.transition = "all 0s";
  } else {
    secondHand.style.transition = "all 0.2s cubic-bezier(0, 2, 1, 0.6)";
  }

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(setDate, 1000);