import type { MotorsportEvent } from '~/types/calendar';
import { getThreeDays, isToday, getEventsForDay } from '~/lib/calendar-utils';
import { EventBadge } from './EventBadge';
import { cn } from '~/lib/utils';

interface ThreeDayViewProps {
    currentDate: Date;
    events: MotorsportEvent[];
}

export const ThreeDayView = ({ currentDate, events }: ThreeDayViewProps) => {
    const days = getThreeDays(currentDate);

    return (
        <div className="animate-fade-in">
            <div className="grid grid-cols-3 border-l border-t border-calendar-grid">
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
                                'p-4 text-center border-b border-calendar-grid',
                                isCurrentDay && 'bg-primary/5'
                            )}>
                                <p className="text-sm font-medium text-muted-foreground">
                                    {date.toLocaleDateString('en-US', { weekday: 'long' })}
                                </p>
                                <p className={cn(
                                    'text-3xl font-bold mt-1',
                                    isCurrentDay ? 'text-primary' : 'text-foreground'
                                )}>
                                    {date.getDate()}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {date.toLocaleDateString('en-US', { month: 'short' })}
                                </p>
                            </div>

                            {/* Events */}
                            <div className="min-h-70 p-3 space-y-2 bg-card">
                                {dayEvents.map((event) => (
                                    <EventBadge
                                        key={event.id}
                                        event={event}
                                        date={date}
                                    />
                                ))}
                                {dayEvents.length === 0 && (
                                    <div className="flex items-center justify-center h-full min-h-50">
                                        <p className="text-sm text-muted-foreground">
                                            No events scheduled
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
