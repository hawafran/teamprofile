const Employee = require('../lib/employee')

describe('Employee', () =>{
    it("should expect new Employee input", () => {
        const Em = new Employee();
        expect(typeof(Em)).toBe("object");
    });
    it("sets name via constructor"), () => {
        const name = "hawa";
        const Em = new Employee(name);
        expect(Em.name).toBe(name);
    };
    it("sets ID via constructor"), () => {
        const id = 1;
        const Em = new Employee(id);
        expect(Em.id).toBe(id);
    };
    it("sets email via constructor"), () => {
        const email = "hawa@test.com";
        const Em = new Employee(email);
        expect(Em.email).toBe(email);
    }
    describe ('getName', () => {
        it("retreives name via getName"), () => {
            const name = "hawa";
            const Em = new Employee(name);
            expect(Em.getName()).toBe(name);
        };
    });
    describe ('getID', () => {
        it("retreives name via getID"), () => {
            const id = 1;
            const Em = new Employee(id);
            expect(Em.getID()).toBe(id);
        };
    });
    describe('getEmail', () => {
        it("retreives email via getEmail"), () => {
            const email = "hawa@test.com";
            const Em = new Employee(email);
            expect(Em.getEmail()).toBe(email);
        };

    });
    describe('getRole', () => {
        it("should return 'employee"), () => {
            const testValue = "Employee";
            const Em = new Employee("hawa", 1, "hawa@test.com");
            expect(Em.getRole()).toBe(testValue);
        };

    });
});


