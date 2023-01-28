const renderTEAM = (team) => {
	const teamGeneration = (employee) => {
		return `
<div class="employee-card" ></div>
    <div class="employee-header>
        <h1 class="employee-name">${employee.getName()}</h1>
        <h2 class="employee-role>${employee.getRole()}</h2>
    </div>
    <div class="employee-info>
        <ul class="employee-list>
            <li class="employee-id">${employee.getId()}</li>
            <li class="employee-email"${employee.getEmail()}></li>
            <li class="employee-uni-attr">${employee.getAttr()}</li>
        </ul>
    </div>
</div>
`;
	};
};


function renderHTML(renderEmployees) {
	return `
<!DOCTYPE html>
<html lang="en">
head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
<header class = header><header>
<main>
<div class = flex-box-1>
    <div class = team-cards>${renderedEmployees}</div>
</div> 
</body>
</html>`;
}

function renderSelection(data) {
    teamArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = getRole();

    if(role === "Intern") {
        const internInfo = teamGeneration(employee);
        teamArray.push(internInfo);
    }
    if(role === "Engineer") {
        const engineerInfo = teamGeneration(employee);
        teamArray.push(engineerInfo);
    }
    if(role === "Manager") {
     const managerInfo = teamGeneration(employee);
        teamArray.push(managerInfo);
    }

const renderedEmployees = teamArray.join("")


}

};
module.exports = renderHTML();
