const Engineer = require("../lib/engineer.js");

test("Can create an GitHub object", () => {
	const gitHub = "HanksPanks";
	const e = new Engineer("Hank", 1, "hank@Awesome.com", "Engineer");
	expect(e.getCustomAttribute()).toBe(`Employee GitHub: ${gitHub}`);
});
