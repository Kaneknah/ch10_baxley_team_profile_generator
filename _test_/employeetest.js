const Employee = require("../lib/employee.js");

test("Can create an Employee object", () => {
	const e = new Employee();
	expect(typeof e).toBe("object");
});

test("Can create a employee Name", () => {
	const name = "Hank";
	const e = new Employee(name);
	expect(e.name).tobe(name);
});

test("Can create a employee ID", () => {
	const id = "001";
	const e = new Employee("Hank", 001, id);
	expect(e.id).tobe(id);
});
test("Can create a employee Email", () => {
	const email = "Hank@Awesome.com";
	const e = new Employee("Hank", 001, email);
	expect(e.email).tobe(email);
});
test("Can create a employee Name", () => {
	const name = "Hank";
	const e = new Employee(name);
	expect(e.name).tobe(name);
});
