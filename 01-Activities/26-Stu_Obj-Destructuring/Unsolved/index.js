// Object
const nodejs = {
  pkgName: 'Node.js',
  type: 'JavaScript runtime environment',
};

// Destructuring the object 'nodejs'
const {pkgName, type:nodejsType} = nodejs;

console.log(pkgName); // <= Node.js
console.log(nodejsType); // <= JavaScript runtime environment



// Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// Destructuring the nested object 'js'
const {framework1, framework2} = js.tools.frameworks;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js



// Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

// Destructuring the array 
const [markup, style, scripting] = languages;

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML
