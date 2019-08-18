const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

fetch(endpoint)
  .then(function(blob) {
    return blob.json();
  })
  .then(function(data) {
    cities.push(...data);
  });

function findMatches(wordToMatch, cities) {
  return cities.filter(function(place) {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map(function(place) {
      console.log(this.value);
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(regex, `<mark>${this.value}</mark>`);
      const stateName = place.state.replace(regex, `<mark>${this.value}</mark>`);

      return `
        <li>
          <span>${cityName}, ${stateName}</span>
          <span>${place.population}</span>
        </li>
      `;
    }, this)
    .join("");

  suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);