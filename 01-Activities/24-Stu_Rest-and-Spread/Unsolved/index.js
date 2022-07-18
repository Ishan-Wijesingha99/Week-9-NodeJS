// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// spread operator is being used to create a new array
const newSongs = [...songs];

// ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'] will be logged
console.log(newSongs);



// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  
  // reduce loops over the array, and for each iteration, it has access to the previousValue and the currentValue
  // the purpose of reduce is to take an entire array, and reduce it all into a SINGLE VALUE

  // reduce method takes two parameters.
  // The first is a function that has two parameters itself, the previousValue, and the currentValue
  // this function will return whatever value you want, based off previousValue and currentValue

  // at the end of the loop, a single value will be returned

  // you must also specify the initialValue
  return array.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
};

console.log(addition(1, 2, 3)); // 6



// rest operator is being used so that an array will be created with any number of elements
// the name of that array will be fullArray
const additionSpread = (...fullArray) => {
  return fullArray.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
};

console.log(additionSpread(1, 2, 3)); // 6

console.log(additionSpread(1, 2, 3, 4, 100)); // 110
