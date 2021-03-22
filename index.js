// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// link to generate markdown.js in utilities folder
const generateMarkDown = require("./utils/generateMarkDown");

// TODO: Create an array of questions for user input
 questions = [
    
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
            type: 'list',
            message: 'Which license do you want to use?',
            name: 'license',
            //most populare licences on Github
            choices:['MIT','GPLv2','Apache','None']
    
        },
        {
            type: 'input',
            message: 'How would you like to install the dependencies?',
            name: 'installation',
            // in case user doesn't know, use default to enter the answer
            default:'npm i'
    
        },
        {
            type: 'input',
            message: 'How would you use this repo?',
            name: 'usage'
    
        },
        {
            type: 'input',
            message: 'How woulld you contribute to this repo?',
            name: 'contribution'
    
        },
        {
            type: 'input',
            message: 'How would you test this repo?',
            name: 'test'
    
        },
        {
            type: 'input',
            message: 'What is your github user name?',
            name: 'github'
    
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
    
        }


    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    // starts prompts for user input
    inquirer.prompt(questions)
    // storing the answers in teh answers hash
    .then(answers => {
        console.log('Creating your README.md file');
        // creates a readme file pushing the answers hash
        writeToFile('./markdowns/README-Gen.md', generateMarkDown(answers))
    })
}

// Function call to initialize app
init();
