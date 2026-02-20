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
        <div className="flex items-center gap-2">
            <Button
                variant="outline"
                size="sm"
                onClick={onToday}
                className="text-sm font-medium"
            >
                Today
            </Button>
            <div className="flex items-center">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onPrevious}
                    className="h-8 w-8"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onNext}
                    className="h-8 w-8"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            <h2 className="text-lg font-semibold text-foreground min-w-40">
                {label || currentDate.toDateString()}
            </h2>
        </div>
    );
};
