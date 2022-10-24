const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');

inquirer
    .prompt([
    {
        type: 'input',
        message: 'Please enter the name of the team manager',
        name: 'manager'
    },
    {
        type: 'input',
        message: 'Please enter the ID of the manager',
        name: 'ID'
    },
    {
        type: 'input',
        message: 'Please enter the email of the team manager',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter the office number of the manager',
        name: 'office'
    },
    {
        type: 'list',
        message: 'Choose a member for the team',
        choices: ['Engineer', 'Intern'],
        name: 'employee'
    },
    
])
.then((data) => {
    const contentHTML = pageTemplate(data);

    fs.writeFile('myTeam.html', contentHTML,
    (err) => err ? console.log(err) : console.log("myTeam.html file successfully created")
    );
});
