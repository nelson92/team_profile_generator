const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(id, name, email)
        this.office = officeNumber;
    }

    getRole(){
       return "Manager" 
    }
    // returns "Manager"
}

const manager = new Manager();

