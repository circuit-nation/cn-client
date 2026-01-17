/**
 * TypeScript types for Appwrite database collections
 * These match the schema defined in todo.md
 */

export type SportsType =
  | "formula"
  | "feeder"
  | "indycar"
  | "motogp"
  | "superbike"
  | "endurance"
  | "off road"
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
  | "watch party";

export type Location = [number, number];

export interface EventLinks {
  instagram?: string;
  youtube?: string;
  discord?: string;
  x?: string;
  sources?: string[];
}

export interface Sport {
  $id: string;
  id: string;
  name: string;
  logo: string;
  color: string;
  type: SportsType;
  tags?: string[];
  $createdAt?: string;
  $updatedAt?: string;
}

export interface Event {
  $id: string;
  id: string;
  title: string;
  round: number;
  type: EventType;
  location?: Location; // GPS coordinates [lat, long]
  location_id: string; // Reference to event_locations.$id
  links_id?: string; // Reference to event_links.$id
  location_str: string;
  sport: string; // Reference to Sport document ID
  country_code: string;
  country: string;
  event_start_at: string; // ISO Date String
  event_end_at: string; // ISO Date String
  images?: string[];
  $createdAt?: string;
  $updatedAt?: string;
}

export interface Team {
  $id: string;
  id: string;
  name: string;
  logo: string;
  sport: string; // Reference to Sport document ID
  tags?: string[];
  color?: string;
  $createdAt?: string;
  $updatedAt?: string;
}

export interface Driver {
  $id: string;
  id: string;
  name: string;
  image: string;
  sport: string; // Reference to Sport document ID
  tags?: string[];
  $createdAt?: string;
  $updatedAt?: string;
}

/**
 * Helper types for creating documents (without Appwrite system fields)
 */
export type CreateSport = Omit<Sport, "$id" | "$createdAt" | "$updatedAt">;
export type CreateEvent = Omit<Event, "$id" | "$createdAt" | "$updatedAt">;
export type CreateTeam = Omit<Team, "$id" | "$createdAt" | "$updatedAt">;
export type CreateDriver = Omit<Driver, "$id" | "$createdAt" | "$updatedAt">;

/**
 * Parsed versions with resolved relations
 */
export interface EventParsed extends Event {
  location?: Location;
  links?: EventLinks;
}
