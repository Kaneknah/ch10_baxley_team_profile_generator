const Employee = require("./employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNum = officeNum;
	}
	getOfficeNum() {
		return this.officeNum;
	}
	getRole() {
		return "Manager";
	}
}

module.export = "Manager";
