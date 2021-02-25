// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// link to generate markdown.js in utilities folder
const generateMarkDown = require("./utils/generateMarkDown");

function UserQuestion(question, dataName){
    this.message = question;
    this.type = 'input';
    this.name = dataName;
}

let columnOut;
// TODO: Create an array of questions for user input
function askFirstQuestion(){
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
            
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description'
    
        },
        {
            type: 'input',
            message: 'What is the table of contents for your project',
            name: 'Table of Contents'
    
        },
        {
            type: 'input',
            message: 'What is the table of contents for your project',
            name: 'TOC'
    
        }


    ]).then(response => {

        const {title,description, TOC, } = responses

    }) 


}
// TODO: Create a function to write README file
function writeToFile(fileName, dataName) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log('testing')
    })
}

// Function call to initialize app
init();
