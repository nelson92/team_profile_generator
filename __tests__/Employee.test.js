const Employee = require('../lib/Employee');
        

describe ("Employee Class", () => {
    describe("initialization", () => {
        it("should return the data passed to the constructor", () => {
        const newEmployee = new Employee ("Milton", "123", "none@noemail.com") 
           expect(newEmployee.name).toBe("Milton");
           expect(newEmployee.id).toBe("123");
           expect(newEmployee.email).toBe("none@noemail.com");
           
        });   
    })
// describe("getName method", () => {
//     it("should return the employee name", () => {
//         const newEmployee = new Employee ("Milton", "123", "none@noemail.com") 
//         expect(newEmployee.getName()).toBe("Milton");
//     })
// })
// describe("getId method", () => {
//     it("should return the employee ID", () => {
//         const newEmployee = new Employee ("Milton", "123", "none@noemail.com") 
//         expect(newEmployee.getId()).toBe("123");
//     })
// })
// describe("getEmail method", () => {
//     it("should return the employee email", () => {
//         const newEmployee = new Employee ("Milton", "123", "none@noemail.com") 
//         expect(newEmployee.getEmail()).toBe("none@noemail.com");
//     })
// })
// describe("getRole method", () => {
//     it("should return the role of the employee", () => {
//         const newEmployee = new Employee ("Milton", "123", "none@noemail.com") 
//         expect(newEmployee.getRole()).toBe("Employee");
//     })
});
