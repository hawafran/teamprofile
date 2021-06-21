
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Hawa', 90, 'Hawa@gmail', 'UB');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Hawa', 90, 'Hawa@gmail', 'UB');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Hawa', 90, 'Hawa@gmail.com', 'UB');

    expect(intern.getRole()).toEqual("Intern");
}); 