import type { MotorsportEvent } from '~/types/calendar';
import { getDaysInMonth } from '~/lib/calendar-utils';
import { CalendarDay } from './CalendarDay';

interface MonthViewProps {
    currentDate: Date;
    events: MotorsportEvent[];
}

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const MonthView = ({ currentDate, events }: MonthViewProps) => {
    const days = getDaysInMonth(currentDate);

    return (
        <div className="animate-fade-in">
            {/* Weekday headers */}
            <div className="grid grid-cols-7 border-l border-t border-calendar-grid bg-secondary/50">
                {WEEKDAYS.map((day) => (
                    <div
                        key={day}
                        className="py-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center border-r border-calendar-grid"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 border-l border-calendar-grid">
                {days.map((date, index) => (
                    <CalendarDay
                        key={index}
                        date={date}
                        currentDate={currentDate}
                        events={events}
                    />
                ))}
            </div>
        </div>
    );
};
