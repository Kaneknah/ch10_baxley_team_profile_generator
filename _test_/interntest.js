const Intern = require("../lib/intern.js");

test("Can create an GitHub object", () => {
	const school = "University of Hank";
	const e = new Intern("Hank", 001, "hank@Awesome.com", "Intern");
	expect(e.school).toBe(school);
});
