import type { MotorsportEvent } from '~/types/calendar';
import { getWeekDays, isToday, getEventsStartingOnDay, getDayOfWeek } from '~/lib/calendar-utils';
import { EventBadge } from './EventBadge';
import { cn } from '~/lib/utils';

interface WeekViewProps {
    currentDate: Date;
    events: MotorsportEvent[];
}

const WEEKDAYS = ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];

export const WeekView = ({ currentDate, events }: WeekViewProps) => {
    const days = getWeekDays(currentDate);

    return (
        <div className="animate-fade-in">
            {/* Weekday headers */}
            <div className="grid grid-cols-7 border-l-2 border-t-2 border-white/30 bg-black">
                {WEEKDAYS.map((day) => (
                    <div
                        key={day}
                        className="py-4 px-3 text-lg font-bold text-white uppercase tracking-wider text-center border-r-2 border-white/30"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Week grid */}
            <div className="grid grid-cols-7 border-l-2 border-white/30">
                {days.map((date, index) => {
                    const dayEvents = getEventsStartingOnDay(date, events);
                    const isCurrentDay = isToday(date);
                    const dayOfWeek = getDayOfWeek(date);

                    return (
                        <div
                            key={index}
                            className="relative min-h-64 p-2 border-r-2 border-b-2 border-white/30 transition-colors bg-black hover:bg-zinc-900"
                        >
                            {/* Day header */}
                            <div className="flex justify-start items-start mb-3">
                                <span
                                    className={cn(
                                        'inline-flex items-center justify-center text-2xl font-bold',
                                        'w-10 h-10 transition-colors',
                                        isCurrentDay && 'bg-red-600 text-white rounded-sm',
                                        !isCurrentDay && 'text-white'
                                    )}
                                >
                                    {date.getDate()}
                                </span>
                            </div>

                            {/* Events */}
                            <div className="space-y-2 overflow-visible relative">
                                {dayEvents.map((event) => (
                                    <EventBadge
                                        key={event.id}
                                        event={event}
                                        date={date}
                                        dayOfWeek={dayOfWeek}
                                    />
                                ))}
                                {dayEvents.length === 0 && (
                                    <p className="text-xs text-zinc-500 text-center py-4">
                                        No events
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
