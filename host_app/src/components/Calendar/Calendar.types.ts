export type DaysWeekT = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type MonthT = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface DayWeekProps {
  name: string;
  short: string;
  isWeekend?: boolean;
}

export interface MonthsListProps {
  name: string;
  short: string;
}

export interface DayProps {
  day: number;
  month: MonthT;
  year: number;
}

export interface DayComponentProps {
  day: number;
  month: MonthsListProps & {month: MonthT};
  year: number;
  dayWeek: DayWeekProps & {dayWeek: number};
  isToday?: boolean;
  isDayPrevMonth?: boolean;
  isDayNextMonth?: boolean;
  isDayCurrentMonth?: boolean;
}

export interface DetailedDateProps {
  day: number;
  month: MonthsListProps & {month: MonthT};
  year: number;
  dayWeek: DayWeekProps & {dayWeek: number};
}

export interface localizationProps {
  dayWeekFirst?: DaysWeekT;
  dayWeekList?: Array<DayWeekProps>;
}

export type SingleDayProps = DayProps | null | undefined;

export interface ComponentProps {
  value?: SingleDayProps;
  localization?: localizationProps;
}
