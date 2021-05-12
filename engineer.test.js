

const Engineer = require('../lib/Engineer')



    it("creates Engineer", () => {
        const Em = new Engineer("hawa", 2, "hawa@test.com", "hawafran@github.com" );
        expect(Em.name).toEqual(expect.any(String));
        expect(Em.id).toEqual(expect.any(Number));
        expect(Em.email).toEqual(expect.any(String));
        expect(Em.github).toEqual(expect.any(String));
        
    });

    describe ('getName', () => {
        it("retreives name via getName"), () => {
            const Em = new Engineer("hawa", 2, "hawa@test.com","hawafran@github.com");  
            expect(Em.getName()).toEqual(expect.any(String));    
        };
    });
    describe ('getID', () => {
        it("retreives name via getID"), () => {
            const Em = new Engineer("hawa", 2, "hawa@test.com", "hawafran@github.com");  
            expect(Em.getID()).toEqual(expect.any(Number));    
        };
    });
    describe('getEmail', () => {
        it("retreives email via getEmail"), () => {
            const Em = new Engineer("hawa", 2, "hawa@test.com", "hawafran@github.com");  
            expect(Em.getEmail()).toBe(expect.any(String));
        };

    });
    describe('getGithub', () => {
        it("should return github"), () => {
            const Em = new Engineer("hawa", 1, "hawa@test.com", "hawafran@github.com");
            expect(Em.getRole()).toBe(expext.any(String));
        };

        describe('getRole', () => {
            it("should return engineer"), () => {
                const Em = new Engineer("hawa", 1, "hawa@test.com", "hawafran@github.com");
                expect(Em.getRole()).toBe("Engineer");
            };
    
        });
        

    });