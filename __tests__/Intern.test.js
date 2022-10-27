const Intern = require('../lib/Intern')
 
 
describe ("Intern Class", () => {
    describe("initialization", () => {
        it("should return the data passed to the constructor", () => {
        const newIntern = new Intern ("Milton", 123, "none@noemail.com", "State University")
           expect(newIntern.name).toBe("Milton");
           expect(newIntern.id).toBe(123);
           expect(newIntern.email).toBe("none@noemail.com");
           expect(newIntern.school).toBe("State University")
         });   
    })
// describe("getSchool method", () => {
//     it("should return the employee school they are attending", () => {
//         const newIntern = new Intern ("")
//         expect(newIntern.getSchool()).toBe("State University");
//     })
//     })
// describe("getRole method", () => {
//     it("should return the role of the employee", () => {
//         const newIntern = new Intern ("")
//         expect(newIntern.getRole()).toBe("Intern");
//     })
// })
});