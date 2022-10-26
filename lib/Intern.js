const Employee = require('./Employee');

class Intern extends Employee{
    constructor(school){
    super(id, name, email)
    this.school = school;
    this.id = id;
    this.email = email;
    this.name = name;
    
    }
    

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
    // returns "Intern"
}

module.exports = Intern;