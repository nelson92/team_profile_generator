const Manager = require('../lib/Manager')
 
describe ("Manager Class", () => {
    describe("initialization", () => {
        it("should return the data passed to the constructor", () => {
            const newManager = new Manager("Milton",123, "none@noemail.com", 5)   
           expect(newManager.name).toEqual("Milton");
           expect(newManager.id).toEqual(123);
           expect(newManager.email).toEqual("none@noemail.com");
           expect(newManager.officeNumber).toEqual(5);
        });   
    })
// describe("getRole method", () => {
//     it("should return the role of the employee", () => {
//         const newManager = new Manager ("")   
//         expect(newManager.getRole()).toBe("Manager");
//     })
// })
});