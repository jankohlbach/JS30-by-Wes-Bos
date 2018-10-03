const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852,
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905,
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
  },
];

const people = ["Beck, Glenn", "Becker, Carl", "Beckett, Samuel", "Beddoes, Mick", "Beecher, Henry", "Beethoven, Ludwig", "Begin, Menachem", "Belloc, Hilaire", "Bellow, Saul", "Benchley, Robert", "Benenson, Peter", "Ben-Gurion, David", "Benjamin, Walter", "Benn, Tony", "Bennington, Chester", "Benson, Leana", "Bent, Silas", "Bentsen, Lloyd", "Berger, Ric", "Bergman, Ingmar", "Berio, Luciano", "Berle, Milton", "Berlin, Irving", "Berne, Eric", "Bernhard, Sandra", "Berra, Yogi", "Berry, Halle", "Berry, Wendell", "Bethea, Erin", "Bevan, Aneurin", "Bevel, Ken", "Biden, Joseph", "Bierce, Ambrose", "Biko, Steve", "Billings, Josh", "Biondo, Frank", "Birrell, Augustine", "Black, Elk", "Blair, Robert", "Blair, Tony", "Blake, William"];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const results_1 = inventors.filter(function(inventor) {
  return inventor.year >= 1500 & inventor.year <= 1599;
});

// console.table(results_1);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const results_2 = inventors.map(function(inventor) {
  return inventor.first + " " + inventor.last;
});

// console.table(results_2);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const results_3 = inventors.sort(function(a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

// console.table(results_3);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const results_4 = inventors.reduce(function(sum, inventor) {
  return sum + (inventor.passed - inventor.year);
 }, 0);

// console.log(results_4);


// 5. Sort the inventors by years lived
const results_5 = inventors.sort(function(a, b) {
  const inventor_a = a.passed - a.year;
  const inventor_b = b.passed - b.year;

  if (inventor_a > inventor_b) {
    return 1;
  } else {
    return -1;
  }
});

// console.table(results_5);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const links = Array.from(document.querySelectorAll(".mw-category a"));
const results_6 = links
  .map(function(link) {
    return link.textContent;
  })
  .filter(function(name) {
    return name.includes("de");
  });

// console.table(results_6);


// 7. sort Exercise
// Sort the people alphabetically by last name
const results_7 = people.sort(function(guy_a, guy_b) {
  if (guy_a > guy_b) {
    return 1;
  } else {
    return -1;
  }
});

// console.table(results_7);


// 8. reduce Exercise
// Sum up the instances of each of these
const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

const results_8 = data.reduce(function(object, item) {
  if (!object[item]) {
    object[item] = 0;
  }

  object[item]++;
  return object;
}, {});

// console.table(results_8);