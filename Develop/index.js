// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// MD includes
// Title of Project
// Description
// Table of Contents
// Installation
// usage
// license
// Contributions
// Tests
// Questions

// TODO: Create an array of questions for user input
const questions =
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Enter a description of your project',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Enter your installation details',
                name: 'install',
            },
            {
                type: 'input',
                message: 'Enter instructions on how users can use your software',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Which license did you use?',
                name: 'license',
            },
            {
                type: 'input',
                message: 'Who helped you with this software?',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'List the type of tests your software contains',
                name: 'tests',
            },
        ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

        
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

