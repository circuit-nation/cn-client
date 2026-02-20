import type { Route } from "./+types/calendar";
import { CalendarClock } from "lucide-react";
import { MotorsportCalendar } from "~/components/calendar";
import ComponentHeading from "~/components/common/component-heading";
import { Logo } from "~/components/common/logo";
import fetchCalendarEvents from "~/db/calendar-events";
import type { CalendarEventsResponse } from "~/schema";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Calendar | Circuit Nation" },
        { name: "description", content: "Stay updated with the latest F1 and MotoGP events on Circuit Nation's calendar." },
    ];
}

export async function loader({ }: Route.LoaderArgs) {
    const calendarEvents = await fetchCalendarEvents();
    return { calendarEvents } satisfies CalendarEventsResponse;
}

const Index = ({ loaderData }: Route.ComponentProps) => {
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-muted/30 bg-background/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                        <div className="size-14">
                            <Logo />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-foreground">Circuit Nation</h1>
                            <p className="text-xs text-muted-foreground">Ultimate Hub for Everything Motorsports</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-4 py-10">
                <MotorsportCalendar events={loaderData.calendarEvents} />
            </main>
        </div>
    );
};

export default Index;
