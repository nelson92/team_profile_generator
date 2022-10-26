// const contentTeam = require("../src/page-template.js")
// set up variable to generate team 

// function pageTemplate(data){
// // this function is similar to generateMarkdown
//     return `${data.employee}`
// }
// const contentTeam
const contentTeam = {


    buildManager: (data) => {
        return `<div> <hi>${data.manager}</hi>
        </div>
        <div>
        <p>${data.id}</p>
        <p>${data.email}</p>
        </div>`;
        // <h2>${data.getRole()}</h2>
        // <p>${data.getOffice()}</p>
    },
    buildEngineer: (data) => {
        return `<div> <hi>${data.manager}</hi>
        </div>
        <div>
        <p>${data.id}</p>
        <p>${data.email}</p>
        </div>`
        // <h2>${data.getRole()}</h2>
        //  <p>${data.getGithub()}
    },
    buildIntern: (data) => {
        return `<div> <hi>${data.manager}</hi>
        </div>
        <div>
        <p>${data.id}</p>
        <p>${data.email}</p>
        </div>`
        // <h2>${data.getRole()}</h2>
        // <p>${data.getSchool()}
    }

};

module.exports = contentTeam 