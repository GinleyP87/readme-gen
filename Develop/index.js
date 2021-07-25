// // TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');


// // TODO: Create an array of questions for user input
async function promptQuestions(){
    inquirer.prompt([   
        
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
        },

        {
            type: "input",
            name: "description",
            message: "Describe your project. "
        },

        {
            type: "input",
            name: "installation",
            message: "If project must be installed please describe how. ",
        },

        {
            type: "input",
            name: "usage",
            message: "How this product is used? Add screenshot or video if needed."
        },

        {
            type: "list",
            name: "license",
            message: "Chose a license or multiple licenses for this project: ",
            choices: 
            [
                "Apache",
                "MIT",
                "Mozilla",
                "Open",
                "No License"
            ]
        },

        {
            type: "input",
            name: "credits",
            message: "Who contributed to this project?"
        },

        {
            type: "input",
            name: "tests",
            message: "If you created tests, provide examples how to run them."
        },

        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username. "
        },

        {
            type: "input",
            name: "email",
            message: "Please enter your email. "
        }
    ]).then(async function(data){
        const generateFile = generateMarkdown(data);
        // call writeToFile 

        fs.writeFile('README.md', generateFile, (err) => {
            // If there is any error in writing to the file, return
            if (err) {
                console.error(err)
                return
            }
        
            // Log this message if the file was written to successfully
            console.log('wrote to file successfully')
        })
    });
};

// // TODO: Create a function to write README file
// function writeToFile(README.md, data) {}

// // TODO: Create a function to initialize app
async function init() {
        const promptedAnswers = await promptQuestions();
    //     const generateFile = generateMarkdown(promptedAnswers)
    //     console.log(' Successfully wrote to README.md');
    }


// // Function call to initialize app
init();

