window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", function(event) {
  const transcript = Array.from(event.results)
    .map(function(result) {
      return result[0];
    })
    .map(function(result) {
      return result.transcript;
    })
    .join("");

  p.textContent = transcript;
  
  if (event.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
  
  console.log(transcript);
});

recognition.addEventListener("end", recognition.start);
recognition.start();