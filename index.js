//Requires for the Lib file to connect  to Employee files.
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const fs = require("fs");
const inquirer = require("inquirer");
//Creates Employee Array that can be added to from user input.
const employeeList = [];

//Function for adding an Employee.
function addEmployee() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "employee",
				message: "Which Employee Position would you like to add?",
				choices: ["Engineer", "Intern", "Manager"],
			},
		])
		.then(function (userInput) {
			switch (userInput.employee) {
				case "Engineer":
					addEngineer();
					break;
				case "Intern":
					addIntern();
					break;
				case "Manager":
					addManager();
					break;
			}
		});
}
//Functions for adding specific employee information from user input.
function addEngineer() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Please enter the Engineer's Name.",
			},
			{
				type: "input",
				name: "id",
				message: "Please enter the Engineer's ID.",
			},
			{
				type: "input",
				name: "email",
				message: "Please enter the Engineer's Email Address.",
			},
			{
				type: "input",
				name: "github",
				message: "Please enter the Engineer's GitHub Username.",
			},
		])
		.then((answers) => {
			// console.log(answers);
			let engineer = new Engineer(
				answers.name,
				answers.id,
				answers.email,
				answers.github
			);
			console.log(engineer);
			employeeList.push(engineer);
			addEmployee();
		});
}

function addIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Please enter the Intern's Name.",
			},
			{
				type: "input",
				name: "id",
				message: "Please enter the Intern's ID.",
			},
			{
				type: "input",
				name: "email",
				message: "Please enter the Intern's Email Address.",
			},
			{
				type: "input",
				name: "officeNum",
				message: "Please enter the school the Intern is attending.",
			},
		])
		.then((answers) => {
			let Intern = new Intern(
				answers.name,
				answers.id,
				answers.email,
				answers.school
			);
			employeeList.push(intern);
			addEmployee();
		});
}

function addManager() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Please enter the Manager's Name.",
			},
			{
				type: "input",
				name: "id",
				message: "Please enter the Manager's ID.",
			},
			{
				type: "input",
				name: "email",
				message: "Please enter the Manager's Email Address.",
			},
			{
				type: "input",
				name: "officeNum",
				message: "Please enter the Manager's Office Number.",
			},
		])
		.then((answers) => {
			let manager = new Manager(
				answers.name,
				answers.id,
				answers.email,
				answers.officeNum
			);
			employeeList.push(manager);
			addEmployee();
		});
}

let htmlContent = `<html>

</html>`;

fs.writeFile("./my_team.html", htmlContent, (error) => {
	console.log(error);
});

addEmployee();

let html = "";

html += `<div>`;
