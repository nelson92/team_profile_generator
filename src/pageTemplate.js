// create members array to pass into htmlStuff?
// const members = []
// let teamMembers = [];

const generateCards = (teamMembers)=> {

    for(i=0; i < teamMembers.length; i++) {
            // console.log(teamMembers[i].getRole())
         if (teamMembers[i].getRole() === 'Manager') {
            // console.log("manager")
            `<div> 
            <h1>${teamMembers[i].name}</h1>
            </div>
            <div>
            <p>${teamMembers[i].id}</p>
            </div>
            <div>
            <p>${teamMembers[i].email}</p>
            </div>`
         }
         if (teamMembers[i].getRole() === 'Engineer') {
            `<div> 
            <h1>${teamMembers[i].name}</h1>
            </div>
            <div>
            <p>${teamMembers[i].id}</p>
            </div>
            <div>
            <p>${teamMembers[i].email}</p>
            </div>`;
         }
         if (teamMembers[i].getRole() === 'Intern') {
            `<div>
            <h1>${teamMembers[i].name}</h1>
            </div>
            <div>
            <p>${teamMembers[i].id}</p>
            </div>
            <div>
            <p>${teamMembers[i].email}</p>
            </div>`
        };
    //  return ('Manager' + 'Engineer' + 'Intern')
 }; 
       
};



function htmlStuff (teamMembers){
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
    <header class= "jumbotron mb-3"> <h1> My Team </h1>
    </header>
    <div class= "card">
    <div class="container-fluid">
    <div class="row d-flex justify-content-around">
    ${generateCards(teamMembers)}
    </div>
    </div>
    </body>
    </html>`;
}




module.exports = { htmlStuff };

