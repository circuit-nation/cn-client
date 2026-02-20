import { Button } from "~/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarHeaderProps {
    currentDate: Date;
    onPrevious: () => void;
    onNext: () => void;
    onToday: () => void;
    label?: string;
}

export const CalendarHeader = ({
    currentDate,
    onPrevious,
    onNext,
    onToday,
    label,
}: CalendarHeaderProps) => {
    return (
        <div className="flex items-center gap-3">
            <Button
                variant="ghost"
                size="sm"
                onClick={onToday}
                className="rounded-full border border-muted/50 bg-muted/20 px-4 text-xs font-semibold uppercase tracking-wide text-foreground/80 hover:bg-muted/30"
            >
                Today
            </Button>
            <div className="flex items-center rounded-full border border-muted/50 bg-muted/10 p-0.5">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onPrevious}
                    className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onNext}
                    className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            <h2 className="min-w-40 text-base font-semibold text-foreground/90">
                {label || currentDate.toDateString()}
            </h2>
        </div>
    );
};
