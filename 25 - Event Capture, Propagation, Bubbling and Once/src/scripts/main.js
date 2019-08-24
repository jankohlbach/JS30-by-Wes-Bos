const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);

  // stop bubbling
  e.stopPropagation();
}

document.body.addEventListener('click', logText);

// capture: true -> outer to inner
// capture: false -> inner to outer (default)
divs.forEach(div => div.addEventListener('click', logText, { capture: false }));
