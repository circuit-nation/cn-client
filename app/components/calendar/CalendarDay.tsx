import type { MotorsportEvent } from '~/types/calendar';
import { isToday, isCurrentMonth, getEventsForDay } from '~/lib/calendar-utils';
import { EventBadge } from './EventBadge';
import { cn } from '~/lib/utils';

interface CalendarDayProps {
    date: Date;
    currentDate: Date;
    events: MotorsportEvent[];
    compact?: boolean;
}

export const CalendarDay = ({ date, currentDate, events, compact = false }: CalendarDayProps) => {
    const dayEvents = getEventsForDay(date, events);
    const isCurrentDay = isToday(date);
    const isInCurrentMonth = isCurrentMonth(date, currentDate);

    return (
        <div
            className={cn(
                'min-h-20 p-1 border-r border-b border-calendar-grid transition-colors',
                'hover:bg-calendar-hover',
                !isInCurrentMonth && 'bg-muted/30',
                compact && 'min-h-15'
            )}
        >
            <div className="flex justify-between items-start mb-1">
                <span
                    className={cn(
                        'inline-flex items-center justify-center text-sm font-medium',
                        'w-7 h-7 rounded-full transition-colors',
                        isCurrentDay && 'bg-calendar-today text-calendar-today-foreground',
                        !isCurrentDay && isInCurrentMonth && 'text-foreground',
                        !isCurrentDay && !isInCurrentMonth && 'text-muted-foreground'
                    )}
                >
                    {date.getDate()}
                </span>
            </div>

            <div className={cn(
                'space-y-0.5 overflow-hidden',
                compact ? 'max-h-8' : 'max-h-13'
            )}>
                {dayEvents.slice(0, compact ? 1 : 2).map((event) => (
                    <EventBadge
                        key={event.id}
                        event={event}
                        date={date}
                        compact={compact}
                    />
                ))}
                {dayEvents.length > (compact ? 1 : 2) && (
                    <span className="text-[10px] text-muted-foreground px-1">
                        +{dayEvents.length - (compact ? 1 : 2)} more
                    </span>
                )}
            </div>
        </div>
    );
};
