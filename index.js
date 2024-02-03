// const fs = require("fs");
// const path = require('path');
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');

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
        message: 'Are there any installation instructions?',
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'Is there an installation command?',
    },
    {
        type: 'input',
        name: 'testInstruction',
        message: 'Are there any test instructions?',
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'Is there a test command?',
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
        choices: ['MIT', 'GNU General Public License v3.0']
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


inquirer.prompt(questions)
.then((data) => {
    fs.writeFile('./README.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
})



// const writeToFilePromise = util.promisify(fs.writeToFile);

// async function writeToFile() {
//     try {
//         await writeToFilePromise('./README.md', test);
//         console.log('File written successfully\n');
//     } catch (err) {
//         console.log('Error writing to file', err);
//     }
// }

// // function call to initialize program
// writeToFile();
