const voicesDropdown = document.querySelector("[name='voice']");
const options = document.querySelectorAll("[type='range'], [name='text']");
const stopButton = document.querySelector("#stop");
const speakButton = document.querySelector("#speak");

let voices = [];
const msg = new SpeechSynthesisUtterance();
msg.text = document.querySelector("[name='text']").value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(function(voice) {
      return `
        <option value="${voice.name}">${voice.name} (${voice.lang})</option>
      `;
    })
    .join("");
}

function setVoice() {
  msg.voice = voices.find(function(voice) {
    return voice.name === this.value;
  }, this);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach(function(option) {
  option.addEventListener("change", setOption);
});
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", function() {
  toggle(false);
});