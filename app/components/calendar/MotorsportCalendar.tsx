import { useState, useCallback, useMemo } from 'react';
import type { CalendarView, SportType } from '~/types/calendar';
import { motorsportEvents } from '~/data/events';
import { CalendarHeader } from './CalendarHeader';
import { ViewSwitcher } from './ViewSwitcher';
import { MonthView } from './MonthView';
import { WeekView } from './WeekView';
import { ThreeDayView } from './ThreeDayView';
import { cn } from '~/lib/utils';
import { Checkbox } from '~/components/ui/checkbox';

interface MotorsportCalendarProps {
    className?: string;
}

export const MotorsportCalendar = ({ className }: MotorsportCalendarProps) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState<CalendarView>('month');
    const [filters, setFilters] = useState<Record<SportType, boolean>>({
        f1: true,
        motogp: true,
    });

    const filteredEvents = useMemo(() => {
        return motorsportEvents.filter(event => filters[event.sport]);
    }, [filters]);

    const toggleFilter = (sport: SportType) => {
        setFilters(prev => ({ ...prev, [sport]: !prev[sport] }));
    };

    const navigateDate = useCallback((direction: 'prev' | 'next') => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);

            switch (view) {
                case 'month':
                    newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
                    break;
                case 'week':
                    newDate.setDate(prev.getDate() + (direction === 'next' ? 7 : -7));
                    break;
                case '3day':
                    newDate.setDate(prev.getDate() + (direction === 'next' ? 3 : -3));
                    break;
            }

            return newDate;
        });
    }, [view]);

    const goToToday = useCallback(() => {
        setCurrentDate(new Date());
    }, []);

    return (
        <div className={cn('bg-card rounded-xl shadow-sm border border-border overflow-hidden', className)}>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border-b border-border bg-card">
                <CalendarHeader
                    currentDate={currentDate}
                    onPrevious={() => navigateDate('prev')}
                    onNext={() => navigateDate('next')}
                    onToday={goToToday}
                />
                <ViewSwitcher currentView={view} onViewChange={setView} />
            </div>

            {/* Legend & Filters */}
            <div className="flex flex-wrap items-center gap-4 px-4 py-2 bg-secondary/30 border-b border-border">
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="filter-f1"
                        checked={filters.f1}
                        onCheckedChange={() => toggleFilter('f1')}
                        className="border-f1 data-[state=checked]:bg-f1 data-[state=checked]:border-f1"
                    />
                    <label htmlFor="filter-f1" className="flex items-center gap-2 cursor-pointer">
                        <span className="w-3 h-3 rounded-sm bg-f1" />
                        <span className="text-xs font-medium text-muted-foreground">Formula 1</span>
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="filter-motogp"
                        checked={filters.motogp}
                        onCheckedChange={() => toggleFilter('motogp')}
                        className="border-motogp data-[state=checked]:bg-motogp data-[state=checked]:border-motogp"
                    />
                    <label htmlFor="filter-motogp" className="flex items-center gap-2 cursor-pointer">
                        <span className="w-3 h-3 rounded-sm bg-motogp" />
                        <span className="text-xs font-medium text-muted-foreground">MotoGP</span>
                    </label>
                </div>
            </div>

            {/* Calendar View */}
            <div className="overflow-x-auto">
                {view === 'month' && (
                    <MonthView currentDate={currentDate} events={filteredEvents} />
                )}
                {view === 'week' && (
                    <WeekView currentDate={currentDate} events={filteredEvents} />
                )}
                {view === '3day' && (
                    <ThreeDayView currentDate={currentDate} events={filteredEvents} />
                )}
            </div>
        </div>
    );
};
