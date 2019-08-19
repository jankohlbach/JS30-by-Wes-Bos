const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('open');
  });

  panel.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'flex-grow') {
      panel.classList.toggle('open-active');
    }
  });
});
