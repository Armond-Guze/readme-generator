const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is the title of your project',
    }
])