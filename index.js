// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can users contribute to this project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project have?',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README file has been generated!');
});
}

//Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## License
${answers.license}
        `;
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
