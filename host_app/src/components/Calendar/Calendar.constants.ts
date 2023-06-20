import {MonthsListProps, DayWeekProps, DayProps, MonthT} from './Calendar.types';

export const todayNative: Date = new Date();

export const today: DayProps = {
  day: todayNative.getDate(),
  month: (todayNative.getMonth() + 1) as MonthT,
  year: todayNative.getFullYear()
};

export const monthsList: Array<MonthsListProps> = [
  {
    name: 'January',
    short: 'Jan'
  },
  {
    name: 'February',
    short: 'Feb'
  },
  {
    name: 'March',
    short: 'Mar'
  },
  {
    name: 'April',
    short: 'Apr'
  },
  {
    name: 'May',
    short: 'May'
  },
  {
    name: 'June',
    short: 'Jun'
  },
  {
    name: 'July',
    short: 'Jul'
  },
  {
    name: 'August',
    short: 'Aug'
  },
  {
    name: 'September',
    short: 'Sep'
  },
  {
    name: 'October',
    short: 'Oct'
  },
  {
    name: 'November',
    short: 'Nov'
  },
  {
    name: 'December',
    short: 'Dec'
  }
];

export const mondayFirst: Array<DayWeekProps> = [
  {
    name: 'Monday',
    short: 'Mon'
  },
  {
    name: 'Tuesday',
    short: 'Tue'
  },
  {
    name: 'Wednesday',
    short: 'Wed'
  },
  {
    name: 'Thursday',
    short: 'Thu'
  },
  {
    name: 'Friday',
    short: 'Fri'
  },
  {
    name: 'Saturday',
    short: 'Sat',
    isWeekend: true
  },
  {
    name: 'Sunday',
    short: 'Sun',
    isWeekend: true
  }
]; // 5

/*export const tuesdayFirst = (() => {
  const defaultWeek = [...mondayFirst];
  const cutDays = defaultWeek.splice(0, 1);
  defaultWeek.splice(defaultWeek.length, 0, ...cutDays);
  return defaultWeek;
})();

export const wednesdayFirst = (() => {
  const defaultWeek = [...mondayFirst];
  const cutDays = defaultWeek.splice(0, 2);
  defaultWeek.splice(defaultWeek.length, 0, ...cutDays);
  return defaultWeek;
})();*/

/*const tuesdayFS = [
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday"
]; // 4

const wednesdayFS = [
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday"
]; // 3

const thursdayFS = [
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday"
]; // 2

const fridayFS = [
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday"
]; // 1

const saturdayFS = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
]; // 0

const sundayFS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]; // 6*/
