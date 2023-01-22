const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const fs = require("fs");
const inquirer = require("inquirer");

function addEngineer() {
	inquirer.prompt([
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
			name: "officeNum",
			message: "Please enter the Engineer's GitHub Username.",
		},
	]);
}

function addIntern() {
	inquirer.prompt([
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
	]);
}

function addManager() {
	inquirer.prompt([
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
	]);
}

let htmlContent = `<html>





</html>`;

fs.writeFile("./my_team.html", htmlContent, (error) => {
	console.log(error);
});
