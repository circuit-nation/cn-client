import { query } from "./_generated/server";

export const getNextEvents = query(async (ctx) => {
  const nowIso = new Date().toISOString();
  const events = await ctx.db
    .query("events")
    .withIndex("by_start", (q) => q.gte("event_start_at", nowIso))
    .take(500);

  const nextEventsBySport = new Map<
    (typeof events)[number]["sport_id"],
    (typeof events)[number]
  >();
  for (const event of events) {
    if (!nextEventsBySport.has(event.sport_id)) {
      nextEventsBySport.set(event.sport_id, event);
    }
  }

  const nextEvents = Array.from(nextEventsBySport.values());
  const linkIds = nextEvents.flatMap((event) =>
    event.links_id ? [event.links_id] : [],
  );
  const sportIds = Array.from(new Set(nextEvents.map((event) => event.sport_id)));
  const circuitIds = Array.from(
    new Set(nextEvents.map((event) => event.circuit_id)),
  );

  const links = await Promise.all(linkIds.map((id) => ctx.db.get(id)));
  const linksById = new Map(
    linkIds
      .map((id, index) => [id, links[index]] as const)
      .filter(([, link]) => Boolean(link)),
  );

  const sports = await Promise.all(sportIds.map((id) => ctx.db.get(id)));
  const sportsById = new Map(
    sportIds
      .map((id, index) => [id, sports[index]] as const)
      .filter(([, sport]) => Boolean(sport)),
  );

  const circuits = await Promise.all(circuitIds.map((id) => ctx.db.get(id)));
  const circuitsById = new Map(
    circuitIds
      .map((id, index) => [id, circuits[index]] as const)
      .filter(([, circuit]) => Boolean(circuit)),
  );

  return nextEvents.map((event) => ({
    ...event,
    links: event.links_id ? linksById.get(event.links_id) : undefined,
    sportData: sportsById.get(event.sport_id),
    circuitData: circuitsById.get(event.circuit_id),
  }));
});
