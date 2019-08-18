const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.top = `${linkCoords.top + window.scrollY}px`;
  highlight.style.left = `${linkCoords.left}px`;
}

triggers.forEach(function(a) {
  a.addEventListener("mouseenter", highlightLink);
});