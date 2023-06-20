import {MonthT, DaysWeekT, DayComponentProps, localizationProps} from './Calendar.types';
import {monthsList, mondayFirst} from './Calendar.constants';

export const arrayToChunk = <A extends Array<any>>(arr: A, size: number): Array<A> => {
  const result: Array<A> = [];

  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    result.push(arr.slice(i * size, i * size + size) as A);
  }

  return result;
};

export const getNameMonth = (month: MonthT): string => {
  return monthsList[month - 1].name;
};

export const isLeapYear = (year: number): boolean => {
  if (!(year % 400)) return true;
  if (!(year % 100)) return false;
  return !(year % 4);
};

export const getCountDaysMonth = (month: MonthT, year: number): number => {
  return (
    28 +
    Number(month == 2 && isLeapYear(year)) +
    ((month + Math.floor(month / 8)) % 2) +
    (2 % month) +
    2 * Math.floor(1 / month)
  );
};

export const getCentury = (year: number): number => {
  return Math.floor(year / 100) + 1;
};

export const getCenturyIndex = (century: number): number => {
  const centuryIndexList = [6, 4, 2, 0];

  return centuryIndexList[(century - 1) % 4];
};

export const getLastTwoDigitsYear = (year: number): number => {
  return Number(String(year).split('').slice(-2).join(''));
};

export const getIndexYear = (year: number): number => {
  const lastTwoDigitsYear = getLastTwoDigitsYear(year);
  const century = getCentury(year);
  const centuryIndex = getCenturyIndex(century);

  return Math.floor((centuryIndex + lastTwoDigitsYear + lastTwoDigitsYear / 4) % 7);
};

export const getIndexMonth = (month: MonthT, year: number): number => {
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

export const getDayWeek = (day: number, month: MonthT, year: number, shift = 5): number => {
  return (day + getIndexMonth(month, year) + getIndexYear(year) + shift) % 7;
  /* default, without shift
  0: Saturday
  1: Sunday
  2: Monday
  3: Tuesday
  4: Wednesday
  5: Thursday
  6: Friday
  */
};

export const getShiftFirstDayWeek = (dayWeek: DaysWeekT) => {
  switch (dayWeek) {
    case 'monday':
      return 5;
    case 'tuesday':
      return 4;
    case 'wednesday':
      return 3;
    case 'thursday':
      return 2;
    case 'friday':
      return 1;
    case 'saturday':
      return 0;
    case 'sunday':
      return 6;
  }
};

export const minusOneMonth = (month: MonthT, year: number): [MonthT, number] => {
  if (month == 1) return [12, year - 1];
  return [(month - 1) as MonthT, year];
};

export const plusOneMonth = (month: MonthT, year: number): [MonthT, number] => {
  if (month == 12) return [1, year + 1];
  return [(month + 1) as MonthT, year];
};

export const getDayListMonth = (
  start: number,
  end: number,
  dayList: Array<DayComponentProps>,
  month: MonthT,
  year: number,
  shiftFirstDayWeek: number,
  {
    weekList = mondayFirst,
    monthList = monthsList,
    isDayPrevMonth = false,
    isDayNextMonth = false,
    isDayCurrentMonth = false
  }
) => {
  for (let i = start; i <= end; i++) {
    const dayWeek = getDayWeek(i, month, year, shiftFirstDayWeek);

    dayList.push({
      day: i,
      month: {month: month, ...monthList[month - 1]},
      year: year,
      dayWeek: {dayWeek: dayWeek + 1, ...weekList[dayWeek]},
      ...(isDayPrevMonth && {isDayPrevMonth: isDayPrevMonth}),
      ...(isDayNextMonth && {isDayNextMonth: isDayNextMonth}),
      ...(isDayCurrentMonth && {isDayCurrentMonth: isDayCurrentMonth})
    });
  }
};

export const getCurrentMonthData = (month: MonthT, year: number, localization: Required<localizationProps>) => {
  const shiftFirstDayWeek = getShiftFirstDayWeek(localization.dayWeekFirst);

  const dayWeekFirst = getDayWeek(1, month, year, shiftFirstDayWeek);
  const countDay = getCountDaysMonth(month, year);
  const dayList: Array<DayComponentProps> = [];

  if (dayWeekFirst) {
    const [prevMonth, prevYear] = minusOneMonth(month, year);
    const prevCountDay = getCountDaysMonth(prevMonth, prevYear);
    getDayListMonth(prevCountDay - dayWeekFirst + 1, prevCountDay, dayList, prevMonth, prevYear, shiftFirstDayWeek, {
      weekList: localization.dayWeekList,
      isDayPrevMonth: true
    });
  }

  getDayListMonth(1, countDay, dayList, month, year, shiftFirstDayWeek, {
    weekList: localization.dayWeekList,
    isDayCurrentMonth: true
  });

  if (42 - dayList.length) {
    const [nextMonth, nextYear] = plusOneMonth(month, year);
    getDayListMonth(1, 42 - dayList.length, dayList, nextMonth, nextYear, shiftFirstDayWeek, {
      weekList: localization.dayWeekList,
      isDayNextMonth: true
    });
  }

  return arrayToChunk(dayList, 7);
};
