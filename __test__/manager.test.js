const Manager = require("../lib/manager.js");

test("Can create an GitHub object", () => {
	const officeNum = "133";
	const e = new Manager("Hank", 1, "hank@Awesome.com", officeNum);
	expect(e.officeNum).toBe(officeNum);
});
