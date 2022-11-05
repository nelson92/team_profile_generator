// create members array to pass into htmlStuff?
// const members = []
let teamMembers = [];

const generateCards = (teamCards) => {

    if (teamMembers.employee === 'Manager'){
        return `<div> 
        <h1>${teamMembers.ManagerName}</h1>
        </div>
        <div>
        <p>${teamMembers.ManagerId}</p>
        <p>${teamMembers.ManagerEmail}</p>
        </div>`
    }
  
    if (teamMembers.employee === 'Engineer'){
        return `<div> 
        <h1>${teamMembers.EngineerName}</h1>
        </div>
        <div>
        <p>${teamMembers.EngineerId}</p>
        <p>${teamMembers.EngineerEmail}</p>
        </div>`;
    }
    else if (teamMembers.employee === 'Intern'){
        return `<div>
        <h1>${teamMembers.InternName}<h1>
        <p>${teamMembers.InternId}</p>
        <p>${teamMembers.InternEmail}</p>`
    }
    else {
        return ''
    };

    let newVar = function newFunction(teamCards) {
           for(i=0; i < teamMembers.length; i++) {
            if (teamMembers[i].getRole() === 'Manager') {
                const managerCard = 
                teamMembers.push(managerCard);
            }
            if (teamMembers[i].getRole() === 'Engineer') {
                const engineerCard =
                teamMembers.push(engineerCard);
            }
            if (teamMembers[i].getRole() === 'Intern') {
                const internCard = 
                teamMembers.push(internCard);
            }
        }

    }; 

   
};



function htmlStuff (teamCards){
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Profile generator</title>
      <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
    <header class= "col-12 jumbotron mb-3 text-bg-primary p-3"> <h1> My Team </h1>
    </header>
    <div class= "card">
    <div class="container-fluid">
    <div class="row d-flex justify-content-around">
    ${generateCards(teamCards)}
    </div>
    </div>
    </body>
    </html>`;
}
htmlStuff()



module.exports = { htmlStuff };

