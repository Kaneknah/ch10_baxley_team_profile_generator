const Intern = require("../lib/intern.js");

test("Can create an GitHub object", () => {
	const school = "University of Hank";
	const e = new Intern("Hank", 1, "hank@Awesome.com", school);
	expect(e.school).toBe(school);
});
