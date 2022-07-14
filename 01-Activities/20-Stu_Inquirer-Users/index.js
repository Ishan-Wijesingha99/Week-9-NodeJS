const inquirer = require('inquirer');


inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name' 
    },
    {
        type: 'input',
        message: 'What language do you know?',
        language: 'language'
    },
    {
        type: 'input',
        message: 'What is your preferred method of communication?',
        prefereed: 'preferred'
    },

]).then(response => {



})