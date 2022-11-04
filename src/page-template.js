
function teamCards (data) {
   if (data.employee === 'Engineer'){
        return `<div> <hi>${data.EngineerName}</hi>
        </div>
        <div>
        <p>${data.EngineerId}</p>
        <p>${data.EngineerEmail}</p>
        </div>`;
    }
    else if (data.employee === 'Intern'){
        return `<div> <hi>${data.InternName}</hi>
        </div>
        <div>
        <p>${data.InternId}</p>
        <p>${data.InternEmail}</p>
        </div>`
    }
    else {
        return ''
    };
};

function htmlStuff() {
    return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Profile generator</title>
    <link rel="stylesheet" href="./assets/style.css">
  </head>
  
  <body>
  </body>
  </html>`;

};

htmlStuff()

module.exports = { teamCards, htmlStuff }

// if (data.employee === 'Manager'){
//     return `<div> 
//     <hi>${data.ManagerName}</hi>
//     </div>
//     <div>
//     <p>${data.ManagerId}</p>
//     <p>${data.ManagerEmail}</p>
//     </div>`;