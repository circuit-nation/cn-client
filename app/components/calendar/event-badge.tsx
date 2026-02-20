import type { CSSProperties } from "react";
import type { CalendarEvent } from "~/types/calendar";
import { formatTimeRange } from "~/lib/calendar-utils";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Calendar, Flag, MapPin, Timer } from "lucide-react";
import { cn } from "~/lib/utils";

interface EventBadgeProps {
    event: CalendarEvent;
    timeLabel?: string;
    variant?: "month" | "week";
    compact?: boolean;
    className?: string;
    style?: CSSProperties;
}

const getFallbackColor = (sportType: CalendarEvent["sportType"]) => {
    switch (sportType) {
        case "formula":
            return "var(--cn-red)";
        case "motogp":
            return "var(--cn-blue)";
        case "endurance":
            return "var(--cn-amber)";
        case "indycar":
            return "var(--cn-orange)";
        case "nascar":
            return "var(--cn-teal)";
        default:
            return "var(--cn-green)";
    }
};

export const EventBadge = ({
    event,
    timeLabel,
    variant = "month",
    compact = false,
    className,
    style,
}: EventBadgeProps) => {
    const accent = event.sportColor || getFallbackColor(event.sportType);
    const dateLabel = event.startAt.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });
    const dateRangeLabel = `${dateLabel} - ${event.endAt.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })}`;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button
                    style={{
                        borderLeftColor: accent,
                        ...style,
                    }}
                    className={cn(
                        "group relative flex w-full items-center gap-2 overflow-hidden rounded-md border border-muted/40 border-l-2 bg-muted/20 px-2 py-1 text-left text-xs",
                        "transition-colors hover:bg-muted/30",
                        "focus:outline-none focus:ring-2 focus:ring-foreground/50",
                        variant === "week" && "h-full",
                        compact ? "text-[11px]" : "text-xs",
                        className,
                    )}
                >
                    <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate font-semibold text-foreground">
                            {event.title}
                        </span>
                        <span className="truncate text-[10px] uppercase tracking-wide text-muted-foreground">
                            {event.type.replace("-", " ")}
                        </span>
                    </span>
                    {timeLabel && (
                        <span className="rounded-full border border-muted/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                            {timeLabel}
                        </span>
                    )}
                </button>
            </PopoverTrigger>
            <PopoverContent
                className="w-80 overflow-hidden rounded-lg border border-muted/50 bg-background p-0 shadow-none"
                align="start"
                sideOffset={8}
            >
                <div className="space-y-3 bg-background px-4 py-4">
                    <div className="flex items-center gap-2">
                        <span
                            className="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                            style={{ borderColor: accent, color: accent }}
                        >
                            {event.type.replace("-", " ")}
                        </span>
                        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                            {event.sportName}
                        </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        {event.location && (
                            <div className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-4 w-4" />
                                <div>
                                    <p className="text-foreground">{event.location}</p>
                                    {event.circuitName && (
                                        <p className="text-xs text-muted-foreground">
                                            {event.circuitName}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{dateRangeLabel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Timer className="h-4 w-4" />
                            <span>{formatTimeRange(event.startAt, event.endAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Flag className="h-4 w-4" />
                            <span className="capitalize">{event.type.replace("-", " ")}</span>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};
