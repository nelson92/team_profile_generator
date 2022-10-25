const newIntern = new Intern ("Milton", "123", "none@noemail.com")   
  // not sure wha tto do with these parameters   

describe ("Intern Class", () => {
    describe("initialization", () => {
        it("should return the data passed to the constructor", () => {
           expect(newEmployee.name).toBe("Milton");
           expect(newEmployee.id).toBe("123");
           expect(newEmployee.email).tobe("none@noemail.com");
           // don't know if i need to keep these 'expects' above
        });   
    })
describe("getSchool method", () => {
    it("should return the employee school they are attending", () => {
        expect(getSchool().toBe("Milton"));
    })
    })
describe("getRole method", () => {
    it("should return the role of the employee", () => {
        expect(newIntern.getRole().toBe("Intern"));
    })
})
});