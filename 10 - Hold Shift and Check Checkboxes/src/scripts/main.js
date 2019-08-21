const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

const handleCheck = (e) => {
  const input = e.target;
  let inBetween = false;

  if (e.shiftKey && input.checked) {
    checkboxes.forEach((checkbox) => {
      const box = checkbox;

      if (box === input || box === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        box.checked = true;
      }
    });
  }

  lastChecked = input;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
});
