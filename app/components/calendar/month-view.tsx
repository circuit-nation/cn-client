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
const LANE_HEIGHT = 26;

type WeekSegment = {
    event: CalendarEvent;
    startIndex: number;
    endIndex: number;
    lane: number;
};

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

const getWeekSegments = (
    events: CalendarEvent[],
    weekStart: Date,
    weekEnd: Date,
): WeekSegment[] => {
    const normalizedStart = startOfDay(weekStart);
    const normalizedEnd = startOfDay(weekEnd);
    const intersecting = events.filter(
        (event) => event.startAt <= normalizedEnd && event.endAt >= normalizedStart,
    );

    const segments = intersecting.map((event) => {
        const startDate = event.startAt > normalizedStart ? event.startAt : normalizedStart;
        const endDate = event.endAt < normalizedEnd ? event.endAt : normalizedEnd;
        const startIndex = Math.max(0, Math.floor((startOfDay(startDate).getTime() - normalizedStart.getTime()) / (1000 * 60 * 60 * 24)));
        const endIndex = Math.min(6, Math.floor((startOfDay(endDate).getTime() - normalizedStart.getTime()) / (1000 * 60 * 60 * 24)));
        return { event, startIndex, endIndex };
    });

    segments.sort((a, b) => a.startIndex - b.startIndex || a.endIndex - b.endIndex);

    const lanes: number[] = [];
    const positioned: WeekSegment[] = [];

    segments.forEach((segment) => {
        let laneIndex = lanes.findIndex((laneEnd) => segment.startIndex > laneEnd);
        if (laneIndex === -1) {
            laneIndex = lanes.length;
            lanes.push(segment.endIndex);
        } else {
            lanes[laneIndex] = segment.endIndex;
        }
        positioned.push({ ...segment, lane: laneIndex });
    });

    return positioned;
};

export const MonthView = ({ currentDate, events }: MonthViewProps) => {
    const days = getDaysInMonth(currentDate);
    const weeks = trimWeeksToFive(chunkWeeks(days), currentDate);

    return (
        <div className="animate-fade-in space-y-4">
            <div className="grid grid-cols-7 rounded-xl border border-muted/40 bg-muted/20 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {WEEKDAYS.map((day) => (
                    <div key={day} className="px-3 py-2 text-center">
                        {day}
                    </div>
                ))}
            </div>

            {weeks.map((week, index) => {
                const weekSegments = getWeekSegments(events, week[0], week[6]);
                const laneCount = Math.max(1, ...weekSegments.map((segment) => segment.lane + 1));
                const weekHeight = Math.max(BASE_WEEK_HEIGHT, 64 + laneCount * LANE_HEIGHT);

                return (
                    <div
                        key={`${week[0].toISOString()}-${index}`}
                        className="relative overflow-hidden rounded-2xl border border-muted/40 bg-background/80 shadow-sm"
                        style={{ minHeight: weekHeight }}
                    >
                        <div className="grid h-full grid-cols-7">
                            {week.map((date) => (
                                <CalendarDay
                                    key={date.toISOString()}
                                    date={date}
                                    currentDate={currentDate}
                                    className="h-full"
                                />
                            ))}
                        </div>

                        <div
                            className="pointer-events-none absolute inset-x-2 bottom-3 top-12 grid grid-cols-7 gap-x-2"
                            style={{ gridAutoRows: `${LANE_HEIGHT}px` }}
                        >
                            {weekSegments.map((segment) => (
                                <div
                                    key={`${segment.event.id}-${segment.startIndex}-${segment.endIndex}`}
                                    className="pointer-events-auto"
                                    style={{
                                        gridColumn: `${segment.startIndex + 1} / ${segment.endIndex + 2}`,
                                        gridRow: segment.lane + 1,
                                    }}
                                >
                                    <EventBadge
                                        event={segment.event}
                                        compact
                                        variant="month"
                                        className={isSameDay(segment.event.startAt, segment.event.endAt) ? "" : "rounded-sm"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
