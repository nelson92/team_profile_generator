// const contentTeam = require("../src/page-template.js")
// set up variable to generate team 

// function pageTemplate(data){
// // this function is similar to generateMarkdown
//     return `${data.employee}`
// }
// const contentTeam
const contentTeam = {


    buildManager: (data) => {
        return `<div> <hi>${data.name}</hi>
        <h2>${data.getRole()}</h2>
        </div>
        <div>
        <ul> 
        <p>${data.id}</p>
        <p>${data.email}</p>
        <p>${data.getOffice()}
        </ul>
        </div>`
    },
    buildEngineer: (data) => {
        return `<div> <hi>${data.name}</hi>
        <h2>${data.getRole()}</h2>
        </div>
        <div>
        <ul> 
        <p>${data.id}</p>
        <p>${data.email}</p>
        <p>${data.getGithub()}
        </ul>
        </div>`
    },
    buildIntern: (data) => {
        return `<div> <hi>${data.name}</hi>
        <h2>${data.getRole()}</h2>
        </div>
        <div>
        <ul> 
        <p>${data.id}</p>
        <p>${data.email}</p>
        <p>${data.getSchool()}
        </ul>
        </div>`
    }

};

module.exports = contentTeam 