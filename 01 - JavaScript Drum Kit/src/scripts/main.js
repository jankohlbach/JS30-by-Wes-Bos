document.addEventListener('keydown', (e) => {
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

  if (!key) {
    return;
  }

  audio.currentTime = '';
  audio.play();

  key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'transform') {
      key.classList.remove('playing');
    }
  });
});
