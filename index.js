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
        message: 'Project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Table of Contents',
    },
    {
        type: 'input',
        name: 'installtion',
        message: 'Installation Instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Instructions',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'License Information',
        choices: ['MIT', 'GNU General Public License v3.0']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who has contributed?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions',
    },
];

// inquirer.prompt(questions);


inquirer.prompt(questions)
.then((data) => {
    fs.writeFile('./README.md', JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
})


// function to write README file
// function writeToFile() {
//     fs.writeFile('./README.md', 'This is a test')
// }

// function test() {
//     `test`;
// }


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
