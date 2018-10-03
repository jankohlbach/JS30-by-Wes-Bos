const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  let icon;

  if (this.paused) {
    icon = "►";
  } else {
    icon = "❚ ❚";
  }

  toggle.textContent = icon;
}

function skip() {
  video.currentTime = video.currentTime + parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event) {
  video.currentTime = (event.offsetX / progress.offsetWidth) * video.duration;
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
skipButtons.forEach(function(button) {
  button.addEventListener("click", skip);
});
ranges.forEach(function(range) {
  range.addEventListener("change", handleRangeUpdate);
});

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", function() {
  if (mousedown) {
    scrub(event);
  }
});
progress.addEventListener("mousedown", function() {
  mousedown = true;
});
progress.addEventListener("mouseup", function() {
  mousedown = false;
});