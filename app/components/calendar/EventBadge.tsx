import type { MotorsportEvent } from '~/types/calendar';
import { getEventPosition } from '~/lib/calendar-utils';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Flag, MapPin, Calendar } from 'lucide-react';
import { cn } from '~/lib/utils';

interface EventBadgeProps {
    event: MotorsportEvent;
    date: Date;
    compact?: boolean;
}

export const EventBadge = ({ event, date, compact = false }: EventBadgeProps) => {
    const position = getEventPosition(date, event);

    const sportStyles = {
        f1: 'bg-red-800 text-red-200',
        motogp: 'bg-blue-800 text-blue-200',
    };

    const positionStyles = {
        single: 'rounded-md',
        start: 'rounded-l-md rounded-r-none',
        middle: 'rounded-none',
        end: 'rounded-r-md rounded-l-none',
    };

    const formatDateRange = (start: Date, end: Date) => {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
        return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button
                    className={cn(
                        'w-full text-left truncate transition-all duration-150',
                        'hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1',
                        sportStyles[event.sport],
                        positionStyles[position],
                        compact ? 'text-[10px] px-1 py-0.5' : 'text-xs px-2 py-1 font-medium'
                    )}
                >
                    {(position === 'start' || position === 'single') && (
                        <span className="flex items-center gap-1">
                            <span className={cn(
                                "inline-block w-1.5 h-1.5 rounded-full bg-current opacity-75",
                                compact && "hidden"
                            )} />
                            {event.title}
                        </span>
                    )}
                    {(position === 'middle' || position === 'end') && (
                        <span className="opacity-0">{event.title}</span>
                    )}
                </button>
            </PopoverTrigger>
            <PopoverContent
                className="w-72 p-0 overflow-hidden animate-scale-in"
                align="start"
                sideOffset={5}
            >
                <div className={cn(
                    'px-4 py-3',
                    event.sport === 'f1' ? 'bg-red-800' : 'bg-blue-800'
                )}>
                    <div className="flex items-center gap-2">
                        <span className={cn(
                            'px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide',
                            event.sport === 'f1'
                                ? 'bg-red-800/20 text-red-200'
                                : 'bg-blue-800/20 text-blue-200'
                        )}>
                            {event.sport === 'f1' ? 'Formula 1' : 'MotoGP'}
                        </span>
                    </div>
                    <h3 className={cn(
                        'text-lg font-bold mt-2',
                        event.sport === 'f1' ? 'text-red-200' : 'text-blue-200'
                    )}>
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
