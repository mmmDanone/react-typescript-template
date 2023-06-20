/*
const isLeapYear = (year: number): boolean => {
  if (!(year % 400)) return true;
  if (!(year % 100)) return false;
  return !(year % 4);
};

const getCountDaysMonth = (month: monthT, year: number): number => {
  return (
    28 +
    Number(month == 2 && isLeapYear(year)) +
    ((month + Math.floor(month / 8)) % 2) +
    (2 % month) +
    2 * Math.floor(1 / month)
  );
};
const getCentury = (year: number): number => {
  return Math.floor(year / 100) + 1;
};

const getIndexCentury = (century: number): number => {
  const centuryIndexList = [6, 4, 2, 0];

  return centuryIndexList[(century - 1) % 4];
};

const getLastTwoDigitsYear = (year: number): number => {
  return Number(String(year).split('').slice(-2).join(''));
};

const getIndexYear = (year: number): number => {
  const lastTwoDigitsYear = getLastTwoDigitsYear(year);
  const century = getCentury(year);
  const centuryIndex = getIndexCentury(century);

  return Math.floor((centuryIndex + lastTwoDigitsYear + lastTwoDigitsYear / 4) % 7);
};

const getIndexMonth = (month: monthT, year: number): number => {
  const monthIndexList = [
    //isLeapYear(year) ? 0 : 1 - Number(isLeapYear(year)), // January
    //isLeapYear(year) ? 3 : 4 - Number(isLeapYear(year)), // February
    1 - Number(isLeapYear(year)), // January
    4 - Number(isLeapYear(year)), // February
    4, // March
    0, // April
    2, // May
    5, // June
    0, // July
    3, // August
    6, // September
    1, // October
    4, // November
    6 // December
  ];

  return monthIndexList[month - 1];
};

// console.log("январь 2023", getIndexMonth(1, 2023));
// console.log("февраль 2023", getIndexMonth(2, 2023));
// console.log("март 2023", getIndexMonth(3, 2023));
// console.log("апрель 2023", getIndexMonth(4, 2023));
// console.log("май 2023", getIndexMonth(5, 2023));
// console.log("июнь 2023", getIndexMonth(6, 2023));
// console.log("июль 2023", getIndexMonth(7, 2023));
// console.log("август 2023", getIndexMonth(8, 2023));
// console.log("сентябрь 2023", getIndexMonth(9, 2023));
// console.log("октябрь 2023", getIndexMonth(10, 2023));
// console.log("ноябрь 2023", getIndexMonth(11, 2023));
// console.log("декабрь 2023", getIndexMonth(12, 2023));
// console.log(getIndexMonth(1, 2020));
// console.log(getIndexMonth(2, 2020));

// console.log("_______________________");

const getDayWeek = (day: number, month: monthT, year: number): number => {
  return (day + getIndexMonth(month, year) + getIndexYear(year)) % 7;
  /!*
  0: Saturday
  1: Sunday
  2: Monday
  3: Tuesday
  4: Wednesday
  5: Thursday
  6: Friday
  *!/
};

console.log(getDayWeek(1, 3, 1584));

console.log('_______________________');

console.log('111 февраль 2400', getCountDaysMonth(2, 2400));
console.log('январь 2023', getCountDaysMonth(1, 2023));
console.log('февраль 2023', getCountDaysMonth(2, 2023));
console.log('март 2023', getCountDaysMonth(3, 2023));
console.log('апрель 2023', getCountDaysMonth(4, 2023));
console.log('май 2023', getCountDaysMonth(5, 2023));
console.log('июнь 2023', getCountDaysMonth(6, 2023));
console.log('июль 2023', getCountDaysMonth(7, 2023));
console.log('август 2023', getCountDaysMonth(8, 2023));
console.log('сентябрь 2023', getCountDaysMonth(9, 2023));
console.log('октябрь 2023', getCountDaysMonth(10, 2023));
console.log('ноябрь 2023', getCountDaysMonth(11, 2023));
console.log('декабрь 2023', getCountDaysMonth(12, 2023));

//console.log('LOL 1', getCountDaysMonth(2024, 2023));
*/
