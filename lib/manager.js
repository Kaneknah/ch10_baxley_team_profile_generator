//requires the employee constructor
const Employee = require("./employee");

class Manager extends Employee {
	//Utilizes te Super Class of the Employee and adds Manager constructor.
	constructor(name, id, email, officeNum) {
		super(name, id, email, "Manager");
		this.officeNum = officeNum;
	}
	getAttr() {
		return `Office Number: ${this.officeNum}`;
	}
}
//Exports Manager Class.
module.exports = Manager;
