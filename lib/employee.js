//constructor class for the Employee.
class Employee {
	constructor(name, id, email, role) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
	}
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return this.role;
	}
}
//Exports Employee class
module.exports = Employee;
