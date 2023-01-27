//Requires for the Lib file to connect  to Employee files.
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const fs = require("fs");
const inquirer = require("inquirer");
const teamGeneration = require("./sourceHTML.js");

//Creates Employee Array that can be added to from user input.
const employeeArray = [];

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
				name: "attribute",
				message: "Please enter the Engineer's GitHub Username.",
			},
		])
		.then((answers) => {
			// console.log(answers);
			let engineer = new Engineer(
				answers.name,
				answers.id,
				answers.email,
				answers.attr
			);
			console.log(engineer);
			employeeArray.push(engineer);
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
				name: "attribute",
				message: "Please enter the school the Intern is attending.",
			},
		])
		.then((answers) => {
			let intern = new Intern(
				answers.name,
				answers.id,
				answers.email,
				answers.attr
			);
			employeeArray.push(intern);
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
				name: "attribute",
				message: "Please enter the Manager's Office Number.",
			},
		])
		.then((answers) => {
			let manager = new Manager(
				answers.name,
				answers.id,
				answers.email,
				answers.attr
			);
			employeeArray.push(manager);
			addEmployee();
		});
}

function renderEmployees() {
	for (let i = 0; i < employeeArray.length; i++) {
		let currentEmployee = employeeArray[i];

		fs.writeFile("./my_team.html", teamGeneration(currentEmployee), (error) => {
			if (err) {
				console.log(error);
			}
		});
	}
}
console.log(currentEmployee);
addEmployee();
// renderEmployees();

// $(".employee-name").text(currentEmployee.name);
// $(".employee-role").text(currentEmployee.role);
// $(".employee-id").text(currentEmployee.id);
// $(".employee-email").text(currentEmployee.email);
// $(".employee-uni-attr").text(currentEmployee.uni - attr);
