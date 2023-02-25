const Engineer = require("../lib/engineer.js");

test("Can create an GitHub object", () => {
	const github = "HanksPanks";
	const e = new Engineer("Hank", 1, "hank@Awesome.com", github);
	expect(e.getCustomAttribute()).toBe(`Employee github: ${github}`);
});
