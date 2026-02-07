import type { MotorsportEvent } from '~/types/calendar';
import { isToday, isCurrentMonth, getEventsStartingOnDay, getDayOfWeek } from '~/lib/calendar-utils';
import { EventBadge } from './EventBadge';
import { cn } from '~/lib/utils';

interface CalendarDayProps {
    date: Date;
    currentDate: Date;
    events: MotorsportEvent[];
    compact?: boolean;
}

export const CalendarDay = ({ date, currentDate, events, compact = false }: CalendarDayProps) => {
    // Only render events that START on this day (for merged display)
    const dayEvents = getEventsStartingOnDay(date, events);
    const isCurrentDay = isToday(date);
    const isInCurrentMonth = isCurrentMonth(date, currentDate);
    const dayOfWeek = getDayOfWeek(date);

    return (
        <div
            className={cn(
                'relative min-h-32 p-2 border-r-2 border-b-2 border-slate-opacity transition-colors bg-slate-950',
                'hover:bg-slate-900',
                !isInCurrentMonth && 'bg-slate-950/50 opacity-70',
                compact && 'min-h-24'
            )}
        >
            <div className="flex justify-start items-start mb-2">
                <span
                    className={cn(
                        'inline-flex items-center justify-center text-base font-bold',
                        'w-8 h-8 transition-colors',
                        isCurrentDay && 'bg-cn-red text-foreground rounded-sm',
                        !isCurrentDay && isInCurrentMonth && 'text-foreground',
                        !isCurrentDay && !isInCurrentMonth && 'text-slate-500'
                    )}
                >
                    {date.getDate()}
                </span>
            </div>

            <div className={cn(
                'space-y-1 overflow-visible relative',
                compact ? 'max-h-12' : 'max-h-24'
            )}>
                {dayEvents.map((event) => (
                    <EventBadge
                        key={event.id}
                        event={event}
                        date={date}
                        dayOfWeek={dayOfWeek}
                        compact={compact}
                    />
                ))}
            </div>
        </div>
    );
};
