const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

panels.forEach(function(panel) {
  panel.addEventListener("click", toggleOpen);
});