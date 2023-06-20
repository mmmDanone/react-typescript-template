import {FC, useState} from 'react';
import {Calendar, DaysWeekT, DayWeekProps} from '@/components/Calendar';

export const CalendarW: FC = () => {
  const [loc, setLoc] = useState<
    | {
        dayWeekFirst?: DaysWeekT;
        dayWeekList?: Array<DayWeekProps>;
      }
    | undefined
  >(undefined);

  const setMondayFirstDayWeek = () => {
    setLoc(undefined);
  };

  const setSundayFirstDayWeek = () => {
    setLoc({
      dayWeekFirst: 'sunday',
      dayWeekList: [
        {
          name: 'Sunday',
          short: 'Sun',
          isWeekend: true
        },
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
        }
      ]
    });
  };

  const setSaturdayFirstDayWeek = () => {
    setLoc({
      dayWeekFirst: 'saturday',
      dayWeekList: [
        {
          name: 'Saturday',
          short: 'Sat',
          isWeekend: true
        },
        {
          name: 'Sunday',
          short: 'Sun'
        },
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
        }
      ]
    });
  };

  const setFridayFirstDayWeek = () => {
    setLoc({
      dayWeekFirst: 'friday',
      dayWeekList: [
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
          short: 'Sun'
        },
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
        }
      ]
    });
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '15px',
          margin: '10px'
        }}
      >
        <button onClick={setMondayFirstDayWeek}>Monday first day week</button>
        <button onClick={setSundayFirstDayWeek}>Sunday first day week</button>
        <button onClick={setSaturdayFirstDayWeek}>Saturday first day week</button>
        <button onClick={setFridayFirstDayWeek}>Friday first day week</button>
      </div>
      <Calendar localization={loc} />
    </div>
  );
};
