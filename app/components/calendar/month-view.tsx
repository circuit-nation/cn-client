import type { CalendarEvent } from "~/types/calendar";
import {
    getDaysInMonth,
    isCurrentMonth,
    isSameDay,
    startOfDay,
} from "~/lib/calendar-utils";
import { CalendarDay } from "./calendar-day";
import { EventBadge } from "./event-badge";

interface MonthViewProps {
    currentDate: Date;
    events: CalendarEvent[];
}

const WEEKDAYS = ["MON", "TUES", "WED", "THUR", "FRI", "SAT", "SUN"];
const BASE_WEEK_HEIGHT = 140;

const chunkWeeks = (days: Date[]): Date[][] => {
    const weeks: Date[][] = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }
    return weeks;
};

const trimWeeksToFive = (weeks: Date[][], currentDate: Date): Date[][] => {
    if (weeks.length <= 5) {
        return weeks;
    }

    const scores = weeks.map((week, index) => {
        const inMonthCount = week.filter((date) => isCurrentMonth(date, currentDate))
            .length;
        return { index, inMonthCount };
    });

    scores.sort((a, b) => a.inMonthCount - b.inMonthCount || a.index - b.index);
    const dropIndex = scores[0].index;
    return weeks.filter((_, index) => index !== dropIndex).slice(0, 5);
};

const getEventsForDay = (date: Date, events: CalendarEvent[]): CalendarEvent[] => {
    const dayStart = startOfDay(date);
    return events.filter((event) => {
        const eventStart = startOfDay(event.startAt);
        const eventEnd = startOfDay(event.endAt);
        return dayStart >= eventStart && dayStart <= eventEnd;
    });
};

export const MonthView = ({ currentDate, events }: MonthViewProps) => {
    const days = getDaysInMonth(currentDate);
    const weeks = trimWeeksToFive(chunkWeeks(days), currentDate);

    return (
        <div className="animate-fade-in space-y-3">
            <div className="grid grid-cols-7 border-b border-muted/40 bg-muted/10 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {WEEKDAYS.map((day) => (
                    <div key={day} className="px-3 py-2 text-center">
                        {day}
                    </div>
                ))}
            </div>

            {weeks.map((week, index) => {
                const weekHeight = BASE_WEEK_HEIGHT;

                return (
                    <div
                        key={`${week[0].toISOString()}-${index}`}
                        className="relative overflow-hidden rounded-xl border border-muted/40 bg-background/80"
                        style={{ minHeight: weekHeight }}
                    >
                        <div className="grid h-full grid-cols-7">
                            {week.map((date) => {
                                const dayEvents = getEventsForDay(date, events);
                                const visibleEvents = dayEvents.slice(0, 3);
                                const remaining = dayEvents.length - visibleEvents.length;

                                return (
                                    <CalendarDay
                                        key={date.toISOString()}
                                        date={date}
                                        currentDate={currentDate}
                                        className="h-full"
                                    >
                                        {visibleEvents.map((event) => (
                                            <EventBadge
                                                key={`${event.id}-${date.toISOString()}`}
                                                event={event}
                                                compact
                                                variant="month"
                                                className={isSameDay(event.startAt, event.endAt)
                                                    ? "h-auto"
                                                    : "h-auto rounded-sm"}
                                            />
                                        ))}
                                        {remaining > 0 && (
                                            <div className="text-[10px] font-medium text-muted-foreground">
                                                +{remaining} more
                                            </div>
                                        )}
                                    </CalendarDay>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
