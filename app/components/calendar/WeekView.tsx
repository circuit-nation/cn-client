import type { MotorsportEvent } from '~/types/calendar';
import { getWeekDays, isToday, getEventsForDay, formatDate } from '~/lib/calendar-utils';
import { EventBadge } from './EventBadge';
import { cn } from '~/lib/utils';

interface WeekViewProps {
    currentDate: Date;
    events: MotorsportEvent[];
}

export const WeekView = ({ currentDate, events }: WeekViewProps) => {
    const days = getWeekDays(currentDate);

    return (
        <div className="animate-fade-in">
            <div className="grid grid-cols-7 border-l border-t border-calendar-grid">
                {days.map((date, index) => {
                    const dayEvents = getEventsForDay(date, events);
                    const isCurrentDay = isToday(date);

                    return (
                        <div
                            key={index}
                            className="border-r border-b border-calendar-grid"
                        >
                            {/* Day header */}
                            <div className={cn(
                                'p-3 text-center border-b border-calendar-grid',
                                isCurrentDay && 'bg-primary/5'
                            )}>
                                <p className="text-xs font-medium text-muted-foreground uppercase">
                                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                </p>
                                <p className={cn(
                                    'text-2xl font-semibold mt-1',
                                    isCurrentDay ? 'text-primary' : 'text-foreground'
                                )}>
                                    {date.getDate()}
                                </p>
                            </div>

                            {/* Events */}
                            <div className="min-h-50 p-2 space-y-1 bg-card">
                                {dayEvents.map((event) => (
                                    <EventBadge
                                        key={event.id}
                                        event={event}
                                        date={date}
                                    />
                                ))}
                                {dayEvents.length === 0 && (
                                    <p className="text-xs text-muted-foreground text-center py-4">
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
