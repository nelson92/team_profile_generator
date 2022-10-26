const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(id, name, email)
        this.office = officeNumber;
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getRole(){
       return "Manager" 
    }
    // returns "Manager"
}

module.exports = Manager;

