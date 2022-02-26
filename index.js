// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input

const questions = [
    {
        name:'github',
        type: 'input',
        message: 'what is your github username?'
    }, 
    {
        name:'email',
        type:'input',
        message:'what is your email?'
    },
    {
        name: 'title',
        type:'input',
        message: 'what is your project title?'
    },
    {
        name: 'description',
        type: 'input',
        message:'what is the description of your project?'
    },
    {
        name:'installation',
        type: 'input',
        message: 'how can I install the packages?'
    },
    {
        name:'usage',
        type:'input',
        message:'what is the usage information?'
    },
    {
        name:'contribution',
        type:'input',
        message: 'what is your contribution?'
    },
    {
        name:'test',
        type:'input',
        message:'how do you run the test?'
    },
{
        name:'license',
        type:'list',
        message:''
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
    }) 
}

// Function call to initialize app
init();
