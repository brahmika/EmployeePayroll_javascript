// UC13 - Validate employee name using Regex and Try Catch

class EmployeePayrollData {
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");

    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Name is Incorrect. Name must start with capital letter and have at least 3 characters.";
    }
  }

  toString() {
    return (
      "ID: " +
      this.id +
      ", Name: " +
      this.name +
      ", Salary: " +
      this.salary +
      ", Gender: " +
      this.gender +
      ", Start Date: " +
      this.startDate
    );
  }
}

try {
  let employeePayrollData = new EmployeePayrollData(
    1,
    "Brahmika",
    50000,
    "F",
    new Date()
  );

  console.log("UC13 - Valid Employee Data:");
  console.log(employeePayrollData.toString());

  employeePayrollData.name = "br";
} catch (error) {
  console.error("UC13 - Error:", error);
}