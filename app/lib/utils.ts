import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeTime(dateInput: Date | string | number) {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffSeconds = Math.round(diffMs / 1000);
  const absSeconds = Math.abs(diffSeconds);

  if (absSeconds < 45) {
    return diffSeconds >= 0 ? "in a few seconds" : "just now";
  }

  let unit: Intl.RelativeTimeFormatUnit = "second";
  let unitSeconds = 1;

  if (absSeconds < 60) {
    unit = "second";
    unitSeconds = 1;
  } else if (absSeconds < 3600) {
    unit = "minute";
    unitSeconds = 60;
  } else if (absSeconds < 86400) {
    unit = "hour";
    unitSeconds = 3600;
  } else if (absSeconds < 604800) {
    unit = "day";
    unitSeconds = 86400;
  } else if (absSeconds < 2629800) {
    unit = "week";
    unitSeconds = 604800;
  } else if (absSeconds < 31557600) {
    unit = "month";
    unitSeconds = 2629800;
  } else {
    unit = "year";
    unitSeconds = 31557600;
  }

  const value = Math.round(diffSeconds / unitSeconds);

  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  return formatter.format(value, unit);
}

export function formatViews(views?: number) {
  if (views === undefined) return "0";
  if (views < 1000) return `${views}`;
  if (views < 1_000_000)
    return `${(views / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return `${(views / 1_000_000).toFixed(1).replace(/\.0$/, "")}m`;
}
