// Developers create javascript libraries to make their lives easier. In order to make these libraries available for everyone to use, the register it with services like npm or Yarn.

// .require is a built in function that accepts a string, this string is connected to whatever library is registered with npm/yarn. That way, require() knows exactly what library to import

// this "library" is more often than not an object, and we STORE THIS OBJECT, as a single variable, in this case fs
const fs = require('fs');



// because fs is basically an object, it comes with it's own methods. appendFile() is one of those methods that only exist in that "fs" library
// you can learn more about the .appendFile() method in the documentation
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>

  err ? console.error(err) : console.log('Commit logged!')

);



// you can use require() to import files as well
// could be an array, could be anything

