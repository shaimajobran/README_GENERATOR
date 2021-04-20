// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

//creat a write file function using promises 
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    inquirer.prompt([
        {
            typy: 'input',
            name: 'gitHUser',
            message: 'what is your github username?',
            default: 'shaimajobran'
        },

        {
            typy: 'input',
            name: 'Repo',
            message: 'what is the name of the repo?'
        },
        {

            type: 'input',
            name: 'email',
            message: 'what is your email?',
            default: 'shaimajobran22@gamil.com'
        },
        {
            type: 'input',
            name: 'project name ',
            message: 'what is the name of your project?'

        },
        {
            type: 'input',
            name: 'description',
            message: 'write a description of your project'

        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'provide the relative path for at least one screenshot'
        },
        {
            type: 'list',
            name: 'license',
            message:
                'What license are you using (please create a LICENSE.txt file prior to generating your README)',
            choices: [
                'MIT',
                'GNU General Public License v3.0',
                'Apache License 2.0',
                'Creative Commons Zero v1.0 Universal',
                'Mozilla Public License 2.0',
                'The Unilicense',
                'Other',
            ],
            default: 0,
        },
        {
            type: 'input',
            name: 'using',
            message: 'Please provide instructions for Using',
        },
    ]);

    // TODO: Create a function to initialize app
    async function init() {
        console.log(' README generator!');
        try {
            const answers = await promptUser();
    
            const newReadme = generateMarkdown(answers);
    
            await writeFileAsync(`${answers.repo}README.md`, newReadme);
    
            console.log('Successfully created README');
        } catch (err) {
            console.log(err);
        }
    }
}
    

// Function call to initialize app
init();
