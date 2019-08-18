const people = [
  {
    name: "Wes",
    year: 1988,
  },
  {
    name: "Kait",
    year: 1986,
  },
  {
    name: "Irv",
    year: 1970,
  },
  {
    name: "Lux",
    year: 2015,
  },
];

const comments = [
  {
    text: "Love this!",
    id: 523423,
  },
  {
    text: "Super good",
    id: 823423,
  },
  {
    text: "You are the best",
    id: 2039842,
  },
  {
    text: "Ramen is my fav food ever",
    id: 123523,
  },
  {
    text: "Nice Nice Nice!",
    id: 542328,
  },
];

// Some and Every Checks
// 1. Array.prototype.some() // is at least one person 19 or older?
const results_1 = people.some(function(person) {
  const currentYear = new Date().getFullYear();

  return currentYear - person.year >= 19;
});

// console.log({results_1});


// 2. Array.prototype.every() // is everyone 19 or older?
const results_2 = people.every(function(person) {
  const currentYear = new Date().getFullYear();

  return currentYear - person.year >= 19;
});

// console.log({results_2});


// 3. Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const results_3 = comments.find(function(comment) {
  return comment.id === 823423;
});

// console.log({results_3});


// 4. Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const results_4 = comments.findIndex(function(comment) {
  return comment.id === 823423;  
});

// console.table(comments);

// console.log("Comment " + results_4 + " will be deleted!");

// comments.splice(results_4, 1);

// console.table(comments);