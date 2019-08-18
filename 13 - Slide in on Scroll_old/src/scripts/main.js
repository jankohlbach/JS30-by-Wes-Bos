function debounce(func, wait = 20, immediate = true) {
  var timeout;
  
  return function() {
    var context = this;
    var args = arguments;

    var later = function() {
      timeout = 0;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  sliderImages.forEach(function(sliderImage) {
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPassed = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPassed) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));