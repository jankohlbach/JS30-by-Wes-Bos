const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(event) {
  console.log(this.classList.value);
  event.stopPropagation();
}

divs.forEach(function(div) {
  div.addEventListener("click", logText, {capture: false, once: true});
});

button.addEventListener("click", function() {
  console.log("YAY!!!");
}, {once: true});