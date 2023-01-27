const Employee = require("./employee");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email, "Engineer");
		this.github = github;
	}
	getAttr() {
		return this.github;
	}
}

module.exports = Engineer;
