const Employee = require("./employee");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email, "Engineer");
		this.github = github;
	}
	getCustomAttr() {
		return `Employee GitHub: ${this.github}`;
	}
}

module.exports = Engineer;
