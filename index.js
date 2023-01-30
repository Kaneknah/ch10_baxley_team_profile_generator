//Requires for the Lib file to connect  to Employee files.
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const fs = require("fs");
const inquirer = require("inquirer");
// const teamGeneration = require("./sourceHTML.js");
const {createEmployeeCard, }

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
				choices: ["Engineer", "Intern", "Manager", "Done"],
			},
		])
		.then(function (userInput) {
			if (userInput.employee === "Done") {
				renderEmployees(employeeArray);
			} else {
				employeeDetailPrompts(userInput.employee);
			}
		});
}
//Functions for adding specific employee information from user input.
function employeeDetailPrompts(EmployeeType) {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: `Please enter ${employeeType}'s Name.`,
			},
			{
				type: "input",
				name: "id",
				message: `Please enter the ${employeeType}'s ID.`,
			},
			{
				type: "input",
				name: "email",
				message: `Please enter the ${employeeType}'s Email Address.`,
			},
			{
				type: "input",
				name: "customAttribute",
				message:
					employeeType === "engineer"
						? "Please enter the engineer's GitHub Username."
						: employeeType === "intern"
						? "Please enter the school the intern is attending."
						: "Please enter the manager's office number.",
			},
		])
		.then((answers) => {
			switch (employeeType) {
				case "Manager":
					let Manager = new Manager(
						answers.name,
						answers.id,
						answers.email,
						answers.customAttribute
					);
					employeeArray.push(employee);
					break;
				case "Intern":
					let Intern = new Intern(
						answers.name,
						answers.id,
						answers.email,
						answers.customAttribute
					);
					employeeArray.push(employee);
					break;
				case "Engineer":
					let Engineer = new Engineer(
						answers.name,
						answers.id,
						answers.email,
						answers.customAttribute
					);
					employeeArray.push(employee);
					break;
				case "Done":
					void 0;
					break;
			}
			addEmployee();
		});
}

function renderEmployees() {
	for (let i = 0; i < employeeArray.length; i++) {
		let employeeCard = createEmployeeCard(employee);

		fs.writeFile("./my_team.html", teamGeneration(employee), (error) => {
			if (err) {
				console.log(error);
			}
		});
	}
	const employeeCardHTML = employeeCardArray.join('');
	const 
}
console.log(currentEmployee);
addEmployee();
renderEmployees();

// $(".employee-name").text(currentEmployee.name);
// $(".employee-role").text(currentEmployee.role);
// $(".employee-id").text(currentEmployee.id);
// $(".employee-email").text(currentEmployee.email);
// $(".employee-uni-attr").text(currentEmployee.uni - attr);

// function addEngineer() {
// 	inquirer
// 		.prompt([
// 			{
// 				type: "input",
// 				name: "name",
// 				message: "Please enter the Engineer's Name.",
// 			},
// 			{
// 				type: "input",
// 				name: "id",
// 				message: "Please enter the Engineer's ID.",
// 			},
// 			{
// 				type: "input",
// 				name: "email",
// 				message: "Please enter the Engineer's Email Address.",
// 			},
// 			{
// 				type: "input",
// 				name: "attribute",
// 				message: "Please enter the Engineer's GitHub Username.",
// 			},
// 		])
// 		.then((answers) => {
// 			// console.log(answers);
// 			let engineer = new Engineer(
// 				answers.name,
// 				answers.id,
// 				answers.email,
// 				answers.attr
// 			);
// 			console.log(engineer);
// 			employeeArray.push(engineer);
// 			addEmployee();
// 		});
// }

// function addIntern() {
// 	inquirer
// 		.prompt([
// 			{
// 				type: "input",
// 				name: "name",
// 				message: "Please enter the Intern's Name.",
// 			},
// 			{
// 				type: "input",
// 				name: "id",
// 				message: "Please enter the Intern's ID.",
// 			},
// 			{
// 				type: "input",
// 				name: "email",
// 				message: "Please enter the Intern's Email Address.",
// 			},
// 			{
// 				type: "input",
// 				name: "attribute",
// 				message: "Please enter the school the Intern is attending.",
// 			},
// 		])
// 		.then((answers) => {
// 			let intern = new Intern(
// 				answers.name,
// 				answers.id,
// 				answers.email,
// 				answers.attr
// 			);
// 			employeeArray.push(intern);
// 			addEmployee();
// 		});
// }

// function addManager() {
// 	inquirer
// 		.prompt([
// 			{
// 				type: "input",
// 				name: "name",
// 				message: "Please enter the Manager's Name.",
// 			},
// 			{
// 				type: "input",
// 				name: "id",
// 				message: "Please enter the Manager's ID.",
// 			},
// 			{
// 				type: "input",
// 				name: "email",
// 				message: "Please enter the Manager's Email Address.",
// 			},
// 			{
// 				type: "input",
// 				name: "attribute",
// 				message: "Please enter the Manager's Office Number.",
// 			},
// 		])
// 		.then((answers) => {
// 			let manager = new Manager(
// 				answers.name,
// 				answers.id,
// 				answers.email,
// 				answers.attr
// 			);
// 			employeeArray.push(manager);
// 			addEmployee();
// 		});
// }
