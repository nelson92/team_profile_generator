const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
    super(id, name, email)
    this.github = github;

    }

   getRole(){
    return "Engineer"
    }
    // returns "Engineer"
}

const engineer = new Engineer();