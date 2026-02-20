import type { Route } from "./+types/calendar";
import { MotorsportCalendar } from "~/components/calendar";
import { Logo } from "~/components/common/logo";
import fetchCalendarEvents from "~/db/calendar-events";
import type { CalendarEventsResponse } from "~/schema";
import { Link } from "react-router";
import { NavbarLogo } from "~/components/ui/resizable-navbar";

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
        <div className="min-h-screen bg-background max-w-7xl mx-auto px-4 py-6 space-y-12 md:space-y-6">
            <NavbarLogo />
            <MotorsportCalendar events={loaderData.calendarEvents} />
        </div>
    );
};

export default Index;
