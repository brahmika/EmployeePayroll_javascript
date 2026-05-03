// UC11 - Perform Object Operations using Arrow Functions

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;

const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

const getWorkingHours = (empCheck) => {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
};

const calcDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyDataArr = [];

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  let empWage = calcDailyWage(empHrs);

  totalEmpHrs += empHrs;

  empDailyDataArr.push({
    day: totalWorkingDays,
    dailyHours: empHrs,
    dailyWage: empWage,
    toString() {
      return `Day ${this.day} => Working Hours: ${this.dailyHours}, Wage Earned: ${this.dailyWage}`;
    },
  });
}

// UC11A - Calculate total wage and total hours worked
let totalWage = empDailyDataArr
  .filter((dailyData) => dailyData.dailyWage > 0)
  .reduce((totalWage, dailyData) => totalWage + dailyData.dailyWage, 0);

let totalHours = empDailyDataArr
  .filter((dailyData) => dailyData.dailyHours > 0)
  .reduce((totalHours, dailyData) => totalHours + dailyData.dailyHours, 0);

console.log("UC11A - Total Wage: " + totalWage + " Total Hours: " + totalHours);

// UC11B - Show full working days using forEach
console.log("UC11B - Full Working Days:");
empDailyDataArr
  .filter((dailyData) => dailyData.dailyHours === FULL_TIME_HOURS)
  .forEach((dailyData) => console.log(dailyData.toString()));

// UC11C - Show part working days using map by reducing to string array
let partWorkingDayStrArr = empDailyDataArr
  .filter((dailyData) => dailyData.dailyHours === PART_TIME_HOURS)
  .map((dailyData) => dailyData.toString());

console.log("UC11C - Part Working Days:");
console.log(partWorkingDayStrArr);

// UC11D - No working days using map function
let noWorkingDayStrArr = empDailyDataArr
  .filter((dailyData) => dailyData.dailyHours === 0)
  .map((dailyData) => dailyData.toString());

console.log("UC11D - No Working Days:");
console.log(noWorkingDayStrArr);