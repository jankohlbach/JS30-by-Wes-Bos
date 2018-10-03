const dogs = [
  {
    name: "Snickers",
    age: 2,
  },
  {
    name: "Hugo",
    age: 8
  },
];

// Regular
console.log("Hello");

// Interpolated
console.log("Hello, I'm a %s string", "👍");
console.log(`Hello, I'm a ${"👍"} string`);

// Styled
console.log("%cHello, I'm really big", "font-size: 30px; text-shadow: 0 0 5px green");

// Warning!
console.warn("OH NOOO");

// Error :|
console.error("NOT GOOD :(");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.assert(1 === 2, "That's stupid");

// Clearing
console.clear();

// Viewing DOM Elements
var body = document.querySelector("body");
console.log(body);
console.dir(body);

// Grouping together
dogs.forEach(function(dog) {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

dogs.forEach(function(dog) {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("ME");
console.count("ME");
console.count("ME");
console.count("YOU");
console.count("YOU");
console.count("ME");
console.count("ME");
console.count("YOU");
console.count("YOU");
console.count("YOU");
console.count("YOU");
console.count("ME");
console.count("ME");
console.count("ME");
console.count("ME");
console.count("ME");

// Timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then(function(data) {
    data.json();
  })
  .then(function(data) {
    console.timeEnd("fetching data");
    console.log(data);
  });

// Table
console.table(dogs);