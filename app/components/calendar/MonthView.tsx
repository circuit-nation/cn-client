import type { MotorsportEvent } from '~/types/calendar';
import { getDaysInMonth } from '~/lib/calendar-utils';
import { CalendarDay } from './CalendarDay';

interface MonthViewProps {
    currentDate: Date;
    events: MotorsportEvent[];
}

const WEEKDAYS = ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];

export const MonthView = ({ currentDate, events }: MonthViewProps) => {
    const days = getDaysInMonth(currentDate);

    return (
        <div className="animate-fade-in">
            {/* Weekday headers */}
            <div className="grid grid-cols-7 border-l-2 border-t-2 border-slate-opacity bg-slate-950">
                {WEEKDAYS.map((day) => (
                    <div
                        key={day}
                        className="py-4 px-3 text-lg font-bold text-foreground uppercase tracking-wider text-center border-r-2 border-slate-opacity"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 border-l-2 border-slate-opacity">
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
