const Engineer = require('../lib/Engineer')
       

describe ("Engineer Class", () => {
    describe("initialization", () => {
        it("should return the data passed to the constructor", () => {
            const newEngineer = new Engineer("Milton",123, "none@noemail.com", "nelson92")   
           expect(newEngineer.name).toEqual("Milton");
           expect(newEngineer.id).toEqual(123);
           expect(newEngineer.email).toEqual("none@noemail.com");
           expect(newEngineer.github).toEqual("nelson92");
           // don't know if i need to keep these 'expects' above
        });   
    })
// describe("getGithub method", () => {
//     it("should return the employee GitHub username", () => {
//         const newEngineer = new Engineer ("")   
//         expect(newEngineer.getGithub()).toBe("nelson92");
//     })
//     })
// describe("getRole method", () => {
//     it("should return the role of the employee", () => {
//         const newEngineer = new Engineer ("")   
//         expect(newEngineer.getRole()).toBe("Engineer");
//     })
// })

});