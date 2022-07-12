
// object with key-value pairs (one key-value pair is an entry) 
const hughObject = {
    firstName: 'Hugh',
    lastName: 'Farrell',
    age: 21,
    university: 'Monash'
}

// THIS IS HOW YOU LOOP OVER AN OBJECT AND GET ACCESS TO BOTH IT'S KEYS AND VALUES AT THE SAME TIME
for(const [key, value] of Object.entries(hughObject)) {
    console.log(`${key} --- ${value}`);
    console.log(i);
}


