const Employee = require("./employee");

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email, "Intern");
		this.school = school;
	}
	getAttr() {
		return `School attending: ${this.school}`;
	}
}

module.exports = Intern;
