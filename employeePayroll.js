// UC7 - Perform operations using Array Helper Functions

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

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = [];

while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);

  totalEmpHrs += empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
}

console.log("Daily Wage Array: ", empDailyWageArr);

// UC7A - Calculate total wage using forEach
let totalEmpWage = 0;

function sumDailyWage(dailyWage) {
  totalEmpWage += dailyWage;
}

empDailyWageArr.forEach(sumDailyWage);

console.log("UC7A - Total Wage using forEach: " + totalEmpWage);

// UC7A - Calculate total wage using reduce
function totalWages(totalWage, dailyWage) {
  return totalWage + dailyWage;
}

console.log(
  "UC7A - Total Wage using reduce: " +
    empDailyWageArr.reduce(totalWages, 0)
);

// UC7B - Show day along with daily wage using map
let dailyCounter = 0;

function mapDayWithWage(dailyWage) {
  dailyCounter++;
  return "Day " + dailyCounter + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);

console.log("UC7B - Daily Wage Map:");
console.log(mapDayWithWageArr);

// UC7C - Show days when full-time wage of 160 was earned
function fullTimeWage(dailyWage) {
  return dailyWage === 160;
}

let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);

console.log("UC7C - Days with Full Time Wage:");
console.log(fullDayWageArr);

// UC7D - Find first occurrence when full-time wage was earned
function findFullTimeWage(dailyWage) {
  return dailyWage.includes("160");
}

console.log(
  "UC7D - First Full Time Wage was earned on: " +
    mapDayWithWageArr.find(findFullTimeWage)
);

// UC7E - Check if every full-time wage element is truly holding full-time wage
function isAllFullTimeWage(dailyWage) {
  return dailyWage.includes("160");
}

console.log(
  "UC7E - Every element in Full Day Wage Array has full-time wage: " +
    fullDayWageArr.every(isAllFullTimeWage)
);

// UC7F - Check if there is any part-time wage
function isAnyPartTimeWage(dailyWage) {
  return dailyWage.includes("80");
}

console.log(
  "UC7F - Is there any Part Time Wage: " +
    mapDayWithWageArr.some(isAnyPartTimeWage)
);

// UC7G - Find number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
  if (dailyWage > 0) {
    return numOfDays + 1;
  }
  return numOfDays;
}

console.log(
  "UC7G - Number of Days Employee Worked: " +
    empDailyWageArr.reduce(totalDaysWorked, 0)
);