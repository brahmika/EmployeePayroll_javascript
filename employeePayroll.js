// UC14 - Validate employee id, salary, gender and start date

class EmployeePayrollData {
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    let idRegex = RegExp("^[1-9][0-9]*$");

    if (idRegex.test(id)) {
      this._id = id;
    } else {
      throw "Employee ID is Incorrect. ID must be a non-zero positive number.";
    }
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

  get salary() {
    return this._salary;
  }

  set salary(salary) {
    let salaryRegex = RegExp("^[1-9][0-9]*$");

    if (salaryRegex.test(salary)) {
      this._salary = salary;
    } else {
      throw "Salary is Incorrect. Salary must be a non-zero positive number.";
    }
  }

  get gender() {
    return this._gender;
  }

  set gender(gender) {
    let genderRegex = RegExp("^[MF]$");

    if (genderRegex.test(gender)) {
      this._gender = gender;
    } else {
      throw "Gender is Incorrect. Gender must be M or F.";
    }
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(startDate) {
    let today = new Date();

    if (startDate <= today) {
      this._startDate = startDate;
    } else {
      throw "Start Date is Incorrect. Start date cannot be a future date.";
    }
  }

  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };

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
      this.startDate.toLocaleDateString("en-US", options)
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

  console.log("UC14 - Valid Employee Payroll Data:");
  console.log(employeePayrollData.toString());
} catch (error) {
  console.error("UC14 - Error:", error);
}