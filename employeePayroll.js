// UC12 - Extend Employee Payroll Data to store gender and start date

class EmployeePayrollData {
  id;
  salary;
  gender;
  startDate;

  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
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

let employeePayrollData = new EmployeePayrollData(
  1,
  "Brahmika",
  50000,
  "F",
  new Date()
);

console.log("UC12 - Employee Payroll Data:");
console.log(employeePayrollData.toString());