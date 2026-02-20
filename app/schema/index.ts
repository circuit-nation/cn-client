import type { Id } from "../../convex/_generated/dataModel";

/**
 * TypeScript types for Convex database tables
 */

export type SportsType =
  | "formula"
  | "feeder"
  | "indycar"
  | "motogp"
  | "superbike"
  | "endurance"
  | "off-road"
  | "nascar";

export type EventType =
  | "race"
  | "qualifying"
  | "practice"
  | "sprint"
  | "test"
  | "shootout"
  | "warmup"
  | "demo"
  | "news"
  | "announcement"
  | "update"
  | "watch-party";

export type Location = [number, number];

export interface EventLinks {
  _id: Id<"event_links">;
  _creationTime: number;
  instagram?: string;
  youtube?: string;
  discord?: string;
  x?: string;
  sources?: string[];
}

export interface Sport {
  _id: Id<"sports">;
  _creationTime: number;
  name: string;
  logo: string;
  color: string;
  type: SportsType;
  tags?: string[];
}

export interface Circuit {
  _id: Id<"circuits">;
  _creationTime: number;
  id: string;
  name: string;
  location_str: string;
  country: string;
  country_code: string;
  location?: Location;
  sport_id: Id<"sports">;
  image?: string;
  logo?: string;
  color?: string;
  length_km?: number;
  turns?: number;
  laps?: number;
  lap_record?: string;
  lap_record_holder?: string;
  lap_record_year?: number;
  track_type?: "permanent" | "street" | "temporary" | "mixed";
  direction?: "clockwise" | "counterclockwise";
  year_opened?: number;
  tags?: string[];
  official_website?: string;
}

export interface Event {
  _id: Id<"events">;
  _creationTime: number;
  id: string;
  title: string;
  round: number;
  type: EventType;
  circuit_id: Id<"circuits">;
  links_id?: Id<"event_links">;
  sport_id: Id<"sports">;
  event_start_at: string; // ISO Date String
  event_end_at: string; // ISO Date String
  images?: string[];
}

export interface Team {
  _id: Id<"teams">;
  _creationTime: number;
  id: string;
  name: string;
  logo: string;
  sport: Id<"sports">;
  tags?: string[];
  color?: string;
}

export interface Driver {
  _id: Id<"drivers">;
  _creationTime: number;
  id: string;
  name: string;
  image: string;
  sport: Id<"sports">;
  tags?: string[];
}

/**
 * Helper types for creating documents (without Convex system fields)
 */
export type CreateSport = Omit<Sport, "_id" | "_creationTime">;
export type CreateEvent = Omit<Event, "_id" | "_creationTime">;
export type CreateTeam = Omit<Team, "_id" | "_creationTime">;
export type CreateDriver = Omit<Driver, "_id" | "_creationTime">;

/**
 * Parsed versions with resolved relations
 * Use these when you need to include expanded/resolved relationship data
 */
export interface EventParsed extends Event {
  links?: EventLinks;
  sportData?: Sport; // Resolved sport reference
  circuitData?: Circuit;
}

export interface EventCardInfo {
  name: string;
  location: string;
  countryCode?: string;
  round: string;
  dateLabel: string;
  circuit: string;
  laps: string;
  trackImage: string;
  accentClass: string;
}

export type NextEventsPayload = EventParsed[];

export type CalendarEventsPayload = EventParsed[];

export interface NextEventsResponse {
  nextEvents: NextEventsPayload;
}

export interface CalendarEventsResponse {
  calendarEvents: CalendarEventsPayload;
}

export interface TeamParsed extends Team {
  sportData?: Sport; // Resolved sport reference
}

export interface DriverParsed extends Driver {
  sportData?: Sport; // Resolved sport reference
}

/**
 * Relationship Notes:
 *
 * - Event.sport_id -> Sport._id (Many-to-One)
 * - Team.sport -> Sport._id (Many-to-One)
 * - Driver.sport -> Sport._id (Many-to-One)
 *
 * Optional relationships (if using separate collections):
 * - Event.links_id -> EventLinks._id (Many-to-One, Optional)
 */
