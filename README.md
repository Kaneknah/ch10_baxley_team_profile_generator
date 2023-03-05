# ch10_baxley_team_profile_generator

## Table of Contents:

- [Description](#description)
- [Usage](#usage)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Mockup](#mockup)
- [Credits](#credits)
- [License](#license)

## Description

This project was the creation of a Team Profile Generator app that utilizes Node.js command line to intake user information and generate an HTML webpage of the provided data. The application utilizes the inquire package and jest package for functionality and testing.The application's processes are not viewable from a static website, therefore the provided video shows functionality.<iframe src="https://drive.google.com/file/d/176oOnCnIDOHyVmWwuIsFF5vyo4haQtFe/preview" width="640" height="480"></iframe>

## Acceptance Criteria

GIVEN a command-line application that accepts user input <br>
WHEN I am prompted for my team members and their information<br>
THEN an HTML file is generated that displays a nicely formatted team roster based on user input<br>
WHEN I click on an email address in the HTML<br>
THEN my default email program opens and populates the TO field of the email with the address<br>
WHEN I click on the GitHub username<br>
THEN that GitHub profile opens in a new tab<br>
WHEN I start the application<br>
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number<br>
WHEN I enter the team manager’s name, employee ID, email address, and office number<br>
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building
my team<br>
WHEN I select the engineer option<br>
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back
to the menu<br>
WHEN I select the intern option<br>
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu<br>
WHEN I decide to finish building my team<br>
THEN I exit the application, and the HTML is generated<br>

## Installation

A user will need to instal the package.json modules in order to run this application. The user may do this by simply running "npm i" in the terminal.

## Usage

After installation, the user will simply run the server by entering "node index" in the terminal. After this, the user will be provided with a a list of prompts via inquire to select which employee, they wish to create. The user may then navigate through the Engineer, Manager, and Intern positions and provide the requested information. Once done, the user may select "End" and a new index.HTML will be generated showing the data in a visually appealing webpage format.

## Contribution

N/A

## Testing

This application received tests on the employee javascript functions to ensure that they were rendering the correct results during the formation of the HTML files in the terminal. All tests passed. Please See the provided walkthrough video for examples of the tests.

## Mockup

![Alt text](./assets/images/Team%20Gen.png)

## Credits

### Team Members:

- James Baxley | Github: [Kaneknah](https://github.com/Kaneknah)

### Technologies utilized:

#### Front End

-JavaScript<br>
-HTML<br>
-CSS<br>

#### Back End

-Node.js<br>
-Inquire<br>
-Jest<br>

### GitHub Link: https://github.com/Kaneknah/ch10_baxley_team_profile_generator

## License

Apache License: http://www.apache.org/licenses/LICENSE-2.0
