
// this is how you export functionalities
// we have a series of math functions here, that we want to access in other files
// so, exports is just an object that takes methods and variables as properties
module.exports = {
  sum: (a, b) => a + b,
  difference: (a, b) => a - b,
  product: (a, b) => a * b,
  quotient: (a, b) => a / b,
};
