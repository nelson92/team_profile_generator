const Intern = require('../lib/Intern')
 
  // not sure what to do with these parameters   

describe ("Intern Class", () => {
    describe("initialization", () => {
        it("should return the data passed to the constructor", () => {
        const newIntern = new Intern ("")
           expect(newIntern.name).toBe("Milton");
           expect(newIntern.id).toBe("123");
           expect(newIntern.email).tobe("none@noemail.com");
           // don't know if i need to keep these 'expects' above
        });   
    })
// describe("getSchool method", () => {
//     it("should return the employee school they are attending", () => {
//         const newIntern = new Intern ("")
//         expect(newIntern.getSchool()).toBe("Milton");
//     })
//     })
// describe("getRole method", () => {
//     it("should return the role of the employee", () => {
//         const newIntern = new Intern ("")
//         expect(newIntern.getRole()).toBe("Intern");
//     })
// })
});