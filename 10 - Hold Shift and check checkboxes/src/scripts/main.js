const checkboxes = document.querySelectorAll("input");

let lastChecked;

function handleCheck(event) {
  let inBetween = false;

  if (event.shiftKey && this.checked) {
    checkboxes.forEach(function(checkbox) {

      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    }, this);
  }

  lastChecked = this;
}

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("click", handleCheck);
});