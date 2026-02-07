import type { MotorsportEvent } from '~/types/calendar';
import { getEventPosition, getEventDuration } from '~/lib/calendar-utils';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Flag, MapPin, Calendar } from 'lucide-react';
import { cn } from '~/lib/utils';

interface EventBadgeProps {
    event: MotorsportEvent;
    date: Date;
    dayOfWeek: number;
    compact?: boolean;
}

export const EventBadge = ({ event, date, dayOfWeek, compact = false }: EventBadgeProps) => {
    const position = getEventPosition(date, event);
    const duration = getEventDuration(event);
    
    // Calculate how many cells this event can span (limited by week boundary)
    const cellsUntilWeekEnd = 7 - dayOfWeek;
    const cellsToSpan = Math.min(duration, cellsUntilWeekEnd);
    
    // Calculate width: each cell is 100% + borders and gaps
    // Using calc to account for borders between cells
    const spanWidth = cellsToSpan === 1 ? '100%' : `calc(${cellsToSpan * 100}% + ${(cellsToSpan - 1) * 2}px)`;

    const sportStyles = {
        f1: 'bg-cn-red text-foreground border-cn-red-dark',
        motogp: 'bg-cn-blue text-foreground border-cn-blue-dark',
    };

    // Determine if event spans beyond this cell
    const spansMultipleCells = cellsToSpan > 1;

    const formatDateRange = (start: Date, end: Date) => {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
        return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button
                    style={{
                        width: spanWidth,
                        position: spansMultipleCells ? 'absolute' : 'relative',
                        zIndex: 10,
                    }}
                    className={cn(
                        'text-left transition-all duration-150 border-2 rounded-sm',
                        'hover:brightness-110 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-1',
                        'shadow-lg',
                        sportStyles[event.sport],
                        compact ? 'text-xs px-2 py-1 font-semibold' : 'text-sm px-4 py-2.5 font-bold min-h-12 flex items-center',
                        spansMultipleCells && 'justify-center'
                    )}
                >
                    <span className="flex items-center gap-2 w-full">
                        <span className={cn(
                            "inline-block w-2 h-2 rounded-full bg-foreground flex-shrink-0",
                            compact && "w-1.5 h-1.5"
                        )} />
                        <span className={cn(
                            "font-bold uppercase tracking-wide",
                            spansMultipleCells ? "text-center flex-1" : "truncate"
                        )}>
                            {event.title}
                        </span>
                    </span>
                </button>
            </PopoverTrigger>
            <PopoverContent
                className="w-72 p-0 overflow-hidden animate-scale-in border-2"
                align="start"
                sideOffset={5}
            >
                <div className={cn(
                    'px-4 py-3',
                    event.sport === 'f1' ? 'bg-cn-red' : 'bg-cn-blue'
                )}>
                    <div className="flex items-center gap-2">
                        <span className={cn(
                            'px-2 py-0.5 rounded-sm text-xs font-bold uppercase tracking-wide bg-slate-950/40 text-foreground'
                        )}>
                            {event.sport === 'f1' ? 'Formula 1' : 'MotoGP'}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold mt-2 text-foreground">
                        {event.title}
                    </h3>
                </div>
                <div className="p-4 space-y-3 bg-popover">
                    <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                        <div>
                            <p className="font-medium text-foreground">{event.location}</p>
                            {event.circuit && (
                                <p className="text-muted-foreground text-xs">{event.circuit}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
                        <p className="text-foreground">
                            {formatDateRange(event.startDate, event.endDate)}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Flag className="w-4 h-4 text-muted-foreground shrink-0" />
                        <p className="text-muted-foreground">Race Weekend</p>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};
