export type SportType = 'f1' | 'motogp';

export interface MotorsportEvent {
  id: string;
  title: string;
  location: string;
  sport: SportType;
  startDate: Date;
  endDate: Date;
  circuit?: string;
}

export type CalendarView = 'month' | 'week';
