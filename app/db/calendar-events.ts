import { getConvexClient } from "~/lib/convex.server";
import { api } from "../../convex/_generated/api";
import type { CalendarEventsPayload } from "~/schema";

export default async function fetchCalendarEvents(): Promise<CalendarEventsPayload> {
  const convex = getConvexClient();
  const events = await convex.query(
    // @ts-expect-error - api types are generated via Convex tooling
    api.calendarEvents.getCalendarEvents,
  );

  return events as CalendarEventsPayload;
}
