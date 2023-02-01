//Creates HTML for the Empoyee infomration to added to.
const createEmployeeCard = (employee) => {
	return `
<div class="employee-card">
    <div class="employee-header">
        <h1 class="employee-name">Name:${employee.getName()}</h1>
        <h2 class="employee-role">${employee.getRole()}</h2>
    </div>
    <div class="employee-info">
        <ul class="employee-list">
            <li class="employee-id">ID:${employee.getId()}</li>
            <li class="employee-email">Email:${employee.getEmail()}></li>
            <li class="employee-uni-attr">${employee.getCustomAttribute()}</li>
        </ul>
    </div>
</div>
`;
};

//Creates more HTML for the above cards to be added to.
const createHTML = (employeeCards) => {
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
    <div class = team-cards>${employeeCards}</div>
</div> 
</body>
</html>`;
};

//exports the created HTML so it can be used to create an HTML file.
exports.createEmployeeCard = createEmployeeCard;
exports.createHTML = createHTML;
