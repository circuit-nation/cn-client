import { isToday, isCurrentMonth } from "~/lib/calendar-utils";
import { cn } from "~/lib/utils";

interface CalendarDayProps {
    date: Date;
    currentDate: Date;
    className?: string;
}

export const CalendarDay = ({ date, currentDate, className }: CalendarDayProps) => {
    const isCurrentDay = isToday(date);
    const isInCurrentMonth = isCurrentMonth(date, currentDate);
    const showMonthLabel = date.getDate() === 1;

    return (
        <div
            className={cn(
                "relative h-full border border-muted/30 bg-background/70 p-2 transition-colors",
                "hover:bg-muted/20",
                !isInCurrentMonth && "bg-muted/10 text-muted-foreground/70",
                className,
            )}
        >
            <div className="flex items-center justify-between">
                <span
                    className={cn(
                        "inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
                        isCurrentDay && "bg-cn-red text-foreground",
                        !isCurrentDay && isInCurrentMonth && "text-foreground",
                        !isCurrentDay && !isInCurrentMonth && "text-muted-foreground",
                    )}
                >
                    {date.getDate()}
                </span>
                {showMonthLabel && (
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        {date.toLocaleDateString("en-US", { month: "short" })}
                    </span>
                )}
            </div>
        </div>
    );
};
