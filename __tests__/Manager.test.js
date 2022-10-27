const Manager = require('../lib/Manager')
 

describe ("Manager Class", () => {
    describe("initialization", () => {
        it("should return the data passed to the constructor", () => {
            const newManager = new Manager ("")   
           expect(newManager.name).toBe("Milton");
           expect(newManager.id).toBe("123");
           expect(newManager.email).tobe("none@noemail.com");
        // don't know if i need to keep these 'expects' above
        });   
    })
// describe("getRole method", () => {
//     it("should return the role of the employee", () => {
//         const newManager = new Manager ("")   
//         expect(newManager.getRole()).toBe("Manager");
//     })
// })
});