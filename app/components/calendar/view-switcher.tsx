import type { CalendarView } from '~/types/calendar';
import { Button } from '~/components/ui/button';
import { ButtonGroup } from '~/components/ui/button-group';
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
        <ButtonGroup className="inline-flex items-center gap-1 rounded-full border border-muted/50 bg-muted/20">
            {views.map((view) => (
                <Button
                    key={view.key}
                    variant="view-switcher"
                    size="sm"
                    onClick={() => onViewChange(view.key)}
                    className={cn(
                        'h-7 rounded-full px-4 text-xs font-semibold uppercase tracking-wide transition-colors',
                        currentView === view.key
                            ? 'bg-foreground text-background'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/30',
                    )}
                >
                    {view.label}
                </Button>
            ))}
        </ButtonGroup>
    );
};
