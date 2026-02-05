import type { MotorsportEvent } from "~/types/calendar";

export const getDaysInMonth = (date: Date): Date[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: Date[] = [];

  // Add days from previous month to fill the first week
  // Adjust so Monday is day 0, Sunday is day 6
  const startDayOfWeek = (firstDay.getDay() + 6) % 7;
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    days.push(new Date(year, month, -i));
  }

  // Add all days of current month
  for (let day = 1; day <= lastDay.getDate(); day++) {
    days.push(new Date(year, month, day));
  }

  // Add days from next month to complete the grid
  const remainingDays = 42 - days.length; // 6 rows * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    days.push(new Date(year, month + 1, day));
  }

  return days;
};

export const getWeekDays = (date: Date): Date[] => {
  const startOfWeek = new Date(date);
  // Adjust so Monday is day 0, Sunday is day 6
  const day = (startOfWeek.getDay() + 6) % 7;
  startOfWeek.setDate(startOfWeek.getDate() - day);

  const days: Date[] = [];
  for (let i = 0; i < 7; i++) {
    days.push(
      new Date(
        startOfWeek.getFullYear(),
        startOfWeek.getMonth(),
        startOfWeek.getDate() + i
      )
    );
  }

  return days;
};

export const getThreeDays = (date: Date): Date[] => {
  const days: Date[] = [];
  for (let i = 0; i < 3; i++) {
    days.push(
      new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
    );
  }
  return days;
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const isWithinRange = (date: Date, start: Date, end: Date): boolean => {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return d >= s && d <= e;
};

export const getEventsForDay = (
  date: Date,
  events: MotorsportEvent[]
): MotorsportEvent[] => {
  return events.filter((event) =>
    isWithinRange(date, event.startDate, event.endDate)
  );
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

export const formatMonthYear = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

export const isToday = (date: Date): boolean => {
  return isSameDay(date, new Date());
};

export const isCurrentMonth = (date: Date, currentDate: Date): boolean => {
  return (
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  );
};

export const getEventPosition = (
  date: Date,
  event: MotorsportEvent
): "start" | "middle" | "end" | "single" => {
  const isStart = isSameDay(date, event.startDate);
  const isEnd = isSameDay(date, event.endDate);

  if (isStart && isEnd) return "single";
  if (isStart) return "start";
  if (isEnd) return "end";
  return "middle";
};

export const getEventDuration = (event: MotorsportEvent): number => {
  const start = new Date(event.startDate.getFullYear(), event.startDate.getMonth(), event.startDate.getDate());
  const end = new Date(event.endDate.getFullYear(), event.endDate.getMonth(), event.endDate.getDate());
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1; // +1 to include both start and end dates
};

export const getDayOfWeek = (date: Date): number => {
  // Returns 0 for Monday, 6 for Sunday
  return (date.getDay() + 6) % 7;
};

export const getEventsStartingOnDay = (
  date: Date,
  events: MotorsportEvent[]
): MotorsportEvent[] => {
  return events.filter((event) => isSameDay(date, event.startDate));
};
