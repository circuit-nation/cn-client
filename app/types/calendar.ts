import type { EventType, SportsType } from "~/schema";

export interface CalendarEvent {
  id: string;
  title: string;
  type: EventType;
  sportType: SportsType;
  sportName: string;
  round?: number;
  sportColor?: string;
  startAt: Date;
  endAt: Date;
  circuitName?: string;
  location?: string;
  locationCode?: string;
  images?: string[];
}

export type CalendarView = "month" | "week" | "rounds" | "races";
