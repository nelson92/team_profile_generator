
const newEmployee = new Employee ("Milton", "123", "none@noemail.com")         

describe ("Employee Class", () => {
    describe("initialization", () => {
        it("should return the data passed to the constructor", () => {
           expect(newEmployee.name).toBe("Milton");
           expect(newEmployee.id).toBe("123");
           expect(newEmployee.email).tobe("none@noemail.com");
        });   
    })
describe("getName method", () => {
    it("should return the employee name", () => {
        expect(newEmployee.getName().toBe("Milton"));
    })
})
describe("getId method", () => {
    it("should return the employee ID", () => {
        expect(newEmployee.getId().toBe("123"));
    })
})
describe("getEmail method", () => {
    it("should return the employee email", () => {
        expect(newEmployee.getEmail().toBe("none@noemail.com"));
    })
})
describe("getRole method", () => {
    it("should return the role of the employee", () => {
        expect(newEmployee.getRole().toBe("Manager"));
    })
})

});
