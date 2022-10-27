// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'testnstructions',
        message: 'What are the test instructions?',
      },
      {
        type: 'checkbox',
        name: 'license',
        choices: ["MIT", "GNU General Public License", "Apache License 2.0", "GNU Public License 3.0"],
        message: "What license did you use?",
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is an email address that you can be reached at?',
      },
    ]
// TODO: Create a function to write README file
function writetoFile() {
  return inquirer.prompt(questions)
  .then((data) => {
    const mark = generateMarkdown(data);
    fs.writeFile('README.md', mark, (err) => {
      if(err) {
        console.log('Could not save file');
      } else {
        console.log('Success!')
      }
    })
  })
  .catch((err) => {
    console.log(err);
  })
}

writetoFile();