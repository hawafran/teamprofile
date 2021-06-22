const inquirer = require("inquirer");
const fs = require ("fs");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");

const Employees = [];

const addManager = () => {
    return inquirer.prompt ([{
        type: 'input',
        name: 'name',
        message: 'who is the team Manager?',
        validate: input => {
            if (input) {
                return true;
            }
            else{
                console.log("please enter name")
                return false
            }
        },

    
        type: 'input',
        name: 'id',
        message: 'what is the Manager ID?',
        validate: id => {
            if (id>0) {
                return true;
            }
            else{
                console.log("please enter valid number")
                return false
            }
        },
        type: 'input',
        name: 'email',
        message: 'what is the Manager email',
        validate: email => {
            if (email.value.contains("@")) {
                return true;
            }
            else{
                console.log("please enter valid email")
                return false
            }
        },

        type: 'input',
        name: 'officeNumber',
        message: 'what is the Manager office number',
        validate: officeNumber => {
            if (officeNumber>0) {
                return true;
            }
            else{
                console.log("please enter valid number")
                return false
            }
        }
    }
])
.then (input =>{
    const{name,id,email,officeNumber} = input;
    const Manager = new Manager(name,id,email,officeNumber)
})
    
}
const addTeamMembers = () => {
    return inquire.promp([{
        type: "list",
            message: "do you want to add more team members?",
            choices: ["add an engineer", "add an intern", "No"],
            name: "addData"
    }])
    .then(function (data) {

        switch (data.addTeamMemberData) {
            case "add an engineer":
                addEngineer();
                break;

            case "add an intern":
                addIntern();
                break;
            case "No":
                compileTeam();
                break;
        }
    });
}

const addEngineer = () => {
    return inquirer.prompt ([{
        type: 'input',
        name: 'name',
        message: 'who is the team Engineer?',
        validate: input => {
            if (input) {
                return true;
            }
            else{
                console.log("please enter name")
                return false
            }
        },

    
        type: 'input',
        name: 'id',
        message: 'what is the Engineer ID?',
        validate: id => {
            if (id>0) {
                return true;
            }
            else{
                console.log("please enter valid number")
                return false
            }
        },
        type: 'input',
        name: 'email',
        message: 'what is the Engineer email',
        validate: email => {
            if (email.value.contains("@")) {
                return true;
            }
            else{
                console.log("please enter valid email")
                return false
            }
        },

        type: 'input',
        name: 'github',
        message: 'what is the Engineer github account',
        validate: input => {
            if (input) {
                return true;
            }
            else{
                console.log("please enter github account")
                return false
            }
            
        }
        
    }
    
])
}

const addIntern = () => {
    return inquirer.prompt ([{
        type: 'input',
        name: 'name',
        message: 'who is the team Intern?',
        validate: input => {
            if (input) {
                return true;
            }
            else{
                console.log("please enter name")
                return false
            }
        },

    
        type: 'input',
        name: 'id',
        message: 'what is the Intern ID?',
        validate: id => {
            if (id>0) {
                return true;
            }
            else{
                console.log("please enter valid number")
                return false
            }
        },
        type: 'input',
        name: 'email',
        message: 'what is the Intern email',
        validate: email => {
            if (email.value.contains("@")) {
                return true;
            }
            else{
                console.log("please enter valid email")
                return false
            }
        },

        type: 'input',
        name: 'school',
        message: 'where does the intern attend school',
        validate: input => {
            if (input) {
                return true;
            }
            else{
                console.log("please enter valid input")
                return false
            }
        }
    }
])}