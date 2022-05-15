const inquirer = requirer("inquirer");
inquirer.registerPromt("loop", require("inquirer-loop")(inquirer));
const fs = require("fs");
