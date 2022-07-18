const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  getRole() {
    return this.role;
  }
  getGithub() {
    return this.github;
  }
  getSpecial() {
    return `Github: <a href='https://github.com/${this.github.github}'>${this.github.github}</a>`;
  }

  getIcon() {
    return `<span class="mt-1 material-symbols-outlined">
    integration_instructions
    </span>`;
  }
}

module.exports = Engineer;
