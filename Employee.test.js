const Employee = require('../lib/employee')



    it("creates employee", () => {
        const Em = new Employee('hawa', 2, 'hawa@test.com');
        expect(Em.name).toEqual(expect.any(String));
        expect(Em.id).toEqual(expect.any(Number));
        expect(Em.email).toEqual(expect.any(String));
        
    });

    describe ('getName', () => {
        it("retreives name via getName"), () => {
            const Em = new Employee('hawa', 2, 'hawa@test.com');  
            expect(Em.getName()).toEqual(expect.any(String));    
        };
    });
    describe ('getID', () => {
        it("retreives name via getID"), () => {
            const Em = new Employee('hawa', 2, 'hawa@test.com');  
            expect(Em.getID()).toEqual(expect.any(Number));    
        };
    });
    describe('getEmail', () => {
        it("retreives email via getEmail"), () => {
            const Em = new Employee('hawa', 2, 'hawa@test.com');  
            expect(Em.getEmail()).toBe(expect.any(String));
        };

    });
    describe('getRole', () => {
        it("should return 'employee"), () => {
            const Em = new Employee("hawa", 1, "hawa@test.com");
            expect(Em.getRole()).toBe("Employee");
        };

    });
    




