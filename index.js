const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const fs = require("fs");




let htmlContent = `<html>





</html>`;

fs.writeFile("./my_team.html", htmlContent, (error) => {
	console.log(error);
});
