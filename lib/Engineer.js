const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github){
    // this.name = name;
    // this.id = id;
    // this.email = email;
    // do all of these get inherited from the Employee class?
    this.github = github;

    }

    getRole()
    // returns "Engineer"
}

const engineer = new Engineer();