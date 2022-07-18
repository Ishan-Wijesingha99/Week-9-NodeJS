
// the rest operator is usually used INSIDE A FUNCTION PARAMETER
// if you don't know how many arguments the function will take in, you use the rest operator to take them all and put them into a single array

// spread operator - takes a SINGLE iterable and spreads them into MANY values
// rest operator - takes MANY values (most of the time an unknown number) and puts them into a SINGLE array

// the examples below really show this



// without rest
// if you add more arguments into add() function, javascript won't know what to do
function add(x, y) {
  return x + y;
}

console.log(add(1, 2, 3, 4, 5)); // => still 3



// with rest
function add(...nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
}

// doesn't matter how many arguments you pass in, it will still work
add(1); // => 1
add(3, 3); // => 6
add(1, 1, 4, 5); // => 11



// another example 
function howManyArgs(...args) {
  return `You passed ${args.length} arguments.`; // its an array, so it has a length
}

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.



// spread operator
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // concatinates the two arrays

console.log(weapons);
