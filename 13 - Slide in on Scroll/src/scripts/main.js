function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = () => {
  sliderImages.forEach((slideImage) => {
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      slideImage.classList.add('active');
    } else {
      slideImage.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', debounce(checkSlide));
