const contentTeam = require("../src/page-template.js")
// set up variable to generate team 

// function pageTemplate(data){
// // this function is similar to generateMarkdown
//     return `${data.employee}`
// }

// section below was suggested by tutor
const buildTeam = team => {
    const buildManager = (manager) => {
        return `${manager.name}`
        // build cards in HTML
    }
    const buildEngineer= (engineer) => {
        return `${engineer.name}`
        // build cards in HTML
    }
    const buildIntern = (intern) => {
        return `${intern.name}`
        // build cards in HTML
    }
    // and so on for reach team members

};

module.exports = contentTeam => [
    // html here, with back ticks
];