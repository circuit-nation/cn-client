import { useEffect, useMemo, useState } from "react";
import type { CalendarView, CalendarEvent } from "~/types/calendar";
import type { EventParsed } from "~/schema";
import { CalendarHeader } from "./calendar-header";
import { ViewSwitcher } from "./view-switcher";
import { MonthView } from "./month-view";
import { WeekView } from "./week-view";
import { formatMonthYear, formatWeekRange } from "~/lib/calendar-utils";
import { cn } from "~/lib/utils";
import { Checkbox } from "~/components/ui/checkbox";

interface MotorsportCalendarProps {
    className?: string;
    events: EventParsed[];
}

export const MotorsportCalendar = ({ className, events }: MotorsportCalendarProps) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState<CalendarView>('month');
    const [filters, setFilters] = useState<Record<string, boolean>>({});

    const calendarEvents = useMemo<CalendarEvent[]>(() => {
        const mapped = events
            .filter((event) => Boolean(event.sportData))
            .map((event) => ({
                id: event._id,
                title: event.title,
                type: event.type,
                sportType: event.sportData?.type ?? "formula",
                sportName: event.sportData?.name ?? "Motorsport",
                sportColor: event.sportData?.color,
                startAt: new Date(event.event_start_at),
                endAt: new Date(event.event_end_at || event.event_start_at),
                circuitName: event.circuitData?.name,
                location: event.circuitData?.location_str,
                locationCode: event.circuitData?.country_code,
                images: event.images,
            }));

        mapped.sort((a, b) => a.startAt.getTime() - b.startAt.getTime());
        return mapped;
    }, [events]);

    const sportOptions = useMemo(() => {
        const options = new Map<
            string,
            { type: string; name: string; color?: string }
        >();
        calendarEvents.forEach((event) => {
            if (!options.has(event.sportType)) {
                options.set(event.sportType, {
                    type: event.sportType,
                    name: event.sportName,
                    color: event.sportColor,
                });
            }
        });
        return Array.from(options.values());
    }, [calendarEvents]);

    useEffect(() => {
        setFilters((prev) => {
            const next = { ...prev };
            sportOptions.forEach((sport) => {
                if (next[sport.type] === undefined) {
                    next[sport.type] = true;
                }
            });
            return next;
        });
    }, [sportOptions]);

    const filteredEvents = useMemo(
        () => calendarEvents.filter((event) => filters[event.sportType] ?? true),
        [calendarEvents, filters],
    );

    const navigateDate = (direction: "prev" | "next") => {
        setCurrentDate((prev) => {
            const newDate = new Date(prev);

            if (view === "month") {
                newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1));
            } else {
                newDate.setDate(prev.getDate() + (direction === "next" ? 7 : -7));
            }

            return newDate;
        });
    };

    const goToToday = () => setCurrentDate(new Date());

    const headerLabel = view === "month"
        ? formatMonthYear(currentDate)
        : formatWeekRange(currentDate);

    return (
        <div
            className={cn(
                "rounded-3xl border border-muted/40 bg-background/80 shadow-xl",
                "backdrop-blur",
                className,
            )}
        >
            <div className="flex flex-col gap-6 border-b border-muted/30 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Motorsports Calendar
                    </p>
                    <CalendarHeader
                        currentDate={currentDate}
                        onPrevious={() => navigateDate("prev")}
                        onNext={() => navigateDate("next")}
                        onToday={goToToday}
                        label={headerLabel}
                    />
                </div>
                <ViewSwitcher currentView={view} onViewChange={setView} />
            </div>

            <div className="flex flex-wrap items-center gap-4 border-b border-muted/30 px-6 py-4">
                {sportOptions.map((sport) => (
                    <div key={sport.type} className="flex items-center gap-2">
                        <Checkbox
                            id={`filter-${sport.type}`}
                            checked={filters[sport.type] ?? true}
                            onCheckedChange={() =>
                                setFilters((prev) => ({
                                    ...prev,
                                    [sport.type]: !prev[sport.type],
                                }))
                            }
                            className="data-[state=checked]:border-foreground/80 data-[state=checked]:bg-foreground/80"
                        />
                        <label
                            htmlFor={`filter-${sport.type}`}
                            className="flex cursor-pointer items-center gap-2 text-xs font-medium text-muted-foreground"
                        >
                            <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ backgroundColor: sport.color || "var(--cn-red)" }}
                            />
                            {sport.name}
                        </label>
                    </div>
                ))}
            </div>

            <div className="overflow-x-auto px-6 py-6">
                {filteredEvents.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-muted/40 p-12 text-center text-muted-foreground">
                        No events match the current filters.
                    </div>
                ) : (
                    <>
                        {view === "month" && (
                            <MonthView currentDate={currentDate} events={filteredEvents} />
                        )}
                        {view === "week" && (
                            <WeekView currentDate={currentDate} events={filteredEvents} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
