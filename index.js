// TODO: Include packages needed for this application.
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
//const questions = [title, description, installation, usage, coutribution, tests, license, github, email];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, generateMarkdown(data), (error) =>
        error
            ? console.error(error)
            : console.log(`Success! You have now created a README.md `)
    );
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your project?\n",
        },
        {
            type: "editor",
            name: "description",
            message:
                "\nPlease enter a description of your project: \nExplain the what, why, and how of your project. \nUse the following questions as a guide: \n\t- What was your motivation? \n\t- Why did you build this project? \n\t- What problem does it solve? \n\t- What did you learn?\n",
        },
        {
            type: "editor",
            name: "installation",
            message: "Please enter installation instructions for your project:\n",
        },
        {
            type: "editor",
            name: "usage",
            message: "Please enter usage information for your project:\n",
        },
        {
            type: "editor",
            name: "contribution",
            message: "\nPlease enter contribution guidelines for your project:\n",
        },
        {
            type: "editor",
            name: "tests",
            message: "Please enter test instructions for your project:\n",
        },
        {
            type: "list",
            name: "license",
            message:
                "\n Please choose a license for your project\n (Visit https://choosealicense.com/ if you are unsure, which license to choose):",
            choices: [
                "MIT",
                "GPL-3-0",
                "apache-2-0",
                "BSD-3-clause",
                "ISC",
                "0bsd",
            ],
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?\n",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?\n",
          },]
    )
        .then((answers) => {
            console.log(answers);
            writeToFile(answers);
        })


};
// Function call to initialize app
init();
