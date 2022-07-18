const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getIcon() {
    return `<span class="mt-1 material-symbols-outlined">
    local_cafe
    </span>`;
  }
}

module.exports = Manager;
