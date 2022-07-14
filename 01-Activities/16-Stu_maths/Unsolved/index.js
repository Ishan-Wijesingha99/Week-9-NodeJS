// TODO: Import `maths.js` so that we can use it's methods and variables in this file
mathsJS = require('./maths.js');

// how cool is this! It's literally just an object. In fact, it's almost identical to the module.exports object defined in maths.js
console.log(mathsJS);

// This is even cooler! You now have access to methods that were defined in maths.js
console.log(mathsJS.sum(3, 4));
console.log(mathsJS.difference(3, 4));
console.log(mathsJS.product(3, 4));
console.log(mathsJS.quotient(3, 4));





// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
