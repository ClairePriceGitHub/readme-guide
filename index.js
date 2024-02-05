const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of the project',
    },
    {
        type: 'input',
        name: 'installInstruction',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'What command should be run to install dependancies?',
    },
    {
        type: 'input',
        name: 'testInstruction',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
];

// function to write README file
inquirer.prompt(questions)
.then((data) => {
    fs.writeFile('./sampleREADME.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
})


