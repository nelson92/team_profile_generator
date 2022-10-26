const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
    super(id, name, email)
    this.github = github;
    this.id = id;
    this.name = name;
    this.email = email;
    }

   getRole(){
    return "Engineer"
    }
    // returns "Engineer"
}

module.exports = Engineer;