
console.log(process.argv);

const arg1 = process.argv[0];
const arg2 = process.argv[1];

console.log(arg1)
console.log(arg2)

const sameOrNot = function(arg1, arg2) {
    return console.log(arg1 === arg2 ? true : false);
}

sameOrNot(arg1, arg2);