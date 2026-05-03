// UC8 - Store Day and Daily Wage using Map

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;

const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;

    case IS_FULL_TIME:
      return FULL_TIME_HOURS;

    default:
      return 0;
  }
}

function calcDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

function totalWages(totalWage, dailyWage) {
  return totalWage + dailyWage;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;

let empDailyWageArr = [];
let empDailyWageMap = new Map();

while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);

  totalEmpHrs += empHrs;

  let dailyWage = calcDailyWage(empHrs);
  empDailyWageArr.push(dailyWage);
  empDailyWageMap.set(totalWorkingDays, dailyWage);
}

console.log("UC8 - Daily Wage Map:");
console.log(empDailyWageMap);

console.log(
  "UC8 - Total Wage using Map: " +
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0)
);