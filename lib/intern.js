const Employee = require("./Employee");

class intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "intern";
  }
  getSchool() {
    return this.school;
  }
  getSpecial() {
    return `School: ${this.school}`;
  }

  getIcon() {
    return `<span class="mt-1 material-symbols-outlined">
    school
    </span>`;
  }
}

module.exports = intern;
