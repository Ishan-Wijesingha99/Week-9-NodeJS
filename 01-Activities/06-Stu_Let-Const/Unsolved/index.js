// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = name => {
  let message = 'How are you?';

  if (name.length > 0) {
    message = 'Hello ' + name;
    console.log(message);
    console.log('How are you?')
  } else {
    console.log(message);
  }

};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  let callout = 'Outside of the loop';
  let counter = 5;

  while (counter > 0) {
    callout = 'Inside the loop';
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  let flatMatrix = matrix.flat();

  flatMatrix.forEach(element => console.log(element))
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
