"use server";

import { getConvexClient } from "~/lib/convex.server";
import { api } from "../../convex/_generated/api";
import type { NextEventsPayload } from "~/schema";

export default async function fetchNextEvents(): Promise<NextEventsPayload> {
  const convex = getConvexClient();
  const nextEvents = await convex.query(
    api.nextEvents.getNextEvents,
  );

  return nextEvents as NextEventsPayload;
}
