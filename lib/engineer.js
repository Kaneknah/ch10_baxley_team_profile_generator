//requires the employee constructor
const Employee = require("./employee");
//constructor class for the Engineer.
class Engineer extends Employee {
	//Utilizes te Super Class of the Employee and adds Engineer constructor.
	constructor(name, id, email, github) {
		super(name, id, email, "Engineer");
		this.gitHub = gitHub;
	}
	getCustomAttribute() {
		return `Employee GitHub: ${this.gitHub}`;
	}
}
//Exports Engineer Class.
module.exports = Engineer;
