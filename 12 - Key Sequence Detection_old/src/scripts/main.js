const pressed = [];
const secretCode = "hiddensecret";

window.addEventListener("keyup", function(event) {
  pressed.push(event.key);
  pressed.splice(secretCode.length - 1, pressed.length - secretCode.length);

  if(pressed.join("").includes(secretCode)) {
    console.log("DING DING DING");
  }
});