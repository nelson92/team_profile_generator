// create members array to pass into htmlStuff?
// const members = []
// let teamMembers = [];

const generateCards = (teamMembers) => {
    const result = [];

    for (let i=0; i < teamMembers.length; i++) {
        let string = ""
            // console.log(teamMembers[i].getRole())
         if (teamMembers[i].getRole() === 'Manager') {
            // console.log("manager")
            string = `<div class="card"> 
            <div class="container">
            <h2><b>${teamMembers[i].name}</b></h2>      
            <p>${teamMembers[i].id}</p>
            </div>
            <div>
            <p>${teamMembers[i].email}</p>
            </div>
            <div>
            <p>${teamMembers[i].officeNumber}</p>
            </div>
            </div>`
         }
         if (teamMembers[i].getRole() === 'Engineer') {
            string = `<div> 
            <h1>${teamMembers[i].name}</h1>
            </div>
            <div>
            <p>${teamMembers[i].id}</p>
            </div>
            <div>
            <p>${teamMembers[i].email}</p>
            </div>
            <div>
            <p>${teamMembers[i].github}</p>
            </div>`;
         }
         if (teamMembers[i].getRole() === 'Intern') {
            string = `<div>
            <h1>${teamMembers[i].name}</h1>
            </div>
            <div>
            <p>${teamMembers[i].id}</p>
            </div>
            <div>
            <p>${teamMembers[i].email}</p>
            </div>
            <div>
            <p>${teamMembers[i].school}</p>
            </div>`
        };
        
        result.push(string);
 }; 
 return result;
       
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
    <div class= "banner"> <h1> My Team </h1>
    </div>
    <div class="row">
    ${generateCards(teamMembers)}
    </div>
    </body>
    </html>`;
}




module.exports = { htmlStuff };

