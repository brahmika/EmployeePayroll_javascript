// UC9 - Use Daily Wage Map and Daily Hour Map using Arrow Functions

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

let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  let empWage = calcDailyWage(empHrs);

  totalEmpHrs += empHrs;

  empDailyHrsMap.set(totalWorkingDays, empHrs);
  empDailyWageMap.set(totalWorkingDays, empWage);
}

let totalWage = Array.from(empDailyWageMap.values()).reduce(
  (total, wage) => total + wage,
  0
);

let totalHours = Array.from(empDailyHrsMap.values()).reduce(
  (total, hours) => total + hours,
  0
);

let fullWorkingDays = Array.from(empDailyHrsMap)
  .filter(([day, hours]) => hours === FULL_TIME_HOURS)
  .map(([day, hours]) => day);

let partWorkingDays = Array.from(empDailyHrsMap)
  .filter(([day, hours]) => hours === PART_TIME_HOURS)
  .map(([day, hours]) => day);

let noWorkingDays = Array.from(empDailyHrsMap)
  .filter(([day, hours]) => hours === 0)
  .map(([day, hours]) => day);

console.log("Daily Wage Map:", empDailyWageMap);
console.log("Daily Hour Map:", empDailyHrsMap);
console.log("UC9A - Total Wage: " + totalWage + " Total Hours: " + totalHours);
console.log("UC9B - Full Working Days:", fullWorkingDays);
console.log("UC9B - Part Working Days:", partWorkingDays);
console.log("UC9B - No Working Days:", noWorkingDays);