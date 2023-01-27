const Intern = require("./lib/intern.js");
const teamGeneration = (intern) => {
	console.log(intern);
	return `
<div class="employee-card" ></div>
    <div class="employee-header>
        <h1 class="employee-name">${intern.getName()}</h1>
        <h2 class="employee-role></h2>
    </div>
    <div class="employee-info>
        <ul class="employee-list>
            <li class="employee-id"></li>
            <li class="employee-email"></li>
            <li class="employee-uni-attr"></li>
        </ul>
    </div>
</div>
`;
};
module.exports = teamGeneration();
