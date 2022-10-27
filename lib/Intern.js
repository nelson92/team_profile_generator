const Employee = require('./Employee');

class Intern extends Employee{
    constructor(school){
    super(id, name, email)
    this.school = school;
     
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