const Manager = require("../lib/manager.js");

test("Can create an GitHub object", () => {
	const officeNumber = "133";
	const e = new Manager("Hank", 1, "hank@Awesome.com", "Manager");
	expect(e.officeNumber).toBe(officeNumber);
});
