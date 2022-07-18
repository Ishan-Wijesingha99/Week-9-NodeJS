const arya = {
  aryaName: 'Arya Stark',
  parents: ['Eddard Stark', 'Catelyn Stark'],
};

const jaime = {
  jaimeName: 'Jaime Lannister',
  parents: ['Tywin Lannister', 'Joanna Lannister'],
};



// In the past, if we wanted to pull off an object's property we'd have to do something like this:
const nameArya = arya.aryaName;
const parentsArya = arya.parents;

console.log(nameArya); // logs `"Arya Stark"`
console.log(parentsArya); // logs `["Eddard Stark", "Catelyn Stark"]`



// Now with ES6 object destructuring syntax, we can do this:
const { aryaName, parents } = arya;

console.log(aryaName); // logs 'Arya Stark'
console.log(parents); // logs ['Eddard Stark', 'Catelyn Stark']



// We can also rename our destructured properties like so:
const { jaimeName: newNameForJaime } = jaime;
console.log(newNameForJaime); // logs `"Jaime Lannister"`



// We can also use array destructuring to pull off an array's elements
const locations = ['Winterfell', 'Casterly Rock', 'Kings Landing'];
const [wf, cr, kl] = locations;

console.log(wf); // logs `"Winterfell"`
console.log(cr); // logs `"Casterly Rock"`
console.log(kl); // logs `"Kings Landing"`



// e.g. previously we might have done something like this:
const logCharacter = (character) => console.log(`${character.name}'s parents are: ${character.parents[0]} and ${character.parents[1]}.`);

logCharacter(arya);

// now we can do this:
const betterLogCharacter = ({ name, parents }) => console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

betterLogCharacter(jaime);
