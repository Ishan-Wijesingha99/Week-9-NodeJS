// fs module
const fs = require('fs');

// inquirer module
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Tell us a little bit about yourself?',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedin'
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github'
    },
]).then(function(answers) {
    // log answers object
    console.log(answers);

    // write a html document that includes the answers the user inputted
    fs.writeFile('./index.html', `
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Inquirer Webpage</title>
        </head>
        <body>
            <p>Name - ${answers.firstName}</p>
            <p>Location - ${answers.location}</p>
            <p>Bio - ${answers.bio}</p>
            <p>LinkedIn - ${answers.linkedin}</p>
            <p>GitHub - ${answers.github}</p>
        </body>
    </html>
    `, function() {
        // execute this if the asynchronous task was completed
        console.log('it worked!')
    })

}).catch(function(err) {
    // log this error to console if an error occurs
    console.error(err);
})