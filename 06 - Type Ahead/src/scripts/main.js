const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const getData = async () => {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      cities.push(...jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

getData();

const findMatches = (match, array) => array.filter((place) => {
  const regex = new RegExp(match, 'gi');
  return place.city.match(regex) || place.state.match(regex);
});

const displayMatches = (e) => {
  const input = e.target.value;
  const matchArray = findMatches(input, cities);
  const html = matchArray.map((place) => {
    const regex = new RegExp(input, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${input}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${input}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = html;
};

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
