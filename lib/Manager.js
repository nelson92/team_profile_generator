const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber){
        this.office = officeNumber;
    }

    getRole()
    // returns "Manager"
}

const manager = new Manager();

