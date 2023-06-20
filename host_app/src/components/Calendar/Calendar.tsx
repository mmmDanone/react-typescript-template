import {FC, useState, ChangeEvent} from 'react';
import cn from 'classnames';
import style from './Calendar.module.scss';
import {ComponentProps, MonthT} from './Calendar.types';
import {mondayFirst, today} from './Calendar.constants';
import {getNameMonth, getCurrentMonthData, minusOneMonth, plusOneMonth} from './Calendar.functions';
import {Day} from './Day';

export const Calendar: FC<ComponentProps> = ({localization}) => {
  const [currentMonth, setCurrentMonth] = useState<MonthT>(today.month);
  const [currentYear, setCurrentYear] = useState<number>(today.year);

  const dayWeekList = localization?.dayWeekList || mondayFirst;

  const setPrevMonth = () => {
    if (currentMonth == 1 && currentYear == 0) return;
    const [prevMonth, prevYear] = minusOneMonth(currentMonth, currentYear);

    setCurrentMonth(prevMonth);
    if (prevYear != currentMonth) setCurrentYear(prevYear);
  };

  const setNextMonth = () => {
    if (currentMonth == 12 && currentYear == 9999) return;
    const [nextMonth, nextYear] = plusOneMonth(currentMonth, currentYear);

    setCurrentMonth(nextMonth);
    if (nextYear != currentMonth) setCurrentYear(nextYear);
  };

  const setPrevYear = () => {
    if (currentYear == 0) return;

    setCurrentYear(currentYear - 1);
  };

  const setNextYear = () => {
    if (currentYear == 9999) return;

    setCurrentYear(currentYear + 1);
  };

  const setYear = (event: ChangeEvent<HTMLInputElement>) => {
    const inputYear = Number(event.currentTarget.value);

    if (isNaN(inputYear) || inputYear < 0 || inputYear > 9999) {
      event.currentTarget.value = currentYear.toString();
      return;
    }

    setCurrentYear(inputYear);
  };

  const currentMonthData = getCurrentMonthData(currentMonth, currentYear, {
    dayWeekFirst: localization?.dayWeekFirst || 'monday',
    dayWeekList: localization?.dayWeekList || mondayFirst
  });

  return (
    <div className={style.calendar}>
      <div className={style.controlPanel}>
        <div>
          <button onClick={setPrevYear}>prev year</button>
        </div>
        <div>
          <button onClick={setPrevMonth}>prev month</button>
        </div>
        <div className={style.currentMonth}>
          {getNameMonth(currentMonth)} {currentYear}
          <input onChange={setYear} type="text" value={currentYear} />
        </div>
        <div>
          <button onClick={setNextMonth}>next month</button>
        </div>
        <div>
          <button onClick={setNextYear}>next year</button>
        </div>
      </div>
      <table className={style.tTest}>
        <thead>
          <tr>
            {dayWeekList.map(({name: day, isWeekend}) => (
              <th key={day} className={cn(isWeekend && style.dayWeekend)}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentMonthData.map((week, index) => {
            return (
              <tr key={index}>
                {week.map((day) => {
                  return <Day key={`${day.day}-${day.month.month}-${day.year}`} {...day} />;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
