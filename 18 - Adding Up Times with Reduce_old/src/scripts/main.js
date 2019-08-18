const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map(function(node) {
    return node.dataset.time;
  })
  .map(function(timeCode) {
    const timeArr = timeCode.split(":");
    const mins = parseInt(timeArr[0]);
    const secs = parseInt(timeArr[1]);

    return (mins * 60) + secs;
  })
  .reduce(function(total, vidSeconds) {
    return total + vidSeconds;
  });

console.log("Total seconds: " + seconds);

const hours = Math.floor(seconds / 3600);
const min = Math.floor((seconds % 3600) / 60);
const sec = Math.floor(((seconds % 3600) % 60));

console.log(hours + ":" + min + ":" + sec);