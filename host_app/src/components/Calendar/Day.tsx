import {FC} from 'react';
import {DayComponentProps} from './Calendar.types';
import cn from 'classnames';
import style from './Calendar.module.scss';

export const Day: FC<DayComponentProps> = ({
  day,
  month,
  year,
  dayWeek,
  isDayCurrentMonth,
  isDayPrevMonth,
  isDayNextMonth
}) => {
  return (
    <td key={`${day}-${month.month}-${year}`}>
      <div
        className={cn(
          style.day,
          isDayCurrentMonth && style.dayCurrentMonth,
          (isDayPrevMonth || isDayNextMonth) && style.dayNotCurrentMonth,
          (!isDayPrevMonth || !isDayNextMonth) && dayWeek.isWeekend && style.dayWeekend,
          (isDayPrevMonth || isDayNextMonth) && dayWeek.isWeekend && style.dayWeekendNotCurrentMonth
        )}
      >
        {day}
      </div>
    </td>
  );
};
