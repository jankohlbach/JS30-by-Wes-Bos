const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

const ctx = canvas.getContext("2d");

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(event) {
  if (!isDrawing) {
    return;
  }

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue = hue + 1;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();

  [lastX, lastY] = [event.offsetX, event.offsetY];
}

canvas.addEventListener("mousedown", function(event) {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", function() {
  isDrawing = false;
});
canvas.addEventListener("mouseout", function() {
  isDrawing = false;
});
canvas.addEventListener("mousemove", draw);