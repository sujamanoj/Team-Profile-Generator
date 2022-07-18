const inquirer = require("inquirer");
//inquirer.registerPromt("loop", require("inquirer-loop")(inquirer));
const fs = require("fs");
const { generateMember, generateHtml } = require("./src/generateHtmlPage");

function promtWelcome() {
  console.log(
    "Welcome to the Team Profile Generator! We'll ask you a few questions about your team members then create an HTML file displaying your team members!"
  );
  promtMemberinfo();
}

function promtMemberinfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the name of this team member?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What's the ID of this team member?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter an id.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What's the email of this team member?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email.");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "member",
        message: "What role does this member play?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answers) => {
      switch (answers.member) {
        case "Intern":
          promptIntern(answers);
          break;
        case "Engineer":
          promptEngineer(answers);
          break;
        case "Manager":
          promptManager(answers);
          break;
      }
    });
}

function promptManager(answers) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: `What is ${answers.name}'s office number?`,
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter an office number.");
            return false;
          }
        },
      },
    ])
    .then((manageranswer) => {
      answers.officeNumber = manageranswer.officeNumber;
      return generateMember(answers);
    })
    .then(promptAddNewMember);
}

function promptEngineer(answers) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: `What is ${answers.name}'s Github username?`,
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter a github.");
            return false;
          }
        },
      },
    ])
    .then((github) => {
      answers.github = github.github;
      return generateMember(answers);
    })
    .then(promptAddNewMember);
}

function promptIntern(answers) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: `What school does ${answers.name} attend?`,
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter a school.");
            return false;
          }
        },
      },
    ])
    .then((school) => {
      answers.school = school.school;
      return generateMember(answers);
    })
    .then(promptAddNewMember);
}

function promptAddNewMember() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "another",
        message: "Would you like to add another member?",
        default: "false",
      },
    ])
    .then((answer) => {
      if (answer.another) {
        return promtMemberinfo();
      }
      const pageHtml = generateHtml();

      fs.writeFile("./dist/index.html", pageHtml, (err) => {
        if (err) {
          error.log(err);
          return;
        }
        console.log("File succesfully created!");
      });
    });
}
promtWelcome();
