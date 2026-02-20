import type { CalendarEvent } from "~/types/calendar";

const MINUTES_IN_DAY = 24 * 60;

export const startOfDay = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const getDaysInMonth = (date: Date): Date[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: Date[] = [];

  const startDayOfWeek = (firstDay.getDay() + 6) % 7;
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    days.push(new Date(year, month, -i));
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    days.push(new Date(year, month, day));
  }

  const remainingDays = 42 - days.length;
  for (let day = 1; day <= remainingDays; day++) {
    days.push(new Date(year, month + 1, day));
  }

  return days;
};

export const getWeekDays = (date: Date): Date[] => {
  const start = new Date(date);
  const day = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - day);

  const days: Date[] = [];
  for (let i = 0; i < 7; i++) {
    days.push(
      new Date(start.getFullYear(), start.getMonth(), start.getDate() + i),
    );
  }

  return days;
};

export const isSameDay = (date1: Date, date2: Date): boolean =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const isWithinRange = (date: Date, start: Date, end: Date): boolean => {
  const d = startOfDay(date).getTime();
  const s = startOfDay(start).getTime();
  const e = startOfDay(end).getTime();
  return d >= s && d <= e;
};

export const getEventsForDay = (
  date: Date,
  events: CalendarEvent[],
): CalendarEvent[] =>
  events.filter((event) => isWithinRange(date, event.startAt, event.endAt));

export const formatMonthYear = (date: Date): string =>
  date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

export const formatWeekRange = (date: Date): string => {
  const weekDays = getWeekDays(date);
  const start = weekDays[0];
  const end = weekDays[6];
  const startLabel = start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const endLabel = end.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return `${startLabel} - ${endLabel}`;
};

export const isToday = (date: Date): boolean => isSameDay(date, new Date());

export const isCurrentMonth = (date: Date, currentDate: Date): boolean =>
  date.getMonth() === currentDate.getMonth() &&
  date.getFullYear() === currentDate.getFullYear();

export const getDayOfWeek = (date: Date): number => (date.getDay() + 6) % 7;

export const getEventsStartingOnDay = (
  date: Date,
  events: CalendarEvent[],
): CalendarEvent[] => events.filter((event) => isSameDay(date, event.startAt));

export const getMinutesSinceStartOfDay = (date: Date): number =>
  date.getHours() * 60 + date.getMinutes();

export const formatTime = (date: Date): string =>
  date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

export const formatTimeRange = (start: Date, end: Date): string =>
  `${formatTime(start)} - ${formatTime(end)}`;

export const clampMinutesToDay = (minutes: number): number =>
  Math.min(Math.max(minutes, 0), MINUTES_IN_DAY);
