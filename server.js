// packages needed to run program
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// inquirer package with questions to run program
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
        name: 'license',
        message: 'What license is being used?',
        choices: ['MIT', 'Apache', 'GNU', 'Eclipse']
    }, {
        type: 'input',
        name: 'contributing',
        message: "Who contributed to this project?"
    }, {
        type: 'input',
        name: 'tests',
        message: 'Do you have any test instructions?'
    }, {
        type:'input',
        name: 'username',
        message: 'What is your Github username?'
    }
]
function writetoFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('creating readme');
        writetoFile('./utils/generateMarkdown.js', generateMarkdown({responses}))
    })
}

init()