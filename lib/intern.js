//requires the employee constructor
const Employee = require("./employee");

class Intern extends Employee {
	//Utilizes te Super Class of the Employee and adds Intern constructor.
	constructor(name, id, email, school) {
		super(name, id, email, "Intern");
		this.school = school;
	}
	getAttr() {
		return `School attending: ${this.school}`;
	}
}
//Exports Intern Class.
module.exports = Intern;
