//Requires for the Lib file to connect  to Employee files.
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

//Requires the fs and inquirer aspects of the code.
const fs = require("fs");
const inquirer = require("inquirer");
//Requires the sourceHTML.js file for HTML creation.
const { createEmployeeCard, createHTML } = require("./sourceHTML.js");

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
//Functions for adding specific employee information from user input in one construction.
function employeeDetailPrompts(employeeType) {
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
					employeeType === "Engineer"
						? "Please enter the engineer's GitHub Username."
						: employeeType === "Intern"
						? "Please enter the school the intern is attending."
						: "Please enter the manager's office number.",
			},
		])
		.then((answers) => {
			let employee;
			switch (employeeType) {
				case "Manager":
					let Manager = new Manager(
						answers.name,
						answers.id,
						answers.email,
						answers.customAttribute
					);
					break;
				case "Intern":
					let Intern = new Intern(
						answers.name,
						answers.id,
						answers.email,
						answers.customAttribute
					);
					break;
				case "Engineer":
					let Engineer = new Engineer(
						answers.name,
						answers.id,
						answers.email,
						answers.customAttribute
					);
					break;
				case "Done":
					void 0;
					break;
			}
			employeeArray.push(employee);
			addEmployee();
		});
}
//Function for rendering the created Employees into an array.
function renderEmployees() {
	const employeeCardArray = [];
	for (let employee of employeeArray) {
		const employeeCard = createEmployeeCard(employee);
		employeeCardArray.push(employeeCard);
	}
	const employeeCardHTML = employeeCardArray.join("");
	console.log(employeeCardHTML);
	const finalHTML = createHTML(employeeCardHTML);

	//Writes the file to the HTML
	fs.writeFile("./dist/index.html", finalHTML, (err) => {
		// if there is an error
		if (err) {
			console.log(err);
			return;
			// when the profile has been created
		} else {
			console.log("Team Profile Created");
		}
	});
}

//Run addEmployee function.
addEmployee();
