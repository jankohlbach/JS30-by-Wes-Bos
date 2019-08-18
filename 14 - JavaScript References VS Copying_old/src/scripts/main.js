// start with strings, numbers and booleans
  // this is just copying, change the original will not affect the copy
let age = 100;
let age2 = age;
console.log("age, age1")
console.log(age, age2);
age = 200;
console.log("age updated, age1")
console.log(age, age2);

let name = "Jan";
let name2 = name;
console.log("name, name1")
console.log(name, name2);
name = "JAN";
console.log("name updated, name1")
console.log(name, name2);


// Let's say we have an array
  // this is a reference, changing the new (referenced) array will affect the original
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log("players, team");
console.log(players, team);

// You might think we can just do something like this:
team[0] = "Wesley";

// however what happens when we update that array?
console.log("players, team updated");
console.log(players, team);


// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log("players, team2");
console.log(players, team2);
team2[0] = "Wes";
console.log("players, team2 updated");
console.log(players, team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

// or use Array.from()
const team5 = Array.from(players);


// The same thing goes for objects, let's say we have a person object
const person = {
  name: "Wes Bos",
  age: 80
};

// and think we make a copy:
const captain = person;
console.log("person, captain");
console.log(person, captain);
captain.number = 99;
console.log("person, captain updated")
console.log(person, captain);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {age: 50, number: 100});
console.log("person, captain2 updated");
console.log(person, captain2);