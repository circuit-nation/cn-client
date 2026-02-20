import type { CalendarView } from '~/types/calendar';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

interface ViewSwitcherProps {
    currentView: CalendarView;
    onViewChange: (view: CalendarView) => void;
}

export const ViewSwitcher = ({ currentView, onViewChange }: ViewSwitcherProps) => {
    const views: { key: CalendarView; label: string }[] = [
        { key: 'month', label: 'Month' },
        { key: 'week', label: 'Week' },
    ];

    return (
        <div className="inline-flex items-center bg-secondary rounded-lg p-1 gap-0.5">
            {views.map((view) => (
                <Button
                    key={view.key}
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewChange(view.key)}
                    className={cn(
                        'px-3 py-1.5 h-auto text-sm font-medium rounded-md transition-all',
                        currentView === view.key
                            ? 'bg-card text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-transparent'
                    )}
                >
                    {view.label}
                </Button>
            ))}
        </div>
    );
};
