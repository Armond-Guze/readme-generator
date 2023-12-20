const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is the title of your project.',
    }, {
        type:'input',
        name: 'description',
        message: 'What is the project about?'
    }, {
        type: 'input',
        name: 'table of contents',
        message: 'Table of contents.'
    }, {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install?'
    }, {
        type: 'input',
        name: 'usage',
        message: 'How is the app being used?'
    }, {
        type: 'checkbox',
        name: 'liscense',
        message: 'What liscense is being used?',
        choices: ['MIT', 'Apache', 'GNU', 'Eclipse']
    }, {
        type: 'input',
        name: 'contributing',
        message: "Who contributed to this project?"
    }, {
        type: 'input',
        name: 'tests',
        message: 'Do you have any tests?'
    }, {
        type:'input',
        name: 'questions',
        message: 'Do you have any questions?'
    }
])
.then(function(data) {
    console.log(data)

})

