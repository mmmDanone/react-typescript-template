import {FC, useState} from 'react';
import {Calendar, SingleDayProps} from '@/components/Calendar';

export const CalendarSingle: FC = () => {
  const [date] = useState<SingleDayProps>();

  return (
    <div>
      <Calendar value={date} />
    </div>
  );
};
