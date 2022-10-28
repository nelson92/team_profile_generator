const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];


function addManager() {
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'Please enter the name of the team manager',
        name: 'name'
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
        choices: ['Engineer', 'Intern', 'none'],
        name: 'employee'
    },
    
])
.then((data) => {
    const newManager = new Manager(data.name, data.id, data.email, data.office)
    teamMembers.push(newManager)

    if (data.employee === 'Engineer'){
        createEngineer();
    }
    if (data.employee === 'Intern'){
        createIntern();
    }
    if (data.employee === 'none'){
        fileCreation(data);
    }

    
})
};

function createEngineer () {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Please enter the name of the engineer',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter the ID of the engineer',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'Please enter the email of the engineer',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter their GitHub username',
            name: 'github'
        }
    ])
    .then((data) => {
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github)
        teamMembers.push(newEngineer)
    }   
    )
};

function createIntern(){
    inquirer 
        .prompt ([
    {
        type: 'input',
        message: 'Please enter the name of the engineer',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter the ID of the engineer',
        name: 'ID'
    },
    {
        type: 'input',
        message: 'Please enter the email of the engineer',
        name: 'email'
    },
        {
        type: 'input',
        message: 'Please enter the name of the school you are attending',
        name: 'school'
        }

        ])
        .then((data) => {
            const newIntern = new Intern(data.name, data.id, data.email, data.school)
            teamMembers.push(newIntern)

        } ) 
    
};

// function for writeFile
function fileCreation(teamMembers){
const contentTeam = pageTemplate.buildManager(teamMembers);
pageTemplate.buildEngineer(teamMembers)
pageTemplate.buildIntern(teamMembers)

    fs.writeFile('myTeam.html', contentTeam,
    (err) => err ? console.log(err) : console.log("myTeam.html file successfully created")
    );
  
};


addManager()